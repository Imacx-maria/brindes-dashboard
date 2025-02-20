'use client';

import React from 'react';
import Navigation from '@/components/shared/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';

const SalesDashboard = () => {
  // Dados estáticos baseados na análise anterior
  const salesData = {
    totalCustomers: 500,
    belowThousand: 261,
    averages: {
      below1000: 338.55,
      median: 281.25
    },
    customerDistribution: [
      { name: '0-100€', value: 46, percentage: '9.2' },
      { name: '100-500€', value: 150, percentage: '30.0' },
      { name: '500-1000€', value: 65, percentage: '13.0' },
      { name: '1000-5000€', value: 144, percentage: '28.8' },
      { name: '5000€+', value: 95, percentage: '19.0' }
    ]
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="p-4 space-y-4 bg-gray-50 min-h-screen">
      <Navigation />
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Dashboard de Análise de Vendas
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Principais Métricas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-lg">
                Total de Clientes: <span className="font-bold">{salesData.totalCustomers}</span>
              </p>
              <p className="text-lg">
                Clientes abaixo de 1000€: <span className="font-bold">{salesData.belowThousand}</span>
              </p>
              <p className="text-lg">
                Percentagem: <span className="font-bold">
                  {((salesData.belowThousand / salesData.totalCustomers) * 100).toFixed(1)}%
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Médias de Vendas (Clientes &lt; 1000€)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-lg">
                Média: <span className="font-bold">{salesData.averages.below1000.toFixed(2)}€</span>
              </p>
              <p className="text-lg">
                Mediana: <span className="font-bold">{salesData.averages.median.toFixed(2)}€</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Distribuição de Clientes por Faixa de Vendas</CardTitle>
          </CardHeader>
          <CardContent className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={salesData.customerDistribution}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" name="Número de Clientes" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribuição Percentual</CardTitle>
          </CardHeader>
          <CardContent className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={salesData.customerDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, percentage }) => `${name} (${percentage}%)`}
                  outerRadius={130}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {salesData.customerDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SalesDashboard;