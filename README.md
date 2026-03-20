# AI툴킷 블로그

AI 도구 활용법 블로그 — Next.js 기반

## 시작하기

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```
→ http://localhost:3000 에서 확인

### 3. 빌드 (배포용)
```bash
npm run build
```

---

## 새 글 작성하는 법

`posts/` 폴더에 `.md` 파일을 추가하면 됩니다.

파일 이름이 URL이 됩니다.
예: `posts/notion-ai-guide.md` → `/posts/notion-ai-guide`

### 글 양식

```markdown
---
title: "글 제목"
date: "2026-03-20"
excerpt: "목록에 보이는 짧은 설명"
tag: "ChatGPT"
---

여기부터 본문 작성...
```

---

## GitHub + Vercel 배포

1. GitHub에 이 폴더 전체 업로드
2. vercel.com 접속 → Import project
3. GitHub 저장소 선택 → Deploy
4. 끝! 이후엔 GitHub에 파일 수정하면 자동 배포
