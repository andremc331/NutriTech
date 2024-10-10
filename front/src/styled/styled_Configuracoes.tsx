import styled from "styled-components";

const styled_Configuracoes = () => {
  const ContainerMenu = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const ConfiguracoesBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #f0f0f0;
    min-height: 100vh;
  `;

  const BarraNavegacao = styled.div`
    width: 100%;
    height: 80px;
    background-color: #c9b7e6;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
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
    width: 55px;
    height: calc(100% - 60px);
    background-color: #714d95;
    color: #ffffff;
    position: fixed;
    top: 60px;
    left: 0;
    z-index: 999;
    transition: width 0.3s;
    overflow: hidden;
    border-bottom-right-radius: 15px;

    &:hover {
      width: 270px;
    }

    @media (max-width: 768px) {
      width: 50px; /* Reduz a largura em telas menores */
      &:hover {
        width: 150px; /* Largura ao passar o mouse */
      }
    }
  `;

  const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    padding: 10px;
  `;

  const Item = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 15px 0;
    padding: 10px;
    position: relative;
    transition: background-color 0.3s;
    border-radius: 5px;
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #947cc7;

      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        width: 5px;
        height: 100%;
        background-color: #21d29d;
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
    margin: 10%;
    padding-top: 100px;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-template-columns: 1fr; /* Coluna única em telas menores */
      margin: 5%; /* Reduz a margem em telas menores */
    }
  `;

  const ContainerPerfil = styled.div`
    font-family: "Times New Roman";
    background-image: url("../logo/delicious-mandarin.jpg");
    background-size: cover;
    margin: 10px;
    padding: 100px 140px;
    font-size: 15px;
    color: black;
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
      content: "";
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
    background-image: url("../logo/still-life-recipe-with-plantain-banana.jpg");
  `;

  const ContainerSeguranca = styled(ContainerPerfil)`
    background-image: url("../logo/tasty-pineapple-still-life.jpg");
  `;

  const ContainerSobre = styled(ContainerPerfil)`
    background-image: url("../logo/berries-2281_1280.jpg");
  `;

  return {
    ConfiguracoesBody,
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
  };
};

export default styled_Configuracoes;
