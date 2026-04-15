import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Layout({ children, title = 'AI원샷 — AI 도구 활용 블로그', description = 'ChatGPT, Claude, Midjourney 등 최신 AI 도구를 실무에서 바로 쓰는 방법을 알려드립니다.' }) {
  const router = useRouter()
  const canonical = `https://aioneshot.com${router.asPath.split('?')[0]}`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <link rel="icon" href="/favicon.ico" />
<meta name="google-site-verification" content="5R8zyPBv1lLC_H49Mr72LMFLN0Po0ROABawBNqTalIc" />
<meta name="naver-site-verification" content="14aa1b841d9063a50c4084ba08001635edb06199" />
      </Head>
      <header>
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/" className="nav-logo">
              AI원샷<span className="nav-dot"></span>
            </Link>
            <ul className="nav-links">
              <li><Link href="/">홈</Link></li>
              <li><Link href="/posts">전체 글</Link></li>
              <li><Link href="/about">소개</Link></li>
              <li><Link href="/privacy">개인정보처리방침</Link></li>
            </ul>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-logo">AI원샷<span className="nav-dot"></span></span>
          <div className="footer-links">
            <Link href="/privacy">개인정보처리방침</Link>
            <Link href="/terms">이용약관</Link>
          </div>
          <span className="footer-copy">© 2026 AI원샷 · AI 도구 활용 블로그</span>
        </div>
      </footer>
    </>
  )
}
