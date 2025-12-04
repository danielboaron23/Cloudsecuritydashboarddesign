import React from 'react';
import svgPaths from '../imports/svg-f1cvh6yttf';

interface NavigationProps {
    onViewChange?: (view: 'account' | 'agentic') => void;
    currentView?: 'account' | 'agentic';
}

export function Navigation({ onViewChange, currentView }: NavigationProps) {
  return (
    <div className="w-[48px] bg-[#264769] flex flex-col items-center pt-2 pb-9 gap-0 shrink-0 z-20 h-full justify-between">
      <div className="flex flex-col items-center gap-3 w-full">
        {/* Top Icons */}
        <div 
            className="w-[48px] h-[48px] flex items-center justify-center opacity-50 hover:opacity-100 cursor-pointer"
            onClick={() => onViewChange?.('account')}
        >
           <svg width="48" height="48" viewBox="0 0 48 48" className="w-full h-full fill-white">
             <path d={svgPaths.pb5e7280} />
           </svg>
        </div>
        <div className="w-[48px] h-[48px] flex items-center justify-center opacity-50 hover:opacity-100 cursor-pointer">
           <svg width="48" height="48" viewBox="0 0 48 48" className="w-full h-full fill-white">
             <path d={svgPaths.p22626280} />
           </svg>
        </div>
        <div className="w-[48px] h-[48px] flex items-center justify-center opacity-50 hover:opacity-100 cursor-pointer">
           <svg width="48" height="48" viewBox="0 0 48 48" className="w-full h-full">
             <path d={svgPaths.p79d2200} fill="white" />
             <path clipRule="evenodd" d={svgPaths.pf74ea00} fill="white" fillRule="evenodd" />
           </svg>
        </div>
        <div className="w-[48px] h-[48px] flex items-center justify-center opacity-50 hover:opacity-100 cursor-pointer">
           <svg width="48" height="48" viewBox="0 0 48 48" className="w-full h-full fill-white">
             <path d={svgPaths.p1a73ef00} />
           </svg>
        </div>
        <div className="w-[48px] h-[48px] flex items-center justify-center opacity-50 hover:opacity-100 cursor-pointer relative">
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[18px] h-[19px]">
             <svg width="19" height="19" viewBox="0 0 19 19" className="w-full h-full fill-white">
               <path clipRule="evenodd" d={svgPaths.p1de39c30} fillRule="evenodd" />
               <path d={svgPaths.pa17f080} />
             </svg>
           </div>
        </div>
        <div className="w-[48px] h-[48px] flex items-center justify-center opacity-50 hover:opacity-100 cursor-pointer">
           <svg width="48" height="48" viewBox="0 0 48 48" className="w-full h-full fill-white">
             <path d={svgPaths.p2bb2d400} />
             <path clipRule="evenodd" d={svgPaths.p38592200} fillRule="evenodd" />
           </svg>
        </div>
        
        {/* This is the selected button for "Agentic Summary" */}
        <div 
            className={`w-[48px] h-[48px] flex items-center justify-center cursor-pointer transition-opacity ${currentView === 'agentic' ? 'opacity-100 bg-[#309EFF]/10' : 'opacity-50 hover:opacity-100'}`}
            onClick={() => onViewChange?.('agentic')}
        >
           <svg width="48" height="48" viewBox="0 0 48 48" className="w-full h-full fill-white">
             <path d={svgPaths.p75d100} />
             <path d={svgPaths.p191b0d00} />
             <path d={svgPaths.p3d3f0900} />
             <path d={svgPaths.pee491b0} />
             <path d={svgPaths.p22487df0} />
             <path d={svgPaths.p24641400} />
           </svg>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 w-full">
        {/* Bottom Icons */}
        <div className="w-[48px] h-[48px] flex items-center justify-center cursor-pointer">
           <svg width="48" height="48" viewBox="0 0 48 48" className="w-full h-full">
             <defs>
               <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_nav" x1="12.4952" x2="40.7998" y1="14.6619" y2="27.2075">
                 <stop stopColor="white" />
                 <stop offset="0.376484" stopColor="#D3DEFF" />
                 <stop offset="1" stopColor="#537FFD" />
               </linearGradient>
             </defs>
             <path clipRule="evenodd" d={svgPaths.p314b1600} fill="url(#paint0_linear_nav)" fillRule="evenodd" />
             <path clipRule="evenodd" d={svgPaths.p18a02400} fill="#309EFF" fillRule="evenodd" />
             <path clipRule="evenodd" d={svgPaths.p298e1100} fill="#309EFF" fillRule="evenodd" />
             <path clipRule="evenodd" d={svgPaths.p3c58c500} fill="#309EFF" fillRule="evenodd" />
             <path d={svgPaths.pb23bb00} fill="#309EFF" />
             <path clipRule="evenodd" d={svgPaths.p12b29800} fill="#309EFF" fillRule="evenodd" />
             <path d={svgPaths.p49da800} fill="#309EFF" />
           </svg>
        </div>
        
        <div className="w-[48px] h-[48px] flex items-center justify-center opacity-50 hover:opacity-100 cursor-pointer">
           <svg width="48" height="48" viewBox="0 0 48 48" className="w-full h-full fill-white">
             <path d={svgPaths.p18ec3100} />
           </svg>
        </div>

        {/* Theme Switch */}
        <div className="w-[20px] h-[40px] bg-white rounded-full relative cursor-pointer shrink-0 mt-1">
           <div className="absolute top-[2px] left-[2px] w-[16px] h-[16px] bg-[#264769] rounded-full flex items-center justify-center">
             <svg width="10" height="10" viewBox="0 0 20 40" className="fill-white w-2.5 h-2.5">
                <path clipRule="evenodd" d={svgPaths.p15e94200} fillRule="evenodd" />
             </svg>
           </div>
           <div className="absolute bottom-[6px] left-[4px]">
             <svg width="12" height="12" viewBox="0 0 20 40" className="w-3 h-3">
                <path d={svgPaths.p1f9b86d8} fill="#264769" />
             </svg>
           </div>
        </div>
      </div>
    </div>
  );
}
