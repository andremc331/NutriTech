import React, { useState } from "react";
import imgLogoSemFundo from "../logo/img-logo-semfundo.png";
import {
  ContainerBody,
  ContainerMenu,
  Navbar,
  Sidebar,
  SidebarContent,
  Icon,
  Ico,
  Item,
  Footer,
  ImgIcon,
} from "../styled/styled_Main";
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import { useNavigate } from "react-router-dom";
import { AdmMenu } from "../components";
import { UserProvider } from "../contexts";
import styled_alterar from "../styled/styled_alterar";

const {
  FormContainer,
  Title,
  FormGroup,
  Label,
  Input,
  SaveButton,
  CancelButton,
  ButtonContainer,
} = styled_alterar();

const AlterarUser = () => {
  // Definindo o componente corretamente
  const navigate = useNavigate(); // Hook de navegação
  const [formData, setFormData] = useState({
    nomeusuario: "",
    senha: "",
    newsenha: "",
    confirmarnewSenha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio do formulário
    console.log(formData);
  };

  return (
    <>
      {/* Barra de navegação da aplicação */}
      <ContainerMenu>
        <Navbar>
          <h1>Nome de usuário</h1>
          <UserProvider>
            <AdmMenu />
            {/* Conteúdo da página de administração */}
          </UserProvider>
        </Navbar>

        {/* Barra lateral da aplicação */}
        <Sidebar>
          <SidebarContent>
            <Item onClick={() => navigate("/home")} title="Home">
              <Icon>
                <IonIcon icon={Icons.home} />
              </Icon>
            </Item>
            <Item onClick={() => navigate("/cardapio")} title="Cardapio">
              <Icon>
                <IonIcon icon={Icons.restaurant} />
              </Icon>
            </Item>
            <Item onClick={() => navigate("/historico")} title="Histórico">
              <Icon>
                <IonIcon icon={Icons.nutrition} />
              </Icon>
            </Item>
            <Item onClick={() => navigate("/metas")} title="Progresso">
              <Icon>
                <IonIcon icon={Icons.fitness} />
              </Icon>
            </Item>
          </SidebarContent>
        </Sidebar>
      </ContainerMenu>

      {/* Corpo da aplicação */}
      <ContainerBody>
        <FormContainer>
          <Title>atualizar informações</Title>
          <form onSubmit={handleSubmit}>
            <FormGroup className="form-group">
              <Label htmlFor="nome">Nome de usuário:</Label>
              <Input
                type="text"
                id="nome"
                name="nome"
                value={formData.nomeusuario}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Senha atual:</Label>
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
              <Label htmlFor="senha">Nova Senha:</Label>
              <Input
                type="password"
                id="newsenha"
                name="newsenha"
                value={formData.newsenha}
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
                value={formData.confirmarnewSenha}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <ButtonContainer>
              <CancelButton type="button">Cancelar</CancelButton>
              <SaveButton type="submit">Salvar</SaveButton>
            </ButtonContainer>
          </form>
        </FormContainer>
      </ContainerBody>

      {/* Rodapé da aplicação */}
      <Footer>
        <div>
          Copyright © 2024 / 2025 | HighTech
          <br />
          Todos os direitos reservados
          <br />
          <Ico>
            <IonIcon icon={Icons.logoGithub} /> github.com/andremc331/NutriTech
          </Ico>
        </div>
        <ImgIcon>
          <img src={imgLogoSemFundo} alt="Logo Nutritech" />
        </ImgIcon>
      </Footer>
    </>
  );
};

export default AlterarUser;
