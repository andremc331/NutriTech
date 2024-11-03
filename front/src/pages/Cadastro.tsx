import React, { useState } from "react";
import logo from "../assets/logo.nutritech.png";
import styled_Cadastro from "../styled/styled_Cadastro";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks";

const {
  ImageContainer,
  FormContainer,
  Title,
  FormGroup,
  FormGroupRow,
  Label,
  Input,
  ButtonContainer,
  ErrorMessage,
  NavigationButton,
} = styled_Cadastro();

const Cadastro: React.FC = () => {
  const navigate = useNavigate();
  const { create, error, setError } = useUser();

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
        } catch (err) {
          console.error("Erro ao cadastrar usuário:", err);
          
          // Verificando se o erro é do tipo esperado
          if (isErrorWithResponse(err)) {
            const response = (err as any).response; // Usando 'any' para garantir acesso seguro
            if (response && response.status === 409) {
              setError({ error: "E-mail já cadastrado. Por favor, use outro." });
            } else {
              setError({ error: "Erro ao cadastrar. Tente novamente." });
            }
          } else {
            setError({ error: "Ocorreu um erro inesperado. Tente novamente." });
          }
        }
      }
    }
  };

  // Função de verificação de tipo de erro
  function isErrorWithResponse(err: unknown): err is { response?: { status: number } } {
    return typeof err === 'object' && err !== null && 'response' in err;
  }

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
              type="password"
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
              type="password"
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
