'use client';

import React from 'react';
import Navigation from '@/components/shared/Navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  ZAxis
} from 'recharts';

const AnaliseBrindesCompleta = () => {
  const top10Clientes = [
    {
      cliente: 'Niusistemas',
      totalVendas: 88563.77,
      numeroEncomendas: 65,
      ticketMedio: 1362.52
    },
    {
      cliente: 'Sumol+Compal',
      totalVendas: 54116.31,
      numeroEncomendas: 22,
      ticketMedio: 2459.83
    },
    {
      cliente: 'Altavia',
      totalVendas: 49260.93,
      numeroEncomendas: 49,
      ticketMedio: 1005.33
    },
    {
      cliente: 'Communisis',
      totalVendas: 26144.37,
      numeroEncomendas: 16,
      ticketMedio: 1634.02
    },
    {
      cliente: 'HH Print',
      totalVendas: 24680.5,
      numeroEncomendas: 7,
      ticketMedio: 3525.79
    },
    {
      cliente: 'Lassarat',
      totalVendas: 19090.0,
      numeroEncomendas: 4,
      ticketMedio: 4772.5
    },
    {
      cliente: 'U. Católica',
      totalVendas: 18771.65,
      numeroEncomendas: 14,
      ticketMedio: 1340.83
    },
    {
      cliente: 'ISS Oeiras',
      totalVendas: 12101.22,
      numeroEncomendas: 5,
      ticketMedio: 2420.24
    },
    {
      cliente: 'Promotorres',
      totalVendas: 11322.4,
      numeroEncomendas: 4,
      ticketMedio: 2830.6
    },
    {
      cliente: 'Tubos Vouga',
      totalVendas: 11023.5,
      numeroEncomendas: 3,
      ticketMedio: 3674.5
    }
  ];

  const distribuicao = [
    { faixa: '>€50k', quantidade: 2 },
    { faixa: '€25k-50k', quantidade: 2 },
    { faixa: '€10k-25k', quantidade: 7 },
    { faixa: '€5k-10k', quantidade: 9 },
    { faixa: '€1k-5k', quantidade: 43 },
    { faixa: '<€1k', quantidade: 100 }
  ];

  const scatterData = top10Clientes.map(item => ({
    cliente: item.cliente,
    ticketMedio: item.ticketMedio,
    numEncomendas: item.numeroEncomendas,
    volume: item.totalVendas
  }));

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="w-full max-w-6xl mx-auto space-y-4 p-4">
        <Card>
          <CardHeader>
            <CardTitle>Análise Departamento de Brindes - 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-medium">Volume Total</h3>
                <p className="text-2xl font-bold">€501.676</p>
                <p className="text-sm">163 clientes ativos</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-medium">Pedidos</h3>
                <p className="text-2xl font-bold">514</p>
                <p className="text-sm">Total de encomendas</p>
              </div>
              <div className="bg-purple-50 p-4 rounded">
                <h3 className="font-medium">Ticket Médio</h3>
                <p className="text-2xl font-bold">€976</p>
                <p className="text-sm">Média por encomenda</p>
              </div>
            </div>

            <div className="h-80 mb-6">
              <h3 className="font-medium mb-4">Distribuição de Clientes por Volume de Vendas</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={distribuicao}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="faixa" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="quantidade" name="Nº de Clientes" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="h-80">
              <h3 className="font-medium mb-4">Relação Ticket Médio vs Número de Encomendas (Top 10)</h3>
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" dataKey="numEncomendas" name="Nº Encomendas" />
                  <YAxis type="number" dataKey="ticketMedio" name="Ticket Médio" unit="€" />
                  <ZAxis type="number" dataKey="volume" range={[100, 600]} />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter name="Clientes" data={scatterData} fill="#8884d8" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded">
              <h3 className="font-semibold mb-2">Insights para Otimização de Esforço</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>61% dos clientes (100) têm volume abaixo de €1.000</li>
                <li>Apenas 4 clientes representam mais de €25.000 em vendas</li>
                <li>
                  Clientes de alto valor e baixo esforço:
                  <ul className="list-circle pl-4 mt-1">
                    <li>Lassarat: €4.773/pedido (4 pedidos)</li>
                    <li>HH Print: €3.526/pedido (7 pedidos)</li>
                    <li>Tubos Vouga: €3.675/pedido (3 pedidos)</li>
                  </ul>
                </li>
                <li>
                  Clientes que precisam consolidar pedidos:
                  <ul className="list-circle pl-4 mt-1">
                    <li>Niusistemas: 65 pedidos com ticket médio de €1.363</li>
                    <li>Altavia: 49 pedidos com ticket médio de €1.005</li>
                  </ul>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnaliseBrindesCompleta;