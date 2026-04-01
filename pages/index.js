import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/posts'

export default function Home({ posts }) {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <Layout>
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-eyebrow">AI 도구 활용법</span>
          <h1 className="hero-title">
            실무에서 바로 쓰는<br />
            <em>AI 도구 가이드</em>
          </h1>
          <p className="hero-desc">
            ChatGPT, Claude, Midjourney 등 최신 AI 도구를
            쉽고 실용적으로 활용하는 방법을 매주 정리합니다.
          </p>
        </div>
      </section>
      <div className="posts-section">
        <p className="section-label">최신 글</p>
        <div className="post-grid">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="post-card fade-up"
              style={{ transitionDelay: `${i * 0.06}s` }}
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
