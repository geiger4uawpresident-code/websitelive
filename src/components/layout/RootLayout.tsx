import React from 'react';
import { TopNav } from './TopNav';
import { CampaignFooter } from './CampaignFooter';
interface RootLayoutProps {
  children: React.ReactNode;
}
export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-campaign-gold selection:text-campaign-navy">
      <TopNav />
      <main className="flex-1">
        {children}
      </main>
      <CampaignFooter />
    </div>
  );
}