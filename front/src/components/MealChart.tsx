import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

// Grafico de refeição que aparece no histórico na página home
type MealChartProps = {
  protein: number;
  lipids: number;
  carbohydrates: number;
  fibers: number;
};

const MealChart: React.FC<MealChartProps> = ({
  protein,
  lipids,
  carbohydrates,
  fibers,
}) => {
  const series = [
    {
      name: "Proteina",
      data: [protein],
    },
    {
      name: "Lipidios",
      data: [lipids],
    },
    {
      name: "Carboidrato",
      data: [carbohydrates],
    },
    {
      name: "Fibras",
      data: [fibers],
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
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val + "g";
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
      offsetX: 0,
      offsetY: 0,
    },
  };

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={200} />
    </div>
  );
};

export default MealChart;