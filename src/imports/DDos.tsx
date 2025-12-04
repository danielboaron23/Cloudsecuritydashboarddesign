import svgPaths from "./svg-bhaxd988tq";

function IconContainer() {
  return (
    <div className="h-[31.392px] relative shrink-0 w-[33.93px]" data-name="Icon Container">
      <div className="absolute bottom-0 left-0 right-[-2.86%] top-[-3.1%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 33">
          <g id="Icon Container">
            <g id="Authorization_success">
              <path clipRule="evenodd" d={svgPaths.p3b575b80} fill="var(--fill-0, #264769)" fillRule="evenodd" id="Shape" />
              <path d={svgPaths.p23b53e00} id="Vector 7" stroke="var(--stroke-0, #264769)" strokeLinecap="round" strokeWidth="1.14374" />
            </g>
            <path d={svgPaths.p8747ac0} id="Vector" stroke="url(#paint0_linear_5_1626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.94389" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_1626" x1="20.0611" x2="20.0611" y1="0.971942" y2="18.5936">
              <stop stopColor="#718F9D" />
              <stop offset="1" stopColor="#7A9CFF" stopOpacity="0.58" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Trc() {
  return (
    <div className="content-stretch flex gap-[23px] h-[44px] items-center relative shrink-0" data-name="TRC">
      <IconContainer />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[19px] relative shrink-0 text-[#264769] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Infrastructure Protection
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <path d={svgPaths.p137a8000} fill="var(--fill-0, #006064)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PlanType() {
  return (
    <div className="bg-[#e0f7fa] h-[40px] max-w-[135px] relative rounded-[4px] shrink-0 w-[135px]" data-name="Plan Type">
      <div className="box-border content-stretch flex h-[40px] items-center justify-between max-w-[inherit] overflow-clip px-[8px] py-[4px] relative rounded-[inherit] w-[135px]">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#006064] text-[12px] text-nowrap whitespace-pre" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
          Hybrid
        </p>
        <Icon />
      </div>
      <div aria-hidden="true" className="absolute border-[#006064] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Plan() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="plan">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[19px] relative shrink-0 text-[#264769] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Plan
      </p>
      <PlanType />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header">
      <Trc />
      <Plan />
    </div>
  );
}

function Name() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="name">
      <div className="relative shrink-0 size-[12px]" data-name="check">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(38, 71, 105, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path clipRule="evenodd" d={svgPaths.p4881140} fill="var(--fill-0, #264769)" fillRule="evenodd" id="check" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#264769] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Firewall Services
      </p>
    </div>
  );
}

function MarketplaceProtections() {
  return (
    <div className="h-[40px] relative shrink-0 w-full z-[3]" data-name="Marketplace protections">
      <div aria-hidden="true" className="absolute border-[#edeef0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-0 relative w-full">
          <Name />
        </div>
      </div>
    </div>
  );
}

function DisabledIcon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Disabled-icon">
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(169, 174, 183, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Disabled-icon">
            <rect height="11.25" rx="5.625" stroke="var(--stroke-0, #A9AEB7)" strokeWidth="0.75" width="11.25" x="0.375" y="0.375" />
            <g id="Vector">
              <path d={svgPaths.pbebc00} fill="var(--fill-0, #A9AEB7)" />
              <path d={svgPaths.pbba7e80} fill="var(--fill-0, #A9AEB7)" />
              <path d={svgPaths.pbebc00} stroke="var(--stroke-0, #A9AEB7)" strokeWidth="0.25" />
              <path d={svgPaths.pbba7e80} stroke="var(--stroke-0, #A9AEB7)" strokeWidth="0.25" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Name1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="name">
      <DisabledIcon />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#a9aeb7] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Network Analytics
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[12.444px] ml-0 mt-0 relative w-[13px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <path clipRule="evenodd" d={svgPaths.p23c00e00} fill="var(--fill-0, #A6ABB5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <p className="[grid-area:1_/_1] font-['Roboto:Medium',sans-serif] font-medium leading-[normal] ml-[6.5px] mt-[4.38px] relative text-[#a6abb5] text-[7.429px] text-center text-nowrap translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        30
      </p>
    </div>
  );
}

function FreeTrialsButton() {
  return (
    <div className="bg-[#f5f6f8] box-border content-stretch flex gap-[4px] h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Free trials Button">
      <Group />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[13px] relative shrink-0 text-[#a6abb5] text-[11px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Free Trial
      </p>
    </div>
  );
}

function IconAddOn() {
  return (
    <div className="h-[14px] relative shrink-0 w-[13px]" data-name="Icon/add-on">
      <div className="absolute bottom-0 left-[-1.92%] right-[-1.92%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Icon/add-on">
            <path d={svgPaths.p38a06300} fill="var(--fill-0, #00838F)" id="icon" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AddOnBadge() {
  return (
    <div className="bg-[#e0f7fa] box-border content-stretch flex flex-col h-[20px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="Add-on badge">
      <IconAddOn />
    </div>
  );
}

function FreeTrialBadge() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="free trial / badge">
      <FreeTrialsButton />
      <AddOnBadge />
    </div>
  );
}

function MarketplaceProtections1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full z-[2]" data-name="Marketplace protections">
      <div aria-hidden="true" className="absolute border-[#edeef0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-0 relative w-full">
          <Name1 />
          <FreeTrialBadge />
        </div>
      </div>
    </div>
  );
}

function DisabledIcon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Disabled-icon">
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(169, 174, 183, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Disabled-icon">
            <rect height="11.25" rx="5.625" stroke="var(--stroke-0, #A9AEB7)" strokeWidth="0.75" width="11.25" x="0.375" y="0.375" />
            <g id="Vector">
              <path d={svgPaths.pbebc00} fill="var(--fill-0, #A9AEB7)" />
              <path d={svgPaths.pbba7e80} fill="var(--fill-0, #A9AEB7)" />
              <path d={svgPaths.pbebc00} stroke="var(--stroke-0, #A9AEB7)" strokeWidth="0.25" />
              <path d={svgPaths.pbba7e80} stroke="var(--stroke-0, #A9AEB7)" strokeWidth="0.25" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Name2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="name">
      <DisabledIcon1 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#a9aeb7] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        AI SOC Xpert
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[12.444px] ml-0 mt-0 relative w-[13px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <path clipRule="evenodd" d={svgPaths.p23c00e00} fill="var(--fill-0, #A6ABB5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <p className="[grid-area:1_/_1] font-['Roboto:Medium',sans-serif] font-medium leading-[normal] ml-[6.5px] mt-[4.38px] relative text-[#a6abb5] text-[7.429px] text-center text-nowrap translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        30
      </p>
    </div>
  );
}

function FreeTrialsButton1() {
  return (
    <div className="bg-[#f5f6f8] box-border content-stretch flex gap-[4px] h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Free trials Button">
      <Group1 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[13px] relative shrink-0 text-[#a6abb5] text-[11px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Free Trial
      </p>
    </div>
  );
}

function IconAddOn1() {
  return (
    <div className="h-[14px] relative shrink-0 w-[13px]" data-name="Icon/add-on">
      <div className="absolute bottom-0 left-[-1.92%] right-[-1.92%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Icon/add-on">
            <path d={svgPaths.p38a06300} fill="var(--fill-0, #00838F)" id="icon" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AddOnBadge1() {
  return (
    <div className="bg-[#e0f7fa] box-border content-stretch flex flex-col h-[20px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="Add-on badge">
      <IconAddOn1 />
    </div>
  );
}

function FreeTrialBadge1() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="free trial / badge">
      <FreeTrialsButton1 />
      <AddOnBadge1 />
    </div>
  );
}

function MarketplaceProtections2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full z-[1]" data-name="Marketplace protections">
      <div aria-hidden="true" className="absolute border-[#edeef0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-0 relative w-full">
          <Name2 />
          <FreeTrialBadge1 />
        </div>
      </div>
    </div>
  );
}

function ProtectionList() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="protection list">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col isolate items-start pl-0 pr-[12px] py-0 relative size-full">
          <MarketplaceProtections />
          <MarketplaceProtections1 />
          <MarketplaceProtections2 />
        </div>
      </div>
    </div>
  );
}

function Plan1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-full items-start relative shrink-0 w-[297px]" data-name="plan">
      <Header />
      <ProtectionList />
    </div>
  );
}

