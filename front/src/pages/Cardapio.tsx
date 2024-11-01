import React, { useState } from 'react';
import imgLogoSemFundo from '../assets/img-logo-semfundo.png';
import {
  ContainerBody,
  ContainerMenu,
  Navbar,
  Sidebar,
  SidebarContent,
  Icon,
  Item,
  Footer,
  ImgIcon,
  CentralContent,
} from "../styled/styled_Main";
import styled_Cardapio from '../styled/styled_Cardapio';
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import { useNavigate } from 'react-router-dom'; 
import { AdmMenu } from '../components';
import { UserProvider } from '../contexts';
import eat from '../services/Eat';
import axios from 'axios';

const { Title, CardBox, Label, Select, Input, Row, ButtonAdd } =
  styled_Cardapio();
const Cardapio: React.FC = () => {
  const navigate = useNavigate(); 
  const [inputValue, setInputValue] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(0);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedFoods, setSelectedFoods] = useState<{ food: any; quantity: number }[]>([]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };

  const handleSearch = async () => {
    if (inputValue) {
      try {
        const response = await axios.get(`http://localhost:3011/food/search?term=${inputValue}`);
        setSearchResults(response.data.items);
      } catch (error) {
        console.error("Erro ao buscar alimentos:", error);
      }
    }
  };

  const handleSelectFood = (food: any) => {
    if (quantity > 0) {
      setSelectedFoods([...selectedFoods, { food, quantity }]);
    } else {
      alert("Por favor, insira uma quantidade válida.");
    }
  };

  const handleSendData = async () => {
    const date = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format
    const promises: Promise<any>[] = [];

    selectedFoods.forEach(({ food, quantity }) => {
      promises.push(
        eat.createFood(food.id, date, quantity) // Use the method from the Eat class
      );
    });

    try {
      await Promise.all(promises);
      alert("Dados enviados com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      alert("Erro ao enviar os dados. Tente novamente.");
    }
  };

  return (
    <>
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
            <Label>Alimento:</Label>
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Buscar alimento..."
              onFocus={handleSearch}
            />
            <button onClick={handleSearch}>Buscar</button>
          </Row>

          {searchResults.length > 0 && (
            <Row>
              <ul>
                {searchResults.map((food) => (
                  <li key={food.id}>
                    {food.description}
                    <button onClick={() => handleSelectFood(food)}>Selecionar</button>
                  </li>
                ))}
              </ul>
            </Row>
          )}
          
          <Row>
            <Label>Quantidade:</Label>
            <Input
              type="number"
              min="0"
              step="1"
              value={quantity || ''}
              onChange={(e) => handleQuantityChange(Number(e.target.value))}
              placeholder="Quantidade em kg"
            />
          </Row>
  
          <ButtonAdd onClick={handleSendData}>
            <Icon>
              <IonIcon icon={Icons.add} />
            </Icon>
            Enviar
          </ButtonAdd>
  
          {selectedFoods.length > 0 && (
            <Row>
              <h3>Alimentos Selecionados:</h3>
              <ul>
                {selectedFoods.map(({ food, quantity }) => (
                  <li key={food.id}>{food.description} - {quantity} kg</li>
                ))}
              </ul>
            </Row>
          )}
        </CardBox>
      </ContainerBody>
  
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
    </>
  );
}

export default Cardapio;