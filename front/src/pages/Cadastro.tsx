import React, { useState } from "react";
import logo from "../logo/logo.nutritech.png";
import styled_Cadastro from "../styled/styled_Cadastro";
import { Icon } from "../styled/styled_Main";
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

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
} = styled_Cadastro();

const Cadastro: React.FC = () => {
  const navigate = useNavigate(); // Inicializa o hook useNavigate

  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
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
      window.alert(
        "As senhas não estão batendo, por favor, verifique se as senhas são correspondentes"
      );
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verifica se as senhas são correspondentes
    if (Verificar()) {
      try {
        // Envia os dados do formulário para a API
        const response = await fetch("/api/cadastrar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: formData.nome,
            email: formData.email,
            senha: formData.senha,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          alert(data.error); // Mostra o erro para o usuário
        } else {
          console.log("Cadastro do usuário:", data); // Exibe os dados do usuário no console
          navigate("/info-pessoal"); // Redireciona para a página info-pessoal após o cadastro bem-sucedido
        }
      } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        alert("Ocorreu um erro ao cadastrar o usuário. Tente novamente.");
      }
    }
  };

  return (
    <>
      <ImageContainer>
        <img src={logo} alt="Logo Nutritech" />
      </ImageContainer>
      <FormContainer>
        <Title>Informações de usuário</Title>
        <form onSubmit={handleSubmit}>
          <FormGroupRow>
            <FormGroup className="form-group">
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
            <FormGroup className="form-group">
              <Label htmlFor="sobrenome">Sobrenome:</Label>
              <Input
                type="text"
                id="sobrenome"
                name="sobrenome"
                value={formData.sobrenome}
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
              className="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroupRow>
            <FormGroup className="form-group">
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
            <FormGroup className="form-group">
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
          </FormGroupRow>
          <ButtonContainer>
            <BackButton type="button" onClick={() => navigate("/Bem-Vindo")}>
              <Icon>
                <IonIcon icon={Icons.chevronBack} />
              </Icon>
            </BackButton>
            <Button type="submit">
              <Icon>
                <IonIcon icon={Icons.chevronForward} />
              </Icon>
            </Button>
          </ButtonContainer>
        </form>
      </FormContainer>
    </>
  );
};

export default Cadastro;
