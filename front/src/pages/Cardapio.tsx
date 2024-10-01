import React, { useState } from 'react';
import imgLogoSemFundo from '../logo/img-logo-semfundo.png';
import styled_Cardapio from '../styled/styled_Cardapio';
const{
  ImageContainer,ContainerMenu,BarraNavegacao,Sidebar,SidebarContent,Item,Text,Icon,CentralContent,WhiteBox,ExpandedContent,SimboloMais}=styled_Cardapio()

interface MenuPrincipalProps {
  setPage: (
    page:
      | "bem-vindo"
      | "cadastro"
      | "info-pessoal"
      | "definicao-metas"
      | "termosdeuso"
      | "home"
      | "cardapio"
      | "historico"
      | "metas"
      | "configuracoes"
  ) => void;
}



const Cardapio: React.FC<MenuPrincipalProps> = ({ setPage }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Alterna a expansão
  };

  return (
    <ContainerMenu>
      <BarraNavegacao>
        <h1>Nome de usuário</h1>
      </BarraNavegacao>
      <Sidebar>
        <SidebarContent>
          <Item onClick={() => setPage("home")}>
            <Text>Home</Text>
            <Icon>🏠</Icon>
          </Item>
          <Item onClick={() => setPage("cardapio")}>
            <Text>Cardápio</Text>
            <Icon>⚙️</Icon>
          </Item>
          <Item onClick={() => setPage("historico")}>
            <Text>Histórico</Text>
            <Icon>🔍</Icon>
          </Item>
          <Item onClick={() => setPage("metas")}>
            <Text>Progresso</Text>
            <Icon>⚙️</Icon>
          </Item>
          <Item onClick={() => setPage("configuracoes")}>
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
      <ImageContainer>
      <img src={imgLogoSemFundo} alt="Descrição da Imagem" />      </ImageContainer>
    </ContainerMenu>
  );
};

export default Cardapio;