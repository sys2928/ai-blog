import Link from 'next/link'
import Layout from '../../components/Layout'
import { getAllSlugs, getPostBySlug } from '../../lib/posts'

export default function Post({ post }) {
  return (
    <Layout title={`${post.title} | AI원샷`} description={post.excerpt}>
      <div className="article-wrap">
        <Link href="/" className="back-link">← 목록으로</Link>
        <article>
          <header className="article-header">
            <span className="article-tag">{post.tag}</span>
            <h1 className="article-title">{post.title}</h1>
            <div className="article-meta">
              <span>{post.date}</span>
            </div>
          </header>
          <div className="article-body" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllSlugs()
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)
  return { props: { post } }
}
