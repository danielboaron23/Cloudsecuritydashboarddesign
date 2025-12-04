import React from 'react';
import svgPaths from '../../imports/svg-f1cvh6yttf';

// Helper for SVGs to ensure they scale or fit containers
const SvgWrapper = ({ children, className, viewBox = "0 0 48 48", ...props }: any) => (
  <div className={`relative shrink-0 ${className}`} {...props}>
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={viewBox}>
      {children}
    </svg>
  </div>
);

export function IconSidebar1() {
  return (
    <SvgWrapper className="size-[48px]" viewBox="0 0 48 48">
      <g opacity="0.5">
        <path d={svgPaths.pb5e7280} fill="white" />
      </g>
    </SvgWrapper>
  );
}

export function IconSidebar2() {
  return (
    <SvgWrapper className="size-[48px]" viewBox="0 0 48 48">
      <g opacity="0.5">
        <path d={svgPaths.p22626280} fill="white" />
      </g>
    </SvgWrapper>
  );
}

export function IconSidebar3() {
  return (
    <SvgWrapper className="size-[48px]" viewBox="0 0 48 48">
      <g opacity="0.5">
        <path d={svgPaths.p79d2200} fill="white" />
        <path clipRule="evenodd" d={svgPaths.pf74ea00} fill="white" fillRule="evenodd" />
      </g>
    </SvgWrapper>
  );
}

export function IconSidebarActive() {
  return (
    <SvgWrapper className="size-[48px]" viewBox="0 0 48 48">
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_active" x1="12.4952" x2="40.7998" y1="14.6619" y2="27.2075">
          <stop stopColor="white" />
          <stop offset="0.376484" stopColor="#D3DEFF" />
          <stop offset="1" stopColor="#537FFD" />
        </linearGradient>
      </defs>
      <g>
        <path clipRule="evenodd" d={svgPaths.p314b1600} fill="url(#paint0_linear_active)" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p18a02400} fill="#309EFF" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p298e1100} fill="#309EFF" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p3c58c500} fill="#309EFF" fillRule="evenodd" />
        <path d={svgPaths.pb23bb00} fill="#309EFF" />
        <path clipRule="evenodd" d={svgPaths.p12b29800} fill="#309EFF" fillRule="evenodd" />
      </g>
      <path d={svgPaths.p49da800} fill="#309EFF" />
    </SvgWrapper>
  );
}

export function LogoIcon() {
  return (
    <SvgWrapper className="w-[19px] h-[30px]" viewBox="0 0 19 30">
        <path d={svgPaths.p3f0e7400} fill="black" />
        <path d={svgPaths.p2ff4eb0} fill="#D2D2D2" />
        <path d={svgPaths.p2bb0dc00} fill="#D2D2D2" />
        <path d={svgPaths.p8fef480} fill="#D2D2D2" />
        <path d={svgPaths.p233fd100} fill="#B4121B" />
        <path d={svgPaths.p2a6f9180} fill="#FAAF3F" />
        <path d={svgPaths.p16ead300} fill="#D2D2D2" />
        <path d={svgPaths.p2d3d0400} fill="#00853F" />
    </SvgWrapper>
  );
}

export function IconArrow() {
  return (
    <SvgWrapper className="size-[14px]" viewBox="0 0 14 14">
      <path d={svgPaths.p77e4300} fill="#5B626E" />
    </SvgWrapper>
  );
}

export function IconAccount() {
  return (
    <SvgWrapper className="size-[26px]" viewBox="0 0 26 26">
      <circle cx="13" cy="13" r="12.5" stroke="#5B626E" />
      <path d={svgPaths.p2280ad00} fill="#264769" />
    </SvgWrapper>
  );
}

export function IconAccountLarge() {
  return (
    <SvgWrapper className="size-[40px]" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="19.4118" stroke="#5B626E" strokeWidth="1.17647" />
      <circle cx="34.8125" cy="6.17188" fill="#156C42" r="4" />
      <path d={svgPaths.pc4dbe80} fill="#264769" />
    </SvgWrapper>
  );
}

