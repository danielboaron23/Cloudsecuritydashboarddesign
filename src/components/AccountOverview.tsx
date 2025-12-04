import React, { useState, useRef, useEffect } from 'react';
import svgPaths from '../imports/svg-f1cvh6yttf';
import { ThreatIntelligencePopover } from './ThreatIntelligencePopover';

export function AccountOverview() {
  const [showThreatPopover, setShowThreatPopover] = useState(false);
  const threatCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
        if (threatCardRef.current && !threatCardRef.current.contains(event.target as Node)) {
            setShowThreatPopover(false);
        }
    }
    
    if (showThreatPopover) {
        document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showThreatPopover]);

  return (
    <div className="flex gap-5 w-full items-stretch">
      {/* Account ID Card */}
      <div className="bg-white rounded-lg p-5 flex items-center justify-between h-[83px] min-w-[350px] shadow-sm relative overflow-hidden shrink-0">
        <div className="flex items-center gap-3 z-10">
          <div className="w-[26px] h-[26px] rounded-full border border-[#5B626E] flex items-center justify-center shrink-0">
             <svg width="14" height="14" viewBox="0 0 26 26" className="fill-[#264769]">
               <path d={svgPaths.p2280ad00} />
             </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-[#5b626e]">Parent Account</span>
            <span className="text-sm font-medium text-[#264769]">Samsung</span>
          </div>
        </div>

        <div className="flex items-center gap-4 z-10">
           <div className="w-[40px] h-[40px] relative shrink-0">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                 <circle cx="20" cy="20" r="19" stroke="#5B626E" strokeWidth="1" fill="none"/>
                 <circle cx="34.8" cy="6.1" r="4" fill="#156C42"/>
                 <path d={svgPaths.pc4dbe80} fill="#264769"/>
              </svg>
           </div>
           <div className="flex flex-col items-start">
             <span className="text-base font-medium text-[#264769]">Account Name</span>
             <span className="text-xs bg-[#f5f6f8] px-2 py-0.5 rounded text-[#5b626e]">Master</span>
           </div>
        </div>
        
        {/* Decorative dots */}
        <div className="absolute bottom-3 left-[140px] flex gap-1">
           {Array.from({length: 12}).map((_, i) => (
             <div key={i} className="w-1 h-1 rounded-full bg-[#D4D6DB]" />
           ))}
        </div>
      </div>

      {/* Info Strip */}
      <div className="bg-white rounded-lg flex-1 h-[83px] flex items-center justify-between px-6 shadow-sm min-w-0 overflow-hidden">
        
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full border border-[#D4D6DB] flex items-center justify-center p-2 shrink-0">
             <svg viewBox="0 0 40 40" className="w-full h-full">
                <path d={svgPaths.p315f500} fill="#264769" />
             </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-[#264769]">Country/Address</span>
            <div className="flex items-center gap-1">
               {/* Germany Flag SVG from path p137d4ef0 and others */}
               <div className="w-[12px] h-[9px] relative">
                  <svg viewBox="0 0 12 9" className="w-full h-full">
                     <path d={svgPaths.p137d4ef0} fill="#ED4C49" />
                     <path d={svgPaths.p1d7bed00} fill="#FFD128" />
                     <path d="M0 0V3H11.7V0H0Z" fill="#292929" />
                  </svg>
               </div>
               <span className="text-xs text-[#5b626e]">Account Address</span>
            </div>
          </div>
        </div>

        <div className="w-px h-10 bg-[#EDEEF0] shrink-0"></div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full border border-[#D4D6DB] flex items-center justify-center shrink-0">
             <svg viewBox="0 0 40 40" className="w-5 h-5">
                <path d={svgPaths.pa792200} fill="#264769" />
             </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-[#264769]">Date Created</span>
            <span className="text-xs text-[#5b626e]">08/09/2022</span>
          </div>
        </div>

        <div className="w-px h-10 bg-[#EDEEF0] shrink-0"></div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full border border-[#D4D6DB] flex items-center justify-center shrink-0">
             <svg viewBox="0 0 40 40" className="w-5 h-5">
                <path clipRule="evenodd" d={svgPaths.p27ee1e00} fill="#264769" fillRule="evenodd" />
             </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-[#264769]">ID</span>
            <span className="text-xs text-[#5b626e] font-mono">63ce3a10924...</span>
          </div>
        </div>

        <div className="w-px h-10 bg-[#EDEEF0] shrink-0"></div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full border border-[#D4D6DB] flex items-center justify-center shrink-0">
             <svg viewBox="0 0 40 40" className="w-5 h-5">
                <path d={svgPaths.pddc1dc0} fill="#264769" />
             </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-[#264769]">Notes</span>
            <span className="text-xs text-[#5b626e]">N/A</span>
          </div>
        </div>

      </div>

      {/* Threat Intelligence */}
      <div 
        ref={threatCardRef}
        className="bg-white rounded-lg p-5 h-[83px] flex items-center gap-4 min-w-[200px] shadow-sm shrink-0 cursor-pointer relative hover:bg-gray-50 transition-colors"
        onClick={() => setShowThreatPopover(!showThreatPopover)}
      >
         <div className="w-[30px] h-[21px] shrink-0 relative">
            {/* Threat Map Icon using the paths from Group2/Frame */}
            <svg viewBox="0 0 30 21" className="w-full h-full overflow-visible">
               {/* The gradient path from p308b9900 is the main graph line */}
               <path d={svgPaths.p308b9900} stroke="#7A9CFF" strokeWidth="2" fill="none"/>
               {/* Group 3 dots */}
               <circle cx="4.9" cy="2.3" r="1.1" stroke="#264769" strokeWidth="1.2" fill="none" />
               <circle cx="3.6" cy="7.9" r="1.1" stroke="#264769" strokeWidth="1.2" fill="none" />
               <circle cx="1.7" cy="14" r="1.1" stroke="#264769" strokeWidth="1.2" fill="none" />
               <circle cx="4.9" cy="17.7" r="1.1" stroke="#264769" strokeWidth="1.2" fill="none" />
               {/* Connecting lines */}
               <path d={svgPaths.p3c3ffe80} stroke="#264769" strokeWidth="1.2" strokeLinecap="round" />
               <path d={svgPaths.p2d7279c0} stroke="#264769" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
         </div>
         <div className="flex flex-col">
            <span className="text-xs font-medium text-[#264769]">Threat Intelligence</span>
            <div className="flex items-center justify-between bg-[#f0f4ff] px-2 py-1 rounded text-xs text-[#004cc5] w-[100px] mt-1">
               <span>Free</span>
               <div className="w-4 h-4">
                  {/* Shield Icon */}
                  <svg viewBox="0 0 15 16">
                     <path d={svgPaths.p28a59b80} stroke="#38729B" strokeWidth="1" fill="none"/>
                     <path d={svgPaths.p7bfc700} fill="#38729B"/>
                  </svg>
               </div>
            </div>
         </div>

         {/* Popover */}
         {showThreatPopover && (
            <div className="absolute top-full right-0 mt-2 z-50">
                <ThreatIntelligencePopover />
            </div>
         )}
      </div>
    </div>
  );
}
