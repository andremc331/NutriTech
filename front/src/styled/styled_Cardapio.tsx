import styled from "styled-components";

const styled_Cardapio=()=>{
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

 const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column; /* Organiza os elementos em coluna */
`;

 const BarraNavegacao = styled.div`
  width: 100%; /* Largura total */
  height: 80px; /* Altura da barra */
  background-color: #C9B7E6; /* Cor de fundo */
  color: #fff; /* Cor do texto */
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
    }
  }
`;

 const Text = styled.div`
  overflow: hidden;
`;

 const Icon = styled.div`
  font-size: 24px; /* Tamanho fixo para os ícones */
  margin-left: 10px; /* Espaçamento entre texto e ícone */
  margin-right: 20px;
`;

 const CentralContent = styled.div`
  display: flex;
  flex-direction: column; /* Organiza em coluna */
  align-items: center; /* Centraliza horizontalmente */
  justify-content: center; /* Centraliza verticalmente */
  height: calc(100vh - 140px); /* Altura da tela menos a altura da barra de navegação e sidebar */
  margin-top: 60px; /* Espaço abaixo da barra de navegação */
`;

 const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 1000px;
  overflow: hidden; /* Esconde o conteúdo que ultrapassa */
`;

 const ExpandedContent = styled.div<{ isExpanded: boolean }>`
  max-height: ${(props) => (props.isExpanded ? '150px' : '0')}; /* Altura inicial (escondido) */
  overflow: hidden; /* Esconde o conteúdo que ultrapassa */
  background-color: #fff; /* Cor de fundo */
  padding: ${(props) => (props.isExpanded ? '10px' : '0')}; /* Inicialmente sem padding */
  border-radius: 5px; /* Bordas arredondadas */
  transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out; /* Transições suaves */
`;

 const SimboloMais = styled.span`
  font-size: 24px; /* Tamanho do símbolo */
  margin-left: 10px; /* Espaçamento entre o texto e o símbolo */
`;
return{
  ImageContainer,
  ContainerMenu,
  BarraNavegacao,
  Sidebar,
  SidebarContent,
  Item,
  Text,
  Icon,
  CentralContent,
  WhiteBox,
  ExpandedContent,
  SimboloMais,
}
}
export default styled_Cardapio;