import React from 'react';
import { IconAccount, IconAccountLarge, IconWorld, IconCalendar, IconID, IconNotes, IconThreat } from './ui/Icons';

function InfoCard({ icon: Icon, label, value, subValue, badge }: any) {
    return (
        <div className="flex items-center gap-3 p-4 min-w-fit">
            <div className="shrink-0">
                <Icon />
            </div>
            <div className="flex flex-col">
                <span className="text-[12px] font-medium text-[#264769]">{label}</span>
                <div className="flex items-center gap-2 mt-0.5">
                    {badge && (
                        <span className="bg-[#F5F6F8] text-[#5B626E] text-[11px] px-2 py-0.5 rounded-sm">
                            {badge}
                        </span>
                    )}
                    <span className="text-[13px] text-[#5B626E] font-normal whitespace-nowrap">
                        {value}
                    </span>
                </div>
                {subValue && <span className="text-[11px] text-[#5B626E]">{subValue}</span>}
            </div>
        </div>
    )
}

export function AccountInfoStrip() {
  return (
    <div className="px-6 pb-6">
      <div className="bg-white rounded-lg shadow-sm border border-[#EDEEF0] flex items-center divide-x divide-[#EDEEF0] overflow-x-auto no-scrollbar">
        
        {/* Parent Account */}
        <div className="flex items-center gap-3 p-5 min-w-[200px]">
            <IconAccount />
            <div className="flex flex-col">
                <span className="text-[12px] text-[#5B626E]">Parent Account</span>
                <span className="text-[14px] font-medium text-[#264769]">Samsung</span>
            </div>
        </div>

        {/* Account Name */}
        <div className="flex items-center gap-3 p-5 min-w-[220px]">
            <IconAccountLarge />
            <div className="flex flex-col gap-1">
                <span className="text-[15px] font-medium text-[#264769]">Account Name</span>
                <span className="bg-[#F5F6F8] text-[#5B626E] text-[11px] px-2 py-0.5 rounded-sm w-fit">Master</span>
            </div>
        </div>

        {/* Details Strip */}
        <div className="flex items-center flex-1 divide-x divide-[#EDEEF0]">
            <div className="flex items-center gap-3 px-6 py-4">
                <IconWorld />
                <div className="flex flex-col">
                    <span className="text-[12px] font-medium text-[#264769]">Country/Address</span>
                    <div className="flex items-center gap-2 mt-1">
                        {/* Flag mockup */}
                        <div className="w-4 h-3 bg-gradient-to-b from-black via-red-500 to-yellow-400" /> 
                        <span className="text-[12px] text-[#5B626E]">Account Address</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3 px-6 py-4">
                <IconCalendar />
                <div className="flex flex-col">
                    <span className="text-[12px] text-[#264769]">Date Created</span>
                    <span className="text-[12px] text-[#5B626E] mt-1">08/09/2022</span>
                </div>
            </div>

            <div className="flex items-center gap-3 px-6 py-4">
                <IconID />
                <div className="flex flex-col">
                    <span className="text-[12px] text-[#264769]">ID</span>
                    <span className="text-[12px] text-[#5B626E] mt-1 font-mono">63ce3a10924df44118eb6510</span>
                </div>
            </div>

            <div className="flex items-center gap-3 px-6 py-4 flex-1">
                <IconNotes />
                <div className="flex flex-col">
                    <span className="text-[12px] text-[#264769]">Notes</span>
                    <span className="text-[12px] text-[#5B626E] mt-1">N/A</span>
                </div>
            </div>
        </div>

        {/* Threat Intelligence Card (Separate look in design) */}
        <div className="p-4 min-w-[200px]">
            <div className="bg-white flex items-center gap-3">
                <div className="flex flex-col gap-1">
                    <span className="text-[12px] font-medium text-[#264769]">Threat Intelligence</span>
                    <div className="bg-[#F0F4FF] px-2 py-1 rounded-md flex items-center justify-between gap-8 border border-[#F0F4FF]">
                        <span className="text-[#004CC5] text-[12px] font-medium">Free</span>
                        <IconThreat />
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
