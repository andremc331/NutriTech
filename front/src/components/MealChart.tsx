
import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";


// Grafico de refeição que aparace no historico na pagina home
const MealChart = () => {
  const series = [
    {
      name: "Aves",
      data: [150],
    },
    {
      name: "Cereais",
      data: [85],
    },
    {
      name: "Leguminosas",
      data: [25],
    },
    {
      name: "Hortaliças folhosas",
      data: [35],
    },
  ];
  
  const options: ApexOptions = {
    chart: {
      type: "bar" as const,
      height: 300,
      stacked: true,
      stackType: "100%",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "10%",
      },
    },
    title: {
      text: "",
    },
    xaxis: {
      categories: ["Almoço"],
      labels: {
        style: {
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false, // Oculta a linha do eixo X
      },
      axisTicks: {
        show: false, // Oculta os marcadores do eixo X
      },
    },
    yaxis: {
      labels: {
        show: false, // Oculta os rótulos do eixo Y
      },
      axisBorder: {
        show: false, // Oculta a linha do eixo Y
      },
      axisTicks: {
        show: false, // Oculta os marcadores do eixo Y
      },
    },
    grid: {
      show: false, // Oculta as linhas do grid
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val + "g"; // Exibe o valor em gramas
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
        position: "top",
        horizontalAlign: "left",
        floating: true,
        offsetX: 0,  // Ajuste conforme necessário
        offsetY: 0,  // Ajuste conforme necessário
      },
  };

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={200} />
    </div>
  );
};

export default MealChart;
