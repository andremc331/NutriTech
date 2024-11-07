import { useEffect, useState } from "react";
import imgLogoSemFundo from "../assets/img-logo-semfundo.png";
import styled from "styled-components";
import { Header, Error, PopupMessage } from "../components";
import { useUser } from "../hooks";
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
  Input: AlterInput,
  SaveButton,
  CancelButton,
  ButtonContainer,
} = styled_alterar();

// Adicionando um estilo customizado para alinhar os botões horizontalmente
const ButtonContainerHorizontal = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px; /* Espaço entre os botões */
`;

export default function AtualizarUsuário() {
  const { token, updateAlias, updateMail, updatePassword, error, setError } = useUser();
  const [nome, setAlias] = useState("");
  const [email, setMail] = useState("");
  const [senha, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [messagePopup, setMessagePopup] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (token && token.nome && token.email) {
      setAlias(token.nome);
      setMail(token.email);
    }
  }, [token]);

  const handleAlias = async () => {
    if (!nome) {
      setError({ error: "Forneça o novo nome de usuário" });
    } else if (nome === token?.nome) {
      setError({ error: "O novo nome de usuário precisa ser diferente" });
    } else {
      const response = await updateAlias(nome);
      if (response) {
        setMessagePopup("Nome de usuário atualizado com sucesso");
        setShowPopup(true);
      }
    }
  };

  const handleMail = async () => {
    if (!email) {
      setError({ error: "Forneça o novo e-mail" });
    } else if (email === token?.email) {
      setError({ error: "O novo e-mail precisa ser diferente" });
    } else {
      const response = await updateMail(email);
      if (response) {
        setMessagePopup("E-mail atualizado com sucesso");
        setShowPopup(true);
      }
    }
  };

  const handlePassword = async () => {
    if (!senha || senha.trim().length === 0) {
      setError({ error: "Forneça a nova senha" });
    } else if (senha.trim() !== confirmPassword.trim()) {
      setError({ error: "A nova senha e confirmação precisam ser iguais" });
    } else {
      const response = await updatePassword(senha.trim());
      if (response) {
        setMessagePopup("Senha atualizada com sucesso");
        setShowPopup(true);
      }
    }
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
      <Header />
      {error && <Error>{error.error}</Error>}
      {showPopup && <PopupMessage message={messagePopup} setShowPopup={setShowPopup} />}
      
      {/* Corpo da aplicação */}
      <ContainerBody>
        <FormContainer>
          <Title>Atualizar Informações</Title>
          <form>
            <FormGroup>
              <Label htmlFor="alias">Nome de usuário:</Label>
              <AlterInput
                type="text"
                id="alias"
                value={nome}
                onChange={(e) => setAlias(e.target.value)}
                required
              />
            </FormGroup>
            {/* Botão de salvar para "Nome de usuário" */}
            <ButtonContainer>
              <SaveButton type="button" onClick={handleAlias}>
                Alterar nome de usuário
              </SaveButton>
            </ButtonContainer>

            <FormGroup>
              <Label htmlFor="mail">E-mail:</Label>
              <AlterInput
                type="text"
                id="mail"
                value={email}
                onChange={(e) => setMail(e.target.value)}
                required
              />
            </FormGroup>
            {/* Botão de salvar para "E-mail" */}
            <ButtonContainer>
              <SaveButton type="button" onClick={handleMail}>
                Alterar e-mail
              </SaveButton>
            </ButtonContainer>

            <FormGroup>
              <Label htmlFor="password">Nova senha:</Label>
              <AlterInput
                type="password"
                id="password"
                value={senha}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="confirmPassword">Confirmação da nova senha:</Label>
              <AlterInput
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </FormGroup>

            {/* Botões de "Alterar senha" e "Cancelar" ao lado */}
            <ButtonContainerHorizontal>
              <CancelButton type="button" onClick={() => navigate(-1)}>
                Cancelar
              </CancelButton>
              <SaveButton type="button" onClick={handlePassword}>
                Alterar senha
              </SaveButton>
            </ButtonContainerHorizontal>
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
}
