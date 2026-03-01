# 무료/저렴 서비스 카탈로그 (/tools) — 디자인 문서

## 목표

managerkim.com에 무료/저렴 서비스 카탈로그 페이지를 추가한다. 비개발자 직장인이 업무 자동화에 활용할 수 있는 서비스들을 카테고리별로 소개.

## 대상 사용자

- 바이브코딩/업무 자동화를 시작하려는 비개발자 직장인
- 무료 서비스로 사이드 프로젝트를 시작하고 싶은 사람

## 라우트

- `/tools` — 단일 페이지, 카테고리별 서비스 카드 나열

## 데이터 구조 (`lib/tools.ts`)

```typescript
export interface Tool {
  name: string;
  icon: string;        // emoji
  url: string;         // 공식 사이트
  free: string;        // 무료 티어 요약
  paid?: string;       // 유료 플랜 시작 가격
  tags: string[];      // ["추천", "입문용"] 등
  desc: string;        // 한 줄 설명
  limits: string[];    // 핵심 제한 사항
  verdict: string;     // 한 줄 평가
}

export interface ToolCategory {
  slug: string;
  title: string;
  icon: string;
  tools: Tool[];
}
```

## 카테고리 (4개)

### 1. 호스팅 & 배포
- Vercel — Next.js 최적화, 무료 100GB/월, 상업 이용 불가(Hobby)
- Cloudflare Pages — 무제한 대역폭, Workers 10만 요청/일
- Netlify — 100GB/월, Functions 125K/월
- GitHub Pages — 정적 사이트 무료, 1GB 저장
- Railway — $5 무료 크레딧/월, 컨테이너 배포
- Render — 무료 정적 사이트, 서버 750시간/월

### 2. 데이터베이스 & 백엔드
- Supabase — PostgreSQL + Auth + Storage, 500MB DB, 2개 프로젝트
- PlanetScale — MySQL, 무료 1DB 5GB (2024 무료 종료 가능성)
- Neon — PostgreSQL 서버리스, 512MB 무료
- Firebase — Google, NoSQL + Auth + Hosting, 1GB Storage
- Turso — SQLite Edge, 8GB 무료

### 3. AI 코딩 도구
- Claude Code — CLI 기반, 에이전트 코딩, Max $100-200/월
- Cursor — AI IDE, 무료 제한적, Pro $20/월
- v0 — UI 생성, 무료 크레딧, Pro $20/월
- Windsurf — AI IDE, 무료 기본, Pro $15/월
- Bolt — 브라우저 기반 풀스택, 무료 제한적
- Lovable — 자연어 → 앱, 무료 제한적

### 4. 기타 도구
- Namecheap — 도메인 $6~12/년
- UptimeRobot — 무료 50개 모니터링
- Clerk — 인증, 무료 10K MAU
- Resend — 이메일 API, 무료 100통/일
- Stripe — 결제, 거래당 2.9%+30¢ (월비용 없음)

## 페이지 레이아웃

- 헤더: 제목 + 부제목 + 총 서비스 수
- 카테고리 탭 네비게이션 (앵커 링크, 상단 스크롤 시 sticky)
- 각 카테고리: 제목 + 서비스 카드 그리드
- 각 카드: 이름, emoji, 무료 내용, 제한, 유료 가격, 한 줄 평, 태그
- Tailwind 기존 색상 체계 유지 (primary=#2563eb, accent=#10b981)

## 헤더/랜딩 연동

- 헤더(app/page.tsx)에 "도구" 링크 추가
- 랜딩 페이지에 도구 섹션 추가는 선택 (나중에)

## 구현 파일

```
lib/tools.ts              — 데이터 + 타입
app/tools/page.tsx         — 카탈로그 페이지
app/page.tsx               — 헤더에 "도구" 링크 추가
```

## 참조

- VPS 보고서: http://38.45.67.130:1657/local/vibe-coding-zero-cost-analysis.html
- 기존 docs 가이드 패턴: lib/docs.ts + app/docs/ 참조
