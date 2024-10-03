import styled from "styled-components";

const styled_Home=()=>{
 const ImageContainer = styled.div`
  position: absolute; /* Posiciona de forma absoluta */
  bottom: 5px; /* Distância do fundo */
  right: 20px; /* Distância da direita */
  z-index: 999; /* Certifica-se de que a imagem fique acima de outros elementos */

  img {
    max-width: 150px; /* Ajusta o tamanho da imagem conforme necessário */
    height: auto; /* Mantém a proporção da imagem */
  }
`;

const HomeBody = styled.div`
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

 const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px; /* Adiciona espaçamento ao redor */
  margin-top: 80px; /* Espaçamento abaixo da barra de navegação */
  margin-left: 120px; /* Espaçamento para a sidebar */
`;

 const InfoBox = styled.div`
  padding: 20px; /* Espaçamento interno */
  border-radius: 10px; /* Bordas arredondadas */
  color: white; /* Cor do texto */
  text-align: left; /* Alinhamento do texto à esquerda */
  width: 900px;
  height: 150px;
  font-size: 22px;
  align-self: center;

  &.red-box {
    background-color: #ff0000; /* Cor de fundo vermelha */
  }

  &.blue-box {
    background-color: #0000ff; /* Cor de fundo azul */
    padding: 20px; /* Espaçamento interno */
    display: flex;
    justify-content: flex-start; /* Alinha os itens à esquerda horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    width: 750px;
    font-size: 30px;
    margin-right: 150px;
  }
`;

 const WhiteBox = styled.div`
  padding: 20px; /* Espaçamento interno */
  border-radius: 10px; /* Bordas arredondadas */
  background-color: #fff; /* Fundo branco */
  color: black; /* Cor do texto */
  /* position: relative; Para posicionar o botão de editar (comentado, pois deixa o container branco sobre a barra lateral)*/ 
  width: 750px;
  height: 280px;
  margin-top: 20px;
  align-self: center;
  margin-right: 150px;
`;

 const MealInfo = styled.div`
  margin-bottom: 20px; /* Espaçamento entre informações da refeição */
`;

 const MealType = styled.h3`
  text-align: start;
  font-size: 27px;
  position: initial;
  margin-top: 0px;
`; // Adiciona estilo ao título da refeição

 const MealTime = styled.p`
  font-family: Aldrich;
`; // Adiciona estilo ao horário

 const MealItems = styled.div`
  font-family: Aldrich;
  font-size: 20px;
  line-height: 0.75;
`; // Adiciona estilo aos itens da refeição

 const EditButton = styled.button`
  background: transparent; /* Fundo transparente */
  border: none; /* Remove borda padrão */
  cursor: pointer; /* Cursor em forma de ponteiro */
  position: start; /* Para posicionar no canto inferior direito */

  svg {
    fill: #000; /* Cor do ícone SVG */
  }
`;
return{
  ImageContainer,
  HomeBody,
  ContainerMenu,
  BarraNavegacao,
  Sidebar,
  SidebarContent,
  Item,
  Text,
  Icon,
  HomeContainer,
  InfoBox,
  WhiteBox ,
  MealInfo,
  MealType,
  MealTime,
  MealItems,
  EditButton
}
}
export default styled_Home;
