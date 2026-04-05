import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout title="소개 | AI원샷" description="AI원샷 블로그 소개 — AI 도구 활용법을 쉽고 실용적으로 정리합니다.">
      <div className="article-wrap">
        <header className="article-header">
          <h1 className="article-title">AI원샷 소개</h1>
          <div className="article-meta"><span>AI 도구 활용 블로그</span></div>
        </header>
        <div className="article-body">
          <h2>AI원샷은 어떤 블로그인가요?</h2>
          <p>AI원샷은 ChatGPT, Claude, Midjourney 등 최신 AI 도구를 <strong>실무에서 바로 쓸 수 있도록</strong> 쉽고 실용적으로 정리하는 블로그입니다.</p>
          <p>"AI 도구가 좋다는 건 알겠는데, 어떻게 써야 할지 모르겠다"는 분들을 위해 만들었습니다. 어려운 기술 용어 대신 실제 화면과 예시 중심으로, 읽고 바로 따라할 수 있는 가이드를 제공합니다.</p>

          <h2>다루는 주제</h2>
          <ul>
            <li><strong>AI 도구 활용법</strong> — ChatGPT, Claude, Perplexity 등 도구별 실전 사용법</li>
            <li><strong>프롬프트 가이드</strong> — 더 좋은 결과를 얻는 프롬프트 작성 기법과 템플릿</li>
            <li><strong>도구 비교</strong> — 상황별로 어떤 AI 도구가 맞는지 직접 비교</li>
            <li><strong>업무 자동화</strong> — AI로 반복 업무를 줄이는 실전 워크플로우</li>
            <li><strong>AI 트렌드</strong> — 알아두면 유용한 AI 업계 동향</li>
          </ul>

          <h2>운영자 소개</h2>
          <p>안녕하세요, AI원샷을 운영하고 있는 김창세입니다.</p>
          <p>다양한 AI 도구를 직접 사용하면서 느낀 점과 실무에서 활용한 경험을 바탕으로 글을 쓰고 있습니다. 모든 글은 직접 도구를 써보고 화면을 캡처하며, 실제로 도움이 되는 내용만 담으려고 노력합니다.</p>
          <p>"AI를 잘 모르는 사람도 이 블로그 글 하나만 읽으면 바로 시작할 수 있다"가 목표입니다.</p>

          <h2>연락처</h2>
          <p>글에 대한 피드백이나 문의사항이 있으시면 아래 이메일로 연락해주세요.</p>
          <p>이메일: kimchangse21@gmail.com</p>
        </div>
      </div>
    </Layout>
  )
}
