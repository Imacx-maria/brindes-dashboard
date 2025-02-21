'use client';

import React from 'react';
import DashboardTemplate from '@/components/DashboardTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ClientData {
  client: string;
  totalValue: number;
  orderCount: number;
  averageValue: number;
  balanceScore?: number;
  inverseScore?: number;
}

interface YearTableProps {
  data: ClientData[];
  showBalanceScore?: boolean;
}

const BalancedClientsTable = () => {
  const data2023 = [
    {
      client: "Altavia Ibérica CFA, SA",
      totalValue: 60049.75,
      orderCount: 31,
      averageValue: 1937.09,
      balanceScore: 27496.93
    },
    {
      client: "Communisis Portugal, Lda.",
      totalValue: 60530.33,
      orderCount: 23,
      averageValue: 2631.75,
      balanceScore: 19859.26
    },
    {
      client: "UNIVERSIDADE CATOLICA PORTUGUESA",
      totalValue: 29517.90,
      orderCount: 16,
      averageValue: 1844.87,
      balanceScore: 15799.02
    },
    {
      client: "Niusistemas, Power For Brands, S.A",
      totalValue: 40752.20,
      orderCount: 45,
      averageValue: 905.60,
      balanceScore: 14740.43
    },
    {
      client: "Adare International Ltd",
      totalValue: 36451.22,
      orderCount: 13,
      averageValue: 2803.94,
      balanceScore: 12980.34
    },
    {
      client: "PROMOTORRES E.M.",
      totalValue: 24733.15,
      orderCount: 13,
      averageValue: 1902.55,
      balanceScore: 11468.45
    },
    {
      client: "ROCK OFFICIAL LDA",
      totalValue: 20514.00,
      orderCount: 3,
      averageValue: 6838.00,
      balanceScore: 8704.09
    },
    {
      client: "Sumol+Compal Marcas, S.A",
      totalValue: 15813.00,
      orderCount: 10,
      averageValue: 1581.30,
      balanceScore: 8197.49
    },
    {
      client: "BIMBO DONUTS PORTUGAL, LDA",
      totalValue: 9279.00,
      orderCount: 3,
      averageValue: 3093.00,
      balanceScore: 7973.92
    },
    {
      client: "Riberalves Com. e Ind.",
      totalValue: 11924.65,
      orderCount: 11,
      averageValue: 1084.06,
      balanceScore: 6744.38
    }
  ];
  
  const data2024 = [
    {
      client: "Niusistemas, Power For Brands, S.A",
      totalValue: 88563.77,
      orderCount: 65,
      averageValue: 1362.52,
      balanceScore: 27499.26
    },
    {
      client: "Altavia Ibérica CFA, SA",
      totalValue: 49260.93,
      orderCount: 49,
      averageValue: 1005.33,
      balanceScore: 21755.79
    },
    {
      client: "Sumol+Compal Marcas, S.A",
      totalValue: 54116.31,
      orderCount: 22,
      averageValue: 2459.83,
      balanceScore: 15547.41
    },
    {
      client: "HH Print Management Spain, S.L",
      totalValue: 24680.50,
      orderCount: 7,
      averageValue: 3525.79,
      balanceScore: 13433.74
    },
    {
      client: "Communisis Portugal, Lda.",
      totalValue: 26144.37,
      orderCount: 16,
      averageValue: 1634.02,
      balanceScore: 11818.25
    },
    {
      client: "LASSARAT INTERNACIONAL",
      totalValue: 19090.00,
      orderCount: 4,
      averageValue: 4772.50,
      balanceScore: 11072.79
    },
    {
      client: "UNIVERSIDADE CATOLICA PORTUGUESA",
      totalValue: 18771.65,
      orderCount: 14,
      averageValue: 1340.83,
      balanceScore: 9460.80
    },
    {
      client: "TUBOS VOUGA",
      totalValue: 11023.50,
      orderCount: 3,
      averageValue: 3674.50,
      balanceScore: 7768.10
    },
    {
      client: "PROMOTORRES E.M.",
      totalValue: 11322.40,
      orderCount: 4,
      averageValue: 2830.60,
      balanceScore: 6171.60
    },
    {
      client: "SUMA SERVIÇOS URBANOS",
      totalValue: 10742.00,
      orderCount: 5,
      averageValue: 2148.40,
      balanceScore: 5958.35
    }
  ];

  const lowValueClients2023 = [
    {
        client: "Niusistemas, Power For Brands, S.A",
        totalValue: 40752.20,
        orderCount: 45,
        averageValue: 905.60,
        inverseScore: 4.97
      },
      {
        client: "DRIVE ON HOLIDAYS",
        totalValue: 10299.85,
        orderCount: 22,
        averageValue: 468.18,
        inverseScore: 4.70
      },
      {
        client: "APONTO PARTICULAR LDA",
        totalValue: 283.05,
        orderCount: 3,
        averageValue: 94.35,
        inverseScore: 3.18
      },
      {
        client: "Sovereign Magic - Sines Sea View Hotel",
        totalValue: 1319.21,
        orderCount: 6,
        averageValue: 219.87,
        inverseScore: 2.73
      },
      {
        client: "3OLOGIA EXPERIENCE LDA",
        totalValue: 4812.20,
        orderCount: 11,
        averageValue: 437.47,
        inverseScore: 2.51
      },
      {
        client: "JCK THE MAKER LDA",
        totalValue: 1065.95,
        orderCount: 5,
        averageValue: 213.19,
        inverseScore: 2.35
      },
      {
        client: "SANIWORK",
        totalValue: 1072.20,
        orderCount: 5,
        averageValue: 214.44,
        inverseScore: 2.33
      },
      {
        client: "GO PEOPLE LDA",
        totalValue: 1282.25,
        orderCount: 5,
        averageValue: 256.45,
        inverseScore: 1.95
      },
      {
        client: "Cruz, Salinas & Assoc.",
        totalValue: 3561.00,
        orderCount: 8,
        averageValue: 445.13,
        inverseScore: 1.80
      },
      {
        client: "NO MEN - PHOTOGRAPHY LDA",
        totalValue: 948.40,
        orderCount: 4,
        averageValue: 237.10,
        inverseScore: 1.69
      }
    ];
  
    const lowValueClients2024 = [
      {
        client: "DESCOPIA DESENHO COPIAS",
        totalValue: 2935.00,
        orderCount: 22,
        averageValue: 133.41,
        inverseScore: 16.49
      },
      {
        client: "JOÃO PAES PRATA, LDA",
        totalValue: 304.00,
        orderCount: 4,
        averageValue: 76.00,
        inverseScore: 5.26
      },
      {
        client: "Altavia Ibérica CFA, SA",
        totalValue: 49260.93,
        orderCount: 49,
        averageValue: 1005.33,
        inverseScore: 4.87
      },
      {
        client: "OCULISTA DO BAIRRO, LDA",
        totalValue: 187.50,
        orderCount: 3,
        averageValue: 62.50,
        inverseScore: 4.80
      },
      {
        client: "Niusistemas, Power For Brands, S.A",
        totalValue: 88563.77,
        orderCount: 65,
        averageValue: 1362.52,
        inverseScore: 4.77
      },
      {
        client: "SHOPITUR - GESTÃO DE CENT.",
        totalValue: 589.60,
        orderCount: 4,
        averageValue: 147.40,
        inverseScore: 2.71
      },
      {
        client: "SABAPORTUGAL",
        totalValue: 1006.48,
        orderCount: 5,
        averageValue: 201.30,
        inverseScore: 2.48
      },
      {
        client: "3OLOGIA EXPERIENCE LDA",
        totalValue: 5017.70,
        orderCount: 11,
        averageValue: 456.15,
        inverseScore: 2.41
      },
      {
        client: "A ACTA - CONTABILIDADE",
        totalValue: 375.00,
        orderCount: 3,
        averageValue: 125.00,
        inverseScore: 2.40
      },
      {
        client: "SANTOS DA NOSSA OLIVEIRA",
        totalValue: 471.00,
        orderCount: 3,
        averageValue: 157.00,
        inverseScore: 1.91
      }
    ];
     
    const YearTable: React.FC<YearTableProps> = ({ data, showBalanceScore = true }) => (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left font-semibold">Cliente</th>
                  <th className="p-3 text-right font-semibold">Valor Total (€)</th>
                  <th className="p-3 text-right font-semibold">Nº Encomendas</th>
                  <th className="p-3 text-right font-semibold">Média por Encomenda (€)</th>
                  <th className="p-3 text-right font-semibold">
                    {showBalanceScore ? 'Score de Equilíbrio' : 'Score Inverso'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} 
                      className={`
                        ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} 
                        ${index < 5 ? 'font-semibold' : ''} 
                        ${!showBalanceScore && row.averageValue < 250 ? 'text-red-600' : ''}
                      `}>
                    <td className="p-3 text-left">{row.client}</td>
                    <td className="p-3 text-right">
                      {row.totalValue.toLocaleString('pt-PT', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </td>
                    <td className="p-3 text-right">{row.orderCount}</td>
                    <td className="p-3 text-right">
                      {row.averageValue.toLocaleString('pt-PT', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </td>
                    <td className="p-3 text-right">
                      {(showBalanceScore ? row.balanceScore : row.inverseScore)?.toLocaleString('pt-PT', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
      
      return (
        <DashboardTemplate>
          <div className="space-y-8">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Top 10 Clientes Mais Equilibrados</CardTitle>
                <p className="text-sm text-gray-500">Baseado em volume, frequência e consistência de encomendas</p>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="2024" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="2023">2023</TabsTrigger>
                    <TabsTrigger value="2024">2024</TabsTrigger>
                  </TabsList>
                  <TabsContent value="2023">
                    <YearTable data={data2023} showBalanceScore={true} />
                  </TabsContent>
                  <TabsContent value="2024">
                    <YearTable data={data2024} showBalanceScore={true} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
    
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Top 10 Clientes - Alta Frequência e Baixo Valor Médio</CardTitle>
                <p className="text-sm text-gray-500">
                  Destacados em vermelho: Clientes com média por encomenda inferior a 250€
                  <br/>
                  Score Inverso: Quanto maior, mais desequilibrada é a relação entre frequência e valor
                </p>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="2024" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="2023">2023</TabsTrigger>
                    <TabsTrigger value="2024">2024</TabsTrigger>
                  </TabsList>
                  <TabsContent value="2023">
                    <YearTable data={lowValueClients2023} showBalanceScore={false} />
                  </TabsContent>
                  <TabsContent value="2024">
                    <YearTable data={lowValueClients2024} showBalanceScore={false} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </DashboardTemplate>
      );
    };
    
    export default BalancedClientsTable;