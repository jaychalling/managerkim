export type DocTag = "NEW" | "IMPROVED" | "EXPERIMENTAL";

export interface DocBlock {
  type: "desc" | "card" | "code" | "list" | "tip" | "example";
  title?: string;
  text?: string;
  items?: string[];
  label?: string;
}

export interface DocSection {
  slug: string;
  title: string;
  icon: string;
  tag?: DocTag;
  summary: string; // 카드용 1-2줄
  content: DocBlock[];
}

export const docSections: DocSection[] = [
  {
    slug: "auto-memory",
    title: "Auto Memory",
    icon: "🧠",
    tag: "NEW",
    summary:
      "Claude가 이전 작업을 기억합니다. 새 세션을 시작해도 이전에 배운 내용, 내 작업 스타일, 프로젝트 구조를 알고 있어요.",
    content: [
      {
        type: "desc",
        text: "Claude Code는 작업 중 발견한 패턴과 인사이트를 자동으로 저장하고 다음 세션에 불러옵니다. 매번 같은 설명을 반복하지 않아도 됩니다. 이전에 어떻게 문제를 해결했는지, 어떤 빌드 명령을 쓰는지, 어떤 파일이 중요한지 — 모두 기억합니다.",
      },
      {
        type: "list",
        title: "자동으로 기억하는 것들",
        items: [
          "빌드/테스트 명령어, 배포 방법 등 프로젝트 패턴",
          "오래 디버깅해서 겨우 해결한 문제와 해결책",
          "핵심 파일 위치, 모듈 구조, 아키텍처 결정 사항",
          "내가 선호하는 코딩 방식, 도구 선택 이유",
          "환경 특이사항 (OS별 경로, 권한 설정 등)",
        ],
      },
      {
        type: "card",
        title: "저장 위치와 구조",
        text: "~/.claude/projects/<프로젝트경로>/memory/ 폴더에 MEMORY.md 파일로 저장됩니다. 일반 텍스트 마크다운 파일이라 직접 열어서 읽고, 수정하고, 삭제할 수 있어요. Claude가 자동으로 내용을 추가·업데이트합니다.",
      },
      {
        type: "code",
        title: "메모리 파일 위치 예시",
        text: `# Windows
C:\\Users\\이름\\.claude\\projects\\E--내프로젝트\\memory\\MEMORY.md

# Mac/Linux
~/.claude/projects/home-내프로젝트/memory/MEMORY.md`,
      },
      {
        type: "example",
        label: "실제 활용",
        text: `세션 1: "npm run build가 자꾸 실패해서 NODE_OPTIONS=--max-old-space-size=4096 를 앞에 붙여야 한다는 걸 발견"
→ Claude가 MEMORY.md에 저장

세션 2 (며칠 후): 처음부터 "이 프로젝트는 빌드 시 메모리 옵션 필요"라는 걸 알고 시작`,
      },
      {
        type: "tip",
        text: "\"이걸 기억해줘\" 또는 \"다음에도 이 방식으로 해줘\"라고 말하면 Claude가 메모리 파일에 즉시 저장합니다. 반대로 \"잊어줘\"라고 하면 해당 내용을 삭제해요.",
      },
      {
        type: "list",
        title: "장점과 단점",
        items: [
          "✅ 반복 설명 불필요 — 세션마다 처음부터 설명 안 해도 됨",
          "✅ 누적 학습 — 쓸수록 나에게 최적화됨",
          "✅ 투명성 — 파일 직접 확인·수정 가능",
          "⚠️ MEMORY.md 첫 200줄만 로드됨 — 중요한 내용은 앞에 배치",
          "⚠️ 잘못된 기억이 저장될 수 있음 — 주기적으로 검토 권장",
        ],
      },
    ],
  },
  {
    slug: "agent-teams",
    title: "Agent Teams",
    icon: "👥",
    tag: "NEW",
    summary:
      "Claude 여러 명이 팀을 이뤄 일합니다. 팀장 Claude가 작업을 나눠주고, 팀원 Claude들이 병렬로 처리해요.",
    content: [
      {
        type: "desc",
        text: "복잡한 작업을 여러 Claude 에이전트가 분업 처리하는 기능입니다. 팀장(Leader)이 작업을 분배하고, 팀원(Teammate)들이 동시에 각자 맡은 일을 처리합니다. 혼자 순차적으로 하던 일을 여러 명이 병렬로 처리하니 훨씬 빠릅니다.",
      },
      {
        type: "list",
        title: "언제 쓰면 가장 효과적인가요?",
        items: [
          "10개 이상의 파일을 각각 독립적으로 분석/수정해야 할 때",
          "프론트엔드 + 백엔드 + 테스트를 동시에 개발할 때",
          "여러 보고서나 문서를 병렬로 작성할 때",
          "대규모 리팩토링 — 여러 모듈을 동시에 개선",
          "독립적인 버그를 동시에 수정할 때",
        ],
      },
      {
        type: "card",
        title: "팀 구성 방법 (TeamCreate)",
        text: "팀장 Claude가 TeamCreate 도구로 팀을 생성하면, ~/.claude/teams/<팀명>/ 폴더에 팀 구성이 저장됩니다. TaskCreate로 할 일 목록을 만들고, Agent 도구로 팀원을 생성해 작업을 배분합니다.",
      },
      {
        type: "code",
        title: "팀원 간 소통 방식",
        text: `# 팀장이 팀원에게 메시지 전송
SendMessage → type: "message", recipient: "researcher"

# 팀원이 작업 완료 보고
TaskUpdate → status: "completed"

# 팀장이 전체 공지
SendMessage → type: "broadcast"

# 작업 완료 후 팀 해산
SendMessage → type: "shutdown_request"`,
      },
      {
        type: "example",
        label: "실제 사용 예시",
        text: `요청: "이 회사의 마케팅, 재무, 운영 자료 30개를 각각 분석해서 요약 보고서 만들어줘"

팀 구성:
• 팀장: 작업 분배, 진행 상황 관리
• 팀원 A: 마케팅 자료 10개 분석
• 팀원 B: 재무 자료 10개 분석
• 팀원 C: 운영 자료 10개 분석
→ 3배 빠르게 완료`,
      },
      {
        type: "list",
        title: "장점과 주의사항",
        items: [
          "✅ 병렬 처리로 작업 속도 대폭 향상",
          "✅ 각 팀원이 독립된 컨텍스트로 작업 — 간섭 없음",
          "✅ 팀원별 권한/도구 제한 가능 (안전성)",
          "⚠️ 서로 의존하는 작업은 팀이 아닌 순차 처리가 적합",
          "⚠️ API 토큰 사용량이 팀원 수만큼 증가",
          "⚠️ 팀원 간 공유 파일 수정 시 충돌 주의",
        ],
      },
    ],
  },
  {
    slug: "custom-subagents",
    title: "Custom Subagents",
    icon: "🤖",
    tag: "NEW",
    summary:
      "특정 역할에 특화된 나만의 AI 에이전트를 만들 수 있습니다. 코드 리뷰 전문가, 문서 작성 전문가 등을 직접 정의해요.",
    content: [
      {
        type: "desc",
        text: "에이전트 정의 파일(.md)을 만들어두면, Claude가 필요할 때 해당 에이전트를 자동으로 호출합니다. 반복 작업에 특화된 전문가 에이전트를 만들어두면 매번 긴 지시를 다시 설명하지 않아도 됩니다.",
      },
      {
        type: "card",
        title: "에이전트 정의 파일 구조 (11개 필드)",
        text: `name: 에이전트 이름 (영문, 하이픈 사용)
description: 언제 호출할지 설명 (중요!)
tools: 허용할 도구 목록 (Read, Write, Bash 등)
disallow-tools: 금지할 도구
model: 사용할 모델 (claude-opus-4-6 등)
subagent_type: 에이전트 유형
isolation: worktree (격리 실행 여부)
mode: acceptEdits / bypassPermissions
max_turns: 최대 대화 횟수
run_in_background: 백그라운드 실행
team_name: 소속 팀`,
      },
      {
        type: "code",
        title: "코드 리뷰 에이전트 예시 (.claude/agents/code-reviewer.md)",
        text: `---
name: code-reviewer
description: 코드 품질 검토. 보안·성능·가독성 순으로 분석하고 개선점 제안
tools: Read, Grep, Glob
---

# 코드 리뷰 에이전트

코드를 검토할 때는 다음 순서로 진행합니다:

1. 보안 취약점 (SQL 인젝션, XSS, 인증 누락 등)
2. 성능 문제 (N+1 쿼리, 불필요한 루프 등)
3. 가독성 (변수명, 함수 분리, 주석)

항상 한국어로 보고하고, 심각도를 🔴/🟡/🟢로 표시하세요.`,
      },
      {
        type: "card",
        title: "전역 vs 프로젝트 에이전트",
        text: "~/.claude/agents/ — 내 모든 프로젝트에서 사용 가능한 개인 에이전트\n.claude/agents/ — 현재 프로젝트에서만 사용 (팀원과 공유 가능, git에 포함)",
      },
      {
        type: "example",
        label: "자동 호출되는 상황",
        text: `"이 코드 리뷰해줘" → code-reviewer 에이전트 자동 호출
"문서 작성해줘" → doc-writer 에이전트 자동 호출
"배포해줘" → deployment 에이전트 자동 호출

description 필드가 잘 쓰여 있을수록 Claude가 정확히 판단합니다.`,
      },
      {
        type: "list",
        title: "장점과 주의사항",
        items: [
          "✅ 반복 지시 불필요 — 한 번 정의하면 항상 그 방식대로",
          "✅ 도구 제한으로 안전성 확보 — 읽기 전용 에이전트는 파일 수정 불가",
          "✅ 팀원과 공유 가능 — .claude/agents/를 git에 포함",
          "✅ 모델 선택 — 간단한 작업엔 Haiku, 복잡한 작업엔 Opus",
          "⚠️ description이 불명확하면 잘못된 에이전트가 호출될 수 있음",
          "⚠️ 너무 많은 에이전트 → Claude가 어떤 걸 써야 할지 혼란",
        ],
      },
      {
        type: "tip",
        text: "에이전트 설명(description)은 3인칭으로, '언제' 호출해야 하는지 명확하게 적으세요. \"코드 리뷰를 해야 할 때 사용\" 보다 \"PR 또는 파일 검토 요청 시 보안·성능·가독성을 체크하는 전문 리뷰어\"처럼 구체적으로.",
      },
    ],
  },
  {
    slug: "remote-control",
    title: "Remote Control",
    icon: "🌐",
    tag: "NEW",
    summary:
      "웹 브라우저나 다른 기기에서 Claude Code를 원격으로 제어합니다. PC를 켜놓지 않아도 스마트폰에서 작업 지시 가능.",
    content: [
      {
        type: "desc",
        text: "Claude Code를 서버나 VPS에 올려두고, 어디서든 웹 인터페이스로 접속해 작업을 지시할 수 있습니다. 회사 PC가 꺼져 있어도 스마트폰으로 업무 자동화를 지시하고, 잠자는 동안 야간 배치 작업을 실행할 수 있습니다.",
      },
      {
        type: "code",
        title: "서버 시작 명령어",
        text: `# 기본 실행 (로컬 전용, 포트 자동 할당)
claude --serve

# 외부 접속 허용 + 포트 지정
claude --serve --host 0.0.0.0 --port 8080

# 비밀번호 설정
claude --serve --password 내비밀번호

# 백그라운드 실행 (서버 종료 후에도 유지)
nohup claude --serve --host 0.0.0.0 --port 8080 &`,
      },
      {
        type: "list",
        title: "원격 접속으로 할 수 있는 것들",
        items: [
          "출퇴근 중 스마트폰으로 코드 작업 지시",
          "잠자는 동안 야간 데이터 처리·보고서 생성",
          "여러 사람이 같은 Claude 인스턴스에 접속해 협업",
          "VPS에서 24시간 자동화 파이프라인 실행",
          "여행 중 노트북 없이 아이패드로 개발 작업",
        ],
      },
      {
        type: "card",
        title: "VPS 활용 설정 순서",
        text: "1. VPS에 Node.js + Claude Code 설치\n2. systemd 서비스로 등록 (서버 재시작 후에도 자동 실행)\n3. Nginx 리버스 프록시로 HTTPS 적용\n4. 브라우저에서 https://내도메인으로 접속\n5. 어디서든 PC처럼 Claude Code 사용",
      },
      {
        type: "example",
        label: "실제 활용 시나리오",
        text: `오전 8시: 출근길 지하철에서 스마트폰으로 접속
→ "오늘 오후까지 월간 보고서 초안 작성해줘"
→ Claude가 VPS에서 데이터 수집·분석·작성 시작

오전 10시: 사무실 도착 → 보고서 완성되어 있음
→ 확인 후 "이 부분 수정해줘" 지시`,
      },
      {
        type: "list",
        title: "장점과 주의사항",
        items: [
          "✅ 24시간 가용성 — VPS는 항상 켜져 있음",
          "✅ 기기 독립적 — 스마트폰, 태블릿, 어디서나",
          "✅ 팀 공유 가능 — 여러 명이 같은 서버 사용",
          "⚠️ 보안 필수 — 비밀번호·방화벽 없이 공개하면 위험",
          "⚠️ API 비용 — 여러 명이 동시 사용 시 토큰 사용량 증가",
          "⚠️ VPS 서버 필요 — 월 비용 발생 (보통 $5~20/월)",
        ],
      },
      {
        type: "tip",
        text: "AI-Ready VPS를 이미 사용 중이라면 Claude Code Remote를 바로 설치할 수 있습니다. Nginx, SSL, systemd 설정이 모두 갖춰져 있어요.",
      },
    ],
  },
  {
    slug: "worktree",
    title: "Git Worktree 격리",
    icon: "🌿",
    tag: "NEW",
    summary:
      "실험적인 작업을 원본 코드와 완전히 분리된 공간에서 합니다. 실수해도 원본에 영향 없어요.",
    content: [
      {
        type: "desc",
        text: "Git Worktree는 같은 저장소(Repository)를 여러 폴더에서 동시에 체크아웃할 수 있는 Git 기능입니다. Claude Code가 실험적인 변경을 할 때 안전한 별도 공간을 자동으로 만들어줍니다. 실수해도 원본은 안전합니다.",
      },
      {
        type: "code",
        title: "Claude Code에서 Worktree 사용",
        text: `# Claude Code 내에서 /worktree 명령으로 시작
/worktree feature-login

# 또는 Claude에게 요청
"새 기능 실험 공간(worktree) 만들어줘"

# 생성된 워크트리 위치
.claude/worktrees/feature-login/

# 작업 완료 후 머지
git merge feature-login

# 또는 작업 폐기 (원본에 영향 없음)
git worktree remove .claude/worktrees/feature-login`,
      },
      {
        type: "list",
        title: "왜 필요한가요?",
        items: [
          "실험 중 원본 코드가 망가지는 것 방지",
          "여러 기능을 동시에 독립적으로 개발",
          "Agent Teams와 함께 사용 — 팀원마다 독립 워크트리",
          "\"테스트해봤다가 버리기\" — 부담 없는 실험",
          "PR 검토 시 현재 작업 중단 없이 다른 브랜치 확인",
        ],
      },
      {
        type: "example",
        label: "비유로 이해하기",
        text: `원본 코드 = 완성된 집 (건드리면 안 됨)
Worktree = 옆에 짓는 모델하우스

모델하우스에서 인테리어 이것저것 시도 → 마음에 들면 원본에 적용
마음에 안 들면? 모델하우스만 철거 → 원본은 멀쩡`,
      },
      {
        type: "card",
        title: "Agent Teams + Worktree 조합",
        text: "팀원 에이전트를 생성할 때 isolation: \"worktree\" 옵션을 주면, 각 팀원이 완전히 독립된 워크트리에서 작업합니다. 팀원 A와 팀원 B가 같은 파일을 동시에 수정해도 충돌이 없어요.",
      },
      {
        type: "list",
        title: "장점과 주의사항",
        items: [
          "✅ 완전한 격리 — 원본 코드 100% 안전",
          "✅ 병렬 작업 — 여러 워크트리 동시 운영",
          "✅ 빠른 전환 — 브랜치 체크아웃보다 빠름",
          "✅ 자동 정리 — 변경 없으면 작업 완료 시 자동 삭제",
          "⚠️ Git 저장소 필수 — git init이 되어 있어야 함",
          "⚠️ 디스크 공간 — 워크트리마다 별도 공간 사용",
        ],
      },
    ],
  },
  {
    slug: "claude-md",
    title: "CLAUDE.md 설정 파일",
    icon: "📋",
    tag: "IMPROVED",
    summary:
      "Claude에게 프로젝트 규칙을 알려주는 설정 파일입니다. 한 번 만들어두면 매번 설명하지 않아도 돼요.",
    content: [
      {
        type: "desc",
        text: "CLAUDE.md는 Claude Code가 프로젝트를 열 때 자동으로 읽는 설명서입니다. 프로젝트 구조, 코딩 규칙, 자주 쓰는 명령어, 하면 안 되는 것들을 적어두면 Claude가 항상 그대로 따릅니다.",
      },
      {
        type: "code",
        title: "CLAUDE.md 예시",
        text: `# CLAUDE.md

## 명령어
\`\`\`bash
npm run dev       # 개발 서버
npm run build     # 빌드 확인 (배포 전 항상 실행)
npm run test      # 테스트
\`\`\`

## 코딩 규칙
- TypeScript strict 모드 사용
- 컴포넌트는 app/components/에 저장
- API 응답은 항상 타입 정의

## 절대 하면 안 되는 것
- npm install --force 금지
- 환경변수 하드코딩 금지
- main 브랜치에 직접 push 금지

## 배포
- git push → Vercel 자동 배포
- 수동 배포: npx vercel --prod (지시 시에만)`,
      },
      {
        type: "card",
        title: "파일 우선순위 (낮은 것 → 높은 것)",
        text: "관리자 정책 (조직 전체)\n↓ 전역 개인 설정: ~/.claude/CLAUDE.md\n↓ 프로젝트 공유: ./CLAUDE.md 또는 ./.claude/CLAUDE.md\n↓ 모듈형 규칙: ./.claude/rules/*.md\n↓ 개인 로컬: ./CLAUDE.local.md (git에 올라가지 않음)\n\n더 구체적인 규칙이 우선순위 높음",
      },
      {
        type: "code",
        title: "@import로 파일 불러오기 (신기능)",
        text: `# CLAUDE.md에서 다른 파일 참조
CLAUDE.md 내용:
아키텍처 상세: @docs/architecture.md
배포 절차: @docs/deployment.md
개인 설정: @~/.claude/my-preferences.md

→ CLAUDE.md를 짧게 유지하면서 필요한 정보 모두 포함
→ 재귀 import 깊이 5단계까지 지원`,
      },
      {
        type: "card",
        title: ".claude/rules/ 조건부 규칙",
        text: "파일 패턴에 따라 자동으로 적용되는 규칙을 만들 수 있습니다.\n\n예: src/api/**/*.ts 파일 작업 시에만\n→ .claude/rules/api.md에 paths frontmatter 추가\n\n결과: API 파일 수정 시에만 API 관련 규칙 자동 적용",
      },
      {
        type: "list",
        title: "CLAUDE.md에 꼭 넣어야 할 것들",
        items: [
          "빌드·실행·테스트 명령어 (Claude가 추측하기 어려운 것)",
          "기본값과 다른 코딩 스타일 규칙",
          "절대 하면 안 되는 행동 목록",
          "배포 방법과 주의사항",
          "프로젝트 특유의 폴더 구조나 패턴",
          "외부 서비스 연동 방법 (API 엔드포인트 등)",
        ],
      },
      {
        type: "tip",
        text: "/init 명령으로 Claude가 현재 프로젝트를 분석해서 CLAUDE.md 초안을 자동 생성해줍니다. 그 후 직접 수정해서 사용하세요.",
      },
    ],
  },
  {
    slug: "hooks",
    title: "Hooks — 자동 실행 규칙",
    icon: "⚡",
    tag: "IMPROVED",
    summary:
      "특정 이벤트가 발생하면 자동으로 실행할 명령을 설정합니다. 파일 저장 후 자동 포맷, 위험 명령 차단, 작업 완료 알림 등을 설정할 수 있어요.",
    content: [
      {
        type: "desc",
        text: "Hooks는 Claude가 특정 작업을 수행할 때 자동으로 실행되는 쉘 명령어입니다. Claude의 모든 행동에 자동화 규칙을 추가할 수 있어요. 코드 포맷 자동화부터 위험한 명령 차단까지 다양하게 활용됩니다.",
      },
      {
        type: "list",
        title: "사용 가능한 훅 이벤트 종류",
        items: [
          "PreToolUse — 도구 실행 전 (차단 가능)",
          "PostToolUse — 도구 실행 후",
          "Notification — Claude가 알림을 보낼 때",
          "SessionStart — 새 세션 시작 시",
          "SessionEnd — 세션 종료 시",
          "UserPromptSubmit — 메시지 제출 시",
          "Stop — Claude가 작업을 멈출 때",
        ],
      },
      {
        type: "code",
        title: "settings.json 훅 설정 예시",
        text: `// ~/.claude/settings.json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "prettier --write $CLAUDE_TOOL_INPUT_FILE_PATH"
          }
        ]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "bash ~/.claude/safety-check.sh"
          }
        ]
      }
    ],
    "Notification": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "curl -s -X POST https://api.telegram.org/bot토큰/sendMessage -d 'chat_id=내ID&text=Claude작업완료'"
          }
        ]
      }
    ]
  }
}`,
      },
      {
        type: "list",
        title: "실제 활용 사례",
        items: [
          "파일 수정 후 Prettier 자동 실행 — 코드 포맷 통일",
          "rm -rf, DROP TABLE 등 위험 명령 실행 전 차단·경고",
          "작업 완료 시 슬랙·텔레그램·이메일 알림 전송",
          "세션 시작 시 DB 연결 확인, 환경 체크",
          "특정 파일 수정 시 자동 테스트 실행",
          "커밋 전 린트 검사 자동 실행",
        ],
      },
      {
        type: "card",
        title: "훅 종료 코드의 의미",
        text: "종료 코드 0 → 성공, 계속 진행\n종료 코드 1 → 실패 알림, 하지만 진행\n종료 코드 2 → Claude에게 오류 내용 전달\n\nPreToolUse 훅에서 exit 2를 반환하면 Claude가 해당 도구 실행을 취소합니다 — 위험 명령 차단에 활용!",
      },
      {
        type: "example",
        label: "안전 검사 스크립트 예시",
        text: `# ~/.claude/safety-check.sh
#!/bin/bash
COMMAND="$CLAUDE_TOOL_INPUT_COMMAND"

# 위험한 명령 차단
if echo "$COMMAND" | grep -q "rm -rf /"; then
  echo "위험: 루트 디렉토리 삭제 시도 차단됨" >&2
  exit 2  # Claude에게 차단 알림
fi

exit 0  # 안전, 계속 진행`,
      },
      {
        type: "list",
        title: "장점과 주의사항",
        items: [
          "✅ 실수 방지 자동화 — 위험 명령 차단",
          "✅ 팀 규칙 강제 적용 — 포맷, 린트 자동 실행",
          "✅ 원격 알림 — 장시간 작업 완료 시 알림",
          "⚠️ 훅 스크립트 오류 시 Claude 작업 차단될 수 있음",
          "⚠️ 외부 명령 실행 — 보안 고려 필요",
          "⚠️ 너무 많은 훅 → 작업 속도 저하",
        ],
      },
    ],
  },
  {
    slug: "copy-command",
    title: "슬래시 명령어 완전 정복",
    icon: "⌨️",
    tag: "NEW",
    summary:
      "Claude Code의 모든 슬래시 명령어를 정리했습니다. /copy, /compact, /init 등 유용한 명령을 알아두면 훨씬 편리해요.",
    content: [
      {
        type: "desc",
        text: "슬래시 명령어(/)는 Claude Code 터미널에서 특별한 기능을 실행하는 단축어입니다. / 를 입력하면 자동완성 목록이 뜨고, 원하는 명령을 선택할 수 있어요.",
      },
      {
        type: "list",
        title: "핵심 슬래시 명령어 목록",
        items: [
          "/help — 사용 가능한 전체 명령 목록 표시",
          "/copy — 마지막 응답을 클립보드에 복사",
          "/clear — 대화 기록 초기화 (새 작업 시작)",
          "/compact — 긴 대화를 요약해서 컨텍스트 확보",
          "/init — 현재 프로젝트 분석 후 CLAUDE.md 자동 생성",
          "/config — Claude Code 설정 확인·변경",
          "/status — 현재 API 사용량, 모델 정보 확인",
          "/review — 변경된 파일 코드 리뷰 요청",
          "/memory — 메모리 파일 확인·편집",
          "/fast — Fast Mode 토글 (빠른 응답 / 비용 절감)",
        ],
      },
      {
        type: "code",
        title: "/copy 명령 활용",
        text: `# 마지막 응답 클립보드 복사
/copy

# 대화 전체 복사
/copy all

# 특정 코드 블록만 복사 (번호 지정)
/copy 2

# 복사 후 다른 곳에 붙여넣기 (Ctrl+V)
→ 문서, 메모장, 이메일 등에 활용`,
      },
      {
        type: "code",
        title: "/compact 명령 — 컨텍스트 절약",
        text: `# 언제 쓰나요?
- 대화가 너무 길어져서 느려질 때
- 새 작업을 시작하는데 이전 대화 유지하고 싶을 때

/compact

→ Claude가 대화 내용을 요약
→ 토큰 사용량 줄이면서 핵심 맥락 유지
→ 복잡한 장기 프로젝트에서 필수`,
      },
      {
        type: "card",
        title: "사용자 정의 슬래시 명령 (Skills)",
        text: "Skills 시스템으로 나만의 슬래시 명령을 만들 수 있어요.\n\n~/.claude/skills/내스킬/SKILL.md 파일을 만들면\n→ /내스킬 명령으로 호출 가능\n\n예: /deploy → 배포 절차 자동 실행\n/report → 주간 보고서 자동 생성",
      },
      {
        type: "tip",
        text: "/ 를 입력하고 잠깐 기다리면 자동완성 목록이 나타납니다. 설치된 Skills와 기본 명령어가 모두 표시돼요.",
      },
      {
        type: "list",
        title: "장점과 주의사항",
        items: [
          "✅ 빠른 실행 — 긴 지시 없이 단축어 하나로",
          "✅ 자동완성 — 명령어 외울 필요 없음",
          "✅ 커스터마이징 — Skills로 나만의 명령 추가",
          "⚠️ /clear는 대화 내역 삭제 — 중요한 내용은 /copy로 먼저 저장",
          "⚠️ Skills 슬래시 명령은 설치 후 터미널 재시작 필요할 수 있음",
        ],
      },
    ],
  },
  {
    slug: "plugins",
    title: "Plugins & Skills",
    icon: "🔌",
    tag: "NEW",
    summary:
      "Claude의 능력을 확장하는 플러그인과 스킬 시스템입니다. 작업 방식을 저장하고, 다른 사람이 만든 스킬을 설치해서 사용할 수 있어요.",
    content: [
      {
        type: "desc",
        text: "Skills는 Claude에게 특정 작업을 더 잘하도록 가르치는 설명서 모음입니다. 내가 자주 하는 작업 방식을 스킬로 저장해두면, Claude가 항상 그 방식대로 해줍니다. Plugins는 미리 만들어진 스킬 묶음입니다.",
      },
      {
        type: "code",
        title: "스킬 파일 구조 예시",
        text: `# ~/.claude/skills/weekly-report/SKILL.md
---
name: weekly-report
description: 주간 업무 보고서 작성. 완료 항목, 이슈, 다음 주 계획 포함
user-invocable: true
allowed-tools: Read, Write, Bash
---

# 주간 보고서 작성 스킬

다음 형식으로 보고서를 작성합니다:

## 이번 주 완료 항목
## 이슈 및 조치 사항
## 다음 주 계획

항상 한국어로, 팀장이 5분 안에 읽을 수 있는 분량으로.`,
      },
      {
        type: "list",
        title: "스킬 파일 frontmatter 옵션",
        items: [
          "name: 스킬 이름 (영문 소문자, 하이픈)",
          "description: 언제 호출할지 설명 (자동 호출 기준)",
          "user-invocable: true/false — /스킬명으로 호출 가능 여부",
          "disable-model-invocation: true — 자동 호출 비활성화",
          "allowed-tools: 사용 가능한 도구 제한",
          "context: fork — 별도 서브에이전트에서 실행",
          "agent: Explore/Plan — 특정 에이전트 유형으로 실행",
        ],
      },
      {
        type: "card",
        title: "개인 vs 프로젝트 스킬",
        text: "개인 스킬: ~/.claude/skills/\n→ 모든 프로젝트에서 사용 가능\n→ 개인 업무 방식, 보고서 형식 등\n\n프로젝트 스킬: .claude/skills/\n→ 해당 프로젝트에서만 사용\n→ 팀원과 공유 가능 (git에 포함)",
      },
      {
        type: "card",
        title: "플러그인 설치",
        text: "다른 사람이 만든 스킬 묶음(Plugin)을 설치해서 사용할 수 있어요.\n\n예: Superpowers 플러그인 — 개발 방법론 스킬 묶음\n(브레인스토밍, TDD, 코드 리뷰 등)\n\n설치: claude plugins install <플러그인URL>",
      },
      {
        type: "example",
        label: "자동 호출 vs 수동 호출",
        text: `자동 호출:
→ "보고서 써줘" 입력 시 description을 보고 weekly-report 스킬 자동 실행

수동 호출:
→ /weekly-report 입력 시 해당 스킬 직접 실행
(user-invocable: true인 경우만)`,
      },
      {
        type: "list",
        title: "장점과 주의사항",
        items: [
          "✅ 재사용성 — 한 번 만들면 계속 활용",
          "✅ 팀 공유 — 팀만의 작업 방식 표준화",
          "✅ 도구 제한 — 스킬별 보안 경계 설정",
          "✅ 외부 플러그인 — 커뮤니티 스킬 활용",
          "⚠️ 스킬 500줄 제한 — 너무 길면 분리 필요",
          "⚠️ description 품질이 자동 호출 정확도 결정",
        ],
      },
    ],
  },
  {
    slug: "changelog",
    title: "최신 업데이트 내역",
    icon: "📅",
    summary:
      "Claude Code의 주요 업데이트를 정리했습니다. 어떤 기능이 새로 생겼는지 한눈에 확인하세요.",
    content: [
      {
        type: "desc",
        text: "Claude Code는 거의 매주 업데이트되고 있습니다. 2025-2026년 주요 업데이트 내역을 정리했어요. 가장 최신 내역은 claude.ai/code 공식 사이트에서 확인하세요.",
      },
      {
        type: "card",
        title: "v2.1.32 — Agent Teams 출시",
        text: "• Claude Agent Teams 정식 출시 (claude-opus-4-6 기반)\n• TeamCreate, TaskCreate, SendMessage 도구 추가\n• 팀장-팀원 아키텍처로 병렬 작업 가능\n• TaskList로 공유 할 일 목록 관리",
      },
      {
        type: "card",
        title: "v2.1.41 — Hooks & Windows 강화",
        text: "• Hooks 시스템 대폭 확장\n  - PreToolUse / PostToolUse / Stop / UserPromptSubmit 추가\n  - 종료 코드 2로 도구 실행 차단 가능\n• Windows ARM64 공식 지원\n• Auto Memory 세션 간 메모리 개선",
      },
      {
        type: "card",
        title: "v2.1.36 — Fast Mode & 기타",
        text: "• Fast Mode 추가 (claude-opus-4-6, 더 빠른 응답)\n• /fast 슬래시 명령으로 토글\n• Git Worktree 격리 기능 (isolation: worktree)\n• Custom Subagents 공식 지원",
      },
      {
        type: "card",
        title: "v2.0.x — 기반 기능 업데이트",
        text: "• CLAUDE.md @import 지원 (재귀 5단계)\n• .claude/rules/ 조건부 규칙 (paths frontmatter)\n• Skills 시스템 + 플러그인 마켓\n• Remote Control (--serve 모드)\n• /copy, /compact 슬래시 명령 추가",
      },
      {
        type: "code",
        title: "버전 확인 및 업데이트 방법",
        text: `# 현재 버전 확인
claude --version

# 최신 버전으로 업데이트
claude update
# 또는
npm update -g @anthropic-ai/claude-code

# 변경 로그 확인
claude changelog`,
      },
      {
        type: "tip",
        text: "claude update 명령을 주기적으로 실행해서 최신 기능을 사용하세요. 새 업데이트마다 생산성을 크게 높여주는 기능이 추가됩니다.",
      },
    ],
  },
  {
    slug: "comparison",
    title: "Subagent vs Agent Team 비교",
    icon: "⚖️",
    summary:
      "비슷해 보이는 두 기능의 차이를 쉽게 설명합니다. 언제 어떤 걸 써야 할지 알아봐요.",
    content: [
      {
        type: "desc",
        text: "Claude Code에는 Subagent와 Agent Team, 두 가지 멀티 에이전트 방식이 있습니다. 이름이 비슷해서 헷갈리기 쉬운데, 사용 상황이 완전히 다릅니다.",
      },
      {
        type: "card",
        title: "Subagent (서브에이전트) — 단순 위임",
        text: "현재 대화에서 Claude가 하위 작업을 처리하도록 다른 Claude를 잠깐 호출합니다.\n\n• 주 에이전트가 서브에이전트에게 작업 위임\n• 서브에이전트 완료 → 결과 반환 → 주 에이전트 계속 진행\n• 동시 실행 가능 (Agent 도구 여러 개 병렬 호출)\n\n✅ 단순 독립 작업\n✅ 빠른 실행, 적은 설정\n✅ 현재 세션에서 바로 사용",
      },
      {
        type: "card",
        title: "Agent Team (에이전트 팀) — 지속 협업",
        text: "팀장 Claude가 팀을 구성하고, 팀원들이 메시지로 소통하며 장기 작업을 수행합니다.\n\n• 팀장-팀원 계층 구조\n• TaskList로 작업 관리, SendMessage로 소통\n• 팀원이 작업 완료 후에도 팀 유지 (다음 작업 대기)\n\n✅ 복잡한 대형 프로젝트\n✅ 지속적인 협업 필요 시\n✅ 팀원별 역할 분담",
      },
      {
        type: "code",
        title: "코드로 보는 차이",
        text: `// Subagent — Agent 도구로 즉시 위임
Agent tool {
  subagent_type: "general-purpose",
  prompt: "이 파일 분석해줘: data.csv"
}
// → 분석 결과 즉시 반환

// Agent Team — 팀 구성 후 지속 협업
TeamCreate { team_name: "analytics-team" }
TaskCreate { subject: "파일 1 분석" }
TaskCreate { subject: "파일 2 분석" }
Agent tool { name: "analyst-1", ... }
Agent tool { name: "analyst-2", ... }
// → 팀원들이 병렬로 작업, 완료 시 보고`,
      },
      {
        type: "list",
        title: "선택 기준",
        items: [
          "작업 1개, 빠르게 → Subagent",
          "작업 여러 개, 독립적 → Subagent 병렬 호출",
          "작업 많고 복잡, 상호 보고 필요 → Agent Team",
          "장기 프로젝트, 역할 분담 → Agent Team",
          "단순 코드 리뷰 → Custom Subagent (에이전트 정의)",
          "10개+ 파일 동시 처리 → Agent Team",
        ],
      },
      {
        type: "example",
        label: "실전 선택 예시",
        text: `"이 보고서 요약해줘" → 단순 작업 → Subagent

"10개 부서 데이터 각각 분석해줘"
→ 독립 반복 작업 → Subagent 10개 병렬

"3개월짜리 프로젝트 기획·개발·테스트 동시 진행"
→ 지속적 역할 분담 → Agent Team`,
      },
      {
        type: "tip",
        text: "처음엔 Subagent로 시작하세요. 작업이 복잡해지고 팀원 간 소통이 필요해지는 시점에 Agent Team으로 전환하는 것이 자연스러운 흐름입니다.",
      },
    ],
  },
];

export function getDocSection(slug: string): DocSection | undefined {
  return docSections.find((s) => s.slug === slug);
}
