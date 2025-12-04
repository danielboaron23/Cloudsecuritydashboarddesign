import React from "react";
import svgPaths from "../../imports/svg-f1cvh6yttf";

export function Sidebar() {
  return (
    <div className="w-[60px] bg-[#264769] flex flex-col items-center py-4 h-screen fixed left-0 top-0 z-50 justify-between pb-8">
      {/* Top Icons */}
      <div className="flex flex-col gap-4 items-center w-full">
        <SidebarButton path={svgPaths.pb5e7280} name="Menu 1" />
        <SidebarButton path={svgPaths.p22626280} name="Menu 2" />
        <SidebarButton path={svgPaths.p79d2200} name="Menu 3" isGroup />
        <SidebarButton path={svgPaths.p1a73ef00} name="Menu 4" />
        
        {/* Active/Highlighted Icon (Shield?) */}
        <div className="relative w-12 h-12 flex items-center justify-center">
           <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
             <path fillRule="evenodd" clipRule="evenodd" d={svgPaths.p1de39c30} fill="white" opacity="0.5" />
             <path d={svgPaths.pa17f080} fill="white" opacity="0.5" />
           </svg>
        </div>

        <SidebarButton path={svgPaths.p2bb2d400} name="Menu 5" isGroup />
        <SidebarButton path={svgPaths.p75d100} name="Menu 6" isComplex />
      </div>

      {/* Bottom Icons */}
      <div className="flex flex-col gap-4 items-center w-full">
         {/* Complex Blue Icon */}
         <div className="w-12 h-12 flex items-center justify-center relative">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <path clipRule="evenodd" d={svgPaths.p314b1600} fill="url(#paint0_linear_sidebar)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p18a02400} fill="#309EFF" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p298e1100} fill="#309EFF" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p3c58c500} fill="#309EFF" fillRule="evenodd" />
                <path d={svgPaths.pb23bb00} fill="#309EFF" />
                <path clipRule="evenodd" d={svgPaths.p12b29800} fill="#309EFF" fillRule="evenodd" />
                <defs>
                  <linearGradient id="paint0_linear_sidebar" x1="12.5" y1="14.6" x2="40.8" y2="27.2" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="0.376" stopColor="#D3DEFF" />
                    <stop offset="1" stopColor="#537FFD" />
                  </linearGradient>
                </defs>
            </svg>
         </div>

         <SidebarButton path={svgPaths.p18ec3100} name="Settings" />
         
         {/* Theme Switch */}
         <div className="w-5 h-10 bg-white rounded-full relative cursor-pointer">
            <div className="absolute top-[2px] left-[2px]">
                <svg width="16" height="16" viewBox="0 0 20 40">
                   <path clipRule="evenodd" d={svgPaths.p15e94200} fill="#264769" fillRule="evenodd" transform="scale(0.8) translate(2,2)"/>
                </svg>
            </div>
            <div className="absolute bottom-[2px] left-[2px]">
                 <svg width="16" height="16" viewBox="0 0 20 40">
                    <path d={svgPaths.p1f9b86d8} fill="#264769" transform="scale(0.4) translate(6, 55)" />
                 </svg>
            </div>
         </div>
      </div>
    </div>
  );
}

function SidebarButton({ path, name, isGroup, isComplex }: { path: string; name: string; isGroup?: boolean; isComplex?: boolean }) {
  return (
    <button className="w-12 h-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity" aria-label={name}>
      <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
        {isGroup ? (
             <g opacity="1">
                <path d={path} fill="white" />
                {/* Some complex paths have multiple parts, simplifying for now */}
             </g>
        ) : isComplex ? (
             <path d={path} fill="white" />
        ) : (
             <path d={path} fill="white" />
        )}
      </svg>
    </button>
  );
}
