import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif; /* Altere para a fonte desejada */
    background-color: #f0f0f0; /* Cor de fundo */
    color: #333; /* Cor do texto */
    font-size: 16px; /* Tamanho da fonte */
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: #222; /* Cor dos cabeçalhos */
  }

  /* Adicione outros estilos globais conforme necessário */
`;

export default GlobalStyles;