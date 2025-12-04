import React from 'react';
import { ChevronDown, Bell, Lightbulb, RotateCcw, Activity } from 'lucide-react';
import svgPaths from '../imports/svg-f1cvh6yttf';

export function Header() {
  return (
    <header className="h-[50px] bg-[#f3f5f7] flex items-center justify-between px-5 shrink-0">
      <div className="flex items-center gap-5">
        {/* Logo Area */}
        <div className="flex items-center gap-3">
           <div className="w-[19px] h-[30px]">
             <svg viewBox="0 0 19 30" className="w-full h-full">
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
           <div className="text-[18px] leading-none">
             <span className="font-bold">Cloud</span> <span className="font-light">Services</span>
           </div>
        </div>

        {/* Account Selector */}
        <div className="relative">
          <button className="flex items-center justify-between w-[250px] h-[30px] px-3 bg-transparent border border-[#d4d6db] rounded-lg text-[#264769] text-xs">
            <span>Radware Operator</span>
            <ChevronDown size={14} className="text-[#5B626E]" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-[#0280ef] rounded-full px-3 py-1 flex items-center gap-1">
           <div className="w-auto h-[14px] flex items-center">
             {/* AI Doc Xpert Logo simplified */}
             <span className="text-white text-[10px] font-bold tracking-wider">AI DOC Xpert</span>
           </div>
        </button>
        
        <button className="text-[#264769]">
          <RotateCcw size={20} />
        </button>
        
        <button className="text-[#264769]">
          <Lightbulb size={20} />
        </button>

        <button className="text-[#264769]">
          <Activity size={20} />
        </button>

        <button className="w-[30px] h-[30px] rounded-full border border-[#E0E0E0] flex items-center justify-center text-[#264769]">
          <Bell size={16} />
        </button>

        <button className="w-[30px] h-[30px] rounded-full bg-[#264769] flex items-center justify-center text-white text-[10px]">
          AA
        </button>
      </div>
    </header>
  );
}
