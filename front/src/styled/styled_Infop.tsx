import styled from "styled-components";

const styled_Infop=()=>{
 const Body = styled.body`
  font-family: Arial, sans-serif;
  background: linear-gradient(90deg, #7E5EC2, #C9B7E6, #F3F3F3);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column; /* Alinhar verticalmente */
`;

 const Container = styled.div`
  background-color: #7d4cdb; /* Cor roxa do fundo do formulário */
  width: 800px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  margin-top: 20px; /* Adiciona espaço acima do formulário */
  align-self: center;
`;
const Title = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

 const Label = styled.label`
  color: white;
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
`;

 const Input = styled.input`
  width: 60%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid;
  border-radius: 5px;
`;

 const Gender = styled.div`
  position: absolute; /* Torna a posição do bloco dependente do container */
  top: 35%; /* Centraliza verticalmente */
  right: 100px; /* Ajuste a distância da borda direita conforme necessário */
  display: flex; /* Altera de flexbox para flex */
  flex-direction: column;
  gap: 5px; /* Espaçamento entre os elementos */
  text-align: center;
`;

 const GenderLabel = styled.label`
  /* display: flex; 
  align-items: center;  */
  color: white; /* Cor do texto */
  float: left;
`;

 const GenderInput = styled.input`
  margin-right: 8px; /* Espaço entre o input e o texto do label */
`;

 const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

 const Button = styled.button`
  background-color: #3dc4a7; /* Verde para os botões */
  color: white;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: #35ac91;
  }
`;

 const BackButton = styled(Button)`
  background-color: #6c63ff; /* Cor de roxo mais escura para o botão de voltar */

  &:hover {
    background-color: #5a51e1;
  }
`;

 const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;
  max-width: 100%;
`;

 const LogoImage = styled.img`
  width: 300px; /* Ajuste conforme necessário */
  height: auto; /* Mantém a proporção da imagem */
  margin-bottom: 20px; /* Espaço abaixo da logo para separá-la do formulário */
`;
return{
  Body,
  BackButton, 
  Button, 
  ButtonContainer, 
  Container, 
  Gender, 
  GenderInput, 
  GenderLabel, 
  Input,
  Label,
  Logo,  
  LogoImage , 
  Title
}
}
export default styled_Infop