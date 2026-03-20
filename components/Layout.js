// components/Layout.js
import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title = 'AI 도구 활용법 블로그', description = 'AI 도구를 쉽고 실용적으로 활용하는 방법을 알려드립니다.' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/" className="nav-logo">
              AI<span>툴킷</span>
            </Link>
            <ul className="nav-links">
              <li><Link href="/">홈</Link></li>
              <li><Link href="/posts">전체 글</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-logo">AI<span>툴킷</span></span>
          <span className="footer-copy">AI 도구 활용 블로그 · 매주 업데이트</span>
        </div>
      </footer>
    </>
  )
}
