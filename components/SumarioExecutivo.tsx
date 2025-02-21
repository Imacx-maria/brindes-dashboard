'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Navigation from '@/components/shared/Navigation';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const SumarioExecutivo = () => {
  const clientDistribution = [
    { name: 'Micro (<1k€)', value: 61.3, color: '#FF8042' },
    { name: 'Pequenos (1k-5k€)', value: 26.4, color: '#FFBB28' },
    { name: 'Médios (5k-25k€)', value: 9.8, color: '#00C49F' },
    { name: 'Grandes (>25k€)', value: 2.5, color: '#0088FE' }
  ];

  const analysisCards = [
    {
      title: 'Análise de Brindes',
      description: 'Visão detalhada do departamento de brindes',
      path: '/analise-brindes',
      metrics2024: ['163 clientes ativos', '€501.676 em vendas', '514 pedidos'],
      metrics2023: ['131 clientes ativos', '€532.630 em vendas', '463 pedidos']
    },
    {
      title: 'Análise Temporal',
      description: 'Evolução e sazonalidade das vendas',
      path: '/analise-temporal',
      metrics2024: ['Picos em Q2 e Q4', '+19.7% em Q2', '-25.1% em Q4'],
      metrics2023: ['Picos em Q2 e Q4', 'Base comparativa', 'Referência anual']
    },
    {
      title: 'Análise de Ticket Médio',
      description: 'Distribuição e eficiência dos pedidos',
      path: '/analise-ticket-medio',
      metrics2024: ['€976 ticket médio', '€4.772 maior ticket', '61% abaixo de €1.000'],
      metrics2023: ['€1.150 ticket médio', '€5.100 maior ticket', '58% abaixo de €1.000']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="max-w-6xl mx-auto p-4">
        <Card>
          <CardHeader>
            <CardTitle>Sumário Executivo - Departamento de Brindes</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Margin Analysis Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-amber-50 p-4 rounded">
                <h3 className="font-medium">Análise de Margens 2023</h3>
                <p className="text-2xl font-bold">227.590,17€</p>
                <p className="text-sm">Encomendas menos Vendas</p>
                <p className="text-lg font-semibold text-green-600">Margem 43%</p>
              </div>
              <div className="bg-amber-100 p-4 rounded">
                <h3 className="font-medium">Análise de Margens 2024</h3>
                <p className="text-2xl font-bold">153.734,63€</p>
                <p className="text-sm">Encomendas menos Vendas</p>
                <p className="text-lg font-semibold text-orange-600">Margem 31%</p>
                <p className="text-sm text-red-600 font-medium">-30.954,26€ vendas face a 2023</p>
              </div>
            </div>

            {/* Rest of the content remains the same as in your original file */}
            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded">
                  <h3 className="font-medium">Dimensão do Negócio 2023</h3>
                  <p className="text-2xl font-bold">€532.630</p>
                  <p className="text-sm">Vendas 2023</p>
                  <p className="text-sm">131 clientes ativos</p>
                </div>
                <div className="bg-green-50 p-4 rounded">
                  <h3 className="font-medium">Volume Operacional 2023</h3>
                  <p className="text-2xl font-bold">463</p>
                  <p className="text-sm">Pedidos processados</p>
                  <p className="text-sm">€1.150 ticket médio</p>
                </div>
                <div className="bg-purple-50 p-4 rounded">
                  <h3 className="font-medium">Concentração 2023</h3>
                  <p className="text-2xl font-bold">78.2%</p>
                  <p className="text-sm">Vendas top 20 clientes</p>
                  <p className="text-sm">9 clientes {`>`} €10k</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-100 p-4 rounded">
                  <h3 className="font-medium">Dimensão do Negócio 2024</h3>
                  <p className="text-2xl font-bold">€501.676</p>
                  <p className="text-sm">Vendas 2024 (-5.8%)</p>
                  <p className="text-sm">163 clientes ativos (+24.4%)</p>
                </div>
                <div className="bg-green-100 p-4 rounded">
                  <h3 className="font-medium">Volume Operacional 2024</h3>
                  <p className="text-2xl font-bold">514</p>
                  <p className="text-sm">Pedidos processados (+11%)</p>
                  <p className="text-sm">€976 ticket médio (-15.1%)</p>
                </div>
                <div className="bg-purple-100 p-4 rounded">
                  <h3 className="font-medium">Concentração 2024</h3>
                  <p className="text-2xl font-bold">76.6%</p>
                  <p className="text-sm">Vendas top 20 clientes</p>
                  <p className="text-sm">11 clientes &gt; €10k</p>
                </div>
              </div>
            </div>

            {/* Analysis Links */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              {analysisCards.map((card) => (
                <a key={card.path} href={card.path} className="no-underline">
                  <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white">
                    <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                    <p className="text-gray-600 mb-4">{card.description}</p>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="text-sm font-medium mb-2">2023</p>
                        <ul className="space-y-1">
                          {card.metrics2023.map((metric, index) => (
                            <li key={index} className="text-sm text-gray-700">{metric}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <p className="text-sm font-medium mb-2">2024</p>
                        <ul className="space-y-1">
                          {card.metrics2024.map((metric, index) => (
                            <li key={index} className="text-sm text-gray-700">{metric}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Client Distribution Chart */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Distribuição de Clientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={clientDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, value }) => `${name} (${value}%)`}
                        outerRadius={130}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {clientDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Critical Points */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Pontos Críticos e Ações Recomendadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Erosão de Margem</h3>
                    <p className="text-sm mb-2">Queda de 12pp na margem requer ação imediata:</p>
                    <ul className="text-sm list-disc pl-4">
                      <li>Revisão de pricing</li>
                      <li>Consolidação de fornecedores</li>
                      <li>Otimização de encomendas</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Fragmentação de Carteira</h3>
                    <p className="text-sm mb-2">61% dos clientes abaixo de 1.000€:</p>
                    <ul className="text-sm list-disc pl-4">
                      <li>Implementar valor mínimo</li>
                      <li>Segmentar atendimento</li>
                      <li>Consolidar encomendas</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Oportunidades Cross-Sell</h3>
                    <p className="text-sm mb-2">320k€+ em potencial imediato:</p>
                    <ul className="text-sm list-disc pl-4">
                      <li>Abordar top 5 contas digital</li>
                      <li>Integrar propostas comerciais</li>
                      <li>Desenvolver ofertas específicas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Goals 2025 */}
            <Card>
              <CardHeader>
                <CardTitle>Metas 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-xl font-bold">38-40%</div>
                    <div className="text-sm text-gray-600">Margem-alvo</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-xl font-bold">1.500€</div>
                    <div className="text-sm text-gray-600">Ticket médio</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-xl font-bold">-25%</div>
                    <div className="text-sm text-gray-600">Redução de encomendas</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-xl font-bold">+30%</div>
                    <div className="text-sm text-gray-600">Cross-sell digital</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SumarioExecutivo;