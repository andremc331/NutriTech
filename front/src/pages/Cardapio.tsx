import React, { useState } from 'react';
import imgLogoSemFundo from '../logo/img-logo-semfundo.png';
import styled_Cardapio from '../styled/styled_Cardapio';
import { useNavigate } from 'react-router-dom'; // Importa o useNavigate
import { AdmMenu } from '../components';
import { UserProvider } from '../contexts';

const {
  CardapioBody,
  ImageContainer,
  ContainerMenu,
  BarraNavegacao,
  Sidebar,
  SidebarContent,
  Item,
  Text,
  Icon,
  CentralContent,
  WhiteBox,
  ExpandedContent,
  SimboloMais,
} = styled_Cardapio();

const Cardapio: React.FC = () => {
  const navigate = useNavigate(); // Inicializa o hook useNavigate
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Alterna a expansão
  };

  return (
    <CardapioBody>
      <ContainerMenu>
        <BarraNavegacao>
          <h1>Nome de usuário</h1>
          <UserProvider>
            <AdmMenu />
            {/* Conteúdo da página de administração */}
          </UserProvider>
        </BarraNavegacao>
        <Sidebar>
          <SidebarContent>
            <Item onClick={() => navigate("/home")}>
              <Text>Home</Text>
              <Icon>🏠</Icon>
            </Item>
            <Item onClick={() => navigate("/cardapio")}>
              <Text>Cardápio</Text>
              <Icon>⚙️</Icon>
            </Item>
            <Item onClick={() => navigate("/historico")}>
              <Text>Histórico</Text>
              <Icon>🔍</Icon>
            </Item>
            <Item onClick={() => navigate("/metas")}>
              <Text>Progresso</Text>
              <Icon>⚙️</Icon>
            </Item>
            <Item onClick={() => navigate("/configuracoes")}>
              <Text>Configurações</Text>
              <Icon>⚙️</Icon>
            </Item>
          </SidebarContent>
        </Sidebar>
        <CentralContent>
          {['Café da manhã', 'Lanche da manhã', 'Almoço', 'Lanche da tarde', 'Jantar', 'Ceia', 'Pré-treino', 'Pós-treino'].map((item, index) => (
            <WhiteBox key={index} onClick={() => toggleExpand(index)}>
              <div className="item-container">
                <span>{item}</span>
                <SimboloMais>+</SimboloMais>
              </div>
              <ExpandedContent isExpanded={expandedIndex === index}>
                {expandedIndex === index && <p>Conteúdo expandido para {item}</p>}
              </ExpandedContent>
            </WhiteBox>
          ))}
        </CentralContent>
        {/* Contêiner da Imagem na parte inferior direita */}
      </ContainerMenu>
      <ImageContainer>
        <img src={imgLogoSemFundo} alt="Descrição da Imagem" />
      </ImageContainer>
    </CardapioBody>
    
  );
};

export default Cardapio;