function Badge() {
  return (
    <div className="bg-[#e1e3e6] box-border content-stretch flex flex-col gap-[10px] h-[16px] items-center justify-center max-w-[30px] min-w-[30px] overflow-clip px-[8px] py-0 relative rounded-[4px] shrink-0" data-name="Badge">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#015ecb] text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        156
      </p>
    </div>
  );
}

function StatsContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Stats Container">
      <Badge />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="title">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[19px] relative shrink-0 text-[#264769] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Risks Count by Severity × Business Priority Matrix
      </p>
      <StatsContainer />
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-center justify-center pb-[71px] pt-0 px-0 relative shrink-0 w-[16px]">
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" style={{ "--transform-inner-width": "16", "--transform-inner-height": "1" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative size-full text-[#5b626e] text-[14px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            Severity
          </p>
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[45px] items-end justify-center relative shrink-0 w-full" data-name="cell">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#264769] text-[14px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        High
      </p>
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[35px] items-end justify-center relative shrink-0 w-full" data-name="cell">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#264769] text-[14px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Medium
      </p>
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[35px] items-end justify-center relative shrink-0 w-full" data-name="cell">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#264769] text-[14px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Low
      </p>
    </div>
  );
}

function Columns() {
  return (
    <div className="box-border content-stretch flex flex-col h-[224px] items-end justify-between pb-[59px] pt-0 px-0 relative shrink-0" data-name="columns">
      <Cell />
      <Cell1 />
      <Cell2 />
    </div>
  );
}

function SeverityBadge() {
  return (
    <div className="bg-[#ffe5c2] relative rounded-[8px] shrink-0 w-full" data-name="Severity badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#bf360c] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[21px] whitespace-pre" dir="auto">
              8
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-0 border-[#bf360c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Posture() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Posture">
      <SeverityBadge />
    </div>
  );
}

function SeverityBadge1() {
  return (
    <div className="bg-[#fff5db] relative rounded-[8px] shrink-0 w-full" data-name="Severity badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8a6300] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[21px] whitespace-pre" dir="auto">
              11
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-0 border-[#8a6300] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Posture1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Posture">
      <SeverityBadge1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-full z-[2]">
      {[...Array(2).keys()].map((_, i) => (
        <Posture key={i} />
      ))}
      <Posture1 />
    </div>
  );
}

function Columns1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow isolate items-center min-h-px min-w-px relative self-stretch shrink-0" data-name="columns">
      <Frame />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#264769] text-[14px] text-nowrap whitespace-pre z-[1]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Low
      </p>
    </div>
  );
}

function SeverityBadge2() {
  return (
    <div className="bg-[#ffe5eb] relative rounded-[8px] shrink-0 w-full" data-name="Severity badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b5153a] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[21px] whitespace-pre" dir="auto">
              4
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-0 border-[#b5153a] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Posture2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Posture">
      <SeverityBadge2 />
    </div>
  );
}

function SeverityBadge3() {
  return (
    <div className="bg-[#ffe5c2] relative rounded-[8px] shrink-0 w-full" data-name="Severity badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#bf360c] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[21px] whitespace-pre" dir="auto">
              8
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-0 border-[#bf360c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Posture3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Posture">
      <SeverityBadge3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-full z-[2]">
      {[...Array(2).keys()].map((_, i) => (
        <Posture2 key={i} />
      ))}
      <Posture3 />
    </div>
  );
}

function Columns2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow isolate items-center min-h-px min-w-px relative self-stretch shrink-0" data-name="columns">
      <Frame1 />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#264769] text-[14px] text-nowrap whitespace-pre z-[1]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Medium
      </p>
    </div>
  );
}

function SeverityBadge4() {
  return (
    <div className="bg-[#ec0139] relative rounded-[8px] shrink-0 w-full" data-name="Severity badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[18px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[21px] whitespace-pre" dir="auto">
              3
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-0 border-[#ffe5eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Posture4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Posture">
      <SeverityBadge4 />
    </div>
  );
}

function SeverityBadge5() {
  return (
    <div className="bg-[#ffe5eb] relative rounded-[8px] shrink-0 w-full" data-name="Severity badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b5153a] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[21px] whitespace-pre" dir="auto">
              10
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-0 border-[#b5153a] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Posture5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Posture">
      <SeverityBadge5 />
    </div>
  );
}

function SeverityBadge6() {
  return (
    <div className="bg-[#ffe5c2] relative rounded-[8px] shrink-0 w-full" data-name="Severity badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#bf360c] text-[18px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[21px] whitespace-pre" dir="auto">
              2
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-0 border-[#bf360c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Posture6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Posture">
      <SeverityBadge6 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-full z-[2]">
      <Posture4 />
      <Posture5 />
      <Posture6 />
    </div>
  );
}

function Columns3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow isolate items-center min-h-px min-w-px relative self-stretch shrink-0" data-name="columns">
      <Frame2 />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#264769] text-[14px] text-nowrap whitespace-pre z-[1]" style={{ fontVariationSettings: "'wdth' 100" }}>
        High
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="content">
      <Columns1 />
      <Columns2 />
      <Columns3 />
    </div>
  );
}

function ContentLabel() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-center justify-between min-h-px min-w-px relative shrink-0" data-name="content / label">
      <Content />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5b626e] text-[14px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Business Priority</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow h-full items-start min-h-px min-w-px relative shrink-0">
      <Columns />
      <ContentLabel />
    </div>
  );
}

function Container() {
  return <div className="bg-[#ec0139] rounded-[3.35544e+07px] shrink-0 size-[12px]" data-name="Container" />;
}

function Cell3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center relative shrink-0 w-full" data-name="cell">
      <Container />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#5b626e] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Critical
      </p>
    </div>
  );
}

function Container1() {
  return <div className="bg-[#ffe5eb] rounded-[3.35544e+07px] shrink-0 size-[12px]" data-name="Container" />;
}

function Cell4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center relative shrink-0 w-full" data-name="cell">
      <Container1 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#5b626e] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        High
      </p>
    </div>
  );
}

function Container2() {
  return <div className="bg-[#ffe5c2] rounded-[3.35544e+07px] shrink-0 size-[12px]" data-name="Container" />;
}

function Cell5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center relative shrink-0 w-full" data-name="cell">
      <Container2 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#5b626e] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Medium
      </p>
    </div>
  );
}

function Columns4() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="columns">
      <Cell3 />
      <Cell4 />
      <Cell5 />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="content">
      <Frame4 />
      <Frame3 />
      <Columns4 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start p-[20px] relative size-full">
          <Title />
          <Content1 />
        </div>
      </div>
    </div>
  );
}