import Link from 'next/link'
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/posts'

export default function Home({ posts }) {
  return (
    <Layout>
      <div className="container">
        <section className="hero">
          <span className="hero-tag">AI 도구 활용법</span>
          <h1 className="hero-title">실무에서 바로 쓰는<br />AI 도구 가이드</h1>
          <p className="hero-desc">
            ChatGPT, Midjourney, Notion AI 등 최신 AI 도구를<br />
            쉽고 실용적으로 활용하는 방법을 정리합니다.
          </p>
        </section>
        <section style={{ paddingBottom: '4rem' }}>
          <p className="section-title">최신 글</p>
          <div className="post-grid">
            {posts.map(post => (
              <Link key={post.slug} href={`/posts/${post.slug}`} className="post-card">
                <div>
                  <span className="post-tag">{post.tag}</span>
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-excerpt">{post.excerpt}</p>
                </div>
                <span className="post-meta">{post.date}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  return { props: { posts } }
}
