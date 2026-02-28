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
  page.tsx                    # 랜딩 (홈)
  layout.tsx                  # 전역 메타데이터
  globals.css                 # Pretendard 폰트, Tailwind
  learn/
    page.tsx                  # 코스 목록 (localStorage 진도 표시)
    [course]/[step]/page.tsx  # 단계별 학습 뷰어
  survey/page.tsx             # 워크샵 설문 폼
  api/survey/route.ts         # 설문 프록시 → VPS
  vps/page.tsx                # VPS 홍보 페이지
lib/
  courses.ts                  # 코스/단계 데이터 + 타입 정의
```

**학습 시스템**: 코스 데이터는 `lib/courses.ts`에 정적으로 정의. `Step` 타입은 `code`(공통) 또는 `codeMac`/`codeWindows`(OS별) 선택. 진도는 `localStorage`에 `progress-{courseId}` 키로 저장.

**설문 시스템**: 브라우저 → `/api/survey` (Vercel, 토큰 숨김) → `http://38.45.67.130:1663/submit` (VPS). 환경변수 `SURVEY_API_URL`, `SURVEY_API_TOKEN`은 Vercel production에 등록됨.

## Tailwind 색상

- `primary`: `#2563eb` (파란색)
- `accent`: `#10b981` (초록색)
- 폰트: Pretendard (`font-sans`)

## 워크샵 상태

현재 **워크샵 미계획**. 랜딩 페이지에 워크샵 신청 버튼 없음. 워크샵 열 때:
- `app/page.tsx`에 `workshopUrl` 변수 추가
- 히어로 CTA 버튼 교체, 하단 CTA 섹션 복구
