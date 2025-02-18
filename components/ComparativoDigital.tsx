// components/AnaliseOverlap.tsx
'use client';  // Add this at the top

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ComparativoDigital = () => {
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

  const top15Clientes = [
    {
      cliente: 'Communisis',
      vendas2024: 825719.55,
      vendas2023: 780330.28,
      crescimento: 5.8
    },
    {
      cliente: 'HH Print',
      vendas2024: 505257.79,
      vendas2023: 195676.60,
      crescimento: 158.2
    },
    {
      cliente: 'Konica Minolta',
      vendas2024: 456154.77,
      vendas2023: 352493.34,
      crescimento: 29.4
    },
    {
      cliente: 'HH Print Spain',
      vendas2024: 319068.42,
      vendas2023: 0,
      crescimento: 100.0
    },
    {
      cliente: 'Sumol+Compal',
      vendas2024: 308030.50,
      vendas2023: 289488.64,
      crescimento: 6.4
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
                  link.path === '/comparativo-digital'
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
            <CardTitle>Comparativo Digital 2023 vs 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-medium">Crescimento Total</h3>
                <p className="text-2xl font-bold">+25.6%</p>
                <p className="text-sm">€3.2M em 2024</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-medium">Maior Crescimento</h3>
                <p className="text-2xl font-bold">HH Print</p>
                <p className="text-sm">+158.2%</p>
              </div>
              <div className="bg-purple-50 p-4 rounded">
                <h3 className="font-medium">Maior Cliente</h3>
                <p className="text-2xl font-bold">Communisis</p>
                <p className="text-sm">€825.7k em 2024</p>
              </div>
            </div>

            <div className="h-80 mb-6">
              <h3 className="font-medium mb-4">Volume de Vendas Comparativo (Top 5)</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={top15Clientes}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="cliente" />
                  <YAxis />
                  <Tooltip formatter={(value) => `€${value.toFixed(2)}`} />
                  <Legend />
                  <Bar dataKey="vendas2023" name="2023" fill="#8884d8" />
                  <Bar dataKey="vendas2024" name="2024" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="h-60 mb-6">
              <h3 className="font-medium mb-4">Percentual de Crescimento</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={top15Clientes}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="cliente" />
                  <YAxis unit="%" />
                  <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
                  <Bar dataKey="crescimento" name="Crescimento %" fill="#ff7c43" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded">
              <h3 className="font-semibold mb-2">Insights de Performance</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>Crescimento expressivo total de 25.6% em 2024</li>
                <li>HH Print mais que duplicou seu volume de compras</li>
                <li>Entrada significativa da HH Print Spain como novo cliente</li>
                <li>Clientes estabelecidos mostram crescimento estável (Communisis +5.8%, Sumol+Compal +6.4%)</li>
                <li>Top 5 clientes representam mais de 75% do faturamento digital</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ComparativoDigital;