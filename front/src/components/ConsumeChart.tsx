// ConsumeChart.tsx
import React from 'react';
import { HistoricoData } from '../types';  // Asegure-se de que 'HistoricoData' esteja correto
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ConsumeChartProps {
  data: HistoricoData[];  // O componente espera uma lista de HistoricoData como 'data'
}

const ConsumeChart: React.FC<ConsumeChartProps> = ({ data }) => {
  // Aqui você vai mapear os dados para gerar os valores do gráfico
  const labels = data.map((item) => item.foodName);  // Usando o nome dos alimentos
  const series = data.map((item) => item.quantity);  // Usando a quantidade de alimentos

  const chartOptions: ApexOptions = {
    chart: {
      type: 'donut',
    },
    title: {
      text: 'Consumo Alimentar',
      align: 'left',
    },
    labels,  // As labels do gráfico são os nomes dos alimentos
    legend: {
      show: false, // Oculta a legenda
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <div>
      <Chart options={chartOptions} series={series} type="donut" width="300" />
    </div>
  );
};

export default ConsumeChart;
