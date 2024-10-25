import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

//CSS global para o body e tamanho das fontes e coress
const GlobalStyles = createGlobalStyle`
  /* Fonte padrão usanda na aplicação será a roboto, importada do google fonts */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  /* Variaveis de cores usadas no layout da aplicação tema claro*/
  :root {
    --color-1: #f0f0f0; /*Branco*/
    --color-2: #8a2be2; /*Roxo-1*/
    --color-3: #9400d3; /*Roxo-2*/
    --color-4: #f0ddee; /*Roxo-3*/
    --color-5: #00ffa1; /*Verde-1*/

  /* Variaveis de cores usadas no layout da aplicação tema escuro*/
    --color-6: #341933; /*Roxo-4*/
    --color-7: #4b204b; /*Roxo-5*/
    --color-8: #1e111d; /*Roxo-6*/
    --color-9: #00fa9a; /*Verde-2*/
    --color-10: #000000;/*Preto */
    --color-11: #3f3f3f;/*Cinza */
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
    margin: 0;
  }
`;

//Criação da barra de navegação e sidebar
const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 10px; /* Ajusta o padding para telas menores */
  }
`;

const Navbar = styled.div`
  width: 100%;
  height: 80px;
  background-color: var(--color-2);
  color: var(--color-1);
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
  width: 60px;
  height: calc(100% - 60px);
  background-color: var(--color-2);
  color: var(--color-1);
  position: fixed;
  top: 60px;
  left: 0;
  transition: width 0.3s;
  overflow: hidden;
  border-bottom-right-radius: 15px;
  z-index: 1000;

  &:hover {
    width: 200px;
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
  padding: 5px;

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
  margin: 20px 0;
  padding: 10px;
  position: relative;
  transition: background-color 0.3s;
  border-radius: 5px;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: var(--color-4);

    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      width: 5px;
      height: 100%;
      background-color: var(--color-4);
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

//Estilo para o rodapé da aplicação
const Footer = styled.footer`
  position: relative;
  bottom: 1;
  width: 100%;
  height: 100px;
  background-color: var(--color-11);
  color: var(--color-1);
  align-items: center;
  text-align: center;
  align-content: center;
  margin-top: auto;
  z-index: 1000;

  @media (max-width: 768px) {
    height: 50px; /* Altura menor em telas menores */
  }

  @media (max-width: 480px) {
    height: 40px; /* Altura ainda menor em telas muito pequenas */
  }
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

export {
  GlobalStyles,
  ContainerMenu,
  Navbar,
  Sidebar,
  SidebarContent,
  Item,
  Text,
  Icon,
  Footer,
  ImgIcon,
};