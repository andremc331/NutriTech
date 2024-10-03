import styled from "styled-components";

// ContainerMenu,BarraNavegacao,NavLinks,NavButton,Sidebar,SidebarContent,Item,Text,ContainerConfiguracoes,ContainerPerfil,ContainerNotificacoes,ContainerSeguranca,ContainerSobre

const styled_Configuracoes=()=>{
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

const NavLinks = styled.div`
  display: flex;
`;

 const NavButton = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #61dafb;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #21a1f1;
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

 const ContainerConfiguracoes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  margin-top: 1rem;
`;

 const ContainerPerfil = styled.div`
  font-family: 'Times New Roman';
  background-image: url('../logo/delicious-mandarin.jpg');
  background-size: cover;
  margin: 10px;
  padding: 100px 140px;
  font-size: 15px;
  color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 1;
  }

  &:hover::after {
    opacity: 1;
  }
`;

 const ContainerNotificacoes = styled(ContainerPerfil)`
  background-image: url('../logo/still-life-recipe-with-plantain-banana.jpg');
`;

 const ContainerSeguranca = styled(ContainerPerfil)`
  background-image: url('../logo/tasty-pineapple-still-life.jpg');
`;

 const ContainerSobre = styled(ContainerPerfil)`
  background-image: url('../logo/berries-2281_1280.jpg');
`;
return{
  ContainerMenu,
  BarraNavegacao,
  NavLinks,
  NavButton,
  Sidebar,
  SidebarContent,
  Item,
  Text,
  ContainerConfiguracoes,
  ContainerPerfil,
  ContainerNotificacoes,
  ContainerSeguranca,
  ContainerSobre,
}
}
export default styled_Configuracoes;