// pages/admin/index.js
import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      sessionStorage.setItem('admin', 'true')
      router.push('/admin/write')
    } else {
      setError('비밀번호가 틀렸습니다.')
    }
  }

  return (
    <>
      <Head><title>관리자 로그인</title></Head>
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', background: '#FAFAF8', fontFamily: 'sans-serif'
      }}>
        <div style={{
          width: '100%', maxWidth: '360px', padding: '2.5rem',
          background: '#fff', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)'
        }}>
          <h1 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem', textAlign: 'center' }}>
            관리자 로그인
          </h1>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="password"
              placeholder="비밀번호 입력"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                padding: '0.75rem 1rem', border: '1px solid rgba(0,0,0,0.12)',
                borderRadius: '8px', fontSize: '0.95rem', outline: 'none'
              }}
            />
            {error && <p style={{ color: '#EF4444', fontSize: '0.82rem' }}>{error}</p>}
            <button type="submit" style={{
              padding: '0.75rem', background: '#2563EB', color: '#fff',
              border: 'none', borderRadius: '8px', fontSize: '0.95rem',
              fontWeight: 500, cursor: 'pointer'
            }}>
              로그인
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
