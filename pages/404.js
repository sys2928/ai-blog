import Link from 'next/link'
import Layout from '../components/Layout'

export default function NotFound() {
  return (
    <Layout title="페이지를 찾을 수 없습니다 | AI툴킷">
      <div style={{
        minHeight: '70vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: '2rem'
      }}>
        <p style={{ fontSize: '5rem', fontFamily: 'var(--font-serif)', fontWeight: 400, color: 'var(--subtle)', lineHeight: 1, marginBottom: '1.5rem' }}>
          404
        </p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.75rem' }}>
          페이지를 찾을 수 없습니다
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '2.5rem', fontWeight: 300 }}>
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <Link href="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.75rem 1.5rem', background: 'var(--accent)',
          color: '#000', borderRadius: '999px', fontSize: '0.88rem',
          fontWeight: 500, textDecoration: 'none', transition: 'opacity 0.2s'
        }}>
          홈으로 돌아가기
        </Link>
      </div>
    </Layout>
  )
}
