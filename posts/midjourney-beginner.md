---
title: "Midjourney 처음 시작하는 법 — 설치부터 첫 이미지까지"
date: "2026-03-15"
excerpt: "Midjourney로 AI 이미지를 만들고 싶은데 어디서 시작해야 할지 모르겠다면, 이 글 하나로 끝냅니다."
tag: "Midjourney"
---

## Midjourney란?

Midjourney는 텍스트를 입력하면 고품질 이미지를 생성해주는 AI 도구입니다. 현재 AI 이미지 도구 중 예술적 퀄리티가 가장 높다는 평가를 받고 있어요. 디자인 경험이 없어도 원하는 이미지를 만들 수 있습니다.

다른 AI 이미지 도구(DALL-E, Stable Diffusion)와의 비교가 궁금하면 [AI 이미지 생성 도구 비교](/posts/ai-image-tools-compare)를 참고하세요.

## 시작하기 전에 필요한 것

- Discord 계정 (무료)
- Midjourney 구독 ($10/월부터)

Midjourney는 Discord를 통해 사용하기 때문에 Discord 계정이 필수입니다. 처음에는 좀 낯설 수 있지만, 한 번 익숙해지면 어렵지 않아요.

## 설치 및 시작 방법

**1단계: Discord 설치**
discord.com에서 Discord를 다운로드하고 계정을 만드세요. 이미 Discord 계정이 있다면 이 단계는 건너뛰면 됩니다.

**2단계: Midjourney 서버 접속**
midjourney.com 접속 → "Join the Beta" 클릭 → Discord에서 Midjourney 서버에 입장합니다.

**3단계: 구독 설정**
채팅창에 `/subscribe` 명령어를 입력하면 구독 페이지로 이동합니다. Basic 플랜($10/월)부터 시작하는 걸 추천해요.

**4단계: 첫 이미지 생성**
newbies 채널에서 `/imagine` 입력 후 원하는 이미지를 영어로 설명하면 됩니다.

## 기본 프롬프트 작성법

Midjourney 프롬프트의 기본 구조는 이렇습니다:

```
/imagine prompt: [주제], [스타일], [분위기], [색감], [화질]
```

예시:
```
/imagine prompt: 한옥 카페 내부, 따뜻한 조명, 오후의 햇살, 아늑한 분위기, 8K
```

**프롬프트를 잘 쓰는 핵심:** 구체적으로, 영어로, 쉼표로 요소를 나눠서 적으세요. "고양이"보다 "흰색 페르시안 고양이, 창가에 앉아있는, 부드러운 오후 햇살, 수채화 스타일"이 훨씬 좋은 결과를 줍니다.

프롬프트 작성의 일반 원칙은 [ChatGPT 프롬프트 가이드](/posts/chatgpt-prompt-guide)에서도 도움을 얻을 수 있어요.

## 자주 쓰는 파라미터

| 파라미터 | 설명 | 예시 |
|---|---|---|
| --ar | 이미지 비율 | --ar 16:9 (와이드), --ar 9:16 (세로) |
| --v 6 | 최신 버전 사용 | --v 6 |
| --style raw | 더 사실적으로 | --style raw |
| --q 2 | 최고 품질 | --q 2 |

## 초보자가 자주 하는 실수

**너무 짧은 프롬프트:** 단어 1~2개만 넣으면 AI가 마음대로 해석합니다. 최소 5개 이상의 키워드를 넣으세요.

**스타일 혼재:** "사실적인 수채화 만화 스타일"처럼 상충되는 스타일을 동시에 넣으면 어중간한 결과가 나옵니다. 스타일은 하나만 명확히 지정하세요.

**한국어 사용:** 영어가 결과가 훨씬 좋습니다. 한국어로 쓰고 싶은 내용이 있으면 ChatGPT에게 "이걸 Midjourney 프롬프트 영어로 바꿔줘"라고 하면 돼요.

## 유용한 스타일 키워드

- `photorealistic` — 사진처럼 사실적
- `watercolor` — 수채화
- `oil painting` — 유화
- `minimalist` — 미니멀
- `cinematic lighting` — 영화같은 조명
- `studio lighting` — 스튜디오 조명
- `isometric` — 아이소메트릭 뷰

Midjourney는 연습할수록 실력이 늘어납니다. 매일 조금씩 시도해보세요! AI 이미지 도구를 더 비교하고 싶다면 [AI 이미지 생성 도구 비교](/posts/ai-image-tools-compare)를 확인하세요.
