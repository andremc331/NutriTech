import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { HistoricoData } from '../types';  // Certifique-se de que o tipo HistoricoData está correto

// Definindo as props que o componente vai receber
interface ConsumeChartProps {
  data: HistoricoData[];  // Tipando o 'data' como HistoricoData[]
}

const ConsumeChart: React.FC<ConsumeChartProps> = ({ data }) => {
  // Mapeando os dados para as labels e séries do gráfico
  const labels = data.map(item => item.foodName);  // Nome do alimento (ou descrição)
  const series = data.map(item => item.quantity);  // Quantidade consumida

  const chartOptions: ApexOptions = {
    chart: {
      type: 'donut',
    },
    title: {
      text: "Consumo Alimentar",
      align: "left",
    },
    labels: labels,  // Usando os labels extraídos dos dados
    legend: {
      show: false, // Remove a legenda
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
      <h2>Gráfico de Consumo</h2>
      <Chart
        options={chartOptions}
        series={series}
        type="donut"
        width="300"
      />
    </div>
  );
};

export default ConsumeChart;
