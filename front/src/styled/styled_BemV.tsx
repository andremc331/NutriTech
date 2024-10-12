import styled from "styled-components";
import logofundo from '../logo/logofundo.png';

const styled_BemV = () => {
  const Background = styled.div`
  display: flex;
  height: 100vh;
  background-image: url(${logofundo});
  background-size: cover;
  background-position: center;
  flex-direction: row;
  @media (max-width: 1024px) {
    flex-direction: column; /* Mudança para coluna em telas menores */
  }
`;

const ContainerRightTitle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5px;
  border-radius: 10px;
  margin-bottom: 5%;
  margin-right: 20%;

  @media (max-width: 1024px) {
    margin-right: 10%;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    width: 100%;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Logo = styled.img`
  width: 20%; /* Usar percentual para dimensionamento fluído */
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 40%;
  }

  @media (max-width: 480px) {
    width: 60%;
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: auto; /* Adapta-se automaticamente ao conteúdo */
  padding: 20px;
  background: #7e5ec2;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  margin-top: 5%;
  margin-left: 10%;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1200px) {
    width: 40%;
    margin-left: 5%;
  }

  @media (max-width: 768px) {
    width: 60%;
    margin-left: 0;
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    width: 80%;
  }
`;

const EmailLabel = styled.label`
  margin-top: 20px;
  font-weight: bold;
  color: black;
`;

const PasswordLabel = styled.label`
  margin-top: 10px;
  font-weight: bold;
  color: black;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 80%;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }
`;

const MainContent = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
`;

const Button1 = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    width: 100%; /* Botão ocupa toda a largura no mobile */
  }
`;

const Button2 = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 15px; /* Aumenta o tamanho do botão para mobile */
  }
`;

const JustifiedText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #444;
  margin: 0;
  text-align: center; /* Centraliza o texto para melhor legibilidade */
`;

  return {
    Background,
    Logo,
    ContainerRightTitle,
    ContainerLeft,
    EmailLabel,
    PasswordLabel,
    Input,
    MainContent,
    Button1,
    Button2,
    JustifiedText,
  };
};
export default styled_BemV;
