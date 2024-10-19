import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../logo/logo.nutritech.png';
import logofundo from '../logo/logofundo.png';
import { useUser } from '../hooks';
import { loadFromLocalStorage } from '../utils';
import { useNavigate } from 'react-router-dom';
import { Error } from '../components';

const Background = styled.div`
  display: flex;
  height: 100vh;
  background-image: url(${logofundo});
  background-size: cover;
  background-position: center;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
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
`;

const Logo = styled.img`
  width: 250px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    width: 200px;
  }
  @media (max-width: 480px) {
    width: 150px;
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 500px;
  padding: 10px;
  background: #7e5ec2;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  margin-top: 10%;
  margin-left: 25%; /* Ajustar margem para telas pequenas */

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1200px) {
    width: 25%;
    margin-left: 20px; /* Reduzir margem à esquerda */
  }

  @media (max-width: 900px) {
    width: 40%;
    margin-left: 0;
    margin-top: 100px;
  }

  @media (max-width: 600px) {
    width: 80%;
    margin-top: 50px;
  }

  @media (max-width: 400px) {
    width: 100%;
    margin-top: 20px;
  }
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

const Button = styled.button`
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
`;

const JustifiedText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #444;
  margin: 0;
`;

const BemVindo: React.FC = () => {
  const [email, setEmail] = useState<string>('aba@teste.com');
  const [senha, setSenha] = useState<string>('123456');
  const { token, setToken, login, error, setError } = useUser();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email) {
      setError({ error: "Forneça o e-mail" });
    } else if (!senha) {
      setError({ error: "Forneça a senha" });
    } else {
      login(email, senha);
    }
  };

  useEffect(() => {
    if (!token) {
      const user = loadFromLocalStorage("user");
      if (user) {
        setToken(user);
        navigate("/");
      }
    }
  }, [token, setToken, navigate]);

  return (
    <Background>
      <ContainerLeft>
        <h1>Login</h1>
        {error && <Error>{error.error}</Error>}
        <Input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email"
        />
        <Input 
          type="password" 
          value={senha}
          onChange={(e) => setSenha(e.target.value)} 
          placeholder="Senha"
        />
        <MainContent>
          <Button onClick={handleLogin}>&gt;</Button>
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
        <Button onClick={() => navigate('/cadastro')}>COMECE JÁ</Button>
      </ContainerRightTitle>
    </Background>
  );
};

export default BemVindo;
