"use client";

import Callout from "@/components/learn/Callout";
import CodeBlock from "@/components/learn/CodeBlock";
import CompareTable from "@/components/learn/CompareTable";
import OsTabs from "@/components/learn/OsTabs";
import ScreenshotPlaceholder from "@/components/learn/ScreenshotPlaceholder";

export default function Chapter3() {
  return (
    <>
      {/* ── 상황 인식 ── */}
      <section id="situation">
        <h2 className="text-2xl font-bold text-heading mb-4">
          매일 아침, 이메일과의 전쟁
        </h2>
        <p className="text-body leading-relaxed mb-4">
          출근하면 가장 먼저 하는 일이 뭔가요?
          아마 메일함을 여는 거겠죠. 밤사이 쌓인 수십 통의 메일.
          하나하나 열어보면서 &quot;이건 뉴스레터니까 나중에&quot;,
          &quot;이건 팀장님한테 답장해야 하고&quot;, &quot;이건 뭐지?&quot; 하면서
          분류하는 데만 30분이 훌쩍 지나가요.
        </p>

        <div className="grid gap-3 my-6">
          {[
            { icon: "📬", text: "수십 통의 메일을 일일이 열어서 확인" },
            { icon: "🏷️", text: "뉴스레터 / 알림 / 업무 메일을 수동으로 분류" },
            { icon: "😰", text: "바쁜 와중에 중요한 메일을 놓치는 경우 발생" },
            { icon: "✍️", text: "비슷한 답장을 매번 처음부터 작성" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-accent-light border border-accent/30 rounded-xl px-4 py-3"
            >
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              <span className="text-body">{item.text}</span>
            </div>
          ))}
        </div>

        <p className="text-body leading-relaxed mb-4">
          이 과정을 매일 반복하고 있다면, 이걸 자동화해봐요.
        </p>

        <h3 className="text-lg font-semibold text-heading mb-3 mt-8">
          이 글에서 만들 것
        </h3>
        <div className="grid gap-3">
          {[
            { icon: "1", text: "메일 자동 수집 + AI 분류", desc: "Gmail에서 최근 메일을 가져와서 AI가 자동으로 카테고리 분류" },
            { icon: "2", text: "뉴스레터 & 알림 자동 읽음 처리", desc: "중요하지 않은 메일은 자동으로 읽음 표시" },
            { icon: "3", text: "중요 메일 답장 초안 자동 작성", desc: "업무 중요 메일에 대해 AI가 답장 초안을 만들어줌" },
            { icon: "4", text: "저장 전 사용자 승인", desc: "AI가 만든 초안을 사람이 확인하고 승인해야 저장됨" },
            { icon: "5", text: "매일 아침 자동 반복 실행", desc: "한 번 만들면 매일 아침 자동으로 돌아가게 스케줄 등록" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-accent-light border border-accent/30 rounded-xl px-4 py-3"
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">
                {item.icon}
              </span>
              <div>
                <span className="font-medium text-heading">{item.text}</span>
                <p className="text-sm text-caption mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Callout type="info" title="코딩 경험이 없어도 돼요">
          <p>
            이 실습에서 여러분이 직접 코드를 작성할 일은 없어요.
            Claude Code에게 프롬프트 하나를 입력하면, 나머지는 AI가 전부 처리해요.
            여러분은 결과를 확인하고 y/n으로 승인만 하면 돼요.
          </p>
        </Callout>
      </section>

      {/* ── 파이프라인 설명 ── */}
      <section id="pipeline" className="mt-16">
        <h2 className="text-2xl font-bold text-heading mb-4">
          Gmail 자동화 파이프라인 6단계
        </h2>
        <p className="text-body leading-relaxed mb-6">
          우리가 만들 자동화 시스템은 아래 6단계로 동작해요.
          복잡해 보이지만 걱정 마세요. Claude Code가 이 전체를 알아서 만들어줘요.
          여기서는 &quot;어떤 흐름으로 돌아가는지&quot;만 이해하면 돼요.
        </p>

        <div className="space-y-4">
          {/* Step 1 */}
          <div className="relative bg-elevated border-2 border-primary-light rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary text-white font-bold flex items-center justify-center text-lg">
                1
              </div>
              <div>
                <h3 className="font-bold text-heading text-lg">수집</h3>
                <p className="text-body mt-1">
                  Gmail API로 받은편지함에서 <strong>최근 메일 50개</strong>를 가져와요.
                  보낸 사람, 제목, 본문 내용을 모두 읽어와요.
                </p>
                <span className="inline-block mt-2 text-xs font-medium bg-primary-lighter text-primary px-2 py-1 rounded-lg">
                  Gmail API
                </span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-caption">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="relative bg-elevated border-2 border-purple-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-purple-500 text-white font-bold flex items-center justify-center text-lg">
                2
              </div>
              <div>
                <h3 className="font-bold text-heading text-lg">분류</h3>
                <p className="text-body mt-1">
                  AI가 각 메일을 분석해서 <strong>4개 카테고리</strong>로 자동 분류해요.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[
                    { label: "업무 중요", color: "bg-accent-light text-accent border-accent/30" },
                    { label: "뉴스레터", color: "bg-yellow-50 text-yellow-600 border-yellow-200" },
                    { label: "알림", color: "bg-subtle text-body border-border-subtle" },
                    { label: "기타", color: "bg-slate-50 text-slate-600 border-slate-200" },
                  ].map((cat, i) => (
                    <span key={i} className={`text-xs font-medium px-2 py-1 rounded-lg border ${cat.color}`}>
                      {cat.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-caption">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="relative bg-elevated border-2 border-yellow-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-yellow-500 text-white font-bold flex items-center justify-center text-lg">
                3
              </div>
              <div>
                <h3 className="font-bold text-heading text-lg">읽음 처리</h3>
                <p className="text-body mt-1">
                  <strong>뉴스레터</strong>와 <strong>알림</strong>으로 분류된 메일은 자동으로 읽음 표시해요.
                  더 이상 수동으로 하나씩 클릭할 필요가 없어요.
                </p>
                <span className="inline-block mt-2 text-xs font-medium bg-yellow-50 text-yellow-600 px-2 py-1 rounded-lg">
                  자동 처리 (사람 개입 없음)
                </span>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-caption">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="relative bg-elevated border-2 border-accent/30 rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent text-white font-bold flex items-center justify-center text-lg">
                4
              </div>
              <div>
                <h3 className="font-bold text-heading text-lg">답장 초안</h3>
                <p className="text-body mt-1">
                  <strong>업무 중요</strong>로 분류된 메일마다 AI가 답장 초안을 작성해요.
                  메일 내용을 분석해서 적절한 답변을 자동으로 만들어줘요.
                </p>
                <span className="inline-block mt-2 text-xs font-medium bg-accent-light text-accent px-2 py-1 rounded-lg">
                  AI 초안 생성
                </span>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-caption">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="relative bg-elevated border-2 border-accent/30 rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent text-white font-bold flex items-center justify-center text-lg">
                5
              </div>
              <div>
                <h3 className="font-bold text-heading text-lg">승인</h3>
                <p className="text-body mt-1">
                  AI가 만든 초안은 <strong>바로 보내지 않아요</strong>.
                  터미널에 초안 내용이 표시되고, 여러분이 <code className="bg-subtle px-1.5 py-0.5 rounded text-sm font-mono">y</code>를 눌러야
                  Gmail 임시보관함(Draft)에 저장돼요.
                </p>
                <span className="inline-block mt-2 text-xs font-medium bg-accent-light text-accent px-2 py-1 rounded-lg">
                  사람이 확인 (안전장치)
                </span>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-caption">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="relative bg-elevated border-2 border-indigo-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500 text-white font-bold flex items-center justify-center text-lg">
                6
              </div>
              <div>
                <h3 className="font-bold text-heading text-lg">반복 실행</h3>
                <p className="text-body mt-1">
                  완성된 스크립트를 <strong>매일 아침 자동 실행</strong>되도록 스케줄에 등록해요.
                  한 번 설정하면 매일 출근 전에 메일 정리가 끝나 있어요.
                </p>
                <span className="inline-block mt-2 text-xs font-medium bg-indigo-50 text-indigo-600 px-2 py-1 rounded-lg">
                  cron / Task Scheduler
                </span>
              </div>
            </div>
          </div>
        </div>

        <Callout type="tip" title="핵심 포인트">
          <p>
            이 6단계를 여러분이 직접 코딩하는 게 아니에요.
            Claude Code에게 프롬프트 하나만 주면, 이 전체 파이프라인을 자동으로 만들어줘요.
          </p>
        </Callout>
      </section>

      {/* ── Google API 설정 ── */}
      <section id="google-api" className="mt-16">
        <h2 className="text-2xl font-bold text-heading mb-4">
          사전 준비: Google Gmail API 설정
        </h2>
        <p className="text-body leading-relaxed mb-4">
          Claude Code가 Gmail에 접근하려면 &quot;열쇠&quot;가 필요해요.
          이 열쇠를 <strong>OAuth 인증 정보(credentials.json)</strong>라고 해요.
          Google Cloud Console에서 만들 수 있어요.
        </p>

        <Callout type="info" title="왜 이게 필요한가요?">
          <p>
            여러분의 Gmail 계정에 프로그램이 접근하려면, Google에서 &quot;이 프로그램을 허용합니다&quot;라는
            허가증을 발급받아야 하거든요. 이건 보안을 위한 Google의 정책이에요.
            한 번만 설정하면 계속 사용할 수 있어요.
          </p>
        </Callout>

        <div className="space-y-6 mt-8">
          <div className="bg-elevated border border-border-subtle rounded-2xl p-6">
            <h3 className="font-bold text-heading mb-4 text-lg">설정 순서</h3>
            <div className="space-y-5">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-lighter text-primary font-bold flex items-center justify-center text-sm">
                  1
                </div>
                <div>
                  <p className="font-medium text-heading">Google Cloud Console 접속</p>
                  <p className="text-sm text-caption mt-1">
                    브라우저에서{" "}
                    <code className="bg-subtle px-1.5 py-0.5 rounded text-sm font-mono">
                      console.cloud.google.com
                    </code>{" "}
                    에 접속하세요. Google 계정으로 로그인하세요.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-lighter text-primary font-bold flex items-center justify-center text-sm">
                  2
                </div>
                <div>
                  <p className="font-medium text-heading">프로젝트 생성 &rarr; Gmail API 활성화</p>
                  <p className="text-sm text-caption mt-1">
                    상단에서 &quot;새 프로젝트&quot;를 만들어요 (이름은 아무거나 OK).
                    그 다음 좌측 메뉴에서 <strong>&quot;API 및 서비스&quot; &rarr; &quot;라이브러리&quot;</strong>로 가서
                    &quot;Gmail API&quot;를 검색하고 <strong>&quot;사용&quot;</strong> 버튼을 클릭하세요.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-lighter text-primary font-bold flex items-center justify-center text-sm">
                  3
                </div>
                <div>
                  <p className="font-medium text-heading">OAuth 동의 화면 설정</p>
                  <p className="text-sm text-caption mt-1">
                    &quot;API 및 서비스&quot; &rarr; &quot;OAuth 동의 화면&quot;에서 설정해요.
                    Google이 최근 이 UI를 &quot;Google Auth Platform&quot;으로 변경했어요.
                    새 UI에서는 Branding, Audience, Data Access, Clients 탭으로 구성돼요.
                    &quot;Audience&quot; 탭에서 <strong>&quot;External&quot;</strong>을 선택하고,
                    테스트 사용자에 <strong>본인 Gmail을 추가</strong>하세요.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-lighter text-primary font-bold flex items-center justify-center text-sm">
                  4
                </div>
                <div>
                  <p className="font-medium text-heading">OAuth 클라이언트 ID 만들기</p>
                  <p className="text-sm text-caption mt-1">
                    &quot;사용자 인증 정보&quot; &rarr; &quot;사용자 인증 정보 만들기&quot; &rarr; &quot;OAuth 클라이언트 ID&quot;를 선택하세요.
                    애플리케이션 유형은 <strong>&quot;데스크톱 앱&quot;</strong>으로 선택하세요.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-lighter text-primary font-bold flex items-center justify-center text-sm">
                  5
                </div>
                <div>
                  <p className="font-medium text-heading">credentials.json 다운로드</p>
                  <p className="text-sm text-caption mt-1">
                    생성이 완료되면 <strong>&quot;JSON 다운로드&quot;</strong> 버튼이 나타나요.
                    다운로드한 파일을 <code className="bg-subtle px-1.5 py-0.5 rounded text-sm font-mono">credentials.json</code>으로
                    이름을 바꿔서 작업 폴더(autowork)에 넣어주세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Callout type="warning" title="credentials.json 파일 위치가 중요해요">
          <p>
            다운로드한 파일을 반드시 작업 폴더 안에 넣어야 해요.
            Claude Code는 현재 작업 폴더의 파일만 볼 수 있거든요.
          </p>
          <div className="mt-2">
            <code className="bg-subtle px-2 py-1 rounded text-sm font-mono">
              ~/Desktop/autowork/credentials.json
            </code>
          </div>
        </Callout>

        <ScreenshotPlaceholder
          alt="Google Cloud Console — Gmail API 활성화 화면"
          caption="Google Cloud Console에서 Gmail API를 검색하고 '사용' 버튼을 클릭하는 화면"
        />

        <ScreenshotPlaceholder
          alt="Google Cloud Console — OAuth 클라이언트 ID 생성 화면"
          caption="사용자 인증 정보에서 OAuth 클라이언트 ID를 만드는 화면"
        />

        <Callout type="warning" title="테스트 모드 토큰 유효기간">
          <p>
            Google OAuth의 &quot;테스트 모드&quot;에서 발급된 토큰(refresh token)은 <strong>7일 후에 만료</strong>돼요.
            7일이 지나면 다시 인증(로그인)해야 해요.
            프로덕션으로 전환하면 이 제한이 없어지지만, 개인 사용이라면 7일마다 재인증하는 것도 크게 불편하지 않아요.
          </p>
        </Callout>

        <Callout type="tip" title="이 과정이 복잡하게 느껴지시나요?">
          <p>
            Google Cloud Console이 처음이면 당연히 복잡하게 느껴져요.
            근데 걱정 마세요. Claude Code에게 도움을 요청할 수 있거든요!
          </p>
          <p className="mt-2">
            터미널에서 Claude Code를 실행하고 이렇게 물어보세요:
          </p>
          <p className="mt-1 font-medium text-heading">
            &quot;Gmail API용 OAuth 설정하는 방법을 단계별로 알려줘&quot;
          </p>
          <p className="mt-2">
            화면을 보면서 하나씩 따라하면 돼요. 모르는 부분은 계속 물어보세요.
          </p>
        </Callout>
      </section>

      {/* ── 프롬프트 입력 ── */}
      <section id="prompt" className="mt-16">
        <h2 className="text-2xl font-bold text-heading mb-4">
          Claude Code에 입력할 프롬프트
        </h2>
        <p className="text-body leading-relaxed mb-4">
          credentials.json이 작업 폴더에 준비됐으면, 이제 Claude Code에게 시킬 차례예요.
          터미널에서 Claude Code를 실행하고(<code className="bg-subtle px-1.5 py-0.5 rounded text-sm font-mono">claude</code> 입력),
          아래 프롬프트를 그대로 입력하세요.
        </p>

        <CodeBlock title="Claude Code에 입력할 프롬프트">{`credentials.json으로
Gmail 자동화 해줘.
메일 분류하고, 뉴스레터는
읽음처리, 업무중요는 답장
초안 잡아줘. emails.json 저장.`}</CodeBlock>

        <div className="bg-gradient-to-r from-primary-lighter to-accent-light border border-primary-light rounded-2xl p-6 my-8">
          <p className="text-xl font-bold text-heading text-center mb-2">
            이게 전부예요.
          </p>
          <p className="text-body text-center">
            프롬프트 하나로 Claude가 아래 전체를 알아서 처리해요.
          </p>
        </div>

        <h3 className="text-lg font-semibold text-heading mb-3">
          Claude가 자동으로 하는 것
        </h3>
        <div className="grid gap-3">
          {[
            { icon: "🔗", text: "Gmail API 연결 코드 작성", desc: "credentials.json을 읽어서 OAuth 인증 코드를 자동 생성" },
            { icon: "📨", text: "메일 50개 수집 + 4카테고리 분류", desc: "받은편지함에서 메일을 가져와서 업무중요/뉴스레터/알림/기타로 분류" },
            { icon: "👁️", text: "뉴스레터 & 알림 자동 읽음 처리", desc: "중요하지 않은 메일은 읽음 표시로 자동 변경" },
            { icon: "✏️", text: "업무 중요 메일마다 답장 초안 작성", desc: "메일 내용을 분석해서 적절한 답변을 AI가 작성" },
            { icon: "✅", text: "y/n 승인 후 Gmail Draft 저장", desc: "초안을 보여주고, 승인하면 Gmail 임시보관함에 저장" },
            { icon: "💾", text: "전체 결과 emails.json 저장", desc: "분류 결과와 처리 내역을 JSON 파일로 기록" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-elevated border border-border-subtle rounded-xl px-4 py-3"
            >
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              <div>
                <span className="font-medium text-heading">{item.text}</span>
                <p className="text-sm text-caption mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Callout type="info" title="Claude Code 구독이 필요해요">
          <p>
            Claude Code를 사용하려면 <strong>Claude 구독</strong>이 필요해요.
            API 키 같은 복잡한 설정은 필요 없고, claude.ai에서 구독만 하면 돼요.
          </p>
          <p className="mt-2">
            추천 플랜: <strong>Claude Max ($100/월)</strong> &mdash;
            Claude Code 사용량이 넉넉해서 자동화 프로젝트를 여유 있게 진행할 수 있어요.
            Pro 플랜($20/월)으로도 시작할 수 있지만, 실습을 많이 하다 보면 사용량 제한에 걸릴 수 있어요.
          </p>
        </Callout>

        <Callout type="info" title="MCP를 사용한 Gmail 접근도 가능해요">
          <p>
            OAuth 설정이 번거로우면, <strong>Gmail MCP 서버</strong>를 사용하는 방법도 있어요.
            MCP(Model Context Protocol)는 Claude Code가 외부 서비스에 접근하는 표준 방식이에요.
            커뮤니티에서 만든 Gmail MCP 서버를 연결하면, OAuth 설정 없이도 Gmail에 접근할 수 있어요.
          </p>
          <p className="mt-2 text-sm">
            MCP에 대해 더 알고 싶다면, Claude Code 안에서 &quot;MCP 서버 설정 방법 알려줘&quot;라고 물어보세요.
          </p>
        </Callout>
      </section>

      {/* ── 예상 실행 결과 ── */}
      <section id="expected" className="mt-16">
        <h2 className="text-2xl font-bold text-heading mb-4">
          실행하면 이렇게 돼요
        </h2>
        <p className="text-body leading-relaxed mb-6">
          프롬프트를 입력하면 Claude Code가 코드를 작성하고 실행해요.
          터미널에 아래와 같은 결과가 나타나요.
        </p>

        <ScreenshotPlaceholder
          alt="Gmail 자동화 실행 결과 — 터미널 화면"
          caption="Claude Code가 Gmail을 분류하고 답장 초안을 작성하는 실행 화면"
        />

        <h3 className="text-lg font-semibold text-heading mb-3">
          1단계: 메일 수집 + 분류 + 자동 읽음 처리
        </h3>
        <CodeBlock title="터미널 실행 결과 (예시)">{`📧 Gmail 자동화 시작...

✅ Gmail API 연결 성공
📨 메일 50개 수집 완료

📊 분류 결과:
  업무 중요  : 8건
  뉴스레터   : 22건
  알림       : 15건
  기타       : 5건

👁️ 뉴스레터 22건 읽음 처리 완료
👁️ 알림 15건 읽음 처리 완료`}</CodeBlock>

        <h3 className="text-lg font-semibold text-heading mb-3 mt-8">
          2단계: 답장 초안 승인 화면
        </h3>
        <CodeBlock title="터미널 실행 결과 (예시)">{`✏️ 업무 중요 메일 답장 초안 작성 중...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📩 From: 김팀장 <teamlead@company.com>
📋 제목: 3월 프로젝트 일정 확인 부탁

📝 답장 초안:
"김팀장님, 안녕하세요.
3월 프로젝트 일정 확인했습니다.
현재 진행 상황과 함께 금주 금요일까지
업데이트된 일정표 공유드리겠습니다.
감사합니다."

💾 이 초안을 Gmail Draft에 저장할까요? (y/n): y
✅ Draft 저장 완료!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📩 From: 마케팅팀 <marketing@company.com>
📋 제목: 다음 주 미팅 자료 요청

📝 답장 초안:
"안녕하세요, 마케팅팀.
요청하신 미팅 자료 준비하겠습니다.
월요일 오전까지 공유드릴 수 있을까요?
필요한 항목이 더 있으시면 알려주세요."

💾 이 초안을 Gmail Draft에 저장할까요? (y/n): y
✅ Draft 저장 완료!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 최종 결과:
  처리된 메일: 50건
  읽음 처리: 37건
  답장 초안: 8건 (승인 8건)
  저장: emails.json ✅`}</CodeBlock>

        <div className="bg-gradient-to-r from-primary-lighter to-accent-light border border-primary-light rounded-2xl p-6 my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <p className="text-sm font-medium text-caption mb-2">사람이 한 것</p>
              <p className="text-lg font-bold text-heading">
                프롬프트 1개 + y/n 클릭 몇 번
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-caption mb-2">AI가 한 것</p>
              <p className="text-lg font-bold text-primary">
                나머지 전부
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 프롬프트 팁 ── */}
      <section id="prompt-tips" className="mt-16">
        <h2 className="text-2xl font-bold text-heading mb-4">
          좋은 프롬프트 작성법 3가지 공식
        </h2>
        <p className="text-body leading-relaxed mb-6">
          Claude Code에게 일을 시킬 때, 프롬프트를 어떻게 쓰느냐에 따라 결과가 달라져요.
          아래 3가지 공식만 기억하면 돼요.
        </p>

        {/* Formula 1 */}
        <div className="bg-elevated border-2 border-primary-light rounded-2xl p-6 mb-6">
          <h3 className="text-lg font-bold text-primary mb-3">
            공식 1: 파일 이름을 명시하라
          </h3>
          <CompareTable
            headers={["Bad", "Good"]}
            rows={[
              [
                '<span class="text-accent">&#10060;</span> &quot;이 파일 분석해줘&quot;',
                '<span class="text-accent">&#9989;</span> &quot;<strong>sales.csv</strong>를 읽어서&quot;',
              ],
              [
                '<span class="text-accent">&#10060;</span> &quot;데이터 정리해줘&quot;',
                '<span class="text-accent">&#9989;</span> &quot;<strong>report.xlsx</strong> 열어서&quot;',
              ],
            ]}
          />
          <p className="text-sm text-caption mt-3">
            어떤 파일인지 정확히 알려줘야 AI가 바로 실행할 수 있어요.
          </p>
        </div>

        {/* Formula 2 */}
        <div className="bg-elevated border-2 border-accent/30 rounded-2xl p-6 mb-6">
          <h3 className="text-lg font-bold text-accent mb-3">
            공식 2: 결과물을 명시하라
          </h3>
          <CompareTable
            headers={["Bad", "Good"]}
            rows={[
              [
                '<span class="text-accent">&#10060;</span> &quot;정리해줘&quot;',
                '<span class="text-accent">&#9989;</span> &quot;<strong>요약.xlsx로 저장</strong>해줘&quot;',
              ],
              [
                '<span class="text-accent">&#10060;</span> &quot;분석해줘&quot;',
                '<span class="text-accent">&#9989;</span> &quot;<strong>차트 포함한 보고서.html</strong> 만들어줘&quot;',
              ],
            ]}
          />
          <p className="text-sm text-caption mt-3">
            결과물의 형식과 파일명까지 알려주면, 원하는 형태로 정확히 저장돼요.
          </p>
        </div>

        {/* Formula 3 */}
        <div className="bg-elevated border-2 border-purple-200 rounded-2xl p-6 mb-6">
          <h3 className="text-lg font-bold text-purple-600 mb-3">
            공식 3: 이어서 수정하라
          </h3>
          <p className="text-body mb-3">
            한 번에 완벽할 필요가 없어요. 결과를 보고 추가 요청하면 돼요.
          </p>
          <div className="space-y-2">
            <div className="bg-purple-50 rounded-lg px-4 py-2 text-sm">
              <span className="font-medium text-purple-700">1차:</span>{" "}
              <span className="text-body">&quot;sales.csv 읽어서 부서별 집계표 만들어줘&quot;</span>
            </div>
            <div className="bg-purple-50 rounded-lg px-4 py-2 text-sm">
              <span className="font-medium text-purple-700">2차:</span>{" "}
              <span className="text-body">&quot;다시 해줘, 이번엔 차트도 추가해&quot;</span>
            </div>
            <div className="bg-purple-50 rounded-lg px-4 py-2 text-sm">
              <span className="font-medium text-purple-700">3차:</span>{" "}
              <span className="text-body">&quot;차트 색상을 파란색 계열로 바꿔줘&quot;</span>
            </div>
          </div>
        </div>

        {/* Formula Summary */}
        <div className="bg-primary text-white rounded-2xl p-6">
          <p className="font-bold text-lg mb-3 text-center">프롬프트 공식</p>
          <p className="text-center text-green-400 font-mono text-lg">
            [파일/상황] + [원하는 처리] + [결과물 형식/파일명]
          </p>
          <p className="text-center text-caption text-sm mt-3">
            예: &quot;sales.csv를 읽어서 부서별 매출 집계하고 요약.xlsx로 저장해줘&quot;
          </p>
        </div>
      </section>

      {/* ── 직접 해보기 ── */}
      <section id="try-it" className="mt-16">
        <h2 className="text-2xl font-bold text-heading mb-4">
          직접 해보기
        </h2>
        <p className="text-body leading-relaxed mb-4">
          이제 직접 실행해볼게요. 아래 단계를 따라하세요.
        </p>

        <div className="bg-elevated border-2 border-primary-light rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-heading mb-4">실행 순서</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">1</span>
              <div>
                <p className="font-medium text-heading">작업 폴더로 이동</p>
                <p className="text-sm text-caption">credentials.json이 있는 폴더로 이동하세요.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">2</span>
              <div>
                <p className="font-medium text-heading">Claude Code 실행</p>
                <CodeBlock>{`claude`}</CodeBlock>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">3</span>
              <div>
                <p className="font-medium text-heading">프롬프트 입력</p>
                <CodeBlock>{`credentials.json으로
Gmail 자동화 해줘.
메일 분류하고, 뉴스레터는
읽음처리, 업무중요는 답장
초안 잡아줘. emails.json 저장.`}</CodeBlock>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">4</span>
              <div>
                <p className="font-medium text-heading">실행 과정 지켜보기</p>
                <p className="text-sm text-caption">Claude가 코드를 작성하고 실행하는 과정을 지켜보세요.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">5</span>
              <div>
                <p className="font-medium text-heading">답장 초안 승인</p>
                <p className="text-sm text-caption">
                  초안이 표시되면 <code className="bg-subtle px-1.5 py-0.5 rounded text-sm font-mono">y</code> 또는{" "}
                  <code className="bg-subtle px-1.5 py-0.5 rounded text-sm font-mono">n</code>으로 응답하세요.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Callout type="warning" title="실행 중 주의사항">
          <ul className="space-y-2 mt-1">
            <li>
              <strong>Google 로그인 창이 떠요</strong> &mdash; 처음 실행 시 브라우저에서 Google 로그인 화면이 열려요.
              &quot;허용&quot;을 클릭하세요. &quot;확인되지 않은 앱&quot; 경고가 나오면 &quot;고급&quot; &rarr; &quot;계속&quot;을 누르세요.
            </li>
            <li>
              <strong>y/n 선택은 원하는 대로</strong> &mdash; 답장 초안이 마음에 들면 y, 아니면 n을 누르세요.
              n을 눌러도 아무 문제 없어요. Draft에 저장하지 않을 뿐이에요.
            </li>
            <li>
              <strong>에러가 나도 당황하지 마세요</strong> &mdash; Claude Code는 에러가 발생하면 스스로 원인을 분석하고 수정해요.
              가만히 지켜보면 자동으로 해결하는 경우가 대부분이에요.
            </li>
          </ul>
        </Callout>

        <h3 className="text-lg font-semibold text-heading mb-3 mt-8">
          확인 체크리스트
        </h3>
        <div className="bg-accent-light border border-accent/30 rounded-2xl p-6">
          <div className="space-y-3">
            {[
              "emails.json 파일이 작업 폴더에 생성되었다",
              "터미널에 메일 분류 결과 (업무중요/뉴스레터/알림/기타)가 출력되었다",
              "Gmail 임시보관함에 Draft가 1개 이상 저장되었다",
            ].map((item, i) => (
              <label key={i} className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded border-accent/30 text-accent focus:ring-accent"
                />
                <span className="text-body">{item}</span>
              </label>
            ))}
          </div>
        </div>

        <Callout type="tip" title="잘 안 되나요?">
          <p>
            가장 흔한 문제는 credentials.json 파일 위치예요.
            작업 폴더에 파일이 있는지 다시 확인해보세요.
          </p>
          <p className="mt-2">
            그래도 안 되면 Claude Code에게 이렇게 물어보세요:{" "}
            <strong>&quot;에러 원인을 찾아서 해결해줘&quot;</strong>
          </p>
        </Callout>
      </section>

      {/* ── 스케줄 등록 ── */}
      <section id="schedule" className="mt-16">
        <h2 className="text-2xl font-bold text-heading mb-4">
          매일 아침 자동 실행 설정
        </h2>
        <p className="text-body leading-relaxed mb-4">
          자동화 스크립트가 완성됐으면, 매일 아침 자동으로 실행되게 만들 수 있어요.
          Claude Code가 만든 Python 스크립트를 스케줄러에 등록하면 돼요.
        </p>

        <p className="text-body leading-relaxed mb-6">
          Claude Code에게 이렇게 요청하세요:
        </p>

        <CodeBlock title="Claude Code에 입력">{`이 스크립트를 매일 아침 9시에
자동 실행되도록 등록해줘`}</CodeBlock>

        <p className="text-body leading-relaxed mt-6 mb-4">
          Claude Code가 운영체제에 맞게 자동으로 설정해줘요.
          직접 설정하고 싶다면 아래를 참고하세요.
        </p>

        <OsTabs
          title="OS별 스케줄 설정 방법"
          mac={`# crontab 편집기 열기
crontab -e

# 아래 줄을 추가 (매일 아침 9시 실행)
0 9 * * * cd ~/Desktop/autowork && python3 gmail_auto.py

# 저장하고 닫기 (:wq)
# 등록 확인
crontab -l`}
          windows={`# Windows Task Scheduler 사용
# 1. 시작 메뉴 → "작업 스케줄러" 검색 → 실행
# 2. "기본 작업 만들기" 클릭
# 3. 이름: "Gmail 자동화"
# 4. 트리거: "매일" → 오전 9:00
# 5. 동작: "프로그램 시작"
#    프로그램: python
#    인수: gmail_auto.py
#    시작 위치: C:\\Users\\PC\\Desktop\\autowork
# 6. 마침

# 또는 PowerShell로 한 번에 등록:
$action = New-ScheduledTaskAction \`
  -Execute "python" \`
  -Argument "gmail_auto.py" \`
  -WorkingDirectory "$HOME\\Desktop\\autowork"
$trigger = New-ScheduledTaskTrigger \`
  -Daily -At 9am
Register-ScheduledTask \`
  -TaskName "Gmail자동화" \`
  -Action $action \`
  -Trigger $trigger`}
        />

        <Callout type="info" title="스케줄 등록도 Claude Code에게 맡기세요">
          <p>
            위 설정이 복잡하게 느껴진다면, 그냥 Claude Code에게
            &quot;매일 아침 9시에 자동 실행되게 해줘&quot;라고 말하면 돼요.
            OS를 자동으로 감지해서 알아서 등록해줘요.
          </p>
        </Callout>
      </section>

      {/* ── 정리 ── */}
      <section id="recap" className="mt-16">
        <h2 className="text-2xl font-bold text-heading mb-4">
          정리
        </h2>

        <div className="bg-elevated border border-border-subtle rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-heading mb-4">오늘 만든 Gmail 자동화 흐름</h3>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            {[
              "API 인증",
              "메일 수집",
              "AI 분류",
              "읽음 처리",
              "답장 초안",
              "승인",
              "스케줄",
            ].map((step, i, arr) => (
              <span key={i} className="flex items-center gap-2">
                <span className="bg-primary-lighter text-primary px-3 py-1.5 rounded-lg font-medium">
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-caption">&rarr;</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="border-2 border-border-subtle rounded-xl p-6 text-center my-8 bg-subtle">
          <p className="text-lg font-bold text-heading mb-1">
            사람이 한 것: 프롬프트 1개 + y/n 몇 번
          </p>
          <p className="text-lg font-bold text-primary">
            AI가 한 것: 나머지 전부
          </p>
          <p className="text-sm text-caption mt-3">
            코드를 직접 짜지 않아도, 매일 30분 걸리던 메일 정리가 자동화돼요.
          </p>
        </div>

        <Callout type="tip" title="Gmail 말고 다른 것도?">
          <p>
            같은 방식으로 <strong>엑셀 집계</strong>, <strong>PPT 생성</strong> 같은 것도 자동화할 수 있어요.
            매주 반복하는 엑셀 작업이 있다면, 그것도 프롬프트 하나로 해결 가능하거든요.
          </p>
        </Callout>
      </section>
    </>
  );
}
