import Layout from '../components/Layout'

export default function Privacy() {
  return (
    <Layout title="개인정보처리방침 | AI툴킷" description="AI툴킷 개인정보처리방침">
      <div className="article-wrap">
        <header className="article-header">
          <h1 className="article-title">개인정보처리방침</h1>
          <div className="article-meta"><span>최종 업데이트: 2026년 3월 20일</span></div>
        </header>
        <div className="article-body">
          <p>AI툴킷(이하 "본 사이트")은 이용자의 개인정보를 중요시하며, 개인정보 보호법을 준수합니다.</p>

          <h2>1. 수집하는 개인정보</h2>
          <p>본 사이트는 서비스 제공을 위해 다음의 정보를 수집할 수 있습니다.</p>
          <ul>
            <li>방문 기록, IP 주소, 브라우저 정보 (Google Analytics를 통한 자동 수집)</li>
            <li>광고 서비스 이용을 위한 쿠키 정보 (Google AdSense)</li>
          </ul>

          <h2>2. 개인정보의 이용 목적</h2>
          <p>수집된 정보는 서비스 개선 및 광고 최적화 목적으로만 사용되며, 제3자에게 제공되지 않습니다.</p>

          <h2>3. 쿠키 사용</h2>
          <p>본 사이트는 Google AdSense 광고 서비스를 사용하며, 이를 위해 쿠키를 사용합니다. 브라우저 설정에서 쿠키를 거부할 수 있으나 일부 서비스 이용이 제한될 수 있습니다.</p>

          <h2>4. Google AdSense</h2>
          <p>본 사이트는 Google AdSense를 통해 광고를 게재합니다. Google은 쿠키를 사용하여 이용자의 관심사에 맞는 광고를 표시할 수 있습니다. 자세한 내용은 Google 개인정보처리방침을 참고하세요.</p>

          <h2>5. 개인정보 보호 담당자</h2>
          <p>개인정보 관련 문의는 아래 이메일로 연락주세요.<br />이메일: kimchangse21@gmail.com</p>
        </div>
      </div>
    </Layout>
  )
}
