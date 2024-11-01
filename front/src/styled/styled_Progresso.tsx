import styled from 'styled-components';

const styled_Metas =()=>{
 const Body = styled.body`
  font-family: Arial, sans-serif;
  background-color: #f0f0f5;
  color: #333;
  margin: 0;
  padding: 0;
`;

const MetasBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #f0f0f0; /* Cor de fundo apenas para esta página */
  min-height: 100vh; /* Garante que a altura ocupe toda a tela */
`;

const ContainerMenu = styled.div`
display: flex;
flex-direction: column; /* Organiza os elementos em coluna */
`;

const BarraNavegacao = styled.div`
width: 100%; /* Largura total */
height: 80px; /* Altura da barra */
background-color: #c9b7e6; /* Cor de fundo */
color: #ffffff; /* Cor do texto */
display: flex; /* Usar flexbox */
justify-content: space-between; /* Alinhar itens nas extremidades */
align-items: center; /* Centraliza verticalmente */
padding: 0 20px; /* Espaçamento interno */
position: fixed; /* Fixa na parte superior */
top: 0; /* Alinha ao topo */
left: 0; /* Alinha à esquerda */
z-index: 1000; /* Garante que fique acima de outros elementos */
`;

const PeriodoSelector = styled.div`
margin-top: 50px;
display: flex;
justify-content: center;
margin-bottom: 20px;
`;

const PeriodoButton = styled.button`
background: none;
border: none;
color: #333;
font-size: 18px;
cursor: pointer;
padding: 10px 20px;
transition: color 0.3s, border-bottom 0.3s;

&.active {
  color: #333;
  border-bottom: 3px solid #333;
}

&:hover {
  color: #333;
  border-bottom: 2px solid #333;
}

@media (max-width: 600px) {
  font-size: 16px;
  padding: 8px 15px;
}
`;

const Sidebar = styled.div`
width: 100px; /* Largura inicial */
height: calc(100% - 60px); /* Ajusta a altura da sidebar */
background-color: #714d95;
color: #ffffff;
position: fixed; /* Fixa à esquerda */
top: 60px; /* Alinha abaixo da barra de navegação */
left: 0; /* Alinha à esquerda da tela */
transition: width 0.3s;
overflow: hidden;
border-bottom-right-radius: 15px; /* Arredonda o canto inferior direito */

&:hover {
  width: 270px; /* Largura ao expandir */
}
`;

const SidebarContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start; /* Alinha à esquerda */
justify-content: flex-start; /* Alinha ao topo */
height: 100%; /* Para ocupar toda a altura */
padding: 10px; /* Espaçamento interno */
`;

const Item = styled.button`
display: flex;
align-items: center; /* Alinha verticalmente */
width: 100%; /* Para ocupar toda a largura */
margin: 15px 0; /* Espaçamento entre itens */
padding: 10px; /* Ajustado para aumentar a área clicável */
position: relative; /* Para posicionar o pseudo-elemento */
transition: background-color 0.3s; /* Transição suave para a cor de fundo */
border-radius: 5px; /* Bordas arredondadas nos itens */
background: transparent; /* Fundo transparente */
border: none; /* Remove borda padrão de botões */
color: white; /* Cor do texto */
cursor: pointer; /* Cursor em forma de ponteiro */

&:hover {
  background-color: #947cc7; /* Cor de fundo ao passar o mouse */

  &::after {
    content: ""; /* Necessário para o pseudo-elemento */
    position: absolute;
    right: 0; /* Posiciona à direita do item */
    top: 0; /* Começa no topo do item */
    width: 5px; /* Largura da barra */
    height: 100%; /* Altura igual à do item */
    background-color: #21d29d; /* Cor da barra */
    font-size: 90px;

  }
}
`;

const Text = styled.div`
font-size: 20px;
overflow: hidden;
`;

const Icon = styled.div`
font-size: 24px; /* Tamanho fixo para os ícones */
margin-left: 10px; /* Espaçamento entre texto e ícone */
margin-right: 20px;
`;

// Container principal
 const Dashboard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

 const Content = styled.div`
  width: calc(100% - 100px);
  padding: 20px;
`;

 const Header = styled.div`
  background-color: #d8c2e1;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  color: #6d377e;
  font-size: 20px;
  font-weight: bold;
`;

 const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

 const Tab = styled.div`
  padding: 10px 20px;
  margin: 0 10px;
  color: #6d377e;
  font-weight: bold;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid #94c140;
  }
`;

 const Charts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: auto;
`;

 const WeightLossChart = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 60%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 20px;
    color: #333;
  }

  canvas {
    width: 100%;
  }
`;

 const FoodChart = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 30%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 20px;
    color: #333;
  }
`;

 const GoalInfo = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
return{
  MetasBody,
  BarraNavegacao, 
  Body, 
  PeriodoSelector,
  PeriodoButton,
  Charts, 
  ContainerMenu, 
  Content, 
  Dashboard, 
  FoodChart, 
  GoalInfo, 
  Header, 
  Icon, 
  Item, 
  Sidebar, 
  SidebarContent, 
  Tab, 
  Tabs, 
  WeightLossChart, 
  Text
}
}
export default  styled_Metas;