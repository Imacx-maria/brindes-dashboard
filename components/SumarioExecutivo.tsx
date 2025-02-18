import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const SumarioExecutivo = () => {
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

  const analysisCards = [
    {
      title: 'Análise de Brindes',
      description: 'Visão detalhada do departamento de brindes',
      path: '/analise-brindes',
      metrics: ['163 clientes ativos', '€501.676 em vendas', '514 pedidos']
    },
    {
      title: 'Análise Temporal',
      description: 'Evolução e sazonalidade das vendas',
      path: '/analise-temporal',
      metrics: ['Picos em Q2 e Q4', '+19.7% em Q2', '-25.1% em Q4']
    },
    {
      title: 'Análise de Ticket Médio',
      description: 'Distribuição e eficiência dos pedidos',
      path: '/analise-ticket-medio',
      metrics: ['€976 ticket médio', '€4.772 maior ticket', '61% abaixo de €1.000']
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
                  link.path === '/' 
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
            <CardTitle>Sumário Executivo - Departamento de Brindes</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-medium">Dimensão do Negócio</h3>
                <p className="text-2xl font-bold">€501.676</p>
                <p className="text-sm">Vendas 2024</p>
                <p className="text-sm">163 clientes ativos</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-medium">Volume Operacional</h3>
                <p className="text-2xl font-bold">514</p>
                <p className="text-sm">Pedidos processados</p>
                <p className="text-sm">€976 ticket médio</p>
              </div>
              <div className="bg-purple-50 p-4 rounded">
                <h3 className="font-medium">Concentração</h3>
                <p className="text-2xl font-bold">76.6%</p>
                <p className="text-sm">Vendas top 20 clientes</p>
                <p className="text-sm">11 clientes &gt; €10k</p>
              </div>
            </div>

            {/* Analysis Cards */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              {analysisCards.map((card) => (
                <a key={card.path} href={card.path} className="no-underline">
                  <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white">
                    <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                    <p className="text-gray-600 mb-4">{card.description}</p>
                    <ul className="space-y-1">
                      {card.metrics.map((metric, index) => (
                        <li key={index} className="text-sm text-gray-700">{metric}</li>
                      ))}
                    </ul>
                  </div>
                </a>
              ))}
            </div>

            {/* Detailed Analysis */}
            <div className="space-y-6">
              <div className="p-4 bg-white border rounded">
                <h3 className="font-semibold mb-2 text-lg">Situação Atual</h3>
                <div className="space-y-2">
                  <p className="font-medium">Eficiência Operacional:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Alta dispersão de esforço: 61% dos clientes (100) geram menos de €1.000 em vendas</li>
                    <li>Grande variação no ticket médio: de €456 a €4.772 por pedido</li>
                    <li>Dois perfis distintos de clientes: alto volume/baixo ticket vs. baixo volume/alto ticket</li>
                  </ul>
                  
                  <p className="font-medium mt-4">Sazonalidade:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Picos de venda em Q2 (Jun) e Q4 (Out-Dez)</li>
                    <li>Q2 2024: +19.7% vs 2023</li>
                    <li>Q4 2024: -25.1% vs 2023</li>
                  </ul>
                  
                  <p className="font-medium mt-4">Clientes de Referência:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Top 3: Niusistemas (€88.5k), Sumol+Compal (€54.1k), Altavia (€49.2k)</li>
                    <li>Maior eficiência: Lassarat (€4.772/pedido), Tubos Vouga (€3.674/pedido)</li>
                    <li>8 dos top 10 clientes digital também compram brindes</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-white border rounded">
                <h3 className="font-semibold mb-2 text-lg">Recomendações Prioritárias</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Curto Prazo:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Estabelecer valor mínimo por pedido de €2.000</li>
                      <li>Consolidar pedidos de clientes frequentes</li>
                      <li>Investigar queda de performance em Q4</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Médio Prazo:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Desenvolver top 10 digital não ativos em brindes</li>
                      <li>Replicar modelo de clientes mais eficientes</li>
                      <li>Reavaliar atendimento a clientes de baixo valor</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border rounded">
                <h3 className="font-semibold mb-2 text-lg">Potencial de Crescimento</h3>
                <div className="space-y-2">
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Cross-selling com clientes digital de alto valor</li>
                    <li>Conversão de clientes frequentes para modelo de pedidos consolidados</li>
                    <li>Expansão de categorias com clientes de alto ticket médio</li>
                    <li>Estabelecimento de orçamentos anuais com top 20 clientes</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SumarioExecutivo;