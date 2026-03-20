// pages/admin/write.js
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const TAGS = ['ChatGPT', 'Claude', 'Midjourney', 'Notion AI', 'AI 비교', 'AI 뉴스', '업무자동화', '기타']

export default function AdminWrite() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [tag, setTag] = useState('ChatGPT')
  const [content, setContent] = useState('')
  const [status, setStatus] = useState('') // '', 'loading', 'success', 'error'
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (sessionStorage.getItem('admin') !== 'true') {
      router.push('/admin')
    }
  }, [])

  const getToday = () => new Date().toISOString().split('T')[0]

  const buildSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9가-힣\s]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 50) + '-' + Date.now()
  }

  const handlePublish = async () => {
    if (!title || !content) {
      setMessage('제목과 내용을 입력해주세요.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setMessage('GitHub에 업로드 중...')

    const slug = buildSlug(title)
    const date = getToday()
    const fileContent = `---
title: "${title}"
date: "${date}"
excerpt: "${excerpt}"
tag: "${tag}"
---

${content}`

    try {
      const res = await fetch('/api/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, content: fileContent })
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setMessage('✅ 업로드 완료! 1~2분 후 블로그에 반영됩니다.')
        setTitle(''); setExcerpt(''); setContent(''); setTag('ChatGPT')
      } else {
        setStatus('error')
        setMessage('❌ 오류: ' + data.error)
      }
    } catch (e) {
      setStatus('error')
      setMessage('❌ 네트워크 오류가 발생했습니다.')
    }
  }

  const inputStyle = {
    width: '100%', padding: '0.75rem 1rem',
    border: '1px solid rgba(0,0,0,0.12)', borderRadius: '8px',
    fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit',
    background: '#fff'
  }

  return (
    <>
      <Head><title>글 작성 — 관리자</title></Head>
      <div style={{ minHeight: '100vh', background: '#FAFAF8', fontFamily: 'Noto Sans KR, sans-serif' }}>

        {/* 상단 바 */}
        <div style={{
          position: 'sticky', top: 0, zIndex: 50,
          background: 'rgba(250,250,248,0.95)', backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          padding: '0 1.5rem', height: '56px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}>
          <span style={{ fontWeight: 600, fontSize: '1rem' }}>✏️ 새 글 작성</span>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            {message && (
              <span style={{
                fontSize: '0.82rem',
                color: status === 'success' ? '#16A34A' : status === 'error' ? '#EF4444' : '#6B7280'
              }}>
                {message}
              </span>
            )}
            <button
              onClick={handlePublish}
              disabled={status === 'loading'}
              style={{
                padding: '0.5rem 1.25rem', background: status === 'loading' ? '#93C5FD' : '#2563EB',
                color: '#fff', border: 'none', borderRadius: '8px',
                fontSize: '0.88rem', fontWeight: 500, cursor: status === 'loading' ? 'not-allowed' : 'pointer'
              }}>
              {status === 'loading' ? '업로드 중...' : '발행하기'}
            </button>
          </div>
        </div>

        {/* 폼 */}
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '2.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          <input
            style={{ ...inputStyle, fontSize: '1.3rem', fontWeight: 600, border: 'none', borderBottom: '2px solid rgba(0,0,0,0.1)', borderRadius: 0, paddingLeft: 0 }}
            placeholder="글 제목을 입력하세요"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.78rem', color: '#6B7280', display: 'block', marginBottom: '0.4rem' }}>태그</label>
              <select value={tag} onChange={e => setTag(e.target.value)} style={{ ...inputStyle }}>
                {TAGS.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: '0.78rem', color: '#6B7280', display: 'block', marginBottom: '0.4rem' }}>한 줄 요약 (목록에 표시)</label>
              <input
                style={inputStyle}
                placeholder="글 목록에 보이는 짧은 설명"
                value={excerpt}
                onChange={e => setExcerpt(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.78rem', color: '#6B7280', display: 'block', marginBottom: '0.4rem' }}>
              본문 (마크다운 형식)
            </label>
            <textarea
              style={{ ...inputStyle, minHeight: '500px', resize: 'vertical', lineHeight: 1.8, fontSize: '0.95rem' }}
              placeholder={`## 소제목\n\n본문 내용을 여기에 작성하세요.\n\n마크다운 형식으로 쓰면 됩니다.\n- 목록 1\n- 목록 2\n\n**굵은 글씨**, *기울임*`}
              value={content}
              onChange={e => setContent(e.target.value)}
            />
          </div>

          <div style={{ background: '#EFF6FF', borderRadius: '8px', padding: '1rem 1.25rem', fontSize: '0.82rem', color: '#1D4ED8' }}>
            💡 <strong>마크다운 팁</strong> — ## 소제목, **굵게**, *기울임*, - 목록, ` ` 코드
          </div>
        </div>
      </div>
    </>
  )
}