export function IconWorld() {
  return (
    <SvgWrapper className="size-[40px]" viewBox="0 0 40 40">
        <rect height="39.0009" rx="19.5004" stroke="#D4D6DB" width="39.0017" x="0.5" y="0.5" />
        <mask fill="white" id="path-2-inside-1_1_4294_custom">
        <path d={svgPaths.p315f500} />
        </mask>
        <path d={svgPaths.p315f500} fill="#264769" mask="url(#path-2-inside-1_1_4294_custom)" stroke="#264769" strokeWidth="6" />
    </SvgWrapper>
  );
}

export function IconCalendar() {
  return (
    <SvgWrapper className="size-[40px]" viewBox="0 0 40 40">
        <rect height="39.0009" rx="19.5004" stroke="#D4D6DB" width="39.0017" x="0.5" y="0.5" />
        <path d={svgPaths.pa792200} fill="#264769" />
    </SvgWrapper>
  );
}

export function IconID() {
  return (
    <SvgWrapper className="size-[40px]" viewBox="0 0 40 40">
        <rect height="39.0009" rx="19.5004" stroke="#D4D6DB" width="39.0017" x="0.5" y="0.5" />
        <path clipRule="evenodd" d={svgPaths.p27ee1e00} fill="#264769" fillRule="evenodd" />
    </SvgWrapper>
  );
}

export function IconNotes() {
  return (
    <SvgWrapper className="size-[40px]" viewBox="0 0 40 40">
        <rect height="39.0009" rx="19.5004" stroke="#D4D6DB" width="39.0017" x="0.5" y="0.5" />
        <path d={svgPaths.pddc1dc0} fill="#264769" />
    </SvgWrapper>
  );
}

export function IconThreat() {
  return (
    <SvgWrapper className="w-[30px] h-[21px]" viewBox="0 0 30 21">
        <path d={svgPaths.p308b9900} stroke="url(#paint0_linear_threat)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16001" />
        <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_threat" x1="14.7436" x2="14.7436" y1="1.08" y2="19.329">
            <stop stopColor="#718F9D" />
            <stop offset="1" stopColor="#7A9CFF" stopOpacity="0.58" />
            </linearGradient>
        </defs>
    </SvgWrapper>
  );
}

export function IconAppProtection() {
  return (
    <SvgWrapper className="w-[39px] h-[33px]" viewBox="0 0 39 33">
        <path d={svgPaths.p2822ef00} fill="#264769" />
        <path d={svgPaths.p3fca6200} stroke="url(#paint0_linear_app)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.95245" />
        <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_app" x1="23.9537" x2="23.9537" y1="0.976225" y2="18.6453">
            <stop stopColor="#718F9D" />
            <stop offset="1" stopColor="#7A9CFF" stopOpacity="0.58" />
        </linearGradient>
        </defs>
    </SvgWrapper>
  );
}

export function IconInfraProtection() {
  return (
    <SvgWrapper className="w-[35px] h-[33px]" viewBox="0 0 35 33">
        <path clipRule="evenodd" d={svgPaths.p3b575b80} fill="#264769" fillRule="evenodd" />
        <path d={svgPaths.p23b53e00} stroke="#264769" strokeLinecap="round" strokeWidth="1.14374" />
        <path d={svgPaths.p8747ac0} stroke="url(#paint0_linear_infra)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.94389" />
        <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_infra" x1="20.0611" x2="20.0611" y1="0.971942" y2="18.5936">
            <stop stopColor="#718F9D" />
            <stop offset="1" stopColor="#7A9CFF" stopOpacity="0.58" />
        </linearGradient>
        </defs>
    </SvgWrapper>
  );
}

export function IconCheck() {
  return (
    <SvgWrapper className="size-[12px]" viewBox="0 0 12 12">
        <path clipRule="evenodd" d={svgPaths.p4881140} fill="#264769" fillRule="evenodd" />
    </SvgWrapper>
  );
}

