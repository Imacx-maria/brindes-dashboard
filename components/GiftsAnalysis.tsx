'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Navigation from '@/components/shared/Navigation';

const GiftsAnalysis = () => {
  const setores = [
    {
      nome: 'Financeiro',
      empresas: [
        { nome: 'Liberty Seguros', potencial: 'Alto', motivo: 'Forte presença no mercado segurador, histórico de investimento em marketing direto' },
        { nome: 'SIBS', potencial: 'Alto', motivo: 'Líder em serviços de pagamento, múltiplas marcas e serviços' },
        { nome: 'BPI', potencial: 'Médio', motivo: 'Parte do grupo CaixaBank, potencial para campanhas multinacionais' },
        { nome: 'Fidelidade', potencial: 'Alto', motivo: 'Maior seguradora portuguesa, forte investimento em comunicação' },
        { nome: 'Millennium BCP', potencial: 'Alto', motivo: 'Maior banco privado português, múltiplas unidades de negócio' },
        { nome: 'Santander', potencial: 'Alto', motivo: 'Forte presença no mercado universitário e PME' },
        { nome: 'Allianz', potencial: 'Médio', motivo: 'Presença global, potencial para projetos internacionais' },
        { nome: 'Tranquilidade', potencial: 'Médio', motivo: 'Em fase de expansão após aquisição pela Generali' }
      ],
      analise: 'Setor com alto potencial devido à necessidade constante de materiais promocionais, brindes corporativos e campanhas de fidelização. O momento é especialmente favorável com a digitalização dos serviços financeiros.'
    },
    {
      nome: 'Utilities',
      empresas: [
        { nome: 'EDP', potencial: 'Alto', motivo: 'Líder do setor energético, múltiplas unidades de negócio' },
        { nome: 'Galp', potencial: 'Alto', motivo: 'Forte presença no retalho, potencial para campanhas promocionais' },
        { nome: 'REN', potencial: 'Médio', motivo: 'Foco em B2B mas com necessidades corporativas significativas' },
        { nome: 'Endesa', potencial: 'Alto', motivo: 'Em fase de expansão no mercado português' },
        { nome: 'Iberdrola', potencial: 'Médio', motivo: 'Crescente presença no mercado de energias renováveis' },
        { nome: 'Águas de Portugal', potencial: 'Médio', motivo: 'Grupo com múltiplas empresas regionais' }
      ],
      analise: 'Empresas com grande estrutura e múltiplos pontos de contato com clientes. Setor em transformação com foco em sustentabilidade, criando oportunidades para materiais eco-friendly.'
    },
    {
      nome: 'Automotive',
      empresas: [
        { nome: 'BMW Portugal', potencial: 'Alto', motivo: 'Marca premium com necessidade de materiais de alta qualidade' },
        { nome: 'Mercedes-Benz Portugal', potencial: 'Alto', motivo: 'Forte presença no mercado premium, eventos frequentes' },
        { nome: 'Porsche Ibérica', potencial: 'Médio', motivo: 'Mercado específico mas com alto valor por projeto' },
        { nome: 'Audi Portugal', potencial: 'Alto', motivo: 'Grande rede de concessionários, eventos regulares' },
        { nome: 'Volvo Car Portugal', potencial: 'Médio', motivo: 'Foco crescente em sustentabilidade e inovação' },
        { nome: 'Tesla Portugal', potencial: 'Alto', motivo: 'Expansão rápida, necessidade de materiais inovadores' }
      ],
      analise: 'Setor em transformação com foco em eletrificação e digitalização. Oportunidade para materiais premium e sustentáveis, alinhados com as novas tendências do mercado.'
    },
    {
      nome: 'Tecnologia e Telecom',
      empresas: [
        { nome: 'Vodafone', potencial: 'Alto', motivo: 'Forte presença no mercado empresarial e consumidor' },
        { nome: 'NOS', potencial: 'Alto', motivo: 'Múltiplos segmentos de atuação, incluindo cinema e entretenimento' },
        { nome: 'MEO', potencial: 'Alto', motivo: 'Maior operadora de telecomunicações do país' },
        { nome: 'Microsoft Portugal', potencial: 'Médio', motivo: 'Foco em eventos corporativos e formação' },
        { nome: 'Google Portugal', potencial: 'Médio', motivo: 'Eventos regulares para parceiros e developers' },
        { nome: 'Oracle Portugal', potencial: 'Médio', motivo: 'Forte presença no mercado empresarial' }
      ],
      analise: 'Setor dinâmico com necessidade constante de materiais para eventos, formações e lançamentos. Oportunidade para produtos tecnológicos e inovadores.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Potenciais Clientes por Setor</CardTitle>
            <p className="text-sm text-gray-500 mt-2">
              *Análise baseada em empresas de referência no mercado português
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8">
              {setores.map((setor) => (
                <div key={setor.nome} className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-semibold mb-4">{setor.nome}</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full mb-4">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-2 text-left">Empresa</th>
                          <th className="px-4 py-2 text-left">Potencial</th>
                          <th className="px-4 py-2 text-left">Justificativa</th>
                        </tr>
                      </thead>
                      <tbody>
                        {setor.empresas.map((empresa) => (
                          <tr key={empresa.nome} className="border-b">
                            <td className="px-4 py-2 font-medium">{empresa.nome}</td>
                            <td className="px-4 py-2">
                              <span className={`inline-block px-2 py-1 rounded text-sm ${
                                empresa.potencial === 'Alto'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {empresa.potencial}
                              </span>
                            </td>
                            <td className="px-4 py-2 text-gray-600">{empresa.motivo}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium mb-2">Análise do Setor</h3>
                    <p className="text-gray-700">{setor.analise}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Estratégia de Abordagem por Setor</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Financeiro:</strong> Focar em materiais de alta qualidade para eventos corporativos e campanhas de fidelização</li>
                <li><strong>Utilities:</strong> Desenvolver linha de produtos sustentáveis alinhados com as preocupações ambientais do setor</li>
                <li><strong>Automotive:</strong> Criar propostas premium com foco em lançamentos e eventos exclusivos</li>
                <li><strong>Tecnologia:</strong> Priorizar produtos inovadores e materiais para eventos técnicos/formativos</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GiftsAnalysis;