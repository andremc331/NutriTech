import React from "react";
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
import imgLogoSemFundo from "../assets/img-logo-semfundo.png";
import LogoHighTech from "../assets/logo-HighTech.png";
import Perfil1 from "../assets/Perfil1.jpeg";
import Perfil2 from "../assets/Perfil2.jpeg";
import Perfil3 from "../assets/Perfil3.jpeg";
import Perfil4 from "../assets/Perfil4.jpeg";
import Perfil5 from "../assets/Perfil5.jpeg";
import Perfil6 from "../assets/Perfil6.jpeg";
import { useNavigate } from "react-router-dom";
import { UserProvider } from "../contexts";
import { AdmMenu } from "../components";
import styled_Sobre from "../styled/styled_Sobre";

const {
  Title,
  Text,
  Container,
  IconsContainer,
  Title1,
  Title2,
  LogoImage,
  ImgPerfil1,
  ImgPerfil2,
  TeamSection1,
  TeamSection2,
} = styled_Sobre();

const Sobre: React.FC = () => {
  const navigate = useNavigate();
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
        <LogoImage src={LogoHighTech} alt="" />
        <Container>
          <Title>NutriTech</Title>
          <Text>
            Este projeto foi idealizado com o objetivo de auxiliar pessoas que
            buscam por uma alternativa prática para o monitoramento de um plano
            alimentar <br />
            ou com o objetivo de acompanhar seu progresso em perder ou ganhar
            peso. <br />
            Pensando nisso desenvolvemos nossa aplicação tendo em mente a
            praticidade e buscando uma melhor experiência do usuário,
            <br />
            apresentando resultados de gráfica e dinâmica.
          </Text>
          <Title>Equipe</Title>
          <Text>
            Somos um grupo de estudantes da Faculdade de Tecnologia de Jacareí
            cursando o 2º semestre, <br />
            utilizando o Scrum como método ágil para a construção do produto.{" "}
            <br />A hierarquia e divisões de papeis dentro do nosso projeto
            utilizou como base os personagens do scrum, sendo eles:
          </Text>

          <TeamSection1>
            <ImgPerfil1 src={Perfil5} alt="perfil andré" />
            <div>
              <Title1>Product owner: André Ventura </Title1>
              <IconsContainer>
                <Icon>
                  <IonIcon icon={Icons.logoGithub} /> github.com/AndreHVentura
                </Icon>
              </IconsContainer>
              <IconsContainer>
                <Icon>
                  <IonIcon icon={Icons.logoLinkedin} />{" "}
                  www.linkedin.com/in/andrehventura
                </Icon>
              </IconsContainer>
            </div>
          </TeamSection1>

          <TeamSection2>
            <ImgPerfil2 src={Perfil4} alt="perfil andré michel" />
            <div>
              <Title2>Scrum master: André Michel</Title2>
              <IconsContainer>
                <Icon>
                  <IonIcon icon={Icons.logoGithub} /> github.com/andremc331
                </Icon>
              </IconsContainer>
              <IconsContainer>
                <Icon>
                  <IonIcon icon={Icons.logoLinkedin} /> www.linkedin.com/in/
                </Icon>
              </IconsContainer>
            </div>
          </TeamSection2>

          <TeamSection1>
            <ImgPerfil1 src={Perfil1} alt="perfil bruno" />
            <div>
              <Title1>Dev team: Bruno Henrique</Title1>
              <IconsContainer>
                <Icon>
                  <IonIcon icon={Icons.logoGithub} /> github.com/
                </Icon>
              </IconsContainer>
              <IconsContainer>
                <Icon>
                  <IonIcon icon={Icons.logoLinkedin} /> www.linkedin.com/in/
                </Icon>
              </IconsContainer>
            </div>
          </TeamSection1>

          <TeamSection2>
            <ImgPerfil2 src={Perfil2} alt="perfil eduardo" />
            <div>
              <Title2>Dev team: Eduardo Henrique</Title2>
              <IconsContainer>
                <Icon>
                  <IonIcon icon={Icons.logoGithub} /> github.com/
                </Icon>
              </IconsContainer>
              <IconsContainer>
                <Icon>
                  <IonIcon icon={Icons.logoLinkedin} /> www.linkedin.com/in/
                </Icon>
              </IconsContainer>
            </div>
          </TeamSection2>

          <TeamSection1>
            <ImgPerfil1 src={Perfil3} alt="perfil danilo" />
            <div>
              <Title1>Dev team: Danilo Alves</Title1>
              <IconsContainer>
                <Icon>
                  <IonIcon icon={Icons.logoGithub} /> github.com/
                </Icon>
              </IconsContainer>
              <IconsContainer>
                <Icon>
                  <IonIcon icon={Icons.logoLinkedin} /> www.linkedin.com/in/
                </Icon>
              </IconsContainer>
            </div>
          </TeamSection1>

          <TeamSection2>
            <ImgPerfil2 src={Perfil6} alt="perfil valcir" />
            <div>
              <Title2>Dev team: Valcir Jr.</Title2>
              <IconsContainer>
                <Icon>
                  <IonIcon icon={Icons.logoGithub} /> github.com/
                </Icon>
              </IconsContainer>
              <IconsContainer>
                <Icon>
                  <IonIcon icon={Icons.logoLinkedin} /> www.linkedin.com/in/
                </Icon>
              </IconsContainer>
            </div>
          </TeamSection2>
        </Container>
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

export default Sobre;