export function IconInfo() {
  return (
    <SvgWrapper className="size-[30px]" viewBox="0 0 30 30">
        <path d={svgPaths.p13144980} fill="#5B626E" />
        <path clipRule="evenodd" d={svgPaths.p2864ec00} fill="#5B626E" fillRule="evenodd" />
    </SvgWrapper>
  );
}

export function IconDownload() {
  return (
    <SvgWrapper className="size-[30px]" viewBox="0 0 30 30">
        <path clipRule="evenodd" d={svgPaths.p3e819e80} fill="#5B626E" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p10a81300} fill="#5B626E" fillRule="evenodd" />
        <path d={svgPaths.p1da5af00} fill="#5B626E" />
        <path d={svgPaths.p1a9466f0} fill="#5B626E" />
        <path d={svgPaths.pc152980} fill="#5B626E" />
    </SvgWrapper>
  );
}

export function IconBandwidth() {
  return (
    <SvgWrapper className="size-[15px]" viewBox="0 0 15 13">
        <path clipRule="evenodd" d={svgPaths.p217add80} fill="#015ECB" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p27f06900} fill="#015ECB" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p158a00} fill="#015ECB" fillRule="evenodd" />
    </SvgWrapper>
  );
}

export function IconApplications() {
  return (
    <SvgWrapper className="size-[14px]" viewBox="0 0 14 14">
        <rect height="12.75" rx="1.125" stroke="#015ECB" strokeWidth="0.75" width="12.75" x="0.375" y="0.375" />
        <path d={svgPaths.p25d19100} fill="#015ECB" />
        <path d={svgPaths.p202a3200} fill="#015ECB" />
    </SvgWrapper>
  );
}

export function IconZap() {
  return (
    <SvgWrapper className="size-[15px]" viewBox="0 0 15 16">
        <path clipRule="evenodd" d={svgPaths.pe754000} fill="#015ECB" fillRule="evenodd" />
    </SvgWrapper>
  );
}

export function IconSite() {
  return (
    <SvgWrapper className="size-[15px]" viewBox="0 0 15 15">
        <path d={svgPaths.p26ff9500} fill="#015ECB" />
    </SvgWrapper>
  );
}

export function IconPlanShield() {
    return (
        <SvgWrapper className="size-[30px]" viewBox="0 0 18 20">
            <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_shield" x1="2.48426" x2="16.1678" y1="16.8422" y2="4.09318">
              <stop offset="0.1" stopColor="#BD1E35" />
              <stop offset="0.333333" stopColor="#8C3D5B" />
              <stop offset="0.520833" stopColor="#784A6A" />
              <stop offset="0.666667" stopColor="#61597C" />
              <stop offset="0.796875" stopColor="#556086" />
              <stop offset="1" stopColor="#38729B" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_shield" x1="2.48426" x2="16.1678" y1="16.8422" y2="4.09318">
              <stop offset="0.1" stopColor="#BD1E35" />
              <stop offset="0.333333" stopColor="#8C3D5B" />
              <stop offset="0.520833" stopColor="#784A6A" />
              <stop offset="0.666667" stopColor="#61597C" />
              <stop offset="0.796875" stopColor="#556086" />
              <stop offset="1" stopColor="#38729B" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_shield" x1="3.08673" x2="15.4869" y1="16.2142" y2="4.66686">
              <stop offset="0.1" stopColor="#BD1E35" />
              <stop offset="0.333333" stopColor="#8C3D5B" />
              <stop offset="0.520833" stopColor="#784A6A" />
              <stop offset="0.666667" stopColor="#61597C" />
              <stop offset="0.796875" stopColor="#556086" />
              <stop offset="1" stopColor="#38729B" />
            </linearGradient>
          </defs>
            <path d={svgPaths.p27ca7300} stroke="url(#paint0_linear_shield)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.395964" />
            <path d={svgPaths.p27ca7300} stroke="url(#paint1_linear_shield)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.395964" />
            <path d={svgPaths.p23a8ed80} fill="url(#paint2_linear_shield)" />
        </SvgWrapper>
    )
}