function ChipForTable() {
  return (
    <div className="bg-[#f5f6f8] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip for Table">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5b626e] text-[0px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="whitespace-pre" dir="auto">
          <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[13px] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Start: `}</span>
          <span className="font-['Roboto:Medium',sans-serif] font-medium leading-[14px] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            04/06/2023
          </span>
        </p>
      </div>
    </div>
  );
}

function ChipForTable1() {
  return (
    <div className="bg-[#f5f6f8] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip for Table">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5b626e] text-[0px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="whitespace-pre" dir="auto">
          <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[13px] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`End: `}</span>
          <span className="font-['Roboto:Medium',sans-serif] font-medium leading-[14px] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            04/06/2026
          </span>
        </p>
      </div>
    </div>
  );
}

function ChipForTable2() {
  return (
    <div className="basis-0 bg-[#f5f6f8] grow h-[24px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Chip for Table">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center px-[8px] py-[4px] relative w-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5b626e] text-[0px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="whitespace-pre" dir="auto">
              <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[13px] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Remaining: `}</span>
              <span className="font-['Roboto:Medium',sans-serif] font-medium leading-[14px] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                11 months and 7 days
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Status() {
  return (
    <div className="content-start flex flex-wrap gap-[4px] items-start relative shrink-0 w-[218px]" data-name="status">
      <ChipForTable />
      <ChipForTable1 />
      <ChipForTable2 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[12px] h-[19px] items-end relative shrink-0 w-full" data-name="title">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#264769] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[19px] whitespace-pre" dir="auto">
          Usage
        </p>
      </div>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(237, 238, 240, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 492 1">
            <line id="divider" stroke="var(--stroke-0, #EDEEF0)" strokeLinecap="round" x1="0.5" x2="491.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[12.574px] left-1/2 top-[calc(50%-0.09px)] translate-x-[-50%] translate-y-[-50%] w-[14.25px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
        <g id="Group 18982">
          <path clipRule="evenodd" d={svgPaths.p217add80} fill="var(--fill-0, #015ECB)" fillRule="evenodd" id="Vector (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p27f06900} fill="var(--fill-0, #015ECB)" fillRule="evenodd" id="Vector (Stroke)_2" />
          <path clipRule="evenodd" d={svgPaths.p158a00} fill="var(--fill-0, #015ECB)" fillRule="evenodd" id="Vector (Stroke)_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[15px]">
      <Group2 />
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-[#f5f6f8] h-[24px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="header">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center px-[8px] py-[4px] relative w-full">
          <Frame />
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#264769] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre" dir="auto">
              Bandwidth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpeedInfo() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 text-[#015ecb]" data-name="Speed Info">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre" dir="auto">
          405
        </p>
      </div>
      <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0 text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] text-nowrap whitespace-pre" dir="auto">
          Mbps
        </p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="bg-[#f5f6f8] box-border content-stretch flex flex-col gap-[4px] items-start justify-center leading-[0] overflow-clip p-[20px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 text-nowrap w-[116px]" data-name="info">
      <SpeedInfo />
      <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0 text-[#264769] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px] text-nowrap whitespace-pre" dir="auto">
          Purchased
        </p>
      </div>
    </div>
  );
}

function SpeedInfo1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 text-[#015ecb]" data-name="Speed Info">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre" dir="auto">
          0
        </p>
      </div>
      <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0 text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] text-nowrap whitespace-pre" dir="auto">
          Kbps
        </p>
      </div>
    </div>
  );
}

function Info1() {
  return (
    <div className="bg-[#f5f6f8] box-border content-stretch flex flex-col gap-[4px] items-start justify-center leading-[0] overflow-clip p-[20px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 text-nowrap w-[116px]" data-name="info">
      <SpeedInfo1 />
      <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0 text-[#264769] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px] text-nowrap whitespace-pre" dir="auto">
          95 Percentile
        </p>
      </div>
    </div>
  );
}

function ValueContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 text-[#015ecb]" data-name="Value Container">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre" dir="auto">
          0
        </p>
      </div>
      <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0 text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] text-nowrap whitespace-pre" dir="auto">
          Kbps
        </p>
      </div>
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[0] overflow-clip relative shrink-0 text-nowrap" data-name="info">
      <ValueContainer />
      <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0 text-[#264769] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px] text-nowrap whitespace-pre" dir="auto">
          Average
        </p>
      </div>
    </div>
  );
}

function ValueContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 text-[#015ecb]" data-name="Value Container">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre" dir="auto">
          225
        </p>
      </div>
      <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0 text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] text-nowrap whitespace-pre" dir="auto">
          Kbps
        </p>
      </div>
    </div>
  );
}

function Info3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[0] overflow-clip relative shrink-0 text-nowrap" data-name="info">
      <ValueContainer1 />
      <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0 text-[#264769] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px] text-nowrap whitespace-pre" dir="auto">
          Peak
        </p>
      </div>
    </div>
  );
}

