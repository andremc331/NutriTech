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
    background: linear-gradient(180deg, #f0f0f0, #7e5ec2); /* Degradê */
    min-height: 100vh;
  `;

  const BarraNavegacao = styled.div`
    width: 100%;
    height: 80px;
    background-color: #611ecccf;
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

  const ContainerConfiguracoes = styled.div`
    display: flex;
    flex-direction: column; /* Adicionado para empilhar os itens verticalmente */
    align-items: center;
    position: relative;
    margin-top: 200px;
    margin-left: 10px; /* Ajuste conforme necessário */
    z-index: 1;

    h1 {
      margin-bottom: 10px; /* Ajuste conforme necessário */
    }

    h2 {
      margin-top: 10px; /* Adicionada unidade 'px' */
    }

    @media (max-width: 768px) {
      margin-left: 0; /* Reduz a margem em telas menores */
      padding: 10px; /* Adiciona padding se necessário */
    }
  `;

  return {
    ConfiguracoesBody,
    ContainerMenu,
    BarraNavegacao,
    ContainerConfiguracoes,
  };
};

export default styled_Configuracoes;