export function IconPlanGlobe() {
    return (
        <SvgWrapper className="size-[30px]" viewBox="0 0 30 30">
             <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_globe" x1="4.16599" x2="24.7722" y1="25.3212" y2="3.67929">
            <stop offset="0.1" stopColor="#BD1E35" />
            <stop offset="0.333333" stopColor="#8C3D5B" />
            <stop offset="0.520833" stopColor="#784A6A" />
            <stop offset="0.666667" stopColor="#61597C" />
            <stop offset="0.796875" stopColor="#556086" />
            <stop offset="1" stopColor="#38729B" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_globe" x1="9.48904" x2="21.3688" y1="22.0455" y2="11.0547">
            <stop offset="0.1" stopColor="#BD1E35" />
            <stop offset="0.333333" stopColor="#8C3D5B" />
            <stop offset="0.520833" stopColor="#784A6A" />
            <stop offset="0.666667" stopColor="#61597C" />
            <stop offset="0.796875" stopColor="#556086" />
            <stop offset="1" stopColor="#38729B" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_globe" x1="23.5818" x2="5.39303" y1="26.0003" y2="4.89426">
            <stop offset="0.1" stopColor="#BD1E35" />
            <stop offset="0.333333" stopColor="#8C3D5B" />
            <stop offset="0.520833" stopColor="#784A6A" />
            <stop offset="0.666667" stopColor="#61597C" />
            <stop offset="0.796875" stopColor="#556086" />
            <stop offset="1" stopColor="#38729B" />
          </linearGradient>
        </defs>
          <path d={svgPaths.p2227db00} stroke="url(#paint0_linear_globe)" strokeLinejoin="round" strokeWidth="0.34204" />
          <path d={svgPaths.p2a1e7fc0} fill="url(#paint1_linear_globe)" />
          <path d={svgPaths.pa403080} stroke="url(#paint2_linear_globe)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.342042" />
        </SvgWrapper>
    )
}

export function IconPlanDiamond() {
    return (
        <SvgWrapper className="size-[24px]" viewBox="0 0 23 24">
             <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_diamond" x1="3.58589" x2="18.0457" y1="19.3649" y2="4.08395">
              <stop offset="0.1" stopColor="#BD1E35" />
              <stop offset="0.333333" stopColor="#8C3D5B" />
              <stop offset="0.520833" stopColor="#784A6A" />
              <stop offset="0.666667" stopColor="#61597C" />
              <stop offset="0.796875" stopColor="#556086" />
              <stop offset="1" stopColor="#38729B" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_diamond" x1="2.99361" x2="16.3092" y1="16.3352" y2="0.883915">
              <stop offset="0.1" stopColor="#BD1E35" />
              <stop offset="0.333333" stopColor="#8C3D5B" />
              <stop offset="0.520833" stopColor="#784A6A" />
              <stop offset="0.666667" stopColor="#61597C" />
              <stop offset="0.796875" stopColor="#556086" />
              <stop offset="1" stopColor="#38729B" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_diamond" x1="3.06116" x2="18.493" y1="19.8536" y2="3.52981">
              <stop offset="0.1" stopColor="#BD1E35" />
              <stop offset="0.333333" stopColor="#8C3D5B" />
              <stop offset="0.520833" stopColor="#784A6A" />
              <stop offset="0.666667" stopColor="#61597C" />
              <stop offset="0.796875" stopColor="#556086" />
              <stop offset="1" stopColor="#38729B" />
            </linearGradient>
          </defs>
            <path d={svgPaths.p175a8170} fill="url(#paint0_linear_diamond)" />
            <path d={svgPaths.p397b6900} fill="url(#paint1_linear_diamond)" />
            <path d={svgPaths.p15fd4500} stroke="url(#paint2_linear_diamond)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.273167" />
        </SvgWrapper>
    )
}
