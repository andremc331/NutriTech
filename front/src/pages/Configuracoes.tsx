import React from "react";
import styled from "styled-components"; 
import styled_Configuracoes from "../styled/styled_Configuracoes";
import logo from '../assets/img-logo-semfundo.png' // Importando a imagem

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

const Footer = styled.footer`
  position: relative;
  margin-top: 370px;
  text-align: center; // Alinha o texto do footer ao centro
  color: white;
  padding: 50px; // Adiciona um padding
  background-color: #3a3a3a; // Cor de fundo opcional
`;

const Configuracoes: React.FC = () => {
  return (
    <ConfiguracoesBody>
      <ContainerMenu>
        <ContainerConfiguracoes>
          <Logo src={logo} alt="Logo Sem Fundo" />
          <h1>
            Conheça a <StyledNutriTech>NutriTech</StyledNutriTech>
          </h1>
          <h2>
          Somos uma empresa inovadora, especializada na criação e fornecimento de soluções de software para o controle nutricional, ajudando a promover uma alimentação mais saudável e consciente.
          </h2>
        </ContainerConfiguracoes>
        <Footer>
        <div>
          Copyright © 2024 / 2025 | HighTech
          <br />
          Todos os direitos reservados
        </div>
      </Footer>
      </ContainerMenu>
    </ConfiguracoesBody>
  );
};

export default Configuracoes;