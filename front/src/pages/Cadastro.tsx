import React, { useState } from "react";
import logo from "../assets/logo.nutritech.png";
import styled_Cadastro from "../styled/styled_Cadastro";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks";
import Captcha from "./Captcha";

const {
  ImageContainer,
  FormContainer,
  Title,
  FormGroup,
  FormGroupRow,
  Label,
  Input,
  ErrorMessage,
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

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false); // Verifica se o Captcha foi validado

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para verificar se as senhas são iguais
  const VerificarSenhas = (): boolean => {
    if (formData.senha !== formData.confirmarSenha) {
      window.alert("As senhas não estão batendo, por favor, verifique se as senhas são correspondentes.");
      return false;
    }
    return true;
  };

  // Função para quando o Captcha for validado
  const handleCadastro = async (): Promise<void> => {
    // Primeiro, verifica se o Captcha foi validado
    if (!isCaptchaVerified) {
      window.alert("Por favor, verifique o CAPTCHA.");
      return;
    }

    // Verifica se as senhas estão iguais
    if (!VerificarSenhas()) {
      return; // Já exibe um alerta dentro da função VerificarSenhas se não baterem
    }

    try {
      // Envia os dados para a API
      await create(formData.nome, formData.email, formData.senha);
      navigate("/info-pessoal"); // Redireciona para a página info-pessoal após o cadastro bem-sucedido
    } catch (err) {
      console.error("Erro ao cadastrar usuário:", err);
      // Verificando se o erro é do tipo esperado
      if (isErrorWithResponse(err)) {
        const response = (err as any).response;
        if (response && response.status === 409) {
          setError({ error: "E-mail já cadastrado. Por favor, use outro." });
        } else {
          setError({ error: "Erro ao cadastrar. Tente novamente." });
        }
      } else {
        setError({ error: "Ocorreu um erro inesperado. Tente novamente." });
      }
    }
  };

  // Função de verificação de tipo de erro
  function isErrorWithResponse(err: unknown): err is { response?: { status: number } } {
    return typeof err === "object" && err !== null && "response" in err;
  }

  return (
    <>
      <ImageContainer>
        <img src={logo} alt="Logo Nutritech" />
      </ImageContainer>
      <FormContainer>
        <Title>Informações de Usuário</Title>
        {error && <ErrorMessage>{error.error}</ErrorMessage>} {/* Mensagem de erro */}
        <form>
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
            {/* Componente Captcha */}
            <Captcha onVerified={async () => setIsCaptchaVerified(true)} setIsVerified={setIsCaptchaVerified} />
          </FormGroup>
          
          {/* Renderiza o botão de cadastro apenas se o CAPTCHA estiver verificado */}
          {isCaptchaVerified && (
            <button type="button" onClick={handleCadastro}>
              Confirmar Cadastro
            </button>
          )}
        </form>
      </FormContainer>
    </>
  );
};

export default Cadastro;
