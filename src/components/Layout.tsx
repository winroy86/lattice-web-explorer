import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { SiteFooter } from './SiteFooter';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className = "" }: LayoutProps) => {
  return (
    <>
      {/* WordPress head hook */}
      {/* wp_head */}
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className={`flex-1 ${className}`}>
          {children}
        </main>
        <SiteFooter />
      </div>
      {/* WordPress footer hook */}
      {/* wp_footer */}
    </>
  );
};