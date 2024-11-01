import React, { useState } from 'react';
import imgLogoSemFundo from '../assets/img-logo-semfundo.png';
import { ContainerMenu, Navbar, Sidebar, SidebarContent, Text, Icon, Item, ImgIcon } from "../styled/styled_Main";
import styled_Cardapio from '../styled/styled_Cardapio';
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import { useNavigate } from 'react-router-dom'; 
import { AdmMenu } from '../components';
import { UserProvider } from '../contexts';
import eat from '../services/Eat';
import axios from 'axios';

const {
  CardapioBody,
  CentralContent,
  WhiteBox,
  Busque,
  SimboloMais,
} = styled_Cardapio();
const Cardapio: React.FC = () => {
  const navigate = useNavigate(); 
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [inputValues, setInputValues] = useState<{ [key: number]: string }>({});
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [searchResults, setSearchResults] = useState<{ [key: number]: any[] }>({});
  const [selectedFoods, setSelectedFoods] = useState<{ [key: number]: { food: any; quantity: number }[] }>({});

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); 
  };

  const handleInputChange = (index: number, value: string) => {
    setInputValues({ ...inputValues, [index]: value });
  };

  const handleQuantityChange = (index: number, value: number) => {
    setQuantities({ ...quantities, [index]: value });
  };

  const handleSearch = async (index: number) => {
    const term = inputValues[index];
    if (term) {
      try {
        const response = await axios.get(`http://localhost:3011/food/search?term=${term}`);
        setSearchResults({ ...searchResults, [index]: response.data.items });
      } catch (error) {
        console.error("Erro ao buscar alimentos:", error);
      }
    }
  };

  const handleSelectFood = (index: number, food: any) => {
    const quantity = quantities[index] || 0;
    if (quantity > 0) {
      const currentSelected = selectedFoods[index] || [];
      setSelectedFoods({ 
        ...selectedFoods, 
        [index]: [...currentSelected, { food, quantity }]
      });
    } else {
      alert("Por favor, insira uma quantidade válida.");
    }
  };

  const handleSendData = async () => {
    const date = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format
    const promises: Promise<any>[] = [];

    for (const index in selectedFoods) {
      selectedFoods[index].forEach(({ food, quantity }) => {
        promises.push(
          eat.createFood(food.id, date, quantity) // Use the method from the Eat class
        );
      });
    }

    try {
      await Promise.all(promises);
      alert("Dados enviados com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      alert("Erro ao enviar os dados. Tente novamente.");
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
              <Busque isExpanded={expandedIndex === index}>
                {expandedIndex === index && (
                  <>
                    <label>Insira os alimentos</label>
                    <input
                      type="text"
                      value={inputValues[index] || ''}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      placeholder={`Detalhes para ${item}`}
                      onFocus={() => setExpandedIndex(index)}
                    />
                    <button onClick={() => handleSearch(index)}>Buscar</button>
                    <br />
                    <label>Quantidade</label>
                    <input
                      type='number'
                      value={quantities[index] || ''}
                      onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
                      placeholder='Quantidade em kg'
                    />
                    {searchResults[index] && searchResults[index].length > 0 && (
                      <div>
                        <ul>
                          {searchResults[index].map((food) => (
                            <li key={food.id}>
                              {food.description}
                              <button onClick={() => handleSelectFood(index, food)}>Selecionar</button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedFoods[index] && selectedFoods[index].length > 0 && (
                      <div>
                        <h3>Alimentos Selecionados:</h3>
                        <ul>
                          {selectedFoods[index].map(({ food, quantity }) => (
                            <li key={food.id}>{food.description} - {quantity} kg</li>
                          ))}
                        </ul>
                        <button onClick={handleSendData}>Enviar</button>
                      </div>
                    )}
                  </>
                )}
              </Busque>
            </WhiteBox>
          ))}
        </CentralContent>
      </ContainerMenu>

      <ImgIcon>
        <img src={imgLogoSemFundo} alt="Logo Nutritech" />
      </ImgIcon>
    </CardapioBody>
  );
};

export default Cardapio;
