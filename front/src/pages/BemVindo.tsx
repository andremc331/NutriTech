import React, { useState } from 'react';
import styled_BemV from '../styled/styled_BemV';
import logo from "../assets/logo.nutritech.png"
// import { Icon } from "../styled/styled_Main";
// import { IonIcon } from "@ionic/react";
// import { Icons } from "../components/icons";
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

const {
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
} = styled_BemV();

const BemVindo: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Verifica se os campos de email e senha estão preenchidos
    if (!email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return; // Impede que a função continue se os campos estiverem vazios
    }
  
    try {
      // Chama a API de login
      const response = await api.post('/login', { email: email, senha: senha });
  
      // Verifica se a resposta contém um token de acesso
      if (response.data.token) {
        // Salva o token no localStorage
        localStorage.setItem('token', response.data.token);
        // Redireciona para a página home
        navigate('/home');
      } else {
        // Caso o login falhe, exibe uma mensagem de erro
        alert('Email ou senha incorretos.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao efetuar o login. Tente novamente.');
    }
  };
  

  return (
    <Background>
      <ContainerLeft>
      <link href="https://fonts.googleapis.com/css2?family=Playpen+Sans&display=swap" rel="stylesheet"></link>
        <h1>Login</h1>
        <EmailLabel>Email:</EmailLabel>
        <Input 
          type="email" 
          className="email-input" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <PasswordLabel>Senha:</PasswordLabel>
        <Input 
          type="password" 
          className="password-input" 
          value={senha}
          onChange={(e) => setSenha(e.target.value)} 
        />
        <MainContent>
          <Button2 onClick={handleLogin}>&gt;</Button2>
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