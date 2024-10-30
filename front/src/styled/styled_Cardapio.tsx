import styled from "styled-components";

const styled_Cardapio = () => {
  const ImageContainer = styled.div`
    position: absolute;
    bottom: 1px;
    right: 20px;
    z-index: 999;
    
    img {
      max-width: 150px;
      height: auto;

      @media (max-width: 768px) {
        max-width: 100px; /* Reduz o tamanho da imagem em telas menores */
      }

      @media (max-width: 480px) {
        max-width: 80px; /* Reduz ainda mais em telas muito pequenas */
      }
    }
  `;

  const CardapioBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #f0f0f0;
    min-height: 100vh;
    margin-top: 20px;
    padding: 20px; /* Adiciona padding para telas menores */

    @media (max-width: 768px) {
      padding: 15px;
    }

    @media (max-width: 480px) {
      padding: 10px;
    }
  `;

  const ContainerMenu = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      padding: 10px; /* Ajusta o padding para telas menores */
    }
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

    @media (max-width: 768px) {
      height: 70px; /* Reduz a altura da barra em telas menores */
      padding: 0 15px;
    }

    @media (max-width: 480px) {
      height: 60px;
      padding: 0 10px;
    }
  `;

  const Sidebar = styled.div`
    width: 100px;
    height: calc(100% - 60px);
    background-color: #714d95;
    color: #ffffff;
    position: fixed;
    top: 60px;
    left: 0;
    transition: width 0.3s;
    overflow: hidden;
    border-bottom-right-radius: 15px;

    &:hover {
      width: 270px;
    }

    @media (max-width: 768px) {
      width: 80px;

      &:hover {
        width: 200px; /* Menos expansão em telas menores */
      }
    }

    @media (max-width: 480px) {
      width: 60px;

      &:hover {
        width: 160px; /* Expansão ainda menor em telas pequenas */
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

    @media (max-width: 768px) {
      padding: 8px;
    }

    @media (max-width: 480px) {
      padding: 5px;
    }
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

    @media (max-width: 768px) {
      padding: 8px; /* Reduz o padding em telas menores */
    }

    @media (max-width: 480px) {
      padding: 6px;
    }
  `;

  const Text = styled.div`
    overflow: hidden;
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  `;

  const Icon = styled.div`
    font-size: 24px;
    margin-left: 10px;
    margin-right: 20px;

    @media (max-width: 768px) {
      font-size: 20px;
      margin-right: 15px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
      margin-right: 10px;
    }
  `;

  const CentralContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 140px);
    margin-top: 60px;

    @media (max-width: 768px) {
      height: calc(100vh - 120px);
    }

    @media (max-width: 480px) {
      height: calc(100vh - 100px);
    }
  `;

  const WhiteBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
    border-radius: 8px;
    padding: 10px;
    margin: 10px;
    margin-left: 90px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    width: 1000px;
    overflow: hidden;

    @media (max-width: 1024px) {
      width: 80%;
    }

    @media (max-width: 768px) {
      width: 90%;
    }

    @media (max-width: 480px) {
      width: 100%;
      padding: 15px; /* Ajusta o padding para telas menores */
    }
  `;

  const ExpandedContent = styled.div<{ isExpanded: boolean }>`
    max-height: ${(props) => (props.isExpanded ? '150px' : '0')};
    overflow: hidden;
    background-color: #fff;
    padding: ${(props) => (props.isExpanded ? '20px' : '0')};
    border-radius: 5px;
    transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
  `;

  const SimboloMais = styled.span`
    font-size: 24px;
    margin-left: 10px;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
  `
  const Busque = styled.div<{ isExpanded: boolean }>`
  display: ${props => (props.isExpanded ? 'block' : 'none')};
  max-height: 200px; /* Defina a altura máxima que você deseja */
  overflow-y: auto; /* Adiciona o scrollbar se necessário */
  border: 1px solid #ccc; /* Para visualização */
  padding: 10px; /* Para espaçamento interno */
  background-color: white; /* Cor de fundo */
`;

  return {
    CardapioBody,
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
    Busque,
  };
};

export default styled_Cardapio;