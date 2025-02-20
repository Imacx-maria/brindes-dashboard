// components/shared/Navigation.tsx
'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const navigationLinks = [
  { name: 'Sumário Executivo', path: '/' },
  { name: 'Análise Temporal', path: '/analise-temporal' },
  { name: 'Análise de Ticket Médio', path: '/analise-ticket-medio' },
  { name: 'Volume Vendas Cliente', path: '/SalesDashboard' },
  { name: 'Comparativo Digital', path: '/comparativo-digital' },
  { name: 'Potenciais Clientes', path: '/analise-brindes' },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="bg-gray-800 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                link.path === pathname
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;