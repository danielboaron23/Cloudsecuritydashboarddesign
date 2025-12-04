import React from 'react';
import { Shield, Info, Zap, Globe, Download, ChevronDown } from 'lucide-react';
import { TrafficChart } from './TrafficChart';
import svgPaths from '../imports/svg-f1cvh6yttf';
import { cn } from '../utils/cn';

interface ProtectionModuleProps {
  title: string;
  type: 'WAF' | 'DDoS';
  plan: string;
  data: any[];
}

export function ProtectionModule({ title, type, plan, data }: ProtectionModuleProps) {
  const isWAF = type === 'WAF';

  return (
    <div className="flex-1 bg-white rounded-lg p-5 shadow-sm flex flex-col gap-5 min-w-[500px]">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10">
             {isWAF ? (
               <svg viewBox="0 0 39 33" className="w-full h-full">
                 <path d={svgPaths.p2822ef00} fill="#264769" />
                 <path d={svgPaths.p3fca6200} stroke="#7A9CFF" strokeWidth="2" fill="none" />
               </svg>
             ) : (
               <svg viewBox="0 0 35 33" className="w-full h-full">
                 <path d={svgPaths.p3b575b80} fill="#264769" />
                 <path d={svgPaths.p23b53e00} stroke="#264769" strokeWidth="1" />
                 <path d={svgPaths.p8747ac0} stroke="#7A9CFF" strokeWidth="2" fill="none" />
               </svg>
             )}
          </div>
          <h2 className="text-lg font-medium text-[#264769]">{title}</h2>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-base font-medium text-[#264769]">Plan</span>
          {isWAF ? (
            <div className="flex gap-1">
               <div className="w-10 h-10 bg-[#f5f6f8] rounded flex items-center justify-center">
                  <svg viewBox="0 0 18 20" className="w-6 h-6">
                     <path d={svgPaths.p27ca7300} stroke="#38729B" strokeWidth="1" fill="none" />
                     <path d={svgPaths.p23a8ed80} fill="#38729B" />
                  </svg>
               </div>
               <div className="w-10 h-10 bg-[#f5f6f8] rounded flex items-center justify-center">
                  <svg viewBox="0 0 30 30" className="w-6 h-6">
                     <path d={svgPaths.p2227db00} stroke="#38729B" strokeWidth="1" fill="none" />
                     <path d={svgPaths.p2a1e7fc0} fill="#38729B" />
                     <path d={svgPaths.pa403080} stroke="#38729B" strokeWidth="1" fill="none" />
                  </svg>
               </div>
               <div className="flex items-center gap-4 px-2 py-1.5 bg-[#fff5db] border border-[#264769] rounded">
                  <span className="text-xs font-medium text-[#264769]">Complete</span>
                  <svg viewBox="0 0 23 24" className="w-6 h-6">
                     <path d={svgPaths.p175a8170} fill="#38729B" />
                     <path d={svgPaths.p397b6900} fill="#38729B" />
                     <path d={svgPaths.p15fd4500} stroke="#38729B" strokeWidth="1" fill="none" />
                  </svg>
               </div>
            </div>
          ) : (
            <div className="flex items-center justify-between px-2 py-1 bg-[#e0f7fa] border border-[#006064] rounded w-[135px] h-[40px]">
               <span className="text-xs font-medium text-[#006064]">Hybrid</span>
               <svg viewBox="0 0 20 20" className="w-5 h-5">
                  <path d={svgPaths.p137a8000} fill="#006064" />
               </svg>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Split */}
      <div className="flex gap-5 h-[700px]">
        
        {/* Left Column: Features List */}
        <div className="w-[280px] flex flex-col border-r border-[#edeef0] pr-2 overflow-y-auto custom-scrollbar">
           <div className="space-y-0">
              {isWAF ? (
                <>
                  <FeatureRow label="Web Application Firewall" checked />
                  <FeatureRow label="API Protection" checked />
                  <FeatureRow label="Advanced Rules" checked />
                  <FeatureRow label="Basic Bot Protection" disabled />
                  <FeatureRow label="DDoS Protection" checked suffix="10 Gbps" />
                  <FeatureRow label="Support" checked suffix="Advanced" />
                  <FeatureRow label="Data Retention" checked suffix="90 Days" />
                  <FeatureRow label="Advanced WAF" checked icon={<Info size={16} className="text-[#5B626E]" />} />
                  <FeatureRow label="ERT Active Attacker Feed" checked />
                  <FeatureRow label="Bot Manager" checked />
                  <FeatureRow label="Client-side Protection" checked />
                  <FeatureRow label="API Discovery" checked />
                  <FeatureRow label="Web DDoS" checked badge="Add-on" />
                  <FeatureRow label="Unlimited DDoS" disabled badge="Add-on" />
                  <FeatureRow label="Premium Support" checked badge="Add-on" />
                  <FeatureRow label="CDN" checked badge="Add-on" />
                  <FeatureRow label="PCI DSS" checked badge="Add-on" />
                  <FeatureRow label="DNS" checked badge="Add-on" />
                  <FeatureRow label="Access-Log" checked badge="Add-on" />
                </>
              ) : (
                <>
                  <FeatureRow label="Firewall Services" checked />
                  <FeatureRow label="Network Analytics" disabled badge="Free Trial" />
                  <FeatureRow label="AI SOC Xpert" disabled badge="Free Trial" />
                </>
              )}
           </div>
        </div>

        {/* Right Column: Usage & Stats */}
        <div className="flex-1 flex flex-col gap-4">
           
           {/* Date Range Status */}
           <div className="flex gap-2 mb-2">
              <div className="bg-[#f5f6f8] rounded px-2 py-1 text-[11px] text-[#5b626e]">
                 Start: <span className="font-medium text-[#264769]">04/06/2023</span>
              </div>
              <div className="bg-[#f5f6f8] rounded px-2 py-1 text-[11px] text-[#5b626e]">
                 End: <span className="font-medium text-[#264769]">04/06/2026</span>
              </div>
              <div className="bg-[#f5f6f8] rounded px-2 py-1 text-[11px] text-[#5b626e] flex-1">
                 Remaining: <span className="font-medium text-[#264769]">11 months and 7 days</span>
              </div>
           </div>

           <div className="flex items-center justify-between border-b border-[#EDEEF0] pb-2 mb-2">
              <h3 className="text-base font-medium text-[#264769]">Usage</h3>
           </div>

           {/* Bandwidth Stats */}
           <div className="flex flex-col w-full">
              <div className="bg-[#f5f6f8] rounded-t px-2 py-1 flex items-center gap-2">
                 <div className="w-4 h-4 bg-[#015ecb] rounded-full flex items-center justify-center">
                     <svg width="10" height="10" viewBox="0 0 15 13" className="fill-white">
                        <path d={svgPaths.p217add80} />
                        <path d={svgPaths.p27f06900} />
                        <path d={svgPaths.p158a00} />
                     </svg>
                 </div>
                 <span className="text-sm text-[#264769]">Bandwidth</span>
              </div>
              <div className="flex bg-[#f5f6f8] rounded-b mt-0.5">
                 <StatBox value={isWAF ? "300" : "405"} unit="Mbps" label="Purchased" />
                 <StatBox value={isWAF ? "81.42" : "0"} unit="Kbps" label="95 Percentile" />
                 <div className="flex-1 flex items-center justify-between px-5 py-4 bg-[#f5f6f8]">
                    <StatInner value={isWAF ? "58.81" : "0"} unit="Kbps" label="Average" />
                    <StatInner value={isWAF ? "84.74" : "225"} unit="Kbps" label="Peak" />
                 </div>
              </div>
           </div>

           {/* Applications Stats */}
           <div className="flex flex-col w-full">
              <div className="bg-[#f5f6f8] rounded-t px-2 py-1 flex items-center gap-2">
                 {isWAF ? (
                    <div className="w-[14px] h-[14px] relative">
                       <svg viewBox="0 0 14 14" className="fill-[#015ECB]">
                          <path d={svgPaths.p25d19100} />
                          <path d={svgPaths.p202a3200} />
                       </svg>
                    </div>
                 ) : (
                    <div className="w-[15px] h-[16px] relative">
                       <svg viewBox="0 0 15 16" className="fill-[#015ECB]">
                          <path clipRule="evenodd" d={svgPaths.pe754000} fillRule="evenodd" />
                       </svg>
                    </div>
                 )}
                 <span className="text-sm text-[#264769]">Applications</span>
              </div>
              <div className="flex bg-[#f5f6f8] rounded-b mt-0.5">
                 <StatBox value={isWAF ? "100" : "6000"} label="Purchased" />
                 <StatBox value={isWAF ? "26" : "338"} label="Protected" />
                 {isWAF && <div className="flex-1 bg-[#f5f6f8]" />}
              </div>
           </div>

           {/* Second Applications Stat Block for DDoS (Infrastructure) */}
           {!isWAF && (
              <div className="flex flex-col w-full">
                 <div className="bg-[#f5f6f8] rounded-t px-2 py-1 flex items-center gap-2">
                    <div className="w-[15px] h-[15px] relative">
                       <svg viewBox="0 0 15 15" className="fill-[#015ECB]">
                          <path d={svgPaths.p26ff9500} />
                       </svg>
                    </div>
                    <span className="text-sm text-[#264769]">Applications</span>
                 </div>
                 <div className="flex bg-[#f5f6f8] rounded-b mt-0.5">
                    <StatBox value="61" label="Purchased" />
                    <StatBox value="71" label="Protected" />
                    <div className="flex-1 bg-[#f5f6f8]" />
                 </div>
              </div>
           )}

           {/* Chart Section */}
           <div className="flex flex-col gap-4 mt-4 flex-1 min-h-0">
              <div className="flex items-center justify-between">
                 <div className="flex gap-1">
                    <button className="px-3 py-1.5 bg-[#edeef0] rounded text-xs font-medium text-[#015ecb]">Traffic Utilization</button>
                    {isWAF && <button className="px-3 py-1.5 text-xs text-[#5b626e]">Applications Statistics</button>}
                 </div>
                 <div className="flex items-center gap-2">
                    <button className="text-[#5b626e]"><Download size={18} /></button>
                    <div className="flex items-center gap-2 px-3 py-1.5 border border-[#d4d6db] rounded bg-white text-xs text-[#264769]">
                       <span>Jul 2025</span>
                       <ChevronDown size={14} />
                    </div>
                 </div>
              </div>
              
              <div className="flex-1 w-full min-h-[200px]">
                 <TrafficChart data={data} />
              </div>
           </div>

        </div>
      </div>
    </div>
  );
}

function FeatureRow({ label, checked, disabled, suffix, icon, badge }: { label: string, checked?: boolean, disabled?: boolean, suffix?: string, icon?: React.ReactNode, badge?: string }) {
   return (
      <div className="flex items-center justify-between py-2.5 border-b border-[#edeef0] last:border-0 h-[40px]">
         <div className="flex items-center gap-2">
            <div className={cn("w-3 h-3 flex items-center justify-center rounded border shrink-0", 
               checked ? "bg-[#264769] border-[#264769]" : disabled ? "border-[#A9AEB7] rounded-full" : "border-[#264769]")}>
               {checked && (
                  <svg width="12" height="12" viewBox="0 0 12 12">
                     <path clipRule="evenodd" d={svgPaths.p4881140} fill="white" fillRule="evenodd" />
                  </svg>
               )}
               {disabled && <div className="w-1.5 h-1.5 bg-[#A9AEB7] rounded-full" />}
            </div>
            <span className={cn("text-xs font-medium text-nowrap", disabled ? "text-[#A9AEB7]" : "text-[#264769]")}>{label}</span>
            {icon}
            {badge && (
               <div className="bg-[#e0f7fa] px-1.5 py-0.5 rounded text-[10px] text-[#00838F] flex items-center gap-1 ml-1 whitespace-nowrap">
                  {badge === "Free Trial" && <div className="w-3 h-3 rounded-full border border-[#A6ABB5] flex items-center justify-center text-[8px] text-[#A6ABB5]">30</div>}
                  {badge === "Add-on" && (
                     <svg width="10" height="10" viewBox="0 0 14 14" className="fill-[#00838F]">
                        <path d={svgPaths.p38a06300} />
                     </svg>
                  )}
                  {badge === "Free Trial" && "Free Trial"}
               </div>
            )}
         </div>
         {suffix && <span className="text-[11px] text-[#264769] whitespace-nowrap">{suffix}</span>}
      </div>
   );
}

function StatBox({ value, unit, label }: { value: string, unit?: string, label: string }) {
   return (
      <div className="flex flex-col p-4 min-w-[116px] bg-[#f5f6f8]">
         <div className="flex items-end gap-1 text-[#015ecb]">
            <span className="text-sm font-medium">{value}</span>
            {unit && <span className="text-xs font-light mb-0.5">{unit}</span>}
         </div>
         <span className="text-xs text-[#264769] font-light">{label}</span>
      </div>
   );
}

function StatInner({ value, unit, label }: { value: string, unit?: string, label: string }) {
   return (
      <div className="flex flex-col">
         <div className="flex items-end gap-1 text-[#015ecb]">
            <span className="text-sm font-medium">{value}</span>
            {unit && <span className="text-xs font-light mb-0.5">{unit}</span>}
         </div>
         <span className="text-xs text-[#264769] font-light">{label}</span>
      </div>
   );
}
