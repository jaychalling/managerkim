# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**managerkim.com** — 업무 자동화 김과장 브랜드 사이트. 학습 플랫폼 + 워크샵 랜딩 + VPS 홍보.

- **Domain**: managerkim.com (Vercel: autoworkkim.vercel.app)
- **GitHub**: https://github.com/jaychalling/managerkim
- **Vercel project**: `prj_AxWX4A72Akn1WEPXXcp51AwNcDIn` / team `team_CgSc9ZCslVHSxm3nAvTY0eoG`

## Commands

```bash
npm run dev       # 개발 서버 (localhost:3000)
npm run build     # 프로덕션 빌드 (배포 전 항상 확인)
```

배포: `git push` → Vercel 자동 배포. `npx vercel --prod`는 명시적 지시 필요.

## Architecture

```
app/
  page.tsx                              # 랜딩 (홈) — Tesla-inspired minimalist design
  layout.tsx                            # 전역 메타데이터 + bg-base
  globals.css                           # Pretendard 폰트, Tailwind, CSS 변수, prose-custom
  learn/
    page.tsx                            # 학습 가이드 목차 (6챕터, localStorage 진도)
    basics/[step]/page.tsx              # 챕터 라우터 (1~6)
    basics/[step]/chapters/Chapter1~6.tsx  # 각 챕터 콘텐츠 컴포넌트
  docs/
    page.tsx                            # Claude Code 기능 가이드 목록
    [slug]/page.tsx                     # 가이드 상세 페이지
  survey/page.tsx                       # 워크샵 설문 폼
  api/survey/route.ts                   # 설문 프록시 → VPS
  vps/page.tsx                          # VPS 홍보 페이지
  tools/page.tsx                        # 무료/저렴한 서비스 카탈로그
components/ui/
  NavBar.tsx                            # 미니멀 고정 네비 (uppercase tracking)
  Footer.tsx                            # 한줄 심플 푸터
  SectionBadge.tsx                      # uppercase tracking 텍스트 라벨
  NumberedCard.tsx                      # "01" 넘버링 카드 (borderless)
  AnimatedText.tsx                      # 워드별 fade-in
  Marquee.tsx                           # 무한 스크롤 마퀴
  Accordion.tsx                         # FAQ border-b 디바이더
  CtaBanner.tsx                         # 흰색 배경 dual-btn CTA
  ProcessStep.tsx                       # 3단계 프로세스 타임라인
components/learn/
  DocLayout.tsx                         # 사이드바 + TOC + prev/next 레이아웃
  Callout.tsx                           # tip/info/warning 박스
  CodeBlock.tsx                         # 네이비 터미널 코드블록 (복사 버튼)
  CompareTable.tsx                      # 비교표
  OsTabs.tsx                            # Windows/Mac 탭 코드블록
  ScreenshotPlaceholder.tsx             # 스크린샷 플레이스홀더
lib/
  chapters.ts                           # 6챕터 정의 (타입 + 섹션 목차)
  docs.ts                               # 14개 기능 가이드 데이터
  tools.ts                              # 25개 서비스 카탈로그 데이터
  courses.ts                            # (legacy, 미사용)
```

**학습 시스템**: 문서 가이드 형태. 6챕터 (에이전틱AI → 세팅 → Gmail → 엑셀 → PPT → 마무리). 각 챕터는 sections로 구성되어 사이드바 TOC 제공. 진도는 `localStorage`에 `progress-guide` 키로 저장. 콘텐츠는 workshop-slides/index.html 기반이되, 자기학습용으로 확장. API 키가 아닌 구독 방식(Max $110/월 추천).

**설문 시스템**: 브라우저 → `/api/survey` (Vercel, 토큰 숨김) → `http://38.45.67.130:1663/submit` (VPS). 환경변수 `SURVEY_API_URL`, `SURVEY_API_TOKEN`은 Vercel production에 등록됨.

## Design System — Tesla-inspired minimalist

순백 배경, 근흑 텍스트, 블루 CTA. `rounded-md` (pill 아님), 극대 여백.

| 토큰 | 색상 | 용도 |
|------|------|------|
| `primary` | `#171a20` (근흑) | 헤딩, 로고, 코드블록 배경 |
| `primary-light` | `#5c5e62` (미디엄그레이) | 보조 텍스트 |
| `primary-lighter` | `#f4f4f4` | primary 틴트 배경 |
| `accent` | `#3e6ae1` (테슬라블루) | CTA 버튼, 핵심 강조, 링크 |
| `accent-dark` | `#2d5bd1` | accent 호버 |
| `accent-light` | `#eef2fd` | accent 틴트 배경 |
| `base` | `#FFFFFF` (흰색) | body 배경 |
| `elevated` | `#FFFFFF` | 카드 배경 |
| `subtle` | `#f4f4f4` | 대체 섹션 배경 |
| `muted` | `#e5e5e5` | 디바이더, 입력 배경 |
| `heading` | `#171a20` | h1, h2, bold |
| `body` | `#393c41` | 본문 텍스트 |
| `caption` | `#5c5e62` | 캡션, 라벨 |
| `border-subtle` | `#e5e5e5` | 카드 테두리 |
| `border-default` | `#d0d0d0` | 입력 테두리 |

폰트: Pretendard (`font-sans`). borderRadius: card `0.75rem`, card-sm `0.5rem`.

## 워크샵 상태

현재 **워크샵 미계획**. 랜딩 페이지에 워크샵 신청 버튼 없음. 워크샵 열 때:
- `app/page.tsx`에 `workshopUrl` 변수 추가
- 히어로 CTA 버튼 교체, 하단 CTA 섹션 복구
