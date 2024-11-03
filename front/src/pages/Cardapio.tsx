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
import styled_Cardapio from "../styled/styled_Cardapio";
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import { useNavigate } from "react-router-dom"; // Importa o useNavigate
import { AdmMenu } from "../components";
import { UserProvider } from "../contexts";

const { Title, CardBox, Label, Select, Input, Row, ButtonAdd } =
  styled_Cardapio();

const Cardapio: React.FC = () => {
  const navigate = useNavigate(); // Inicializa o hook useNavigate

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
            <Item onClick={() => navigate("/home")}>
              <Icon>
                <IonIcon icon={Icons.home} />
              </Icon>
            </Item>
            <Item onClick={() => navigate("/cardapio")}>
              <Icon>
                <IonIcon icon={Icons.restaurant} />
              </Icon>
            </Item>
            <Item onClick={() => navigate("/historico")}>
              <Icon>
                <IonIcon icon={Icons.nutrition} />
              </Icon>
            </Item>
            <Item onClick={() => navigate("/metas")}>
              <Icon>
                <IonIcon icon={Icons.fitness} />
              </Icon>
            </Item>
          </SidebarContent>
        </Sidebar>
      </ContainerMenu>
      {/* Corpo da aplicação */}
      <ContainerBody>
        <Title>Cardápio</Title>

        <CardBox>
          <Row>
            <Label>Refeição:</Label>
            <Select>
              <option value="">Selecione...</option>
              <option value="cafe-da-manha">Café da Manhã</option>
              <option value="lanche-da-manha">Lanche da Manhã</option>
              <option value="almoco">Almoço</option>
              <option value="lanche-da-tarde">Lanche da Tarde</option>
              <option value="jantar">Jantar</option>
              <option value="ceia">Ceia</option>
              <option value="pre-treino">Pré Treino</option>
              <option value="pos-treino">Pós Treino</option>
            </Select>

            <Label>Data e Hora:</Label>
            <Input type="datetime-local" />
          </Row>
          <Row>
{/* verificar se é possivel puxar os alimentos diretamente do banco de dados para o select, depois aplicar a função de Busca por caracter */}
            <Label>Alimento:</Label>
            <Select>
              <option value="">Selecione...</option>
            </Select>
{/* verificar se é possivel puxar as preparações diretamente do banco de dados para o select, depois aplicar a função de Busca por caracter */}
            <Label>Preparação:</Label>
            <Select>
              <option value="">Selecione...</option>
            </Select>
          </Row>

          <Row>
            <Label>Quantidade:</Label>
            <Input type="number" min="0" step="1" />
          
            <Label>Kg:</Label>
            <Input type="number" min="0" step="0.01" placeholder="0.00" />

          </Row>
            <ButtonAdd onClick={() => {/* lógica para adicionar um novo item  */}}>
              <Icon>
                <IonIcon icon={Icons.add} />
              </Icon>
            </ButtonAdd>
        </CardBox>
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

export default Cardapio;
