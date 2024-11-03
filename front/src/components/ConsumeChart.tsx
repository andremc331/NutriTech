import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const ConsumeChart: React.FC = () => {
  const gruposAlimentares = [
    'Cereais', 'Leguminosas', 'Hortaliças tuberosas', 'Farinhas, féculas e Massas',
    'Castanhas e Nozes', 'Hortaliças folhosas, frutosas', 'Frutas', 'Açucares e doces',
    'Sais e Condimentos', 'Carnes', 'Pescados', 'Frutos do mar', 'Enlatados',
    'Aves e ovos', 'Laticínios', 'Panificados', 'Carnes industrializadas',
    'Bebidas não alcoólicas', 'Bebidas alcoólicas', 'Chás', 'Óleos e gorduras', 'Miscelâneas'
  ];

  const consumoPercentual = [
    15, 10, 5, 8, 12, 7, 14, 6,
    3, 9, 4, 11, 2, 8, 7, 6,
    5, 9, 3, 10, 4, 8
  ];

  const chartOptions: ApexOptions = {
    chart: {
      type: 'donut',
    },
    title: {
      text: "Consumo Alimentar",
      align: "center",
    },
    labels: gruposAlimentares,
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
      <Chart
        options={chartOptions}
        series={consumoPercentual}
        type="donut"
        width="300"
      />
    </div>
  );
};

export default ConsumeChart;
