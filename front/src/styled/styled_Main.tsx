import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

//CSS global para o body e tamanho das fontes e coress
const GlobalStyles = createGlobalStyle`
  /* Fonte padrão usanda na aplicação será a roboto, importada do google fonts */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  /* Variaveis de cores usadas no layout da aplicação tema claro*/
  :root {
    --color-1: #f0f0f0; /*Branco*/
    --color-2: #8000bf; /*Roxo-1*/
    --color-3: #9400d3; /*Roxo-2*/
    --color-4: #f0ddee; /*Roxo-3*/
    --color-5: #00ffa1; /*Verde-1*/

  /* Variaveis de cores usadas no layout da aplicação tema escuro*/
    --color-6: #341933; /*Roxo-4*/
    --color-7: #4e3d93; /*Roxo-5*/
    --color-8: #7b68ee; /*Azul*/
    --color-9: #00fa9a; /*Verde-2*/
    --color-10: #000000;/*Preto */
    --color-11: #3f3f3f;/*Cinza */
    --color-12: #cccccc;/*Branco-2*/
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--color-1);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }
`;

//Conteiner para o body da aplicação
const ContainerBody = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 90vw;
  height: calc(100vh - 50px);
  max-width: 100vw;
  margin: 100px auto 20px;
  border-radius: 15px;
  background-color: var(--color-1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

//Criação da barra de navegação e sidebar
const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const Navbar = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 80px;
  top: 0;
  left: 0;
  z-index: 1000;
  border-bottom-right-radius: 10px;
  color: var(--color-1);
  background-color: var(--color-2);
`;

const Sidebar = styled.div`
  position: fixed;
  top: 60px;
  width: 60px;
  height: 60vh;
  border-bottom-right-radius: 30px;
  color: var(--color-1);
  background-color: var(--color-2);
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 5px;
`;

const Item = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  padding: 10px;
  position: relative;
  transition: background-color 0.3s, border-radius 0.3s;
  border-radius: 5px;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: var(--color-4);
    border-radius: 10px;
  }
`;

const Icon = styled.div`
  font-size: 24px;
  margin-left: 3px;
`;

//Estilo para o rodapé da aplicação
const Footer = styled.footer`
  position: relative;
  bottom: 1;
  width: 100%;
  height: 120px;
  background-color: var(--color-11);
  color: var(--color-1);
  align-items: center;
  text-align: center;
  align-content: center;
  margin-top: auto;
  z-index: 1000;
`;

const ImgIcon = styled.div`
  position: absolute;
  bottom: 0px;
  right: 20px;
  z-index: 999;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100px;
    height: auto;

    @media (min-width: 768px) {
      max-width: 150px; /* Ajuste para telas maiores */
    }
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

export {
  Busque,
  SimboloMais,
  ContainerBody,
  GlobalStyles,
  ContainerMenu,
  Navbar,
  Sidebar,
  SidebarContent,
  Item,
  Icon,
  Footer,
  ImgIcon,
  WhiteBox,
  CentralContent,
};