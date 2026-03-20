// pages/api/publish.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { slug, content } = req.body
  if (!slug || !content) return res.status(400).json({ error: '슬러그와 내용이 필요합니다.' })

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN
  const GITHUB_REPO = process.env.GITHUB_REPO  // 예: "username/ai-blog"
  const path = `posts/${slug}.md`

  try {
    // 파일을 base64로 인코딩
    const encodedContent = Buffer.from(content, 'utf-8').toString('base64')

    // GitHub API로 파일 생성
    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json',
      },
      body: JSON.stringify({
        message: `새 글 추가: ${slug}`,
        content: encodedContent,
      })
    })

    if (!response.ok) {
      const error = await response.json()
      return res.status(500).json({ error: error.message || 'GitHub API 오류' })
    }

    return res.status(200).json({ success: true })
  } catch (e) {
    return res.status(500).json({ error: e.message })
  }
}
