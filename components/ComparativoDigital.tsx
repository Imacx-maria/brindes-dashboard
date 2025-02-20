'use client';

import React from 'react';
import Navigation from '@/components/shared/Navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ComparativoDigital = () => {
  const digitalGiftsData = [
    {
      cliente: "Sumol+Compal Marcas, S.A",
      displayName: "Sumol+Compal Marca...",
      vendas2023: 15813,
      vendas2024: 54116.31
    },
    {
      cliente: "Altavia Ibérica CFA, SA- SUCURSAL EM PORTUGAL",
      displayName: "Altavia Ibérica CF...",
      vendas2023: 60049.75,
      vendas2024: 49260.93
    },
    {
      cliente: "Communisis Portugal, Lda.",
      displayName: "Communisis Portuga...",
      vendas2023: 60530.33,
      vendas2024: 26144.37
    },
    {
      cliente: "HH  Print Management Spain, S.L",
      displayName: "HH  Print Manageme...",
      vendas2023: 5159.6,
      vendas2024: 24680.5
    },
    {
      cliente: "ISS-OEIRAS - INTERNATIONAL SHARING SCHOOL - OEIRAS, S.A",
      displayName: "ISS-OEIRAS - INTER...",
      vendas2023: 12437.5,
      vendas2024: 12101.22
    },
    {
      cliente: "PROMOTORRES E.M.",
      displayName: "PROMOTORRES E.M.",
      vendas2023: 24733.15,
      vendas2024: 11322.4
    },
    {
      cliente: "Nestlé Portugal, S.A",
      displayName: "Nestlé Portugal, S...",
      vendas2023: 8050,
      vendas2024: 9529.6
    },
    {
      cliente: "Laboratórios Atral, SA.",
      displayName: "Laboratórios Atral...",
      vendas2023: 4045.2,
      vendas2024: 7107
    },
    {
      cliente: "Corpo Nacional de Escutas (C.N.E.).",
      displayName: "Corpo Nacional de ...",
      vendas2023: 237.6,
      vendas2024: 3202.5
    },
    {
      cliente: "DESCOPIA DESENHO COPIAS E ARTES GRAFICAS LDA",
      displayName: "DESCOPIA DESENHO C...",
      vendas2023: 130,
      vendas2024: 2935
    }
  ];

  const digitalNoGiftsData = [
    {
      cliente: "MANUEL RUI AZINHAIS NABEIRO, LDA",
      displayName: "MANUEL RUI AZINHAI...",
      vendas2024: 97369.59
    },
    {
      cliente: "DSGPR - Design Criativo Lda.",
      displayName: "DSGPR - Design Cri...",
      vendas2024: 91819.5
    },
    {
      cliente: "Astrografe, Lda",
      displayName: "Astrografe, Lda",
      vendas2024: 58751.81
    },
    {
      cliente: "PLANETEXPAND - DESIGN STUDIO UNIPESSOAL LDA",
      displayName: "PLANETEXPAND - DES...",
      vendas2024: 38588.1
    },
    {
      cliente: "Laboratórios Sarbec, Lda",
      displayName: "Laboratórios Sarbe...",
      vendas2024: 34048.15
    },
    {
      cliente: "Artsana Portugal, S.A.",
      displayName: "Artsana Portugal, ...",
      vendas2024: 32825
    },
    {
      cliente: "Reckitt Benckiser (Portugal), SA",
      displayName: "Reckitt Benckiser ...",
      vendas2024: 27562
    },
    {
      cliente: "FACING II DISTRIBUIÇÃO UNIPESSOAL LDA",
      displayName: "FACING II DISTRIBU...",
      vendas2024: 17157
    },
    {
      cliente: "ACE SUPPLY SERVICES LDA",
      displayName: "ACE SUPPLY SERVICE...",
      vendas2024: 16240
    },
    {
      cliente: "JDM DEIGRATIA LDA",
      displayName: "JDM DEIGRATIA LDA",
      vendas2024: 12028.11
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="max-w-6xl mx-auto p-4">
        <Card>
          <CardHeader>
            <CardTitle>Análise Digital vs Gifts 2023-2024</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-medium">Total Digital com Gifts</h3>
                <p className="text-2xl font-bold">
                  {digitalGiftsData.length} clientes
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-medium">Maior Cliente Digital em Gifts</h3>
                <p className="text-2xl font-bold">
                  {digitalGiftsData[0]?.cliente || 'N/A'}
                </p>
                <p className="text-sm">
                  €{digitalGiftsData[0]?.vendas2024.toFixed(2) || '0'} em 2024
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded">
                <h3 className="font-medium">Potencial em Gifts</h3>
                <p className="text-2xl font-bold">
                  {digitalNoGiftsData.length} clientes
                </p>
              </div>
            </div>

            <div className="h-[500px] mb-16">
              <h3 className="font-medium mb-4">Top Clientes Digital com Compras em Gifts</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={digitalGiftsData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 100 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="displayName"
                    angle={-45} 
                    textAnchor="end" 
                    height={100}
                    tick={{fontSize: '10px'}}
                    interval={0}
                  />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => typeof value === 'number' ? `€${value.toFixed(2)}` : value}
                    labelFormatter={(label, payload) => payload[0]?.payload?.cliente || label}
                  />
                  <Legend verticalAlign="top" align="right" />
                  <Bar dataKey="vendas2023" name="Gifts 2023" fill="#8884d8" />
                  <Bar dataKey="vendas2024" name="Gifts 2024" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="h-[500px] mb-16">
              <h3 className="font-medium mb-4">Top Clientes Digital sem Compras em Gifts</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={digitalNoGiftsData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 100 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="displayName"
                    angle={-45} 
                    textAnchor="end" 
                    height={100}
                    tick={{fontSize: '10px'}}
                    interval={0}
                  />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => typeof value === 'number' ? `€${value.toFixed(2)}` : value}
                    labelFormatter={(label, payload) => payload[0]?.payload?.cliente || label}
                  />
                  <Legend verticalAlign="top" align="right" />
                  <Bar dataKey="vendas2024" name="Digital 2024" fill="#ff7c43" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded">
              <h3 className="font-semibold mb-2">Insights de Performance</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>Identificados {digitalGiftsData.length} clientes digitais ativos em gifts</li>
                <li>Potencial de expansão para {digitalNoGiftsData.length} novos clientes de gifts</li>
                <li>{digitalGiftsData[0]?.cliente || 'N/A'} lidera em compras de gifts entre clientes digitais</li>
                <li>Oportunidade de cross-selling com clientes digitais de alto valor que ainda não compram gifts</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ComparativoDigital;