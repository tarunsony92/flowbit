import React from 'react';

interface DashboardLayoutProps {
  leftPanel: React.ReactNode;
  rightPanel: React.ReactNode;
}

export function DashboardLayout({ leftPanel, rightPanel }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen w-full bg-slate-100 dark:bg-slate-900">
      {/* Left Panel */}
      <div className="w-1/2 p-4">
        <div className="h-full w-full">{leftPanel}</div>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 border-l border-slate-300 dark:border-slate-700 p-4">
        <div className="h-full w-full">{rightPanel}</div>
      </div>
    </div>
  );
}