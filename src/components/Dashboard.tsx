import React, { useState } from 'react';
import { Layout, Bell, Search, User, Menu, ChevronLeft } from 'lucide-react';
import { Navigation } from './Navigation';
import { Header } from './Header';
import { AccountOverview } from './AccountOverview';
import { ProtectionModule } from './ProtectionModule';
import { Footer } from './Footer';
import { AgenticSummary } from './AgenticSummary';
import svgPaths from '../imports/svg-f1cvh6yttf';

// Mock Data for Charts
const trafficDataWAF = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  legitimate: Math.random() * 0.2 + 0.1,
  percentile: Math.random() * 0.1 + 0.25,
  purchased: 0.32,
}));

const trafficDataDDoS = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  legitimate: Math.random() * 0.1 + 0.05,
  percentile: Math.random() * 0.1 + 0.15,
  purchased: 0.48,
}));

export function Dashboard() {
  const [view, setView] = useState<'account' | 'agentic'>('account');

  const handleNavigate = (viewName: 'account' | 'agentic') => {
      setView(viewName);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#f3f5f7]">
      {/* Sidebar */}
      <Navigation onViewChange={handleNavigate} currentView={view} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {view === 'agentic' ? (
            <AgenticSummary />
        ) : (
            <>
                <Header />
                <main className="flex-1 overflow-y-auto p-5 space-y-5">
                    {/* Breadcrumb & Tabs Area */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                            <button className="flex items-center justify-center w-[38px] h-[38px] rounded-full border border-[#0280EF] text-[#0280EF]">
                                <ChevronLeft size={20} />
                            </button>
                            <h1 className="text-[18px] text-[#264769]">Account</h1>
                            
                            <div className="flex items-center gap-1 ml-4">
                                <button className="px-4 py-2 bg-[#edeef0] rounded text-[#015ecb] text-sm font-medium">
                                Marketplace
                                </button>
                                <button className="px-4 py-2 text-[#264769] text-sm hover:bg-gray-100 rounded">
                                Application Protection Settings
                                </button>
                                <button className="px-4 py-2 text-[#264769] text-sm hover:bg-gray-100 rounded">
                                Application Protection Operator
                                </button>
                            </div>
                            </div>
                        </div>

                        <AccountOverview />

                        <div className="flex gap-5 items-start flex-col xl:flex-row">
                            <ProtectionModule 
                            title="Application Protection"
                            type="WAF"
                            plan="Complete"
                            data={trafficDataWAF}
                            />
                            <ProtectionModule 
                            title="Infrastructure Protection"
                            type="DDoS"
                            plan="Hybrid"
                            data={trafficDataDDoS}
                            />
                        </div>
                    </div>
                    <Footer />
                </main>
            </>
        )}
      </div>
    </div>
  );
}
