// scripts/auto-post.js
// 매일 자동으로 AI 트렌드를 검색하고 글을 작성해서 저장하는 스크립트

const fs = require('fs')
const path = require('path')

const PERPLEXITY_KEY = process.env.PERPLEXITY_API_KEY
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY

// 1단계: Perplexity로 최신 AI 트렌드 검색
async function fetchTrend() {
  console.log('🔍 최신 AI 트렌드 검색 중...')
  const res = await fetch('https://api.perplexity.ai/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${PERPLEXITY_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'sonar',
      messages: [{
        role: 'user',
        content: '오늘 가장 핫한 AI 도구 트렌드 1가지를 알려줘. 도구 이름, 주요 기능, 왜 주목받는지 간단히 정리해줘. 한국어로.'
      }]
    })
  })
  const data = await res.json()
  return data.choices[0].message.content
}

// 2단계: Claude로 블로그 글 작성
async function writePost(trend) {
  console.log('✍️ 블로그 글 작성 중...')
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': ANTHROPIC_KEY,
      'anthropic-version': '2023-06-01',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      messages: [{
        role: 'user',
        content: `다음 AI 트렌드 정보를 바탕으로 블로그 글을 작성해줘.

트렌드 정보:
${trend}

작성 규칙:
- 한국어로 작성
- 실용적이고 읽기 쉽게
- 소제목(##)을 3~4개 사용
- 마크다운 형식
- 2000자 내외
- 글 맨 앞에 아래 형식의 frontmatter는 제외하고 본문만 작성

본문만 작성해줘. (---frontmatter--- 없이)`
      }]
    })
  })
  const data = await res.json()
  return data.content[0].text
}

// 3단계: 파일로 저장
function savePost(title, content, tag = 'AI 뉴스') {
  const today = new Date().toISOString().split('T')[0]
  const slug = `auto-${today}-${Date.now()}`
  const excerpt = content.substring(0, 80).replace(/[#\n]/g, '').trim() + '...'

  const fileContent = `---
title: "${title}"
date: "${today}"
excerpt: "${excerpt}"
tag: "${tag}"
---

${content}`

  const filePath = path.join(__dirname, '..', 'posts', `${slug}.md`)
  fs.writeFileSync(filePath, fileContent, 'utf-8')
  console.log(`✅ 글 저장 완료: ${slug}.md`)
}

// 실행
async function main() {
  try {
    const trend = await fetchTrend()
    console.log('트렌드:', trend.substring(0, 100) + '...')

    const postContent = await writePost(trend)

    // 제목 추출 (첫 번째 ## 제목 사용)
    const titleMatch = postContent.match(/^##?\s+(.+)/m)
    const title = titleMatch ? titleMatch[1] : `AI 트렌드 리포트 ${new Date().toLocaleDateString('ko-KR')}`

    savePost(title, postContent)
    console.log('🎉 자동 글 발행 완료!')
  } catch (e) {
    console.error('❌ 오류 발생:', e.message)
    process.exit(1)
  }
}

main()
