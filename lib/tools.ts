export interface Tool {
  name: string;
  icon: string; // emoji
  url: string; // official site URL
  free: string; // free tier summary
  paid?: string; // paid plan starting price
  tags: string[]; // e.g. ["추천", "입문용"]
  desc: string; // one-line description
  limits: string[]; // key limitations
  verdict: string; // one-line verdict
}

export interface ToolCategory {
  slug: string;
  title: string;
  icon: string; // emoji
  tools: Tool[];
}

export const toolCategories: ToolCategory[] = [
  {
    slug: "hosting",
    title: "호스팅 & 배포",
    icon: "🚀",
    tools: [
      {
        name: "Vercel",
        icon: "🔺",
        url: "https://vercel.com",
        free: "Hobby 무료: 100GB 대역폭/월, 서버리스 함수 10초, 자동 HTTPS+CDN",
        paid: "Pro $20/월",
        tags: ["추천", "Next.js"],
        desc: "Next.js 최적화 배포 플랫폼. 자동 프리뷰, CI/CD 내장",
        limits: [
          "상업적 이용 Hobby 플랜 불가(ToS)",
          "서버리스 10초 타임아웃",
          "팀 기능 없음(Hobby)",
        ],
        verdict: "Next.js 사이드 프로젝트 최고의 선택",
      },
      {
        name: "Cloudflare Pages",
        icon: "☁️",
        url: "https://pages.cloudflare.com",
        free: "무제한 대역폭, Workers 무료 10만 요청/일, 무제한 사이트",
        paid: "Workers Paid $5/월",
        tags: ["추천", "무제한"],
        desc: "무제한 대역폭이 최대 장점. Workers로 서버리스도 가능",
        limits: [
          "Workers 10ms CPU 제한(무료)",
          "1MB 스크립트 크기",
          "KV 스토리지 1GB",
        ],
        verdict: "대역폭 걱정 없이 정적 사이트 배포",
      },
      {
        name: "Netlify",
        icon: "🔷",
        url: "https://www.netlify.com",
        free: "100GB 대역폭/월, Functions 125K 요청/월, 폼 100건/월",
        paid: "Pro $19/월",
        tags: ["입문용"],
        desc: "정적 사이트 + 서버리스 Functions. 폼 처리 내장이 편리",
        limits: [
          "빌드 300분/월",
          "Functions 10초 타임아웃",
          "대역폭 100GB 초과 시 과금",
        ],
        verdict: "폼이 필요한 정적 사이트에 적합",
      },
      {
        name: "GitHub Pages",
        icon: "🐙",
        url: "https://pages.github.com",
        free: "완전 무료: 1GB 저장, 100GB 대역폭/월, 자동 HTTPS",
        tags: ["무료", "정적"],
        desc: "GitHub 저장소에서 바로 정적 사이트 배포. Jekyll 내장",
        limits: [
          "정적 사이트만 가능(서버리스 없음)",
          "사이트 크기 1GB",
          "빌드 10분 제한",
        ],
        verdict: "포트폴리오, 블로그 등 정적 사이트에 완벽",
      },
      {
        name: "Railway",
        icon: "🚂",
        url: "https://railway.app",
        free: "무료 $5 크레딧/월, 컨테이너 배포, PostgreSQL 포함",
        paid: "Developer $5/월(사용량 기반)",
        tags: ["백엔드"],
        desc: "Docker 컨테이너를 쉽게 배포. DB도 원클릭 설치",
        limits: [
          "무료 크레딧 소진 시 서비스 중단",
          "512MB RAM(무료)",
          "실행 시간 제한",
        ],
        verdict: "Node.js/Python 백엔드 빠른 배포",
      },
      {
        name: "Render",
        icon: "🎨",
        url: "https://render.com",
        free: "정적 사이트 무료, 서버 750시간/월(무료 인스턴스)",
        paid: "Starter $7/월",
        tags: ["백엔드"],
        desc: "정적부터 서버까지. Heroku 대안으로 인기",
        limits: [
          "무료 서버 15분 비활성 시 슬립",
          "512MB RAM(무료)",
          "대역폭 100GB/월",
        ],
        verdict: "Heroku 떠난 후 가장 인기 있는 대안",
      },
    ],
  },
  {
    slug: "database",
    title: "데이터베이스 & 백엔드",
    icon: "🗄️",
    tools: [
      {
        name: "Supabase",
        icon: "💚",
        url: "https://supabase.com",
        free: "500MB DB, 1GB Storage, Auth 무제한, 2개 프로젝트",
        paid: "Pro $25/월",
        tags: ["추천", "올인원"],
        desc: "PostgreSQL + 인증 + 스토리지 + Realtime 올인원",
        limits: [
          "무료 2개 프로젝트 한정",
          "7일 비활성 시 DB 일시정지",
          "동시접속 제한",
        ],
        verdict: "풀스택 사이드 프로젝트의 표준 선택",
      },
      {
        name: "Neon",
        icon: "🐘",
        url: "https://neon.tech",
        free: "512MB 저장, 무제한 프로젝트(Free), 자동 스케일링",
        paid: "Launch $19/월",
        tags: ["서버리스"],
        desc: "서버리스 PostgreSQL. 사용하지 않으면 자동으로 스케일 다운",
        limits: [
          "컴퓨트 시간 월 제한",
          "512MB 스토리지",
          "읽기 전용 복제본 없음(무료)",
        ],
        verdict: "서버리스 PostgreSQL 최신 트렌드",
      },
      {
        name: "Firebase",
        icon: "🔥",
        url: "https://firebase.google.com",
        free: "1GB Storage, 10GB 전송/월, Firestore 1GB, Auth 무료",
        paid: "Blaze(사용량 기반)",
        tags: ["Google", "NoSQL"],
        desc: "Google의 BaaS. NoSQL(Firestore) + Auth + Hosting + Analytics",
        limits: [
          "Firestore 쿼리 제한적(복잡한 조인 불가)",
          "무료 대역폭 10GB/월",
          "Blaze 전환 시 예상치 못한 과금 주의",
        ],
        verdict: "모바일 앱이나 실시간 기능에 강력",
      },
      {
        name: "Turso",
        icon: "🦅",
        url: "https://turso.tech",
        free: "8GB 총 저장, 10억 읽기/월, 500개 DB",
        paid: "Scaler $29/월",
        tags: ["Edge", "SQLite"],
        desc: "Edge에서 동작하는 SQLite. libSQL 기반, 초저지연",
        limits: [
          "쓰기 연산 제한(무료 2500만/월)",
          "단일 위치(무료)",
          "SQLite 특성상 동시쓰기 제한",
        ],
        verdict: "Edge 컴퓨팅과 조합하면 최강",
      },
      {
        name: "PlanetScale",
        icon: "🪐",
        url: "https://planetscale.com",
        free: "(2024년 무료 종료) 과거 5GB 무료 MySQL",
        paid: "Scaler $39/월~",
        tags: ["MySQL"],
        desc: "MySQL 호환 서버리스 DB. 브랜칭으로 스키마 관리",
        limits: [
          "무료 플랜 종료됨(2024.04)",
          "최소 $39/월부터",
          "MySQL만 지원",
        ],
        verdict: "무료 종료 — Neon이나 Supabase 추천",
      },
    ],
  },
  {
    slug: "ai-tools",
    title: "AI 코딩 도구",
    icon: "🤖",
    tools: [
      {
        name: "Claude Code",
        icon: "🤖",
        url: "https://claude.ai/code",
        free: "API 기반 — 무료 없음, Max 요금제에 포함",
        paid: "Max $100-200/월",
        tags: ["추천", "에이전트"],
        desc: "CLI 기반 AI 코딩 에이전트. 파일 수정, 터미널 명령, 멀티에이전트 지원",
        limits: [
          "API 토큰 비용 발생",
          "대규모 작업 시 비용 급증",
          "터미널 환경 필요",
        ],
        verdict: "복잡한 프로젝트에 가장 강력한 AI 코딩 도구",
      },
      {
        name: "Cursor",
        icon: "✏️",
        url: "https://cursor.com",
        free: "무료: 2주 Pro 체험, 이후 기본 자동완성만",
        paid: "Pro $20/월",
        tags: ["IDE", "인기"],
        desc: "VS Code 기반 AI IDE. 코드 자동완성 + 채팅 + 코드베이스 이해",
        limits: [
          "무료 사용 매우 제한적",
          "대형 프로젝트에서 컨텍스트 한계",
          "Pro도 요청 횟수 제한",
        ],
        verdict: "AI 코딩 입문자에게 가장 편한 선택",
      },
      {
        name: "v0",
        icon: "✨",
        url: "https://v0.dev",
        free: "무료 크레딧 제공, 기본 UI 생성 가능",
        paid: "Premium $20/월",
        tags: ["UI", "Vercel"],
        desc: "Vercel의 AI UI 생성기. 프롬프트로 React/Tailwind 컴포넌트 생성",
        limits: [
          "생성 횟수 제한(무료)",
          "복잡한 로직은 직접 수정 필요",
          "React + Tailwind만 지원",
        ],
        verdict: "UI 프로토타입을 5분 만에",
      },
      {
        name: "Windsurf",
        icon: "🏄",
        url: "https://windsurf.com",
        free: "무료: 기본 자동완성 + 제한된 AI 채팅",
        paid: "Pro $15/월",
        tags: ["IDE"],
        desc: "Codeium의 AI IDE. Cascade 에이전트로 멀티스텝 작업 가능",
        limits: [
          "무료 기능 제한적",
          "Cursor보다 생태계 작음",
          "일부 언어 지원 부족",
        ],
        verdict: "Cursor 대안으로 가성비 좋은 선택",
      },
      {
        name: "Bolt",
        icon: "⚡",
        url: "https://bolt.new",
        free: "무료: 일일 제한된 생성 횟수",
        paid: "Pro $20/월~",
        tags: ["브라우저", "풀스택"],
        desc: "브라우저에서 풀스택 앱 생성. 설치 없이 바로 코딩",
        limits: [
          "복잡한 앱은 한계",
          "생성 횟수 제한",
          "커스터마이징 어려움",
        ],
        verdict: "설치 없이 빠른 프로토타입",
      },
      {
        name: "Lovable",
        icon: "💜",
        url: "https://lovable.dev",
        free: "무료: 제한된 프로젝트 생성",
        paid: "Starter $20/월",
        tags: ["노코드"],
        desc: "자연어로 앱 생성. Supabase 연동으로 백엔드까지",
        limits: [
          "복잡한 로직 한계",
          "생성된 코드 수정 어려움",
          "Supabase 의존성",
        ],
        verdict: "코딩 경험 0에서 시작하기 좋음",
      },
    ],
  },
  {
    slug: "etc",
    title: "기타 유용한 도구",
    icon: "🧰",
    tools: [
      {
        name: "Namecheap",
        icon: "🌐",
        url: "https://www.namecheap.com",
        free: "WhoisGuard 무료 포함",
        paid: ".com $6~12/년",
        tags: ["도메인"],
        desc: "가성비 좋은 도메인 등록. .com 기준 연 $8~10 선에서 해결",
        limits: [
          "갱신 시 가격 인상 가능",
          "일부 TLD는 비쌈",
        ],
        verdict: "도메인은 여기서 사는 게 가장 합리적",
      },
      {
        name: "UptimeRobot",
        icon: "📊",
        url: "https://uptimerobot.com",
        free: "무료 50개 모니터, 5분 간격 체크, 이메일/슬랙 알림",
        paid: "Pro $7/월",
        tags: ["무료", "모니터링"],
        desc: "서비스가 죽었는지 자동 감시. 무료로 50개까지",
        limits: [
          "무료 5분 간격(Pro 1분)",
          "SMS 알림 유료",
          "상태 페이지 기본 디자인만",
        ],
        verdict: "무료 모니터링의 정석",
      },
      {
        name: "Clerk",
        icon: "🔐",
        url: "https://clerk.com",
        free: "무료 10,000 MAU, 소셜 로그인 무제한, 이메일 인증",
        paid: "Pro $25/월",
        tags: ["인증", "추천"],
        desc: "인증/사용자관리 올인원. Google/GitHub 소셜 로그인 3분 연동",
        limits: [
          "10K MAU 초과 시 유료",
          "커스터마이징 일부 제한",
          "Supabase Auth와 중복 가능",
        ],
        verdict: "인증을 직접 구현하지 마세요",
      },
      {
        name: "Resend",
        icon: "📧",
        url: "https://resend.com",
        free: "무료 100통/일, 3,000통/월",
        paid: "Pro $20/월",
        tags: ["이메일"],
        desc: "개발자 친화적 이메일 API. React Email로 예쁜 이메일 작성",
        limits: [
          "무료 일 100통 제한",
          "커스텀 도메인 1개(무료)",
          "전송량 초과 시 큐잉",
        ],
        verdict: "트랜잭셔널 이메일의 현대적 선택",
      },
      {
        name: "Stripe",
        icon: "💳",
        url: "https://stripe.com",
        free: "월 기본료 없음, 거래당 2.9% + 30¢",
        paid: "거래당 과금",
        tags: ["결제"],
        desc: "온라인 결제의 글로벌 표준. 구독/일회성/마켓플레이스 모두 지원",
        limits: [
          "한국 사업자등록증 필요",
          "거래당 수수료 부담",
          "정산 주기 2일~",
        ],
        verdict: "결제가 필요하면 사실상 유일한 선택",
      },
    ],
  },
];

export function getToolCategories(): ToolCategory[] {
  return toolCategories;
}

export function getToolCategory(slug: string): ToolCategory | undefined {
  return toolCategories.find((c) => c.slug === slug);
}
