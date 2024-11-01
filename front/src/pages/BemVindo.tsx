import React, { useState } from 'react';
import styled_BemV from '../styled/styled_BemV';
import { Icon } from "../styled/styled_Main";
import logo from '../logo/logo.nutritech.png';
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import { useNavigate } from 'react-router-dom';
import { api } from '../services/User';

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
    try {
      // Chama a API de login
      const response = await api.post('/login', { mail: email, password: senha });
      
      // Salva o token no localStorage
      localStorage.setItem('token', response.data.token);

      // Redireciona para a página home
      navigate('/home');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao efetuar o login. Tente novamente.');
    }
  };

  return (
    <Background>
      <ContainerLeft>
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
          <Button2 onClick={handleLogin}>
            <Icon>
              <IonIcon icon={Icons.chevronForward} />
            </Icon>
          </Button2>
        </MainContent>
      </ContainerLeft>

      <ContainerRightTitle>
        <Logo src={logo} alt="Logo NutriTech" />
        <JustifiedText>
          O melhor
          <br />
          Para a sua
          <br />
          Saúde!
        </JustifiedText>
        <Button1 onClick={() => navigate('/cadastro')}>COMECE JÁ
          <Icon>
            <IonIcon icon={Icons.arrowForward} />
          </Icon>
        </Button1>
      </ContainerRightTitle>
    </Background>
  );
};

export default BemVindo;
