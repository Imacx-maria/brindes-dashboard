// components/AnaliseOverlap.tsx
'use client';  // Add this at the top

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AnaliseOverlap = () => {
  const navigationLinks = [
    { name: 'Sumário Executivo', path: '/' },
    { name: 'Análise de Brindes', path: '/analise-brindes' },
    { name: 'Análise de Overlap', path: '/analise-overlap' },
    { name: 'Análise Temporal', path: '/analise-temporal' },
    { name: 'Análise de Ticket Médio', path: '/analise-ticket-medio' },
    { name: 'Comparativo Digital', path: '/comparativo-digital' },
    { name: 'Análise de Gifts', path: '/gifts-analysis' },
    { name: 'Dashboard de Gifts', path: '/gifts-dashboard' }
  ];

  const top10Clientes = [
    {
      cliente: 'Communisis',
      totalDigital: 825719.55,
      totalBrindes: 26144.37,
      ratio: 31.58
    },
    {
      cliente: 'HH Print',
      totalDigital: 505257.79,
      totalBrindes: 24680.50,
      ratio: 20.47
    },
    {
      cliente: 'Sumol+Compal',
      totalDigital: 308030.50,
      totalBrindes: 54116.31,
      ratio: 5.69
    },
    {
      cliente: 'Altavia',
      totalDigital: 190482.40,
      totalBrindes: 49260.93,
      ratio: 3.87
    },
    {
      cliente: 'Nestlé',
      totalDigital: 96118.02,
      totalBrindes: 9529.60,
      ratio: 10.09
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <div className="bg-gray-800 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4">
            {navigationLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  link.path === '/analise-overlap'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4">
        <Card>
          <CardHeader>
            <CardTitle>Análise de Overlap Digital/Brindes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-medium">Clientes Compartilhados</h3>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm">dos top 10 Digital</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-medium">Maior Oportunidade</h3>
                <p className="text-2xl font-bold">Communisis</p>
                <p className="text-sm">31.58x diferença</p>
              </div>
              <div className="bg-purple-50 p-4 rounded">
                <h3 className="font-medium">Melhor Equilíbrio</h3>
                <p className="text-2xl font-bold">Sumol+Compal</p>
                <p className="text-sm">5.69x diferença</p>
              </div>
            </div>

            <div className="h-80 mb-6">
              <h3 className="font-medium mb-4">Volume de Vendas por Departamento</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={top10Clientes}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="cliente" />
                  <YAxis />
                  <Tooltip formatter={(value) => {
                    if (typeof value === 'number') {
                      return `${value.toFixed(1)}x`;
                    }
                    return `${value}x`;
                  }} />
                  <Legend />
                  <Bar dataKey="totalDigital" name="Vendas Digital" fill="#8884d8" />
                  <Bar dataKey="totalBrindes" name="Vendas Brindes" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="h-60 mb-6">
              <h3 className="font-medium mb-4">Ratio Digital/Brindes</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={top10Clientes}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="cliente" />
                  <YAxis />
                  <Tooltip formatter={(value) => {
                    if (typeof value === 'number') {
                      return `${value.toFixed(1)}x`;
                    }
                    return `${value}x`;
                  }} />
                  <Bar dataKey="ratio" name="Ratio Digital/Brindes" fill="#ff7c43" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded">
              <h3 className="font-semibold mb-2">Insights de Cross-Selling</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>Communisis representa a maior oportunidade (€825k digital vs €26k brindes)</li>
                <li>HH Print tem potencial similar (€505k digital vs €24k brindes)</li>
                <li>Sumol+Compal mostra melhor equilíbrio entre departamentos</li>
                <li>Altavia e Nestlé têm espaço significativo para crescimento em brindes</li>
                <li>Média de 14.34x mais vendas em digital que brindes</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnaliseOverlap;