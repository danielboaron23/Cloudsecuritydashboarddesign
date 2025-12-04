import React from "react";
import svgPaths from "../../imports/svg-f1cvh6yttf";
import { Bell, HelpCircle, Settings, User } from "lucide-react";

export function TopHeader() {
  return (
    <div className="bg-[#F3F5F7] h-[50px] flex items-center justify-between px-5 border-b border-gray-200/50">
      <div className="flex items-center gap-4">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
            <div className="w-5 h-8 relative">
                <svg viewBox="0 0 19 30" fill="none" className="w-full h-full">
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
            <div className="text-[#202020] text-xs leading-none">
                <span className="font-bold">Cloud</span>
                <span className="font-light"> Services</span>
            </div>
        </div>

        {/* Separator / Dropdown */}
        <div className="flex items-center gap-2 bg-white border border-[#d4d6db] rounded-md px-3 py-1.5 h-[30px] w-[250px] justify-between cursor-pointer">
            <span className="text-[#264769] text-xs">Radware Operator</span>
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                <path d={svgPaths.p77e4300} fill="#5B626E" />
            </svg>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* AI Doc Expert Button */}
        <button className="bg-[#0280ef] text-white rounded-full px-3 py-1 flex items-center gap-1 h-[22px]">
            <div className="flex items-center relative w-16 h-4">
                 {/* Mocking the logo with text for simplicity or using partial SVG if essential */}
                 <span className="text-[10px] font-bold">AI DOC</span>
                 <span className="text-[10px] font-light">Xpert</span>
            </div>
        </button>

        {/* Action Icons */}
        <div className="flex items-center gap-3 text-[#264769]">
            <button className="p-1 hover:bg-gray-200 rounded">
                <svg width="24" height="24" viewBox="0 0 30 30" fill="none">
                    <path d={svgPaths.p19924120} fill="currentColor"/>
                    <path d={svgPaths.p1e9ad100} fill="currentColor"/>
                </svg>
            </button>
            <button className="p-1 hover:bg-gray-200 rounded">
                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d={svgPaths.p12ccbb00} fill="currentColor"/>
                    <path d={svgPaths.pe964100} fill="currentColor"/>
                    <path d={svgPaths.p24bbb9f0} fill="currentColor"/>
                 </svg>
            </button>
            <button className="p-1 hover:bg-gray-200 rounded">
                <svg width="24" height="24" viewBox="0 0 30 30" fill="none">
                    <path d={svgPaths.p10c47a80} fill="currentColor" />
                </svg>
            </button>
            <button className="p-1 hover:bg-gray-200 rounded relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-[#F3F5F7]"></span>
            </button>
            
            <div className="w-8 h-8 bg-[#264769] rounded-full flex items-center justify-center text-white text-xs cursor-pointer">
                AA
            </div>
        </div>
      </div>
    </div>
  );
}
