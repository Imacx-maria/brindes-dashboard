// components/AnaliseOverlap.tsx
'use client';  // Add this at the top

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const GiftsAnalysis = () => {
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

  const top10Clients = [
    {
      client: 'Niusistemas',
      revenue: 88563.77,
      orders: 65,
      avgTicket: 1362.52
    },
    {
      client: 'Sumol+Compal',
      revenue: 54116.31,
      orders: 22,
      avgTicket: 2459.83
    },
    {
      client: 'Altavia',
      revenue: 49260.93,
      orders: 49,
      avgTicket: 1005.33
    },
    {
      client: 'Communisis',
      revenue: 26144.37,
      orders: 16,
      avgTicket: 1634.02
    },
    {
      client: 'HH Print',
      revenue: 24680.50,
      orders: 7,
      avgTicket: 3525.79
    }
  ];

  const revenueDistribution = [
    { name: 'Top 5', value: 242765.88, percentage: 48.4 },
    { name: 'Top 6-10', value: 141550.37, percentage: 28.2 },
    { name: 'Top 11-20', value: 67893.22, percentage: 13.5 },
    { name: 'Outros', value: 49466.96, percentage: 9.9 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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
                  link.path === '/gifts-analysis'
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
            <CardTitle>Análise do Departamento de Gifts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-medium">Volume Total</h3>
                <p className="text-2xl font-bold">€501.676</p>
                <p className="text-sm">163 clientes ativos</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-medium">Concentração</h3>
                <p className="text-2xl font-bold">76.6%</p>
                <p className="text-sm">Top 10 clientes</p>
              </div>
              <div className="bg-purple-50 p-4 rounded">
                <h3 className="font-medium">Pedidos</h3>
                <p className="text-2xl font-bold">514</p>
                <p className="text-sm">€976 ticket médio</p>
              </div>
            </div>

            <div className="h-80 mb-6">
              <h3 className="font-medium mb-4">Top 5 Clientes - Volume vs Pedidos</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={top10Clients}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="client" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="revenue" name="Volume (€)" fill="#8884d8" />
                  <Bar yAxisId="right" dataKey="orders" name="Nº Pedidos" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="h-80 mb-6">
              <h3 className="font-medium mb-4">Distribuição do Volume de Vendas</h3>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={revenueDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percentage}) => `${name}: ${percentage}%`}
                  >
                    {revenueDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded">
              <h3 className="font-semibold mb-2">Insights do Departamento</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>Alta concentração: Top 5 clientes representam 48.4% do volume</li>
                <li>Grande variação no perfil de pedidos: de 7 a 65 pedidos no top 5</li>
                <li>Niusistemas lidera em volume mas tem menor eficiência operacional</li>
                <li>HH Print apresenta melhor relação volume/pedidos (€3.525/pedido)</li>
                <li>76.6% das vendas concentradas em apenas 10 clientes</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GiftsAnalysis;