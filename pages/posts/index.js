import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { getAllPosts } from '../../lib/posts'

export default function PostsIndex({ posts }) {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.08 })
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <Layout title="전체 글 | AI원샷" description="AI 도구 활용법 전체 글 목록">
      <div className="posts-section" style={{ paddingTop: '3rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 400, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
            전체 글
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', fontWeight: 300 }}>
            총 {posts.length}개의 글
          </p>
        </div>
        <p className="section-label">모든 글</p>
        <div className="post-grid">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="post-card fade-up"
              style={{ transitionDelay: `${i * 0.04}s` }}
            >
              <div>
                <span className="post-tag">{post.tag}</span>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
              </div>
              <span className="post-meta">{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  return { props: { posts } }
}
