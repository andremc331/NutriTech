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
    min-height: 100vh;
  `;

  const ContainerConfiguracoes = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: 10px;
    z-index: 1;

    h1 {
      margin-bottom: 10px; 
    }

    h2 {
      width: 1500px;
      padding-top: 30px;
      text-align: center;
      margin-top: 10px;
    }

    @media (max-width: 768px) {
      margin-left: 0; 
      padding: 10px; 
    }
  `;

  return {
    ConfiguracoesBody,
    ContainerMenu,
    ContainerConfiguracoes,
  };
};

export default styled_Configuracoes;