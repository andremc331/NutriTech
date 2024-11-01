import React, { useState } from "react";
import logo from "../assets/logo.nutritech.png";
import styled_Cadastro from "../styled/styled_Cadastro";
import { Icon } from "../styled/styled_Main";
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { useUser } from "../hooks";

const {
  ImageContainer,
  FormContainer,
  Title,
  FormGroup,
  FormGroupRow,
  Label,
  Input,
  Button,
  BackButton,
  ButtonContainer,
  ErrorMessage,
  NavigationButton,
} = styled_Cadastro();

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