// components/AnaliseOverlap.tsx
'use client';  // Add this at the top

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const AnaliseTemporal = () => {
  // Navigation links - same across all pages
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

  const dadosMensais = [
    { mes: 'Jan', vendas2023: 58155.72, vendas2024: 40928.70, pedidos2023: 29, pedidos2024: 26, variacao: -29.6 },
    { mes: 'Fev', vendas2023: 37473.20, vendas2024: 30392.73, pedidos2023: 21, pedidos2024: 28, variacao: -18.9 },
    { mes: 'Mar', vendas2023: 22290.09, vendas2024: 14205.57, pedidos2023: 31, pedidos2024: 23, variacao: -36.3 },
    { mes: 'Abr', vendas2023: 17961.73, vendas2024: 31901.75, pedidos2023: 24, pedidos2024: 51, variacao: 77.6 },
    { mes: 'Mai', vendas2023: 39023.03, vendas2024: 41647.37, pedidos2023: 48, pedidos2024: 52, variacao: 6.7 },
    { mes: 'Jun', vendas2023: 67212.60, vendas2024: 75163.87, pedidos2023: 63, pedidos2024: 56, variacao: 11.8 },
    { mes: 'Jul', vendas2023: 42134.47, vendas2024: 55576.74, pedidos2023: 41, pedidos2024: 54, variacao: 31.9 },
    { mes: 'Ago', vendas2023: 34509.64, vendas2024: 44499.35, pedidos2023: 30, pedidos2024: 22, variacao: 28.9 },
    { mes: 'Set', vendas2023: 29478.49, vendas2024: 29311.82, pedidos2023: 38, pedidos2024: 32, variacao: -0.6 },
    { mes: 'Out', vendas2023: 46928.69, vendas2024: 56740.64, pedidos2023: 53, pedidos2024: 86, variacao: 20.9 },
    { mes: 'Nov', vendas2023: 61610.33, vendas2024: 13939.00, pedidos2023: 37, pedidos2024: 30, variacao: -77.4 },
    { mes: 'Dez', vendas2023: 75852.70, vendas2024: 67368.89, pedidos2023: 48, pedidos2024: 54, variacao: -11.2 }
  ];

  const dadosTrimestrais = [
    { trimestre: 'Q1', vendas2023: 117919.01, vendas2024: 85527.00, pedidos2023: 81, pedidos2024: 77, variacao: -27.5 },
    { trimestre: 'Q2', vendas2023: 124197.36, vendas2024: 148712.99, pedidos2023: 135, pedidos2024: 159, variacao: 19.7 },
    { trimestre: 'Q3', vendas2023: 106122.60, vendas2024: 129387.91, pedidos2023: 109, pedidos2024: 108, variacao: 21.9 },
    { trimestre: 'Q4', vendas2023: 184391.72, vendas2024: 138048.53, pedidos2023: 138, pedidos2024: 170, variacao: -25.1 }
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
                  link.path === '/analise-temporal'
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
            <CardTitle>Análise Temporal - Departamento de Brindes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-medium">Vendas 2024 YTD</h3>
                <p className="text-2xl font-bold">€501.676</p>
                <p className="text-sm">514 pedidos</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-medium">Sazonalidade</h3>
                <p className="text-2xl font-bold">Q2/Q4</p>
                <p className="text-sm">Picos de venda</p>
              </div>
            </div>

            <div className="h-80 mb-6">
              <h3 className="font-medium mb-4">Vendas Mensais Comparativas</h3>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dadosMensais}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip formatter={(value) => `€${value.toFixed(2)}`} />
                  <Legend />
                  <Line dataKey="vendas2023" name="2023" stroke="#8884d8" />
                  <Line dataKey="vendas2024" name="2024" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="h-80 mb-6">
              <h3 className="font-medium mb-4">Performance Trimestral</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dadosTrimestrais}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="trimestre" />
                  <YAxis />
                  <Tooltip formatter={(value) => `€${value.toFixed(2)}`} />
                  <Legend />
                  <Bar dataKey="vendas2023" name="2023" fill="#8884d8" />
                  <Bar dataKey="vendas2024" name="2024" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded">
              <h3 className="font-semibold mb-2">Insights Temporais</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>Sazonalidade clara com picos em Q2 (Jun) e Q4 (Out-Dez)</li>
                <li>Q2 2024 apresentou melhor performance (+19.7%)</li>
                <li>Q4 mostra queda significativa em 2024 (-25.1%)</li>
                <li>Abril 2024 teve maior crescimento individual (+77.6%)</li>
                <li>Maior concentração de pedidos em Q4 (170 pedidos em 2024)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnaliseTemporal;