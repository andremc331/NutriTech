import styled from "styled-components";

const styled_Cadastro = () => { 
 const Body = styled.body`
  background-color: #7E5EC2;
  overflow: hidden; /* cor de fundo roxa */
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Container para a imagem
 const ImageContainer = styled.div`
  text-align: center;
  max-width: 100%;
  margin: 50px auto;

  img {
    width: 300px; /* Ajuste conforme necessário */
    height: auto; /* Mantém a proporção da imagem */
  }
`;

// Container para o formulário
 const FormContainer = styled.div`
  width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #7d4cdb;
  border-radius: 10px;
  background-color: #7d4cdb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

// Estilo do título
 const Title = styled.h2`
  text-align: left;
  color: white;
  font-family: Anton;
  font-size: 50px;
  font-weight: bold;
`;

// Grupo do formulário
 const FormGroup = styled.div`
  margin-bottom: 15px;
`;

// Estilo do label
 const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

// Estilo do input
 const Input = styled.input`
  width: 50%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #000000;
  border-radius: 4px;

  &.email {
    width: 92%;
  }
`;

// Grupo do formulário em linha
 const FormGroupRow = styled.div`
  display: flex;
  justify-content: space-between;

  .form-group {
    flex: 1; /* Faz com que os campos ocupem o mesmo espaço */
    margin-right: -270px;
  }
`;

// Estilo do botão principal
 const Button = styled.button`
  width: 105px; /* Define a largura e altura iguais para criar um quadrado */
  height: 60px;
  background-color: #21D29D;
  color: white;
  border: none;
  border-radius: 10px; /* Remova o arredondamento para criar bordas retas */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px; /* Tamanho da fonte para o texto ou ícone */
  text-align: center;

  &:hover {
    background-color: #1CA885; /* Cor de fundo ao passar o mouse */
  }
`;

// Container para botões
 const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* Alinha o conteúdo à direita */
`;

// Estilo padrão dos botões de navegação
 const NavigationButton = styled.button`
  width: 150px; /* Largura dos botões */
  height: 50px; /* Altura dos botões */
  background-color: #21D29D; /* Cor de fundo */
  color: white; /* Cor do texto */
  border: none; /* Remove as bordas */
  border-radius: 5px; /* Arredonda os cantos */
  cursor: pointer; /* Aponta que o elemento é clicável */
  margin: 5px; /* Espaçamento entre os botões */
  font-size: 16px; /* Tamanho da fonte */
  transition: background-color 0.3s ease; /* Transição suave ao passar o mouse */

  &:hover {
    background-color: #1CA885; /* Cor de fundo ao passar o mouse */
  }
`;
return{
  Body,
  ImageContainer,
  FormContainer,
  Title,
  FormGroup,
  Label,
  Input,
  FormGroupRow,
  Button,
  ButtonContainer,
  NavigationButton,
}
}
export default styled_Cadastro;


