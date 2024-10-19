import styled from "styled-components";
import fundosobre from '../logo/fundosobre.png';

const styled_Configuracoes = () => {
  const ContainerMenu = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const ConfiguracoesBody = styled.div`
    background-image: url(${fundosobre});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    // background: linear-gradient(180deg, #f0f0f0, #7e5ec2); /* Degradê */
    min-height: 100vh;
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
    ContainerConfiguracoes,
  };
};

export default styled_Configuracoes;