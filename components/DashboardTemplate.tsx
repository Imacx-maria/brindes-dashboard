'use client';

import React from 'react';
import Navigation from '@/components/shared/Navigation';

interface DashboardTemplateProps {
  children: React.ReactNode;
}

const DashboardTemplate = ({ children }: DashboardTemplateProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="max-w-6xl mx-auto p-4">
        {children}
      </div>
    </div>
  );
};

export default DashboardTemplate;