import React from 'react';
import styled from 'styled-components';
import logo from '../logo/logo.nutritech.png'; // Logo para o cabeçalho
import logofundo from '../logo/logofundo.png'; // Logo para o fundo
import { useNavigate } from 'react-router-dom';

const Background = styled.div`
  display: flex;
  height: 100vh;
  background-image: url(${logofundo});  /* Usando a imagem de fundo */
  background-size: cover;                /* Faz a imagem cobrir todo o fundo */
  background-position: center;           /* Centraliza a imagem */
`;

const ContainerRightTitle = styled.div`
  flex: 1;  /* Ocupa 50% da largura */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8); /* Fundo semitransparente para legibilidade */
  border-radius: 10px;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

const ContainerLeft = styled.div`
  flex: 1;  /* Ocupa 50% da largura */
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: #7e5ec2;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const EmailLabel = styled.label`
  margin-top: 20px;
  font-weight: bold;
  color: #333;
`;

const PasswordLabel = styled.label`
  margin-top: 10px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

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

  &:hover {
    background-color: #0056b3;
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
`;

const JustifiedText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #444;
  margin: 0;
`;

const BemVindo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <ContainerLeft>
        <h1>Login</h1>
        <EmailLabel>Email:</EmailLabel>
        <Input type="email" className="email-input" />
        <PasswordLabel>Senha:</PasswordLabel>
        <Input type="password" className="password-input" />
        <MainContent>
          <Button2 onClick={() => navigate('/home')}>&gt;</Button2>
        </MainContent>
      </ContainerLeft>

      <ContainerRightTitle>
        <Logo src={logo} alt="Logo NutriTech" />
        <JustifiedText>
          O MELHOR
          <br />
          PARA A SUA
          <br />
          SAÚDE!
        </JustifiedText>
        <Button1 onClick={() => navigate('/cadastro')}>COMECE JÁ</Button1>
      </ContainerRightTitle>
    </Background>
  );
};

export default BemVindo;