function Info4() {
  return (
    <div className="basis-0 bg-[#f5f6f8] grow min-h-px min-w-px relative rounded-bl-[4px] rounded-br-[4px] shrink-0" data-name="info">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[20px] pr-[60px] py-[20px] relative w-full">
          <Info2 />
          <Info3 />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="content">
      <Info />
      <Info1 />
      <Info4 />
    </div>
  );
}

function Bandwidth() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Bandwidth">
      <Header1 />
      <Content />
    </div>
  );
}

function IconZap() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon/Zap">
      <div className="absolute bottom-[-2.67%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
          <g id="Icon/Zap">
            <path clipRule="evenodd" d={svgPaths.pe754000} fill="var(--fill-0, #015ECB)" fillRule="evenodd" id="icon" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="bg-[#f5f6f8] h-[24px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="header">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center px-[8px] py-[4px] relative w-full">
          <IconZap />
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#264769] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre" dir="auto">
              Applications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info5() {
  return (
    <div className="basis-0 bg-[#f5f6f8] grow min-h-px min-w-px relative rounded-bl-[4px] rounded-br-[4px] shrink-0" data-name="info">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start justify-center leading-[0] p-[20px] relative text-nowrap w-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#015ecb] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] text-nowrap whitespace-pre" dir="auto">
              6000
            </p>
          </div>
          <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0 text-[#264769] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[14px] text-nowrap whitespace-pre" dir="auto">
              Purchased
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info6() {
  return (
    <div className="basis-0 bg-[#f5f6f8] grow min-h-px min-w-px relative rounded-bl-[4px] rounded-br-[4px] shrink-0" data-name="info">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start justify-center leading-[0] p-[20px] relative text-nowrap w-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#015ecb] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] text-nowrap whitespace-pre" dir="auto">
              338
            </p>
          </div>
          <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0 text-[#264769] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[14px] text-nowrap whitespace-pre" dir="auto">
              Protected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="content">
      <Info5 />
      <Info6 />
    </div>
  );
}

function Applications() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Applications">
      <Header2 />
      <Content1 />
    </div>
  );
}

function IconSite() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon/Site">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon/Site">
          <path d={svgPaths.p26ff9500} fill="var(--fill-0, #015ECB)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Header3() {
  return (
    <div className="bg-[#f5f6f8] h-[24px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="header">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center px-[8px] py-[4px] relative w-full">
          <IconSite />
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#264769] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre" dir="auto">
              Applications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info7() {
  return (
    <div className="basis-0 bg-[#f5f6f8] grow min-h-px min-w-px relative rounded-bl-[4px] rounded-br-[4px] shrink-0" data-name="info">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start justify-center leading-[0] p-[20px] relative text-nowrap w-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#015ecb] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] text-nowrap whitespace-pre" dir="auto">
              61
            </p>
          </div>
          <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0 text-[#264769] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[14px] text-nowrap whitespace-pre" dir="auto">
              Purchased
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info8() {
  return (
    <div className="basis-0 bg-[#f5f6f8] grow min-h-px min-w-px relative rounded-bl-[4px] rounded-br-[4px] shrink-0" data-name="info">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start justify-center leading-[0] p-[20px] relative text-nowrap w-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#015ecb] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] text-nowrap whitespace-pre" dir="auto">
              71
            </p>
          </div>
          <div className="flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center relative shrink-0 text-[#264769] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[14px] text-nowrap whitespace-pre" dir="auto">
              Protected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="content">
      <Info7 />
      <Info8 />
    </div>
  );
}

function Applications1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Applications">
      <Header3 />
      <Content2 />
    </div>
  );
}

function AssetsSites() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="assets / sites">
      <Applications />
      <Applications1 />
    </div>
  );
}

function IconDownloadCsv() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Icon/Download-CSV">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Icon/Download-CSV">
          <g id="icon">
            <path clipRule="evenodd" d={svgPaths.p3e819e80} fill="var(--fill-0, #5B626E)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p10a81300} fill="var(--fill-0, #5B626E)" fillRule="evenodd" />
            <path d={svgPaths.p1da5af00} fill="var(--fill-0, #5B626E)" />
            <path d={svgPaths.p1a9466f0} fill="var(--fill-0, #5B626E)" />
            <path d={svgPaths.pc152980} fill="var(--fill-0, #5B626E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconArrow() {
  return (
    <div className="relative shrink-0 size-[14px] z-[1]" data-name="Icon/Arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon/Arrow">
          <path d={svgPaths.p77e4300} fill="var(--fill-0, #5B626E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[30px] isolate items-center pl-[12px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0 w-[170px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#d4d6db] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="basis-0 flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#264769] text-[12px] text-nowrap z-[2]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[14px] overflow-ellipsis overflow-hidden">Jul 2025</p>
      </div>
      <IconArrow />
    </div>
  );
}

function IconInput() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon / input">
      <IconDownloadCsv />
      <Input />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="tabs">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#264769] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px] overflow-ellipsis overflow-hidden whitespace-pre">95 Percentile</p>
      </div>
      <IconInput />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bottom-[39px] content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal items-end justify-between leading-[14px] left-0 text-[#5b626e] text-[12px] text-nowrap text-right top-px whitespace-pre" data-name="sidebar">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.48 Gbps
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.4 Gbps
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.32 Gbps
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.24 Gbps
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.16 Gbps
      </p>
      <p className="relative shrink-0" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.08 Gbps
      </p>
      <p className="relative shrink-0" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function Graph() {
  return (
    <div className="absolute bottom-[23px] left-[67px] overflow-clip right-0 top-px" data-name="graph">
      <div className="absolute bottom-[2px] h-0 left-[-1px] right-px">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(236, 1, 57, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 482 1">
            <path d="M0 0.5H482" id="Vector 92" stroke="var(--stroke-0, #EC0139)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[-1px] right-px top-[5px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(1, 143, 254, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 482 1">
            <path d="M0 0.5H482" id="Vector 93" stroke="var(--stroke-0, #018FFE)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute bottom-0 content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[14px] left-[67px] overflow-clip right-px text-[#5b626e] text-[12px] text-nowrap whitespace-pre" data-name="time">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jul 7
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jul 14
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jul 21
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jul 28
      </p>
    </div>
  );
}

function Graph1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Graph">
      <Sidebar />
      <Graph />
      <div className="absolute bottom-[23px] flex items-center justify-center left-[66px] top-px w-px">
        <div className="flex-none h-px rotate-[270deg] scale-y-[-100%] w-[186px]">
          <div className="relative size-full" data-name="Divider">
            <div className="absolute inset-[-50.84%_-0.27%]" style={{ "--stroke-0": "rgba(237, 238, 240, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 188 3">
                <path d={svgPaths.p322a7f00} id="Divider" stroke="var(--stroke-0, #EDEEF0)" strokeLinecap="round" strokeWidth="1.01682" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[22px] h-px left-[66px] right-px" data-name="Divider">
        <div className="absolute bottom-[-101.69%] left-0 right-0 top-[-101.69%]" style={{ "--stroke-0": "rgba(237, 238, 240, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 482 4">
            <path d={svgPaths.p3cc02b00} id="Divider" stroke="var(--stroke-0, #EDEEF0)" strokeWidth="2.03364" />
          </svg>
        </div>
      </div>
      <Time />
    </div>
  );
}

function SingleLagend() {
  return (
    <div className="content-stretch flex gap-[8.634px] items-center relative shrink-0" data-name="single lagend">
      <div className="bg-[#92c3d0] h-[5.181px] rounded-[25.039px] shrink-0 w-[15.542px]" data-name="label" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#5b626e] text-[12px] text-nowrap whitespace-pre" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        Legitimate traffic
      </p>
    </div>
  );
}

function SingleLagend1() {
  return (
    <div className="content-stretch flex gap-[8.634px] items-center relative shrink-0" data-name="single lagend">
      <div className="bg-[#ec0139] h-[5.181px] rounded-[25.039px] shrink-0 w-[15.542px]" data-name="label" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#5b626e] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        95 Percentile
      </p>
    </div>
  );
}

function SingleLagend2() {
  return (
    <div className="content-stretch flex gap-[8.634px] items-center relative shrink-0" data-name="single lagend">
      <div className="bg-[#018ffe] h-[5.181px] rounded-[25.039px] shrink-0 w-[15.542px]" data-name="label" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#5b626e] text-[12px] text-nowrap whitespace-pre" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        Purchased
      </p>
    </div>
  );
}

function Lagends() {
  return (
    <div className="content-stretch flex gap-[17.269px] items-center justify-center relative shrink-0 w-full" data-name="lagends">
      <SingleLagend />
      <SingleLagend1 />
      <SingleLagend2 />
    </div>
  );
}

function Graph2() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] h-[237px] items-start relative shrink-0 w-full" data-name="graph">
      <Graph1 />
      <Lagends />
    </div>
  );
}

function TabsChart() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="tabs / chart">
      <Tabs />
      <Graph2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="content">
      <Title />
      <Bandwidth />
      <AssetsSites />
      <TabsChart />
    </div>
  );
}

function Usage() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-[549px]" data-name="Usage">
      <Status />
      <Content3 />
    </div>
  );
}

export default function DDos() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="DDos">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[20px] items-start p-[20px] relative size-full">
          <Plan1 />
          <Usage />
        </div>
      </div>
    </div>
  );
}