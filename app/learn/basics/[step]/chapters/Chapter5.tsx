"use client";

import Callout from "@/components/learn/Callout";
import CodeBlock from "@/components/learn/CodeBlock";
import CompareTable from "@/components/learn/CompareTable";

export default function Chapter5() {
  return (
    <>
      {/* ───────────────── 상황 ───────────────── */}
      <section id="situation">
        <h2>상황: 보고서 쓰고 또 PPT 만들기</h2>

        <p>
          보고서를 다 쓰고 나면 끝이 아니에요.
          <strong>같은 내용을 PPT에 다시 옮기는 작업</strong>이 기다리고 있죠.
        </p>

        <h3>매번 반복되는 일</h3>
        <ul>
          <li>보고서 내용을 PPT에 다시 옮기기</li>
          <li>슬라이드 디자인에 시간 낭비</li>
          <li>차트를 또 만들어서 붙이기</li>
          <li>수정 사항 생기면 양쪽 다 고치기</li>
        </ul>

        <Callout type="info" title="이런 경험 있으시죠?">
          <p>
            보고서 완성 → PPT 작성 → 수정 요청 → 보고서 수정 → PPT도 수정...
            <br />
            사실 같은 내용을 두 곳에서 관리하는 건 누구한테나 고통이에요.
          </p>
        </Callout>

        <h3>이 글에서 만들 것</h3>
        <p>Claude Code에게 한마디 하면 이렇게 돼요.</p>
        <ul>
          <li><strong>내용만 말하면</strong> 슬라이드 자동 구성</li>
          <li><strong>디자인까지</strong> 알아서 적용</li>
          <li><strong>데이터 넣으면</strong> 차트 자동 삽입</li>
          <li><strong>.pptx 파일로</strong> 바로 저장</li>
        </ul>

        <p>
          보고서 내용을 복붙하는 대신, AI에게 &quot;발표자료 만들어줘&quot;
          한마디면 끝이에요.
        </p>
      </section>

      <hr />

      {/* ───────────────── 시연 ───────────────── */}
      <section id="demo">
        <h2>시연: 한마디로 PPT 생성</h2>

        <p>
          실제로 Claude Code에게 발표자료를 만들어달라고 해 볼게요.
          프롬프트 하나로 완성된 .pptx 파일이 나와요.
        </p>

        <h3>프롬프트</h3>
        <CodeBlock title="Claude Code에 입력">
{`"AI 업무 자동화 도입 제안" 주제로 발표자료 만들어줘.
5장, 차트 포함, python-pptx로 제안서.pptx 만들어줘.`}
        </CodeBlock>

        <h3>Claude가 하는 일</h3>
        <p>
          이 한마디를 받으면 Claude Code는 다음을 <strong>스스로 판단하고 실행</strong>해요.
        </p>
        <ol>
          <li><strong>python-pptx 설치</strong> — 필요한 라이브러리를 자동 설치</li>
          <li><strong>슬라이드 구성 + 본문 작성</strong> — 주제에 맞게 5장 구성, 각 슬라이드에 제목과 본문 배치</li>
          <li><strong>차트/도표 자동 삽입</strong> — 데이터를 생성하고 차트를 슬라이드에 삽입</li>
          <li><strong>색상 테마 + 레이아웃 적용</strong> — 일관된 디자인으로 프로페셔널한 외관</li>
          <li><strong>제안서.pptx 파일 저장</strong> — 바로 열어볼 수 있는 .pptx 파일 생성</li>
        </ol>

        <Callout type="tip" title="왜 python-pptx인가요?">
          <p>
            python-pptx는 Python으로 PowerPoint 파일을 만드는 라이브러리예요.
            Claude Code가 Python 코드를 작성 → 실행 → .pptx 파일을 생성하는 방식이에요.
            <br />
            근데 여러분이 Python을 몰라도 전혀 상관없어요. Claude가 다 해주거든요.
          </p>
        </Callout>

        <Callout type="info" title="PowerPoint 안에서 Claude 쓰기">
          <p>
            Claude Pro 이상 구독자는 <strong>PowerPoint 안에서 직접 Claude를 사용</strong>할 수도 있어요.
            슬라이드를 선택하고 AI에게 수정을 요청하면, PPT를 떠나지 않고 바로 편집할 수 있어요.
            python-pptx 방식과 PowerPoint 내 Claude — 상황에 맞게 선택하면 돼요.
          </p>
        </Callout>

        <h3>결과물 예시</h3>
        <CompareTable
          headers={["슬라이드", "내용"]}
          rows={[
            ["1번 — 표지", "AI 업무 자동화 도입 제안 + 발표자/날짜"],
            ["2번 — 현황", "업무 시간 분석 차트 (반복 업무 비율)"],
            ["3번 — 문제점", "수작업의 비효율 포인트 정리"],
            ["4번 — 해결방안", "AI 자동화 도입 효과 비교 차트"],
            ["5번 — 기대효과", "시간 절감 + ROI 수치 요약"],
          ]}
        />
      </section>

      <hr />

      {/* ───────────────── 직접 해보기 ───────────────── */}
      <section id="try-it">
        <h2>직접 해보기</h2>

        <p>이제 직접 해볼 차례예요. 아래 프롬프트를 Claude Code에 입력하세요.</p>

        <CodeBlock title="Claude Code에 입력">
{`"AI 업무 자동화 도입 제안" 주제로 PPT 만들어줘.
현황, 문제점, 해결방안, 기대효과, 일정 순서로.
python-pptx로 .pptx 저장.`}
        </CodeBlock>

        <Callout type="info" title="프롬프트 변형 아이디어">
          <p>자신의 업무에 맞게 주제를 바꿔보세요.</p>
          <ul className="mt-2 space-y-1">
            <li>&bull; &quot;2025년 마케팅 성과 보고&quot;</li>
            <li>&bull; &quot;신규 프로젝트 킥오프 발표&quot;</li>
            <li>&bull; &quot;팀 주간 업무 보고&quot;</li>
            <li>&bull; &quot;고객 만족도 분석 결과&quot;</li>
          </ul>
        </Callout>

        <h3>체크리스트</h3>
        <ul>
          <li>
            <strong>.pptx 파일 생성 확인</strong> — 작업 폴더에 파일이 생겼나요?
          </li>
          <li>
            <strong>슬라이드 5장 이상</strong> — 요청한 구성대로 만들어졌나요?
          </li>
          <li>
            <strong>파일 열어서 확인</strong> — 더블클릭으로 PowerPoint에서 열어보세요
          </li>
        </ul>

        <Callout type="warning" title="파일이 안 열리나요?">
          <p>
            PowerPoint가 설치되어 있지 않으면 .pptx 파일을 열 수 없어요.
            <br />
            Google Slides에서 열기: Google Drive에 업로드 → 우클릭 → &quot;Google 프레젠테이션으로 열기&quot;
            <br />
            또는 무료 LibreOffice Impress를 사용할 수 있어요.
          </p>
        </Callout>

        <h3>결과가 마음에 안 들면?</h3>
        <p>
          걱정 마세요. 그냥 <strong>말로 수정 요청</strong>하면 돼요.
          사실 이게 바로 다음에 배울 &quot;바이브코딩&quot;이에요.
        </p>
      </section>

      <hr />

      {/* ───────────────── 바이브코딩 ───────────────── */}
      <section id="vibe-coding">
        <h2>바이브코딩이란?</h2>

        <p>
          <strong>바이브코딩(Vibe Coding)</strong>은 한마디로,{" "}
          <strong>말로 만드는 프로그래밍</strong>이에요.
        </p>

        <p>
          코드를 직접 쓰지 않고, 원하는 결과를 자연어로 설명하면
          AI가 코드를 작성하고 실행해요.
          2025년 AI 업계에서 가장 핫한 키워드 중 하나죠.
        </p>

        <Callout type="tip" title="사실, 지금 하고 있는 게 바이브코딩이에요">
          <p>
            여러분이 방금 &quot;PPT 만들어줘&quot;라고 했을 때,
            Claude Code가 python-pptx 코드를 짜서 실행했잖아요?
            <br />
            <strong>그게 바이브코딩이에요.</strong> 이미 하고 계셨어요!
          </p>
        </Callout>

        <h3>결과물 업그레이드 예시</h3>
        <p>
          바이브코딩의 핵심은 <strong>대화를 이어가며 결과물을 발전시키는 거</strong>예요.
          한 번에 완벽할 필요 없어요. 수정 요청을 반복하면 돼요.
        </p>

        <CompareTable
          headers={["수정 요청 (프롬프트)", "Claude가 하는 일"]}
          rows={[
            ["\"PPT에 회사 로고 넣어줘\"", "이미지 파일을 찾아 슬라이드에 삽입"],
            ["\"엑셀에 월별 추이 차트 추가해줘\"", "데이터 분석 후 차트 생성 + 삽입"],
            ["\"3번 슬라이드 내용 좀 더 구체적으로 바꿔줘\"", "해당 슬라이드 본문을 보강"],
            ["\"요약 시트를 맨 앞에 추가해줘\"", "새 슬라이드를 1번 위치에 삽입"],
          ]}
        />

        <h3>바이브코딩의 실제 활용 사례</h3>
        <p>
          바이브코딩으로 이런 것들을 만들 수 있어요. 전부 코딩 지식 없이요.
        </p>
        <ul>
          <li><strong>개인 웹사이트</strong> — &quot;내 포트폴리오 사이트 만들어줘&quot;</li>
          <li><strong>업무 도구</strong> — &quot;팀 일정 관리 웹앱 만들어줘&quot;</li>
          <li><strong>데이터 대시보드</strong> — &quot;매출 데이터를 차트로 보여주는 HTML 페이지 만들어줘&quot;</li>
          <li><strong>자동화 스크립트</strong> — &quot;매주 금요일마다 보고서를 자동 생성하는 프로그램 만들어줘&quot;</li>
        </ul>

        <Callout type="info" title="바이브코딩의 한계도 알아두세요">
          <p>
            바이브코딩으로 간단한 도구나 프로토타입을 빠르게 만들 수 있지만,
            대규모 시스템이나 보안이 중요한 서비스는 전문 개발자의 검토가 필요해요.
            &quot;80%는 AI가, 20%는 사람이&quot; 원칙이 여기서도 적용돼요.
          </p>
        </Callout>

        <h3>코딩 몰라도 돼요</h3>
        <p>
          바이브코딩의 가장 큰 장점은{" "}
          <strong>프로그래밍 지식이 전혀 필요 없다</strong>는 거예요.
        </p>
        <ul>
          <li>코드를 읽을 줄 몰라도 돼요</li>
          <li>문법을 알 필요 없어요</li>
          <li>에러가 나면 &quot;에러 났어, 고쳐줘&quot;라고 하면 돼요</li>
          <li><strong>원하는 걸 말하면, AI가 만들어요</strong> — 이게 전부예요</li>
        </ul>

        <Callout type="info" title="바이브코딩 = 새로운 업무 스킬">
          <p>
            코딩은 개발자의 영역이었지만, 바이브코딩은 <strong>누구나</strong> 할 수 있어요.
            <br />
            엑셀을 다루듯이, AI에게 말하는 것도 하나의 업무 스킬이 되는 거예요.
            <br />
            이 스킬을 먼저 익히는 사람이 앞서가요.
          </p>
        </Callout>
      </section>

      <hr />

      {/* ───────────────── 자유 실험 ───────────────── */}
      <section id="free-experiment">
        <h2>자유 실험 아이디어</h2>

        <p>
          이제 기본기를 배웠으니, <strong>자유롭게 실험</strong>해 볼 시간이에요.
          아래 아이디어 중 하나를 골라서 Claude Code에게 시켜보세요.
        </p>

        <h3>문서/데이터 처리</h3>
        <CompareTable
          headers={["시도해볼 것", "프롬프트 예시"]}
          rows={[
            ["중복 데이터 찾기", "\"이 엑셀에서 중복된 이름을 찾아서 표시해줘\""],
            ["PDF 요약표 만들기", "\"이 PDF 내용을 읽고 핵심만 표로 정리해줘\""],
            ["보고서 초안 작성", "\"이 데이터로 월간 보고서 초안 만들어줘\""],
            ["여러 파일 합치기", "\"이 폴더에 있는 엑셀 파일들 하나로 합쳐줘\""],
          ]}
        />

        <h3>커뮤니케이션 정리</h3>
        <CompareTable
          headers={["시도해볼 것", "프롬프트 예시"]}
          rows={[
            ["보고 메일 작성", "\"이 내용으로 팀장님께 보고 메일 작성해줘\""],
            ["영문 자료 번역", "\"이 영문 보고서를 한국어로 번역하고 요약해줘\""],
            ["할 일 목록 정리", "\"이 회의록에서 액션아이템만 뽑아서 정리해줘\""],
            ["고객 피드백 분류", "\"이 피드백 목록을 긍정/부정/개선요청으로 분류해줘\""],
          ]}
        />

        <Callout type="tip" title="실험할 때 기억하세요">
          <p>
            <strong>안 되는 것도 있고, 놀라운 것도 있을 거예요.</strong>
            <br /><br />
            실패해도 괜찮아요. 오히려 실패하면서 AI의 한계와 강점을 파악하게 되거든요.
            중요한 건 <strong>직접 시도해보는 거</strong>예요.
          </p>
        </Callout>

        <h3>자유 실험 팁</h3>
        <ul>
          <li>
            <strong>작은 것부터 시작</strong> — 파일 하나, 작업 하나로 시작하세요
          </li>
          <li>
            <strong>구체적으로 말하기</strong> — &quot;잘 만들어줘&quot;보다 &quot;표 형태로 정리해줘&quot;가 나아요
          </li>
          <li>
            <strong>실패하면 다시 말하기</strong> — &quot;아니야, 이렇게 바꿔줘&quot;라고 하면 돼요
          </li>
          <li>
            <strong>결과 저장하기</strong> — 좋은 프롬프트는 메모해두세요. 다음에 또 쓸 수 있어요
          </li>
        </ul>
      </section>
    </>
  );
}
