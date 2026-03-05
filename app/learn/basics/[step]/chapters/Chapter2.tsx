"use client";

import Callout from "@/components/learn/Callout";
import CodeBlock from "@/components/learn/CodeBlock";
import CompareTable from "@/components/learn/CompareTable";
import OsTabs from "@/components/learn/OsTabs";
import ScreenshotPlaceholder from "@/components/learn/ScreenshotPlaceholder";

export default function Chapter2() {
  return (
    <>
      {/* ───────────────────────── what-is-claude-code ───────────────────────── */}
      <section id="what-is-claude-code">
        <h2>Claude Code가 뭔가요?</h2>

        <p>
          지금까지 ChatGPT나 웹 Claude를 써보셨다면, 이런 경험 있으실 거예요.
          채팅창에 질문을 입력하고, AI가 텍스트로 답변해주면, 그걸 복사해서
          다른 프로그램에 붙여넣기. 파일을 만들어달라고 해도 &ldquo;코드&rdquo;를
          텍스트로 보여줄 뿐, 실제 파일이 내 컴퓨터에 생기지는 않죠.
        </p>

        <CompareTable
          headers={["", "기존 AI (ChatGPT, 웹 Claude)", "Claude Code"]}
          rows={[
            [
              "동작 환경",
              "브라우저 채팅창",
              "<strong>내 컴퓨터의 터미널</strong>",
            ],
            [
              "파일 접근",
              "파일 생성/수정 불가 (텍스트만)",
              "파일을 직접 읽고, 수정하고, 새로 만듦",
            ],
            [
              "엑셀/CSV",
              "내용을 복사해서 붙여넣어야 함",
              "파일을 열어서 <strong>직접 처리</strong>",
            ],
            [
              "코드 실행",
              "코드를 보여줄 뿐, 실행은 사용자가",
              "코드를 짜서 <strong>바로 실행</strong>",
            ],
            [
              "작업 결과",
              "텍스트 답변 (복사 필요)",
              "실제 파일 저장 (엑셀, PDF 등)",
            ],
          ]}
        />

        <Callout type="tip" title="한마디로">
          <p>
            Claude Code는 <strong>&ldquo;말로 시키면 직접 해주는 AI 비서&rdquo;</strong>
            예요. 브라우저가 아니라 여러분의 컴퓨터 터미널에서 실행되기 때문에,
            PC에 있는 파일을 직접 다루고, 필요하면 코드를 짜서 실행하고, 결과를
            파일로 저장까지 해줘요.
          </p>
        </Callout>

        <p>
          예를 들어, &ldquo;다운로드 폴더에 있는 엑셀 파일 3개를 합쳐서
          요약표를 만들어줘&rdquo;라고 하면 &mdash; 기존 AI는 &ldquo;이렇게
          하시면 돼요&rdquo;라고 방법을 알려줄 뿐이지만, Claude Code는 직접
          파일을 열고, 데이터를 합치고, 새 엑셀 파일을 만들어서 저장해요.
          여러분은 결과 파일만 확인하면 돼요.
        </p>
      </section>

      {/* ───────────────────────── requirements ───────────────────────── */}
      <section id="requirements">
        <h2>내 노트북으로 되나요?</h2>

        <p>
          Claude Code는 여러분의 컴퓨터에서 실행되지만, 실제 AI 연산은
          클라우드(Anthropic 서버)에서 이루어져요. 그래서 고사양 PC가
          필요하지 않아요.
        </p>

        <CompareTable
          headers={["항목", "최소 사양", "권장 사양", "비고"]}
          rows={[
            ["CPU", "최근 5년 이내", "최근 3년 이내", "일반 사무용이면 충분"],
            ["RAM", "8GB", "16GB", "다른 프로그램과 동시에 쓸 때 16GB 권장"],
            ["인터넷", "안정적인 Wi-Fi", "유선 또는 5GHz Wi-Fi", "AI 연산이 클라우드에서 실행되므로 중요"],
            ["GPU", "없어도 됨", "없어도 됨", "클라우드에서 실행되므로 불필요"],
            ["OS", "Windows 10 이상", "Windows 11", "macOS도 동일하게 지원"],
          ]}
        />

        <Callout type="info" title="MacBook Air도 돼요">
          <p>
            MacBook Air, 일반 회사 지급 노트북, 집에서 쓰는 5년 된
            데스크톱&mdash;모두 가능해요. 특별한 장비가 필요 없거든요.
            인터넷 연결만 안정적이면 돼요. AI의 무거운 연산은 모두 Anthropic의
            서버에서 처리되기 때문이에요.
          </p>
        </Callout>
      </section>

      {/* ───────────────────────── terminal ───────────────────────── */}
      <section id="terminal">
        <h2>터미널이란?</h2>

        <p>
          Claude Code는 &ldquo;터미널&rdquo;이라는 환경에서 실행돼요.
          터미널이 생소하신 분들을 위해 간단히 설명해 볼게요.
        </p>

        <CompareTable
          headers={["", "GUI (평소에 쓰는 방식)", "터미널"]}
          rows={[
            [
              "조작 방식",
              "마우스로 클릭, 드래그",
              "글자(명령어)를 입력",
            ],
            [
              "파일 이동",
              "파일을 마우스로 끌어다 놓기",
              "<code>mv 파일명 폴더명</code> 입력",
            ],
            [
              "폴더 이동",
              "탐색기에서 폴더를 더블클릭",
              "<code>cd 폴더명</code> 입력",
            ],
            [
              "프로그램 실행",
              "아이콘 더블클릭",
              "<code>claude</code> 입력 (Claude Code 실행)",
            ],
          ]}
        />

        <p>
          터미널은 &ldquo;글자로 컴퓨터에게 명령을 내리는 창&rdquo;이에요.
          마우스 대신 키보드로 같은 일을 하는 거예요. 어렵게 느껴질 수 있지만,
          사실 Claude Code를 사용하는 데 필요한 명령어는 딱 3~4개뿐이에요.
          걱정하지 마세요.
        </p>

        <CodeBlock title="이것만 알면 됩니다">
{`cd 폴더이름      # 폴더로 이동
ls               # 현재 폴더의 파일 목록 보기
mkdir 폴더이름    # 새 폴더 만들기
claude           # Claude Code 실행!`}
        </CodeBlock>

        <h3 className="text-lg font-semibold mt-8 mb-3 text-heading">
          터미널 여는 방법
        </h3>

        <div className="space-y-4 my-4">
          <div className="bg-subtle rounded-xl p-5 border border-border-subtle">
            <h4 className="font-semibold text-heading mb-2">Mac</h4>
            <p className="text-body text-sm">
              <code>Cmd + Space</code>를 눌러 Spotlight 검색을 열고,
              &ldquo;터미널&rdquo;을 입력하면 돼요. macOS에 기본으로 설치되어
              있어서 별도 설치가 필요 없어요.
            </p>
          </div>

          <div className="bg-subtle rounded-xl p-5 border border-border-subtle">
            <h4 className="font-semibold text-heading mb-2">Windows</h4>
            <p className="text-body text-sm mb-3">
              Windows에서는 <strong>WezTerm</strong>이라는 터미널 프로그램을 추천해요.
              기본 명령 프롬프트(cmd)나 PowerShell도 가능하지만, WezTerm이 더 편리하거든요.
            </p>
            <p className="text-body text-sm">
              <a
                href="https://wezterm.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                wezterm.org
              </a>
              에서 다운로드하고 설치하세요. 설치 후 시작 메뉴에서
              &ldquo;WezTerm&rdquo;을 검색하면 실행할 수 있어요.
            </p>
          </div>
        </div>

        <ScreenshotPlaceholder
          alt="터미널 화면 (Mac Terminal / Windows WezTerm)"
          caption="터미널을 열면 이런 화면이 나타납니다"
        />

        <Callout type="tip">
          <p>
            터미널이 무섭게 느껴지셔도 괜찮아요. Claude Code를 실행한 후에는
            터미널 명령어를 직접 입력할 일이 거의 없거든요. Claude Code에게
            한국어로 말하면, AI가 알아서 필요한 명령어를 실행해줘요.
          </p>
        </Callout>
      </section>

      {/* ───────────────────────── pricing ───────────────────────── */}
      <section id="pricing">
        <h2>요금제 &mdash; 어떤 걸 구독할까?</h2>

        <p>
          Claude Code를 사용하려면 Anthropic의 Claude 구독이 필요해요.
          API 키를 발급받는 복잡한 과정은 필요 없어요. 그냥 구독만 하면 돼요.
        </p>

        <CompareTable
          headers={["요금제", "월 요금", "Claude Code", "사용량", "비고"]}
          rows={[
            [
              "Free",
              "$0",
              "<span style='color:red'>사용 불가</span>",
              "&mdash;",
              "웹 채팅만 가능",
            ],
            [
              "Pro",
              "<strong>$20/월</strong>",
              "사용 가능",
              "기본 제공",
              "Opus/Sonnet 선택 가능, 대화 간 메모리",
            ],
            [
              "Max (5x)",
              "<strong>$100/월</strong>",
              "사용 가능",
              "Pro의 <strong>5배</strong>",
              "피크시간 우선 처리",
            ],
            [
              "Max (20x)",
              "$200/월",
              "사용 가능",
              "Pro의 <strong>20배</strong>",
              "헤비 유저용",
            ],
          ]}
        />

        <Callout type="warning" title="Pro 요금제 주의사항">
          <p>
            Pro($20/월)도 Claude Code를 사용할 수 있지만,
            <strong> 집중해서 쓰면 약 1시간이면 일일 한도가 소진</strong>돼요.
            Claude Code는 하나의 작업에 여러 번의 API 호출을 하기 때문에, 웹
            채팅보다 사용량이 빠르게 소모되거든요. 한도에 도달하면 다음 날까지
            기다려야 해요.
          </p>
        </Callout>

        <Callout type="tip" title="Max ($100/월)를 강력 추천해요">
          <p>
            처음에는 $100이 부담스러울 수 있어요. 하지만 실제로 써보면
            주당 5~10시간을 아낄 수 있거든요. 시간당 가치로 따지면 충분히 높아요.
            Pro는 &ldquo;맛보기&rdquo;로는 좋지만, 실제 업무에 활용하려면
            사용량이 턱없이 부족해요. <strong>처음부터 Max로 시작하는 걸
            추천해요.</strong>
          </p>
        </Callout>

        <p>
          요약하면 이래요:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-body my-4">
          <li>
            <strong>Free</strong>: Claude Code 사용 불가. 웹 채팅만 가능.
          </li>
          <li>
            <strong>Pro ($20/월)</strong>: 맛보기용. 가볍게 체험해보고 싶을 때.
            하루에 약 1시간 사용 가능.
          </li>
          <li>
            <strong>Max ($100/월)</strong>: 실전용. 업무에 본격 활용할 때.
            넉넉한 사용량 + 피크시간 우선 처리.
          </li>
        </ul>
      </section>

      {/* ───────────────────────── subscribe ───────────────────────── */}
      <section id="subscribe">
        <h2>Claude 구독하기</h2>

        <p>
          구독 과정은 정말 간단해요. 5분이면 끝나요.
        </p>

        <div className="space-y-4 my-6">
          <div className="flex gap-4 items-start">
            <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              1
            </span>
            <div>
              <p className="font-semibold text-heading">
                <a
                  href="https://claude.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  claude.ai
                </a>
                에 접속하세요
              </p>
              <p className="text-body text-sm mt-1">
                아직 계정이 없다면 이메일로 가입하세요. Google 계정으로도
                가입할 수 있어요.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              2
            </span>
            <div>
              <p className="font-semibold text-heading">
                구독 버튼을 클릭하세요
              </p>
              <p className="text-body text-sm mt-1">
                로그인 후 왼쪽 하단 또는 설정(Settings)에서 &ldquo;Upgrade&rdquo;
                또는 &ldquo;구독&rdquo; 버튼을 찾을 수 있어요.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              3
            </span>
            <div>
              <p className="font-semibold text-heading">
                Pro 또는 Max를 선택하세요
              </p>
              <p className="text-body text-sm mt-1">
                업무에 본격 활용하실 분은 Max ($100/월)를, 먼저 가볍게
                체험해보실 분은 Pro ($20/월)를 선택하세요.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              4
            </span>
            <div>
              <p className="font-semibold text-heading">
                카드 결제를 완료하세요
              </p>
              <p className="text-body text-sm mt-1">
                해외 결제가 가능한 카드(VISA, MasterCard 등)가 필요해요.
                결제가 완료되면 바로 Claude Code를 사용할 수 있어요.
              </p>
            </div>
          </div>
        </div>

        <ScreenshotPlaceholder
          alt="claude.ai 구독 페이지 화면"
          caption="claude.ai에서 Pro 또는 Max 요금제를 선택하는 화면"
        />

        <Callout type="info" title="API 키는 필요 없어요">
          <p>
            예전에는 Claude Code를 사용하려면 별도의 API 키를 발급받아야
            했어요. 지금은 <strong>구독만 하면 돼요</strong>. 복잡한 API
            설정 과정이 없어졌으니, 구독 완료 후 바로 설치 단계로 넘어가세요.
          </p>
        </Callout>
      </section>

      {/* ───────────────────────── prereqs ───────────────────────── */}
      <section id="prereqs">
        <h2>사전 준비</h2>

        <p>
          Claude Code는 2025년 말부터 네이티브 설치 프로그램을 제공하고
          있어서, 사전에 설치할 게 거의 없어요. 운영체제별로 확인해 보세요.
        </p>

        <OsTabs
          title="필요한 사전 설치"
          windows={`# 1. Git 설치 (권장)
# https://git-scm.com 에서 다운로드 후 설치
# (설치 중 모든 옵션은 기본값 그대로 Next)

# 2. WezTerm 설치 (터미널)
# https://wezterm.org 에서 다운로드 후 설치

# 설치 확인 (WezTerm 또는 PowerShell에서)
git --version`}
          mac={`# Mac은 Git이 기본 설치되어 있고,
# 터미널도 기본 앱을 사용하면 됩니다.
# 별도로 설치할 것이 없어요!

# 확인 (터미널에서)
git --version`}
        />

        <Callout type="info" title="Windows 사용자 참고">
          <p>
            Windows에서는 2가지를 설치해요: <strong>Git</strong>,{" "}
            <strong>WezTerm</strong>. 모두 공식
            사이트에서 다운로드 버튼을 누르고, 설치 과정에서 &ldquo;Next&rdquo;만
            눌러도 돼요. 특별한 설정 변경 없이 기본값 그대로 설치하세요.
          </p>
        </Callout>

        <Callout type="info" title="Mac 사용자 참고">
          <p>
            Mac은 Git이 이미 설치되어 있고, 터미널도 기본 앱이 있어서{" "}
            <strong>별도로 설치할 것이 없어요</strong>. 바로 다음 단계로
            넘어가세요.
          </p>
        </Callout>

        <Callout type="tip" title="Node.js는 필요 없나요?">
          <p>
            Claude Code는 이제 네이티브 설치 프로그램을 제공해서,{" "}
            <strong>Node.js를 미리 설치할 필요가 없어요</strong>.
            Python이나 Node.js는 Claude Code 자체에는 필요 없지만,
            자동화 스크립트에서 사용할 수 있어서 설치해두면 좋아요.
          </p>
        </Callout>

        <p>
          설치가 끝나면, 터미널을 열어서 아래 명령어로 확인해 보세요.
        </p>

        <CodeBlock title="설치 확인">
{`git --version
# 예: git version 2.43.0`}
        </CodeBlock>

        <p>
          버전 번호가 나오면 설치가 정상적으로 완료된 거예요. 버전 번호는
          다를 수 있으니 숫자가 나오기만 하면 괜찮아요.
        </p>
      </section>

      {/* ───────────────────────── install ───────────────────────── */}
      <section id="install">
        <h2>Claude Code 설치</h2>

        <p>
          드디어 Claude Code를 설치해요! 터미널에서 명령어 한 줄이면 돼요.
        </p>

        <OsTabs
          title="Claude Code 설치 명령어"
          windows={`irm https://claude.ai/install.ps1 | iex`}
          mac={`curl -fsSL https://claude.ai/install.sh | bash`}
        />

        <Callout type="warning" title="Windows에서 주의">
          <p>
            Windows에서는 <strong>PowerShell</strong> 또는 <strong>WezTerm</strong>에서
            위 명령어를 실행하세요. 일반 명령 프롬프트(cmd)에서는 동작하지
            않을 수 있어요. WezTerm을 열면 기본적으로 PowerShell이 실행돼요.
          </p>
        </Callout>

        <Callout type="info" title="다른 설치 방법도 있어요">
          <p>
            패키지 매니저를 사용하신다면 이 방법도 가능해요:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong>Windows</strong>: <code>winget install Anthropic.ClaudeCode</code>
            </li>
            <li>
              <strong>Mac</strong>: <code>brew install claude-code</code>
            </li>
          </ul>
        </Callout>

        <p>
          설치가 완료되면, 아래 명령어로 확인해 보세요.
        </p>

        <CodeBlock title="설치 확인">
{`claude --version`}
        </CodeBlock>

        <p>
          버전 번호가 표시되면 설치 성공이에요. 축하해요!
        </p>

        <Callout type="tip">
          <p>
            만약 <code>claude: command not found</code> 에러가 나오면, 터미널을
            완전히 닫고 다시 열어보세요. 그래도 안 되면 컴퓨터를 재시작하고
            다시 시도해보세요. 대부분 이 방법으로 해결돼요.
          </p>
        </Callout>
      </section>

      {/* ───────────────────────── first-run ───────────────────────── */}
      <section id="first-run">
        <h2>첫 실행</h2>

        <p>
          Claude Code는 특정 &ldquo;작업 폴더&rdquo; 안에서 실행하는 게
          좋아요. 먼저 작업 폴더를 만들어 볼게요.
        </p>

        <OsTabs
          title="작업 폴더 만들기"
          windows={`mkdir %USERPROFILE%\\Desktop\\autowork
cd %USERPROFILE%\\Desktop\\autowork`}
          mac={`mkdir ~/Desktop/autowork
cd ~/Desktop/autowork`}
        />

        <p>
          바탕화면에 <code>autowork</code>라는 폴더를 만들고 그 안으로
          이동했어요. 앞으로 이 폴더를 기본 작업 공간으로 사용할 거예요.
        </p>

        <p>이제 Claude Code를 실행해 볼게요.</p>

        <CodeBlock title="Claude Code 실행">
{`claude`}
        </CodeBlock>

        <p>
          이 한 단어만 입력하면 Claude Code가 시작돼요. 처음 실행하면 로그인
          과정이 진행돼요 (다음 섹션에서 설명할게요).
        </p>

        <ScreenshotPlaceholder
          alt="Claude Code 첫 실행 화면"
          caption="터미널에서 claude를 입력하면 이런 화면이 나타납니다"
        />

        <Callout type="info">
          <p>
            <code>claude</code> 명령어를 실행하면, Claude Code는 현재 폴더를
            &ldquo;작업 공간&rdquo;으로 인식해요. 이 폴더 안의 파일들을 읽고
            쓸 수 있게 되는 거예요. 그래서 항상 원하는 작업 폴더로 먼저 이동한
            후에 <code>claude</code>를 실행하는 게 좋아요.
          </p>
        </Callout>
      </section>

      {/* ───────────────────────── login ───────────────────────── */}
      <section id="login">
        <h2>로그인 방법</h2>

        <p>
          처음 <code>claude</code>를 실행하면 로그인 방법을 물어봐요. 3가지
          옵션이 나타나는데, 우리는 구독자이므로 첫 번째를 선택하면 돼요.
        </p>

        <CodeBlock title="로그인 옵션 (1번 선택)">
{`How would you like to authenticate?
> 1. Claude account with subscription  ← 이거!
  2. Anthropic API key
  3. Connect to remote server`}
        </CodeBlock>

        <ScreenshotPlaceholder
          alt="Claude Code 로그인 방법 선택 화면"
          caption="터미널에서 로그인 방법을 선택하는 화면"
        />

        <div className="space-y-4 my-6">
          <div className="flex gap-4 items-start">
            <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              1
            </span>
            <div>
              <p className="font-semibold text-heading">
                &ldquo;Claude account with subscription&rdquo;을 선택하세요
              </p>
              <p className="text-body text-sm mt-1">
                키보드 화살표로 이동하고 Enter를 누르면 돼요. 우리는 Pro 또는
                Max를 구독했으니 이 옵션을 선택하면 돼요.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              2
            </span>
            <div>
              <p className="font-semibold text-heading">
                브라우저가 자동으로 열려요
              </p>
              <p className="text-body text-sm mt-1">
                Claude 로그인 페이지가 나타나요. 이미 claude.ai에 로그인되어
                있다면 바로 승인 화면이 보여요. 로그인이 안 되어 있다면 먼저
                로그인하세요.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              3
            </span>
            <div>
              <p className="font-semibold text-heading">
                터미널로 돌아오세요
              </p>
              <p className="text-body text-sm mt-1">
                브라우저에서 승인을 완료하면, 터미널에 &ldquo;Successfully
                authenticated&rdquo; 같은 메시지가 나타나요. 로그인 성공이에요!
              </p>
            </div>
          </div>
        </div>

        <Callout type="warning" title="브라우저가 안 열리면?">
          <p>
            터미널에 URL이 표시돼요. 그 URL을 복사해서 브라우저에 직접
            붙여넣으면 돼요. 회사 보안 정책으로 브라우저 자동 실행이 막힌
            경우에 이 방법을 쓰세요.
          </p>
        </Callout>
      </section>

      {/* ───────────────────────── hello ───────────────────────── */}
      <section id="hello">
        <h2>첫 대화: 안녕!</h2>

        <p>
          로그인이 완료되면, Claude Code가 입력을 기다리는 상태가 돼요.
          이제 첫 대화를 해볼게요!
        </p>

        <CodeBlock title="이렇게 입력해보세요">
{`안녕! 너는 뭘 할 수 있어?`}
        </CodeBlock>

        <p>
          Claude Code가 자신의 능력을 설명해줄 거예요. 대략 이런 내용이에요:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-body my-4">
          <li>
            <strong>파일 읽기/쓰기</strong>: 현재 폴더의 파일을 읽고, 새 파일을
            만들고, 기존 파일을 수정할 수 있어요.
          </li>
          <li>
            <strong>코드 작성 및 실행</strong>: Python, JavaScript 등의 코드를
            짜서 바로 실행할 수 있어요. 여러분이 코딩을 몰라도 돼요.
          </li>
          <li>
            <strong>폴더 탐색/검색</strong>: 폴더 구조를 파악하고, 특정 파일이나
            내용을 검색할 수 있어요.
          </li>
          <li>
            <strong>데이터 분석/변환</strong>: 엑셀, CSV, JSON 등의 데이터를
            분석하고 다른 형식으로 변환할 수 있어요.
          </li>
        </ul>

        <ScreenshotPlaceholder
          alt="Claude Code 첫 대화 화면"
          caption="'안녕! 너는 뭘 할 수 있어?'에 대한 Claude Code의 응답"
        />

        <Callout type="tip" title="첫 번째 실습을 해보세요">
          <p>
            이어서 이렇게 말해보세요: &ldquo;현재 폴더에 hello.txt 파일을
            만들어서 &lsquo;안녕하세요! Claude Code 첫 실행 성공!&rsquo;이라고
            적어줘&rdquo;. 바탕화면의 autowork 폴더에 실제로 파일이 생기는 걸
            확인할 수 있어요.
          </p>
        </Callout>

        <p>
          파일 생성을 요청하면, Claude Code는 먼저 &ldquo;이 파일을
          만들까요?&rdquo;라고 허락을 구해요. <code>y</code>를 눌러서
          승인하면 파일이 생성돼요. 이 승인 과정은 AI가 여러분의 허락 없이
          파일을 마음대로 수정하는 것을 방지하기 위한 안전장치예요.
        </p>
      </section>

      {/* ───────────────────────── modes ───────────────────────── */}
      <section id="modes">
        <h2>실행 모드 이해하기</h2>

        <p>
          Claude Code에는 몇 가지 실행 모드가 있어요. 처음에는 기본 모드만
          사용하면 되지만, 참고로 알아두세요.
        </p>

        <CompareTable
          headers={["모드", "명령어", "설명", "추천 상황"]}
          rows={[
            [
              "기본 모드",
              "<code>claude</code>",
              "파일 수정 시 매번 승인 필요",
              "<strong>처음 사용할 때 (추천)</strong>",
            ],
            [
              "플랜 모드",
              "<code>/plan</code>",
              "실행 전에 계획만 먼저 보여줌",
              "큰 작업을 시작하기 전에",
            ],
            [
              "자동 수락",
              "<code>claude --accept-edits</code>",
              "파일 수정을 자동으로 승인",
              "신뢰할 수 있는 반복 작업",
            ],
            [
              "권한 전체 해제",
              "<code>claude --dangerously-skip-permissions</code>",
              "모든 권한 확인 건너뜀",
              "고급 사용자만 (주의!)",
            ],
          ]}
        />

        <Callout type="warning" title="처음에는 기본 모드를 사용하세요">
          <p>
            기본 모드에서는 Claude Code가 파일을 수정하거나 명령어를 실행할 때마다
            여러분에게 허락을 구해요. 이게 번거로울 수 있지만,{" "}
            <strong>AI가 뭘 하는지 이해하는 데 정말 좋아요</strong>. 어떤
            파일을 수정하려는지, 어떤 명령어를 실행하려는지 하나하나 확인하면서
            배울 수 있거든요. 충분히 익숙해진 후에 자동 수락 모드를 쓰세요.
          </p>
        </Callout>

        <Callout type="info" title="플랜 모드 활용 팁">
          <p>
            큰 작업을 시킬 때는 먼저 <code>/plan</code>을 입력해서 플랜 모드로
            전환하세요. AI가 &ldquo;이렇게 할 계획이에요&rdquo;라고 먼저
            알려줘요. 계획이 마음에 들면 실행하고, 수정이 필요하면 지시를
            바꿀 수 있어요.
          </p>
        </Callout>

        <h3 className="text-lg font-semibold mt-8 mb-3 text-heading">
          유용한 슬래시 명령어
        </h3>

        <p>
          Claude Code 대화 중에 슬래시(<code>/</code>)로 시작하는 명령어를
          사용할 수 있어요. 자주 쓰는 것만 알아둘게요.
        </p>

        <CompareTable
          headers={["명령어", "기능", "언제 쓰나요?"]}
          rows={[
            [
              "<code>/plan</code>",
              "계획 모드로 전환",
              "큰 작업을 시작하기 전에 계획부터 보고 싶을 때",
            ],
            [
              "<code>/compact</code>",
              "대화 요약 (컨텍스트 절약)",
              "대화가 길어져서 AI가 느려질 때",
            ],
            [
              "<code>/clear</code>",
              "대화 초기화",
              "새로운 작업을 처음부터 시작하고 싶을 때",
            ],
            [
              "<code>/help</code>",
              "도움말",
              "사용 가능한 명령어를 확인하고 싶을 때",
            ],
          ]}
        />

        <h3 className="text-lg font-semibold mt-8 mb-3 text-heading">
          유용한 단축키
        </h3>

        <CompareTable
          headers={["단축키", "기능"]}
          rows={[
            [
              "<code>Esc</code>",
              "현재 응답 중단 &mdash; AI가 답변을 생성하는 도중에 멈추고 싶을 때",
            ],
            [
              "<code>Ctrl+C</code>",
              "대화 종료 &mdash; Claude Code를 완전히 끝내고 싶을 때",
            ],
            [
              "<code>Shift+Tab</code>",
              "여러 줄 입력 모드 &mdash; 긴 지시를 여러 줄에 나눠 입력하고 싶을 때",
            ],
          ]}
        />
      </section>

      {/* ───────────────────────── checkpoint ───────────────────────── */}
      <section id="checkpoint">
        <h2>체크포인트</h2>

        <p>
          여기까지 잘 따라오셨다면, 아래 항목을 모두 확인해보세요.
        </p>

        <div className="space-y-3 my-6">
          <label className="flex items-start gap-3 p-4 bg-subtle rounded-xl border border-border-subtle cursor-pointer hover:bg-subtle transition">
            <input type="checkbox" className="mt-1 w-5 h-5 rounded border-border-default text-primary focus:ring-primary cursor-pointer" />
            <div>
              <p className="font-semibold text-heading">
                Claude 구독 완료
              </p>
              <p className="text-body text-sm">
                Pro ($20/월) 또는 Max ($100/월)를 구독했어요.
              </p>
            </div>
          </label>

          <label className="flex items-start gap-3 p-4 bg-subtle rounded-xl border border-border-subtle cursor-pointer hover:bg-subtle transition">
            <input type="checkbox" className="mt-1 w-5 h-5 rounded border-border-default text-primary focus:ring-primary cursor-pointer" />
            <div>
              <p className="font-semibold text-heading">
                사전 프로그램 설치 완료
              </p>
              <p className="text-body text-sm">
                Windows는 Git과 WezTerm이 설치되어 있고,{" "}
                <code>git --version</code>이 정상 출력돼요.
                Mac은 별도 설치 없이 바로 진행 가능해요.
              </p>
            </div>
          </label>

          <label className="flex items-start gap-3 p-4 bg-subtle rounded-xl border border-border-subtle cursor-pointer hover:bg-subtle transition">
            <input type="checkbox" className="mt-1 w-5 h-5 rounded border-border-default text-primary focus:ring-primary cursor-pointer" />
            <div>
              <p className="font-semibold text-heading">
                Claude Code 설치 완료
              </p>
              <p className="text-body text-sm">
                <code>claude --version</code>을 실행하면 버전 번호가
                표시돼요.
              </p>
            </div>
          </label>

          <label className="flex items-start gap-3 p-4 bg-subtle rounded-xl border border-border-subtle cursor-pointer hover:bg-subtle transition">
            <input type="checkbox" className="mt-1 w-5 h-5 rounded border-border-default text-primary focus:ring-primary cursor-pointer" />
            <div>
              <p className="font-semibold text-heading">
                첫 대화 성공
              </p>
              <p className="text-body text-sm">
                <code>claude</code>를 실행하고, 로그인하고, &ldquo;안녕!&rdquo;이라고
                입력해서 응답을 받았어요.
              </p>
            </div>
          </label>
        </div>

        <Callout type="tip" title="모두 체크하셨나요?">
          <p>
            축하해요! Claude Code를 사용할 준비가 완료됐어요. 다음
            챕터에서는 실제 업무 자동화 실습을 시작해요. 첫 번째 실습은{" "}
            <strong>Gmail 자동화</strong>예요 &mdash; 매일 아침 메일함과
            씨름하는 시간을 확 줄여볼게요.
          </p>
        </Callout>

        <Callout type="warning" title="막히는 부분이 있다면">
          <p>
            설치 과정에서 에러가 나거나 막히는 부분이 있다면, 에러 메시지를
            그대로 복사해서 claude.ai 웹 채팅에 붙여넣고 도움을 요청해보세요.
            대부분의 설치 문제는 간단한 해결 방법이 있어요.
          </p>
        </Callout>
      </section>
    </>
  );
}
