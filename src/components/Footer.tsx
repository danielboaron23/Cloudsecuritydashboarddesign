import React from 'react';

export function Footer() {
  return (
    <footer className="h-[28px] w-full flex items-center justify-between text-[11px] text-[#5b626e] px-6">
      <div className="flex items-center gap-2">
        <span>© 2025 Radware Ltd. All Rights Reserved</span>
      </div>
      <div className="flex items-center gap-8">
        <button className="hover:text-[#264769]">Glossary</button>
        <button className="hover:text-[#264769]">Legal Notice</button>
        <button className="hover:text-[#264769]">Terms of Use</button>
        <button className="hover:text-[#264769]">Privacy Policy</button>
      </div>
    </footer>
  );
}
