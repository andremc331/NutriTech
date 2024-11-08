import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface WeightChartProps {
  pesoAnterior: number;
  pesoAtual: number;
}

// Grafico para mostrar o progresso do usuário em relação a perda ou ganho de peso
const WeightChart: React.FC<WeightChartProps> = ({ pesoAnterior, pesoAtual }) => {
  const [seriesData, setSeriesData] = useState<number[]>([pesoAnterior, pesoAtual]); // Armazenando os dados do gráfico
  const [categories, setCategories] = useState<string[]>(["Início", "Atual"]); // Categorias de exemplo (Início, Atual)

  useEffect(() => {
    // Atualiza a série de dados sempre que os pesos mudarem
    setSeriesData([pesoAnterior, pesoAtual]);
    setCategories((prevCategories) => [...prevCategories, "Próximo"]); // Adiciona uma nova categoria caso necessário
  }, [pesoAnterior, pesoAtual]);

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
      align: "center",
    },
    xaxis: {
      categories, // Usando categorias dinâmicas
    },
    yaxis: {
      max: 200, // Definindo o valor máximo do eixo Y
      min: 0, // Definindo o valor mínimo do eixo Y
      title: {
        text: "Peso (kg)",
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    markers: {
      size: 5,
      hover: {
        size: 7,
      },
    },
  };

  const series = [
    {
      name: "Peso",
      data: seriesData, // Usando dados dinâmicos
    },
  ];

  return (
    <div>
      <Chart 
        options={options} 
        series={series} 
        type="line"
        width="400" 
        height={250} 
      />
      <div>
      </div>
    </div>
  );
};

export default WeightChart;