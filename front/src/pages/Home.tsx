import React, { useState } from "react";
import MealChart from "../components/MealChart";
import imgLogoSemFundo from "../logo/img-logo-semfundo.png";
import {
  ContainerBody, 
  ContainerMenu, 
  Navbar, 
  Sidebar, 
  SidebarContent, 
  Icon, 
  Item, 
  Footer, 
  ImgIcon,
} from "../styled/styled_Main";
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import styled_Home from "../styled/styled_Home";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { AdmMenu } from "../components";
import { UserProvider } from "../contexts";

const {
  InfoBox1, 
  InfoBox2, 
  FoodBox, 
  MealInfo, 
  MealKcal, 
  MealType, 
  Mealtime, 
  MealItems, 
  ChartContainer,
  FoodBoxContainer, 
  MealTimeContainer, 
  MealTypeContainer, 
  InfoBoxContainer,
} = styled_Home();

type MealItem =
  | "150g de frango grelhado"
  | "1 colher de arroz integral"
  | "25g de brócolis"
  | "salada verde com azeite de oliva";

const caloriasPorItem: Record<MealItem, number> = {
  "150g de frango grelhado": 300,
  "1 colher de arroz integral": 80,
  "25g de brócolis": 10,
  "salada verde com azeite de oliva": 50,
};

const Home: React.FC = () => {
  const navigate = useNavigate(); // Inicializar o hook useNavigate
  const items: MealItem[] = Object.keys(caloriasPorItem) as MealItem[]; // Fazer a conversão

  // Função recursiva para calcular calorias
  const calcularCalorias = (items: MealItem[], index: number): number => {
    if (index < 0) return 0; // Caso base: se o índice é menor que 0, retorne 0
    return caloriasPorItem[items[index]] + calcularCalorias(items, index - 1); // Recursão
  };
  const totalCalorias = calcularCalorias(items, items.length - 1); // Total de calorias da refeição

  // Função para calcular o consumo de água
  const calcularConsumoAgua = (peso: number): string => {
    const consumo = peso * 35; // Consumo em mililitros
    const litros = consumo / 1000; // Convertendo para litros
    return `${litros.toFixed(1).replace('.', ',')} L`; // Formata o resultado
  };
  // Exemplo de uso da função
  const peso = 70; // Substitua pelo peso real da pessoa
  const consumoAgua = calcularConsumoAgua(peso);

  // Função para calcular o IMC e o grau correspondente
  const calcularIMC = (peso: number, altura: number): { imc: string; grau: string } => {
    const imc = peso / (altura * altura); // IMC = peso / (altura * altura)
    let grau = '';
    // Determinando o grau de IMC com base na tabela
    if (imc < 16) {
    grau = 'Magreza grave';
    } else if (imc >= 16 && imc < 16.9) {
      grau = 'Magreza moderada';
    } else if (imc >= 17 && imc < 18.5) {
      grau = 'Magreza leve';
    } else if (imc >= 18.6 && imc < 24.9) {
      grau = 'Peso ideal';
    } else if (imc >= 25 && imc < 29.9) {
      grau = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
      grau = 'Obesidade grau I';
    } else if (imc >= 35 && imc < 39.9) {
      grau = 'Obesidade grau II';
    } else {
      grau = 'Obesidade grau III ou superior';
    }
    return { imc: imc.toFixed(1).replace('.', ','), grau }; // Retorna IMC formatado e grau
  };
  // Exemplo de uso da função
  const pesoPessoa = 70; // Substitua pelo peso real da pessoa
  const alturaPessoa = 1.75; // Substitua pela altura real da pessoa em metros
  const resultadoIMC = calcularIMC(pesoPessoa, alturaPessoa);

  return (
    <>
      {/* Barra de navegação da aplicação */}
      <ContainerMenu>
        <Navbar>
          <h1>Nome de usuário</h1>
          <UserProvider>
            <AdmMenu />
            {/* Conteúdo da página de administração */}
          </UserProvider>
        </Navbar>

        {/* Barra lateral da aplicação */}
        <Sidebar>
          <SidebarContent>
            <Item onClick={() => navigate("/home")}>
              <Icon>
                <IonIcon icon={Icons.home} />
              </Icon>
            </Item>
            <Item onClick={() => navigate("/cardapio")}>
              <Icon>
                <IonIcon icon={Icons.restaurant} />
              </Icon>
            </Item>
            <Item onClick={() => navigate("/historico")}>
              <Icon>
                <IonIcon icon={Icons.nutrition} />
              </Icon>
            </Item>
            <Item onClick={() => navigate("/metas")}>
              <Icon>
                <IonIcon icon={Icons.fitness} />
              </Icon>
            </Item>
          </SidebarContent>
        </Sidebar>
      </ContainerMenu>
      {/* Corpo da aplicação */}
      <ContainerBody>
        <InfoBoxContainer>
          {/* O resultado do calculo de imc pegando o peso e a altura do usuário no momento do cadastro devem aparecer nesse campo */}
          <InfoBox1>
            <div className="content">
              <label className="imc-label">IMC</label>
              <label className="imc">{resultadoIMC.imc}</label>
              <label className="imc-label">Grau: {resultadoIMC.grau}</label>
              {/* O objetivo que o usuário definiu no cadastro deve aparecer aqui */}
              <div className="objetivo-container">
                <label className="objetivo">Objetivo: </label>
                <label className="objetivo">Emagrecimento</label>
              </div>
            </div>
          </InfoBox1>
          {/* O resultado do calculo para consumo de água resultante da multiplicação do peso informado pelo usuario vezes 35 deve aparecer nesse campo */}
          <InfoBox2>
            <div className="content">
              <label className="consumo-label">Consumo de água</label>
              <label className="consumo-agua">{consumoAgua}</label>
            </div>
          </InfoBox2>
        </InfoBoxContainer>
        {/* O historico diario da refeições ou alimentos consumidos pelo usuário devem ser mostrados nesse campo */}
        <FoodBoxContainer>
          <FoodBox>
            <MealInfo>
              <MealTypeContainer>
                {/* adicionar o tipo de refeição nesse campo */}
                <MealType>Almoço</MealType> 
                <Icon>
                  <IonIcon icon={Icons.create} />
                </Icon>
              </MealTypeContainer>
              {/* adicionar o horario da refeição nesse campo */}
              <MealTimeContainer>
                <Icon>
                  <IonIcon icon={Icons.time} />
                </Icon>
                <Mealtime>12:20</Mealtime>
              </MealTimeContainer>
              {/* os alimentos devem esntrar nesse campo */}
              <MealItems>
              {items.map((item, index) => (
                <p key={index}>- {item}</p>
              ))}
              </MealItems>
              {/* o resultado do calculo de calorias deve aparecer nesse campo */}
              <MealKcal>
                <label>Total Kcal: </label>
                {totalCalorias}
              </MealKcal>
            </MealInfo>
              {/* os nutrientes da refeição devem constar no grafico nesse campo */}
            <ChartContainer>
              <MealChart />
            </ChartContainer>
          </FoodBox>
        </FoodBoxContainer>
      </ContainerBody>
      {/* Rodapé da aplicação */}
      <Footer>
        <div>
          Copyright © 2024 / 2025 | HighTech
          <br />
          Todos os direitos reservados
        </div>
        <ImgIcon>
          <img src={imgLogoSemFundo} alt="Logo Nutritech" />
        </ImgIcon>
      </Footer>
    </>
  );
};

export default Home;
