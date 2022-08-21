import Navbar from '@/components/Navbar';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-5/6 mx-auto">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
