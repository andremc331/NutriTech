import React, { useState } from "react";
import logo from "../assets/logo.nutritech.png";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"; 
import { useUser } from '../hooks'; // Substitua pelo caminho correto do seu hook

const Cadastro: React.FC = () => {
  const navigate = useNavigate(); 
  const { create, error, setError } = useUser(); // Hook personalizado para gerenciar o usuário

  const [formData, setFormData] = useState({
    nome: "Ana Maria",
    email: "aba@teste.com",
    senha: "123456",
    confirmarSenha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const Verificar = (): boolean => {
    if (formData.senha !== formData.confirmarSenha) {
      window.alert("As senhas não estão batendo, por favor, verifique se as senhas são correspondentes");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Verifica se as senhas são correspondentes
    if (Verificar()) {
      if (!formData.nome) {
        setError({ error: "Forneça o seu nome de usuário" });
      } else if (!formData.email) {
        setError({ error: "Forneça o e-mail" });
      } else if (!formData.senha) {
        setError({ error: "Forneça a senha" });
      } else {
        try {
          // Envia os dados do formulário para a API
          await create(formData.nome, formData.email, formData.senha);
          navigate("/info-pessoal"); // Redireciona para a página info-pessoal após o cadastro bem-sucedido
        } catch (error) {
          console.error("Erro ao cadastrar usuário:", error);
          alert("Ocorreu um erro ao cadastrar o usuário. Tente novamente.");
        }
      }
    }
  };

  return (
    <>
      <ImageContainer>
        <img src={logo} alt="Logo Nutritech" />
      </ImageContainer>
      <FormContainer>
        <Title>Informações de Usuário</Title>
        {error && <ErrorMessage>{error.error}</ErrorMessage>} {/* Mensagem de erro */}
        <form onSubmit={handleSubmit}>
          <FormGroupRow>
            <FormGroup>
              <Label htmlFor="nome">Nome:</Label>
              <Input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </FormGroupRow>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="senha">Senha:</Label>
            <Input
              type="senha"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirmarSenha">Confirmar Senha:</Label>
            <Input
              type="senha"
              id="confirmarSenha"
              name="confirmarSenha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <ButtonContainer>
            <NavigationButton type="submit">Avançar</NavigationButton>
          </ButtonContainer>
        </form>
      </FormContainer>
    </>
  );
};

export default Cadastro;

// Styled components dentro do mesmo arquivo

const ImageContainer = styled.div`
  text-align: center;
  max-width: 100%;
  margin: 10px auto;

  img {
    width: 230px;
    height: auto;

    @media (max-width: 768px) {
      width: 200px;
    }

    @media (max-width: 480px) {
      width: 150px;
    }
  }
`;

const FormContainer = styled.div`
  width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #7d4cdb;
  border-radius: 10px;
  background-color: #7d4cdb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    width: 600px;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  text-align: left;
  color: white;
  font-family: Anton, sans-serif;
  font-size: 40px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const ErrorMessage = styled.div`
  color: red; /* Estilo para mensagens de erro */
  margin-bottom: 15px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: white;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Input = styled.input`
  width: 50%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #000000;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormGroupRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const NavigationButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: #21d29d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1ca885;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 45px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 40px;
    font-size: 12px;
  }
`;