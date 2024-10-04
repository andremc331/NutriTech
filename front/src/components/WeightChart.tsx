
import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

//Grafico para mostrar o progresso do usuário em relação a perda ou ganho de peso
const WeightChart: React.FC = () => {
  const series = [
    {
      name: "Peso",
      data: [90, 82, 74, 80, 86, 63, 62], // Exemplo de dados de perda de peso
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Progresso de Peso",
      align: "left",
    },
    xaxis: {
      categories: [
        "Semana 1",
        "Semana 2",
        "Semana 3",
        "Semana 4",
        "Semana 5",
        "Semana 6",
        "Semana 7",
      ],
    },
    yaxis: {
      max: 200, // Define o valor máximo do eixo Y
      min: 0, // Define o valor mínimo do eixo Y
      title: {
        text: "Peso (kg)", // Título do eixo Y
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    markers: {
      size: 5, // Tamanho dos marcadores
      hover: {
        size: 7, // Tamanho do marcador ao passar o mouse
      },
    },
  };

  return (
    <div>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default WeightChart;
