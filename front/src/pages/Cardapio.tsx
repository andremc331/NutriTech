import React, { useState } from 'react';
import imgLogoSemFundo from '../assets/img-logo-semfundo.png';
import { ContainerMenu, Navbar, Sidebar, SidebarContent, Text, Icon, Item, Footer, ImgIcon } from "../styled/styled_Main";
import styled_Cardapio from '../styled/styled_Cardapio';
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import { useNavigate } from 'react-router-dom'; 
import { AdmMenu } from '../components';
import { UserProvider } from '../contexts';
import axios from 'axios'; // Adicione esta linha

const {
  CardapioBody,
  CentralContent,
  WhiteBox,
  ExpandedContent,
  SimboloMais,
} = styled_Cardapio();

const Cardapio: React.FC = () => {
  const navigate = useNavigate(); 
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [inputValues, setInputValues] = useState<{ [key: number]: string }>({});
  const [searchResults, setSearchResults] = useState<any[]>([]); // Novo estado para os resultados da busca

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); 
  };

  const handleInputChange = (index: number, value: string) => {
    setInputValues({ ...inputValues, [index]: value });
  };

  const handleSearch = async (index: number) => {
    const term = inputValues[index]; // Obtém o termo de busca do estado
    if (term) {
      try {
        const response = await axios.get(`http://localhost:3011/food/search?term=${term}`);
        setSearchResults(response.data.items); // Atualiza os resultados da busca
      } catch (error) {
        console.error("Erro ao buscar alimentos:", error);
      }
    }
  };

  return (
    <CardapioBody>
      <ContainerMenu>
        <Navbar>
          <h1>Nome de usuário</h1>
          <UserProvider>
            <AdmMenu />
          </UserProvider>
        </Navbar>

        <Sidebar>
          <SidebarContent>
            <Item onClick={() => navigate("/home")}>
              <Text>Home</Text>
              <Icon>
                <IonIcon icon={Icons.home} />
              </Icon>
            </Item>
            <Item onClick={() => navigate("/cardapio")}>
              <Text>Cardápio</Text>
              <Icon>
                <IonIcon icon={Icons.restaurant} />
              </Icon>
            </Item>
            <Item onClick={() => navigate("/historico")}>
              <Text>Histórico</Text>
              <Icon>
                <IonIcon icon={Icons.nutrition} />
              </Icon>
            </Item>
            <Item onClick={() => navigate("/metas")}>
              <Text>Progresso</Text>
              <Icon>
                <IonIcon icon={Icons.fitness} />
              </Icon>
            </Item>
          </SidebarContent>
        </Sidebar>
        <CentralContent>
          {['Café da manhã', 'Lanche da manhã', 'Almoço', 'Lanche da tarde', 'Jantar', 'Ceia', 'Pré-treino', 'Pós-treino'].map((item, index) => (
            <WhiteBox key={index}>
              <div className="item-container" onClick={() => toggleExpand(index)}>
                <span>{item}</span>
                <SimboloMais>+</SimboloMais>
              </div>
              <ExpandedContent isExpanded={expandedIndex === index}>
                {expandedIndex === index && (
                <>
                  <label>Insira os alimentos</label>
                  <input
                    type="text"
                    value={inputValues[index] || ''}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    placeholder={`Detalhes para ${item}`}
                    onFocus={() => setExpandedIndex(index)} // Mantenha a expansão ao focar
                  />
                  <button onClick={() => handleSearch(index)}>Buscar</button> {/* Botão para buscar alimentos */}
                  {searchResults.length > 0 && (
                    <div>
                      <h3>Resultados da Busca:</h3>
                      <ul>
                        {searchResults.map((food) => (
                          <li key={food.id}>{food.description}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>  
                )}
              </ExpandedContent>
            </WhiteBox>
          ))}
        </CentralContent>
      </ContainerMenu>

      <Footer>
        <div>
          Copyright © 2024 / 2025 | HighTech
          <br />
          Todos os direitos reservados
        </div>

        <ImgIcon>
          <img src={imgLogoSemFundo} alt="Logo Nutritech" />
        </ImgIcon>
      </Footer>
    </CardapioBody>
  );
};

export default Cardapio;
