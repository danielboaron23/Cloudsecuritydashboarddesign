import React from 'react';
import { IconSidebar1, IconSidebar2, IconSidebar3, IconSidebarActive } from './ui/Icons';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-[#F3F5F7] overflow-hidden font-sans text-[#264769]">
      {/* Sidebar */}
      <div className="w-[60px] bg-[#264769] flex flex-col items-center py-4 gap-4 shrink-0 z-20">
        <IconSidebar1 />
        <IconSidebar2 />
        <IconSidebar3 />
        {/* Active item mock */}
        <div className="relative">
            <IconSidebarActive />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
