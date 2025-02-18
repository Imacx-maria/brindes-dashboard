// components/AnaliseOverlap.tsx
'use client';  // Add this at the top

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const GiftsAnalysisDashboard = () => {
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

  const monthlyData = [
    { month: 'Jan', vendas: 40928.70, vendas_acumulado: 40928.70, pedidos: 26 },
    { month: 'Fev', vendas: 30392.73, vendas_acumulado: 71321.43, pedidos: 28 },
    { month: 'Mar', vendas: 14205.57, vendas_acumulado: 85527.00, pedidos: 23 },
    { month: 'Abr', vendas: 31901.75, vendas_acumulado: 117428.75, pedidos: 51 },
    { month: 'Mai', vendas: 41647.37, vendas_acumulado: 159076.12, pedidos: 52 },
    { month: 'Jun', vendas: 75163.87, vendas_acumulado: 234239.99, pedidos: 56 },
    { month: 'Jul', vendas: 55576.74, vendas_acumulado: 289816.73, pedidos: 54 },
    { month: 'Ago', vendas: 44499.35, vendas_acumulado: 334316.08, pedidos: 22 },
    { month: 'Set', vendas: 29311.82, vendas_acumulado: 363627.90, pedidos: 32 },
    { month: 'Out', vendas: 56740.64, vendas_acumulado: 420368.54, pedidos: 86 },
    { month: 'Nov', vendas: 13939.00, vendas_acumulado: 434307.54, pedidos: 30 },
    { month: 'Dez', vendas: 67368.89, vendas_acumulado: 501676.43, pedidos: 54 }
  ];

  const kpiTargets = [
    { metric: 'Vendas Anuais', actual: 501676.43, target: 550000, completion: 91.2 },
    { metric: 'Ticket Médio', actual: 976.02, target: 1200, completion: 81.3 },
    { metric: 'Novos Clientes', actual: 23, target: 30, completion: 76.7 }
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
                  link.path === '/gifts-dashboard'
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
            <CardTitle>Dashboard de Performance - Gifts 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {kpiTargets.map((kpi) => (
                <div key={kpi.metric} className={`p-4 rounded ${
                  kpi.completion >= 90 ? 'bg-green-50' : 
                  kpi.completion >= 75 ? 'bg-yellow-50' : 'bg-red-50'
                }`}>
                  <h3 className="font-medium">{kpi.metric}</h3>
                  <p className="text-2xl font-bold">
                    {kpi.metric === 'Novos Clientes' ? kpi.actual :
                     `€${kpi.actual.toFixed(2)}`}
                  </p>
                  <p className="text-sm">{kpi.completion}% da meta</p>
                </div>
              ))}
            </div>

            <div className="h-80 mb-6">
              <h3 className="font-medium mb-4">Vendas Mensais e Acumulado</h3>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip formatter={(value) => {
                    if (typeof value === 'number') {
                      return `€${value.toFixed(2)}`;
                    }
                    return `€${value}`;
                  }} />
                  <Legend />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="vendas" 
                    name="Vendas Mensais" 
                    stroke="#8884d8" 
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="vendas_acumulado" 
                    name="Acumulado" 
                    stroke="#82ca9d" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="h-60 mb-6">
              <h3 className="font-medium mb-4">Volume de Pedidos por Mês</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="pedidos" name="Número de Pedidos" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded">
              <h3 className="font-semibold mb-2">Status das Metas 2024</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>Vendas anuais a 91.2% da meta (€501.676 de €550.000)</li>
                <li>Ticket médio precisa aumentar €224 para atingir meta de €1.200</li>
                <li>Faltam 7 novos clientes para atingir meta de 30</li>
                <li>Outubro registrou maior número de pedidos (86)</li>
                <li>Junho teve melhor performance em vendas (€75.163)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GiftsAnalysisDashboard;