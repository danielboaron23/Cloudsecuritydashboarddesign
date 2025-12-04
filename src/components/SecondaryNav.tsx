import React from 'react';
import { IconArrow } from './ui/Icons';

export function SecondaryNav() {
  const [activeTab, setActiveTab] = React.useState('Marketplace');
  const tabs = [
    { name: 'Account' },
    { name: 'Marketplace' },
    { name: 'Application Protection Settings' },
    { name: 'Application Protection Operator' },
  ];

  return (
    <div className="px-6 pt-6 pb-2 flex flex-col gap-4">
      <div className="flex items-center gap-6">
        {/* Back Button & Title */}
        <div className="flex items-center gap-3">
            <button className="size-[36px] rounded-full border border-[#0280EF] flex items-center justify-center text-[#0280EF] hover:bg-[#0280EF] hover:text-white transition-colors group">
                <div className="rotate-90">
                    <IconArrow /> 
                </div>
            </button>
            <h1 className="text-[20px] font-normal text-[#264769]">Account</h1>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1">
            {tabs.map((tab) => (
                <button 
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`px-4 py-2 rounded-[4px] text-[14px] font-medium transition-colors ${
                        activeTab === tab.name
                        ? 'bg-[#EDEEF0] text-[#015ECB]' 
                        : 'bg-transparent text-[#264769] hover:bg-[#F5F6F8]'
                    }`}
                >
                    {tab.name}
                </button>
            ))}
        </div>
      </div>
    </div>
  );
}
