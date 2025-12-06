import React from 'react';
import svgPaths from '../imports/svg-ochy35uoop';
import { SocXChatManager } from './SocXChatOverlay';

function WhiteLabelLogos() {
  return (
    <div className="h-[30px] relative shrink-0 w-[19px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 30">
        <path d={svgPaths.p3f0e7400} fill="black" />
        <path d={svgPaths.p2ff4eb0} fill="#D2D2D2" />
        <path d={svgPaths.p2bb0dc00} fill="#D2D2D2" />
        <path d={svgPaths.p8fef480} fill="#D2D2D2" />
        <path d={svgPaths.p233fd100} fill="#B4121B" />
        <path d={svgPaths.p2a6f9180} fill="#FAAF3F" />
        <path d={svgPaths.p16ead300} fill="#D2D2D2" />
        <path d={svgPaths.p2d3d0400} fill="#00853F" />
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[10px] h-[30px] items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-roboto font-light justify-center leading-[0] relative shrink-0 text-[#202020] text-[12px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">
          <span className="font-bold">Cloud</span>
          <span>{` Services`}</span>
        </p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[30px] isolate items-center pl-[12px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0 w-[250px] border border-[#d4d6db] bg-transparent">
      <div className="basis-0 flex flex-col font-normal grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#264769] text-[12px] text-nowrap z-[2]">
        <p className="leading-[14px] overflow-ellipsis overflow-hidden">Radware Operator</p>
      </div>
      <div className="relative shrink-0 size-[14px] z-[1]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p77e4300} fill="#5B626E" />
        </svg>
      </div>
    </div>
  );
}

function AiDocXpertButton() {
  return (
    <div className="bg-[#0280ef] relative rounded-[20px] shrink-0 h-[30px] flex items-center" data-name="AI DOC Xpert Button">
        <SocXChatManager />
    </div>
  );
}

function ActionIcon({ path, children }: { path?: string, children?: React.ReactNode }) {
  return (
    <div className="relative shrink-0 size-[30px] flex items-center justify-center">
      {path ? (
         <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
            <path d={path} fill="#264769" />
         </svg>
      ) : children}
    </div>
  );
}

export function Header() {
  return (
    <header className="h-[50px] bg-[#f3f5f7] flex items-center justify-between px-[20px] shrink-0 w-full relative">
      <div className="flex items-center gap-[20px]">
        <WhiteLabelLogos />
        <Logo />
        <Input />
      </div>

      <div className="flex items-center gap-[16px]">
        <AiDocXpertButton />
        
        {/* Icon/Updates */}
        <div className="relative shrink-0 size-[30px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                <g>
                    <path d={svgPaths.p19924120} fill="#264769" />
                    <path d={svgPaths.p1e9ad100} fill="#264769" />
                </g>
            </svg>
        </div>

        {/* Icon/Recommendation (Bulb) */}
        <div className="relative shrink-0 size-[30px] overflow-clip">
            <div className="absolute left-[5px] size-[20px] top-[5px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p12ccbb00} fill="#264769" />
                    <path d={svgPaths.pe964100} fill="#264769" />
                    <path d={svgPaths.p24bbb9f0} fill="#264769" />
                </svg>
            </div>
        </div>

        {/* Icon/Activity Log */}
        <div className="relative shrink-0 size-[30px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                <path d={svgPaths.p10c47a80} fill="#264769" />
            </svg>
        </div>

        {/* Icon/Notifications */}
        <div className="content-stretch flex gap-[8.571px] items-center justify-center overflow-clip relative rounded-[30.857px] shrink-0 size-[30px]">
             <div className="relative shrink-0 size-[20px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p3f00280} fill="#264769" />
                </svg>
             </div>
        </div>

        {/* Avatar */}
        <div className="content-stretch flex gap-[8.571px] items-center justify-center overflow-clip relative rounded-[30.857px] shrink-0 size-[30px]">
            <div className="bg-[#264769] content-stretch flex gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[22px]">
                <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-nowrap text-white">
                    <p className="leading-[12px] whitespace-pre">AA</p>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
}
