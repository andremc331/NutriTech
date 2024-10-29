import React from "react";
import styled from "styled-components"; // Certifique-se de importar styled
import styled_Configuracoes from "../styled/styled_Configuracoes";
import logosemfundo from '../logo/img-logo-semfundo.png'; // Importando a imagem

const {
  ContainerMenu,
  ContainerConfiguracoes,
  ConfiguracoesBody,
} = styled_Configuracoes();

// Estilo para a palavra "NutriTech"
const StyledNutriTech = styled.span`
  color: #e21dd8; 
`;

const Logo = styled.img`
  max-width: 100%; // Adapte o tamanho conforme necessário
  height: auto; // Mantém a proporção da imagem
`;

const Configuracoes: React.FC = () => {
  return (
    <ConfiguracoesBody>
      <ContainerMenu>
        <ContainerConfiguracoes>
          <Logo src={logosemfundo} alt="Logo Sem Fundo" /> {/* Usando a imagem aqui */}
          <h1>
            Sobre a Empresa <StyledNutriTech>NutriTech</StyledNutriTech>
          </h1>
          <h2>Somos uma companhia dedicada a criação e fornecimento de softwares destinados ao controle nutricional</h2>
        </ContainerConfiguracoes>
      </ContainerMenu>
    </ConfiguracoesBody>
  );
};

export default Configuracoes;
