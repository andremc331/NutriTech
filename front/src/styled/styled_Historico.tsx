import styled from 'styled-components';

const styled_Historico = () => {
  const ContainerHistorico = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const HistoricoBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #f0f0f0; /* Cor de fundo apenas para esta página */
    min-height: 100vh; /* Garante que a altura ocupe toda a tela */
  `;

  const BarraNavegacao = styled.div`
    width: 100%;
    height: 80px;
    background-color: #C9B7E6;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    @media (max-width: 600px) {
      height: 60px;
      padding: 0 10px;
    }
  `;

  const PeriodoSelector = styled.div`
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

    @media (max-width: 600px) {
      width: 80px;

      &:hover {
        width: 200px;
      }
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
    position: relative;
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

  const WhiteBox = styled.div`
    padding: 20px; /* Espaçamento interno */
    border-radius: 10px; /* Bordas arredondadas */
    background-color: #fff; /* Fundo branco */
    color: black; /* Cor do texto */
    width: 750px;
    height: 280px;
    margin-top: 20px;
    align-self: center;

    @media (max-width: 900px) {
      width: 90%;
    }

    @media (max-width: 600px) {
      width: 100%;
      padding: 15px;
    }
  `;

  const MealInfo = styled.div`
    margin-bottom: 20px; /* Espaçamento entre informações da refeição */
  `;

  const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px; /* Adiciona espaçamento ao redor */
    margin-top: 80px; /* Espaçamento abaixo da barra de navegação */
    margin-left: 120px; /* Espaçamento para a sidebar */

    @media (max-width: 600px) {
      margin-left: 80px;
    }
  `;

  const Text = styled.div`
    font-size: 20px;
    overflow: hidden;

    @media (max-width: 600px) {
      font-size: 18px;
    }
  `;

  const Icon = styled.div`
    font-size: 24px; /* Tamanho fixo para os ícones */
    margin-left: 10px; /* Espaçamento entre texto e ícone */
    margin-right: 20px;

    @media (max-width: 600px) {
      font-size: 20px;
    }
  `;

  return {
    HistoricoBody,
    ContainerHistorico,
    BarraNavegacao,
    PeriodoSelector,
    PeriodoButton,
    Sidebar,
    SidebarContent,
    Item,
    WhiteBox,
    MealInfo,
    HomeContainer,
    Text,
    Icon,
  };
};

export default styled_Historico;
