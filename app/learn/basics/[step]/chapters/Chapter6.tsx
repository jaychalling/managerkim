"use client";

import Callout from "@/components/learn/Callout";
import CompareTable from "@/components/learn/CompareTable";

export default function Chapter6() {
  return (
    <>
      {/* ───────────────── 에이전틱 AI로 할 수 있는 것들 ───────────────── */}
      <section id="today-summary">
        <h2>에이전틱 AI로 뭘 할 수 있을까?</h2>

        <p>
          Claude Code 하나면 사무직 업무 대부분을 자동화할 수 있어요.
          구체적으로 어떤 것들이 가능한지 정리해 볼게요.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          {/* 카드 1 */}
          <div className="rounded-xl border border-border-subtle p-5 hover:border-primary/30 transition">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="text-base font-bold text-heading mb-2">1. 개념 이해</h3>
            <ul className="text-sm text-body space-y-1">
              <li>&bull; 에이전틱 AI가 무엇인지 이해</li>
              <li>&bull; 웹 AI와 에이전틱 AI의 차이</li>
              <li>&bull; Claude Code가 왜 강력한지</li>
            </ul>
          </div>

          {/* 카드 2 */}
          <div className="rounded-xl border border-border-subtle p-5 hover:border-primary/30 transition">
            <div className="text-2xl mb-2">🛠️</div>
            <h3 className="text-base font-bold text-heading mb-2">2. 세팅 완료</h3>
            <ul className="text-sm text-body space-y-1">
              <li>&bull; Claude 구독 (Pro 또는 Max)</li>
              <li>&bull; Claude Code 설치</li>
              <li>&bull; 첫 대화 성공</li>
            </ul>
          </div>

          {/* 카드 3 */}
          <div className="rounded-xl border border-border-subtle p-5 hover:border-primary/30 transition">
            <div className="text-2xl mb-2">📧</div>
            <h3 className="text-base font-bold text-heading mb-2">3. Gmail 자동화</h3>
            <ul className="text-sm text-body space-y-1">
              <li>&bull; 메일 분류 자동화</li>
              <li>&bull; 읽음 처리 자동화</li>
              <li>&bull; 답장 초안 생성</li>
            </ul>
          </div>

          {/* 카드 4 */}
          <div className="rounded-xl border border-border-subtle p-5 hover:border-primary/30 transition">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="text-base font-bold text-heading mb-2">4. 엑셀 + PPT</h3>
            <ul className="text-sm text-body space-y-1">
              <li>&bull; 데이터 집계 + 요약표</li>
              <li>&bull; 차트 자동 생성</li>
              <li>&bull; 슬라이드 자동 구성</li>
            </ul>
          </div>
        </div>

        <Callout type="tip" title="핵심은 이거예요">
          <p>
            <strong>이걸 전부 코딩 없이, 프롬프트만으로 할 수 있어요.</strong>
            <br />
            코드를 한 줄도 직접 쓸 필요 없이, 한국어로 시키면 AI가 알아서 처리하거든요.
            이게 에이전틱 AI의 힘이에요.
          </p>
        </Callout>
      </section>

      <hr />

      {/* ───────────────── 요금제 비교 ───────────────── */}
      <section id="pricing-compare">
        <h2>요금제 비교 — 어떤 걸 골라야 할까?</h2>

        <p>
          Claude를 계속 사용하려면 구독이 필요해요.
          세 가지 요금제를 비교해 볼게요.
        </p>

        <CompareTable
          headers={["항목", "Free ($0)", "Pro ($20/월, 약 2.7만원)", "Max ($100~/월)"]}
          rows={[
            ["Claude Code", "❌ 사용 불가", "✅ 포함", "✅ 포함"],
            ["AI 모델", "기본 모델만", "Opus / Sonnet 선택", "Opus / Sonnet 선택"],
            ["대화 간 메모리", "❌", "✅", "✅"],
            ["Research 액세스", "❌", "✅", "✅"],
            ["Chrome용 Claude", "❌", "✅", "✅"],
            ["Excel의 Claude", "❌", "✅", "✅"],
            ["<strong>PowerPoint의 Claude</strong>", "❌", "✅", "✅"],
            ["사용량", "제한적", "⚠️ 제한 (약 1시간 집중 사용)", "<strong>5배 ~ 20배</strong>"],
            ["피크시간 우선 액세스", "❌", "❌", "✅"],
            ["고급 기능 조기 액세스", "❌", "❌", "✅"],
          ]}
        />

        <Callout type="info" title="Max 요금 옵션">
          <p>
            Max는 두 가지 옵션이 있어요.
          </p>
          <ul className="mt-2 space-y-1">
            <li>&bull; <strong>5배 사용량: $100/월</strong> (약 13만원) — 대부분의 직장인에게 충분</li>
            <li>&bull; <strong>20배 사용량: $200/월</strong> (약 27만원) — 하루 종일 AI로 일하는 파워유저</li>
          </ul>
        </Callout>
      </section>

      <hr />

      {/* ───────────────── Max 추천 ───────────────── */}
      <section id="max-recommend">
        <h2>Max를 추천하는 이유</h2>

        <p>
          솔직히 업무에 본격적으로 쓰려면{" "}
          <strong>Max ($100/월)</strong>를 강력히 추천해요.
          그 이유를 하나씩 설명해 볼게요.
        </p>

        <h3>1. Pro는 금방 한도에 걸려요</h3>
        <p>
          Pro 요금제로 Claude Code를 집중적으로 사용하면{" "}
          <strong>약 1시간이면 사용량 한도가 소진</strong>돼요.
          한도에 걸리면 수 시간을 기다려야 다시 사용할 수 있거든요.
          업무 중에 갑자기 AI가 멈추면 흐름이 끊기죠.
        </p>

        <h3>2. Max 5배면 하루종일 편하게 사용</h3>
        <p>
          Max 5배 ($100/월)를 구독하면 일반적인 업무 시간 동안{" "}
          <strong>거의 한도 걱정 없이</strong> 사용할 수 있어요.
          복잡한 자동화를 여러 개 돌려도 여유가 있어요.
        </p>

        <h3>3. 업무에 본격적으로 쓰려면 Pro로는 부족해요</h3>
        <p>
          Gmail이나 엑셀 자동화 같은 건 사실 가벼운 작업이에요.
          실제 업무에 적용하면 더 길고 복잡한 대화가 필요하거든요.
          Pro의 사용량으로는 하루에 의미 있는 작업을 1~2개밖에 못 해요.
        </p>

        <h3>4. 피크 시간(업무 시간) 우선 액세스</h3>
        <p>
          평일 오전~오후는 전 세계 사용자가 몰리는 시간이에요.
          Pro 사용자는 이 시간에 느려지거나 대기가 걸릴 수 있지만,{" "}
          <strong>Max 사용자는 우선 처리</strong>돼요.
          가장 AI가 필요한 시간에 빠르게 사용할 수 있어요.
        </p>

        <h3>5. Claude in Excel & PowerPoint</h3>
        <p>
          Pro 이상에서 Excel과 PowerPoint 안에서 직접 Claude를 사용할 수 있어요.
          문서를 열어놓고 바로 AI에게 편집을 요청할 수 있어요.
        </p>

        <Callout type="tip" title="가성비로 생각해보세요">
          <p>
            <strong>월 13만원으로 유능한 AI 비서를 고용한다고 생각하면 가성비 최고예요.</strong>
            <br /><br />
            매일 1시간만 절약해도 한 달이면 20시간.
            시급 2만원으로 계산하면 40만원어치의 시간을 아끼는 셈이에요.
            13만원 투자로 40만원의 가치를 만드는 거죠.
          </p>
        </Callout>

        <Callout type="warning" title="꼭 처음부터 Max일 필요는 없어요">
          <p>
            Pro로 시작해서 체험한 뒤 Max로 업그레이드하는 것도 좋은 방법이에요.
            <br />
            근데 Pro로 한도에 걸려보면 Max의 필요성을 몸소 느끼게 될 거예요.
            미리 알려드리는 것뿐이에요.
          </p>
        </Callout>
      </section>

      <hr />

      {/* ───────────────── 이번 주 실행 계획 ───────────────── */}
      <section id="week-plan">
        <h2>당장 시작하는 법</h2>

        <p>
          글만 읽는 것보다 직접 해보는 게 100배 빨라요.
          지금 바로 시도할 수 있는 것들이에요.
        </p>

        <h3>가장 쉬운 첫 시도</h3>
        <p>
          회의록 하나를 Claude Code에 던져보세요.
        </p>
        <div className="my-4 rounded-xl border border-primary/20 bg-primary/5 p-5">
          <p className="text-sm font-medium text-primary mb-2">프롬프트 예시</p>
          <p className="text-[15px] text-body">
            &quot;이 회의록에서 <strong>핵심 결정사항과 액션아이템만 정리해줘</strong>&quot;
          </p>
        </div>
        <p>
          회의록 파일(.txt나 .md)을 작업 폴더에 넣고 Claude Code를 실행하면 돼요.
          결과를 보면 &quot;이걸 왜 직접 했지?&quot;라는 생각이 들 거예요.
        </p>

        <h3>그 다음은?</h3>
        <p>
          <strong>매주 반복하는 업무 1개</strong>를 찾으세요.
          다음 중 하나를 골라보세요.
        </p>
        <ul>
          <li><strong>엑셀 취합</strong> — 여러 파일의 데이터를 하나로 모으는 작업</li>
          <li><strong>정기 메일</strong> — 매주 보내는 보고 메일이나 안내 메일</li>
          <li><strong>파일 정리</strong> — 폴더 구조 정리, 파일명 일괄 변경</li>
        </ul>

        <h3>본격 적용</h3>
        <p>
          찾은 반복 업무에 Claude Code를 적용해보세요.
        </p>

        <Callout type="info" title="에러가 나도 OK">
          <p>
            처음에는 에러가 날 수 있어요. 근데 그건 정상이에요.
            <br /><br />
            <strong>&quot;에러 났어, 고쳐줘&quot;</strong>라고 하면 Claude가 스스로 원인을 분석하고 고쳐요.
            <br />
            이게 에이전틱 AI의 진짜 가치예요 — 에러 해결까지 AI가 해요.
          </p>
        </Callout>

        <div className="my-6 rounded-xl border-2 border-accent/30 bg-accent/5 p-6">
          <p className="font-bold text-accent text-lg mb-2">첫 번째 목표</p>
          <p className="text-body">
            <strong>자동화 성공 경험 1개</strong>를 만드세요.
            <br />
            작은 거 하나라도 &quot;AI가 대신 해줬다&quot;는 경험을 하면,
            다음에 뭘 자동화할지 아이디어가 쏟아질 거예요.
          </p>
        </div>
      </section>

      <hr />

      {/* ───────────────── AI와 소통하기 좋은 형식 ───────────────── */}
      <section id="markdown">
        <h2>AI와 소통하기 좋은 자료 형식</h2>

        <p>
          AI에게 파일을 줄 때, <strong>파일 형식에 따라 결과가 크게 달라져요</strong>.
          같은 AI라도 읽기 쉬운 형식을 주면 훨씬 정확하고 빠르게 처리하거든요.
        </p>

        <h3>AI가 어려워하는 형식</h3>
        <CompareTable
          headers={["형식", "확장자", "왜 어려운가"]}
          rows={[
            ["Word", ".docx", "복잡한 서식 정보가 섞여서 내용 파악에 토큰 낭비"],
            ["PowerPoint", ".pptx", "레이아웃 해석에 토큰을 많이 소모"],
            ["Excel", ".xlsx", "병합 셀, 매크로, 서식이 내용을 가림"],
          ]}
        />

        <h3>AI가 바로 처리하는 형식</h3>
        <CompareTable
          headers={["형식", "확장자", "왜 좋은가"]}
          rows={[
            ["Markdown", ".md", "문서, 기획, 지시사항에 최적. 구조가 명확"],
            ["CSV", ".csv", "데이터, 표, 목록 처리에 최적. 군더더기 없음"],
            ["Plain Text", ".txt", "회의록, 메모 전달에 최적. 바로 읽을 수 있음"],
          ]}
        />

        <Callout type="tip" title="실무 팁">
          <p>
            <strong>.md, .csv, .txt로 관리하면 같은 AI라도 이해도와 처리 속도가 완전히 달라져요.</strong>
            <br /><br />
            회의록은 .txt로 저장, 데이터는 .csv로 내보내기, 기획 문서는 .md로 작성.
            이 습관만 들여도 AI 활용 효율이 2배 이상 올라가요.
          </p>
        </Callout>

        <h3>Markdown이 뭔가요?</h3>
        <p>
          Markdown은 간단한 기호로 문서를 꾸미는 형식이에요.
          예를 들어 <code>#</code>은 제목, <code>-</code>는 목록, <code>**굵게**</code>는 굵은 글씨가 돼요.
          메모장에서도 바로 작성할 수 있고, GitHub, Notion 등 대부분의 도구가 지원해요.
        </p>

        <p>
          사실 Claude Code의 핵심 설정 파일인 <strong>CLAUDE.md</strong>도 Markdown으로 작성해요.
          Markdown을 알면 AI에게 더 구조적인 지시를 내릴 수 있어서, 나중에 시간이 되면 배워두면 좋아요.
        </p>

        <Callout type="info" title="Markdown은 몰라도 돼요">
          <p>
            지금 당장 Markdown을 배울 필요는 없어요.
            <br />
            중요한 건 AI에게 파일을 줄 때 <strong>.docx보다 .txt가 낫다</strong>는 것,
            <strong>표 데이터는 .csv로 주면 좋다</strong>는 것만 기억하세요.
          </p>
        </Callout>
      </section>

      <hr />

      {/* ───────────────── 다음 코스 예고 ───────────────── */}
      <section id="whats-next">
        <h2>더 깊이 파고 싶다면</h2>

        <p>
          여기서 다룬 건 사실 기초에 가까워요.
          Claude Code로 할 수 있는 건 이것보다 <strong>훨씬 많거든요</strong>.
        </p>

        <h3>준비 중인 심화 가이드</h3>
        <div className="space-y-4 my-6">
          <div className="rounded-xl border border-border-subtle p-5">
            <div className="flex items-start gap-3">
              <span className="text-xl">📧</span>
              <div>
                <h4 className="font-bold text-heading">Gmail 심화</h4>
                <p className="text-sm text-body mt-1">
                  자동 라벨링 + 필터 규칙 생성 + 정기 리포트 발송.
                  받은 메일을 AI가 분류하고, 주간 요약 메일을 자동으로 보내는 시스템을 만들어요.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border-subtle p-5">
            <div className="flex items-start gap-3">
              <span className="text-xl">📊</span>
              <div>
                <h4 className="font-bold text-heading">엑셀 마스터</h4>
                <p className="text-sm text-body mt-1">
                  복잡한 서식 처리 + 다중 파일 자동화 + 피벗 테이블 자동 생성.
                  여러 부서의 엑셀 파일을 자동으로 취합하고 보고서를 만들어요.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border-subtle p-5">
            <div className="flex items-start gap-3">
              <span className="text-xl">🔗</span>
              <div>
                <h4 className="font-bold text-heading">업무 파이프라인 구축</h4>
                <p className="text-sm text-body mt-1">
                  여러 자동화를 연결해서 전체 업무 흐름을 자동화해요.
                  메일 수신 → 데이터 추출 → 엑셀 취합 → 보고서 생성까지 원클릭으로.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border-subtle p-5">
            <div className="flex items-start gap-3">
              <span className="text-xl">🤖</span>
              <div>
                <h4 className="font-bold text-heading">백그라운드 에이전트</h4>
                <p className="text-sm text-body mt-1">
                  Claude Code를 백그라운드에서 실행해서 여러 작업을 동시에 처리해요.
                  하나의 에이전트가 코드를 짜는 동안, 다른 에이전트가 테스트를 돌릴 수 있어요.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Callout type="info">
          <p>
            코스가 업데이트되면{" "}
            <a
              href="https://managerkim.com/learn"
              className="text-primary font-semibold hover:underline"
            >
              managerkim.com/learn
            </a>
            에서 확인할 수 있어요.
          </p>
        </Callout>

        <div className="my-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 p-8 text-center">
          <p className="text-2xl font-extrabold text-heading mb-3">
            시작이 반이에요 🎉
          </p>
          <p className="text-body leading-relaxed">
            여기까지 읽으셨으면 이미 상위 0.3%에 들어온 거예요.
            <br />
            완벽하게 배우고 시작할 필요 없어요.
            <br />
            <strong>일단 써보세요. 습관이 되면 업무가 바뀌어요.</strong>
          </p>
        </div>
      </section>
    </>
  );
}
