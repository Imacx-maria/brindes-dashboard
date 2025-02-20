import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Navigation from '@/components/shared/Navigation';

const SumarioExecutivo = () => {
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
                  <p className="text-sm">9 clientes &gt; €10k</p>
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
                      <li>Investigar queda de performance em Q4</li>
                      <li>Análise detalhada dos novos clientes (32 adicionais)</li>
                      <li>Avaliar impacto da redução do ticket médio</li>
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
                    <li>Expansão de categorias com clientes de alto ticket médio</li>
                    <li>Estabelecimento de orçamentos anuais com top 20 clientes</li>
                    <li>Foco em recuperação da performance Q4 para 2025</li>
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