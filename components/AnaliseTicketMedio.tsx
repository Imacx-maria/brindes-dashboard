// components/AnaliseOverlap.tsx
'use client';  // Add this at the top

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, ZAxis } from 'recharts';

const AnaliseTicketMedio = () => {
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

  const clientesTop10 = [
    {
      cliente: 'Lassarat',
      ticketMedio: 4772.50,
      numPedidos: 4,
      volumeTotal: 19090.00
    },
    {
      cliente: 'Tubos Vouga',
      ticketMedio: 3674.50,
      numPedidos: 3,
      volumeTotal: 11023.50
    },
    {
      cliente: 'HH Print',
      ticketMedio: 3525.79,
      numPedidos: 7,
      volumeTotal: 24680.50
    },
    {
      cliente: 'Promotorres',
      ticketMedio: 2830.60,
      numPedidos: 4,
      volumeTotal: 11322.40
    },
    {
      cliente: 'Sumol+Compal',
      ticketMedio: 2459.83,
      numPedidos: 22,
      volumeTotal: 54116.31
    },
    {
      cliente: 'ISS Oeiras',
      ticketMedio: 2420.24,
      numPedidos: 5,
      volumeTotal: 12101.22
    },
    {
      cliente: 'SUMA',
      ticketMedio: 2148.40,
      numPedidos: 5,
      volumeTotal: 10742.00
    },
    {
      cliente: 'Communisis',
      ticketMedio: 1634.02,
      numPedidos: 16,
      volumeTotal: 26144.37
    },
    {
      cliente: 'Nestlé',
      ticketMedio: 1361.37,
      numPedidos: 7,
      volumeTotal: 9529.60
    },
    {
      cliente: 'Altavia',
      ticketMedio: 1005.33,
      numPedidos: 49,
      volumeTotal: 49260.93
    }
  ].sort((a, b) => b.ticketMedio - a.ticketMedio);

  const distribuicaoClientes = [
    { faixa: '>€3.000', quantidade: 3, percentual: 1.8 },
    { faixa: '€2.000-3.000', quantidade: 4, percentual: 2.5 },
    { faixa: '€1.000-2.000', quantidade: 56, percentual: 34.4 },
    { faixa: '€500-1.000', quantidade: 45, percentual: 27.6 },
    { faixa: '<€500', quantidade: 55, percentual: 33.7 }
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
                  link.path === '/analise-ticket-medio'
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
            <CardTitle>Análise de Ticket Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-medium">Ticket Médio Geral</h3>
                <p className="text-2xl font-bold">€976</p>
                <p className="text-sm">514 pedidos totais</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-medium">Maior Ticket</h3>
                <p className="text-2xl font-bold">€4.772</p>
                <p className="text-sm">Lassarat</p>
              </div>
              <div className="bg-purple-50 p-4 rounded">
                <h3 className="font-medium">Mais Pedidos</h3>
                <p className="text-2xl font-bold">49</p>
                <p className="text-sm">Altavia (€1.005/pedido)</p>
              </div>
            </div>

            <div className="h-80 mb-6">
              <h3 className="font-medium mb-4">Relação Ticket Médio vs Número de Pedidos (Top 10)</h3>
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid />
                  <XAxis type="number" dataKey="numPedidos" name="Pedidos" />
                  <YAxis type="number" dataKey="ticketMedio" name="Ticket Médio" unit="€" />
                  <ZAxis type="number" dataKey="volumeTotal" range={[100, 600]} />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} 
                    formatter={(value, name) => [
                      name === 'ticketMedio' ? `€${value.toFixed(2)}` : value,
                      name === 'ticketMedio' ? 'Ticket Médio' : 'Nº Pedidos'
                    ]}
                  />
                  <Legend />
                  <Scatter 
                    name="Clientes" 
                    data={clientesTop10} 
                    fill="#8884d8"
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </div>

            <div className="h-60 mb-6">
              <h3 className="font-medium mb-4">Distribuição de Clientes por Ticket Médio</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={distribuicaoClientes}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="faixa" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name) => [
                      name === 'percentual' ? `${value.toFixed(1)}%` : value,
                      'Clientes'
                    ]}
                  />
                  <Bar dataKey="quantidade" name="Número de Clientes" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded">
              <h3 className="font-semibold mb-2">Insights sobre Ticket Médio</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>Apenas 3 clientes (1.8%) têm ticket médio acima de €3.000</li>
                <li>61.3% dos clientes têm ticket médio abaixo de €1.000</li>
                <li>Clientes ideais combinam alto ticket com volume moderado (ex: Lassarat, HH Print)</li>
                <li>Alta dispersão de esforço com Altavia (49 pedidos) vs eficiência da Lassarat (4 pedidos)</li>
                <li>Potencial de aumento de 3x no ticket médio através de consolidação de pedidos</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnaliseTicketMedio;