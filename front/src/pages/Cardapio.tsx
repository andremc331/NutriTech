import React, { useContext, useState } from 'react';
import styled from "styled-components";
import { Error, Header, InputDatePickerConsumer, TableEatProduct, TableEatFood, NutrientPane, FoodPane } from "../components";
import { useEat, useFood } from "../hooks";
import { FoodProps, ProductNutrientsProps, UserContextProps } from "../types";
import { dateFormat } from "../utils";
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import { useNavigate } from 'react-router-dom';
import imgLogoSemFundo from '../assets/img-logo-semfundo.png';
import { AdmMenu } from '../components';
import { UserContext, UserProvider } from '../contexts';
import { formatDateTime } from '../components/Date';
import styled_Cardapio from '../styled/styled_Cardapio';
import { ContainerBody, ContainerMenu, Footer, Icon, ImgIcon, Item, Navbar, Sidebar, SidebarContent } from '../styled/styled_Main';

const {
  Title,
  CardBox,
  Alimentolabel,
  Quantidadelabel,
  Select,
  Input,
  Row,
  Button,
  SearchResultList,
  SearchResultItem,
  PopupMessage,
} = styled_Cardapio();

const EatPage: React.FC = () => {
  const { products, foods, eatProducts, eatFoods, searchFood, searchProduct, error, setError, createProduct, createFood, date, setDate } = useEat();
  const [showPopup, setShowPopup] = useState(false);
  const [messagePopup, setMessagePopup] = useState("");
  const [term, setTerm] = useState("");
  const [selectedFood, setSelectedFood] = useState<FoodProps | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductNutrientsProps | null>(null);
  const [searchType, setSearchType] = useState<string | null>(null);
  const [quantity, setQuantity] = useState("");
  const [inputValue, setInputValue] = useState<string>('');
  const [quantityFood, setQuantityFood] = useState<number>(0);
  const [selectedFoods, setSelectedFoods] = useState<{ food: any; quantity: number }[]>([]);
  const navigate = useNavigate();
  const { food } = useFood();
  const { getGoals, currentUser } =
  useContext(UserContext) || ({} as UserContextProps); // Acessando currentUser aqui


  const handleFood = async () => {
    if (inputValue.trim().length >= 3) {
      const response = await searchFood(inputValue);
      if (response) {
        setMessagePopup("Não existem alimentos com esse termo");
        setShowPopup(true);
      } else {
        setSearchType("food");
        setSelectedFood(null);
      }
    }
  };

  const handleProduct = async () => {
    if (inputValue.trim().length >= 3) {
      const response = await searchProduct(inputValue);
      if (response) {
        setMessagePopup("Não existem produtos com esse termo");
        setShowPopup(true);
      } else {
        setSearchType("product");
        setSelectedProduct(null);
      }
    }
  };

  const handleSave = async () => {
    if (searchType === "product" && selectedProduct) {
      if (!date) {
        setError({ error: "Selecione a data" });
      } else if (!quantity || isNaN(parseFloat(quantity))) {
        setError({ error: "Forneça a quantidade consumida" });
      } else if (parseFloat(quantity) <= 0) {
        setError({ error: "A quantidade precisa ser maior que zero" });
      } else {
        const response = await createProduct(selectedProduct.id, dateFormat(date), parseFloat(quantity));
        if (response) {
          setMessagePopup("Consumo registrado com sucesso");
          setShowPopup(true); // Exibir o popup
        }
      }
    } else if (searchType === "food" && selectedFood) {
      if (!date) {
        setError({ error: "Selecione a data" });
      } else if (!quantity || isNaN(parseFloat(quantity))) {
        setError({ error: "Forneça a quantidade consumida" });
      } else if (parseFloat(quantity) <= 0) {
        setError({ error: "A quantidade precisa ser maior que zero" });
      } else {
        const response = await createFood(selectedFood.id, dateFormat(date), parseFloat(quantity));
        if (response) {
          setMessagePopup("Consumo registrado com sucesso");
          setShowPopup(true); // Exibir o popup
        } 
      }
    } else {
      setError({ error: "Selecione um alimento ou produto" });
    }
  };

  const handleSelectFood = (food: any) => {
    if (quantityFood > 0) {
      setSelectedFoods([...selectedFoods, { food, quantity: quantityFood }]);
    } else {
      alert("Por favor, insira uma quantidade válida.");
    }
  };

  const handleSendData = async () => {
    const date = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format
    const promises: Promise<any>[] = [];

    selectedFoods.forEach(({ food, quantity }) => {
      promises.push(createFood(food.id, date, quantity));
    });

    try {
      await Promise.all(promises);
      alert("Dados enviados com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      alert("Erro ao enviar os dados. Tente novamente.");
    }
  };

  let items = null;
  if (searchType === "product") {
    items = products.map((item) => (
      <ItemSld key={item.id} onClick={() => setSelectedProduct(item)} selected={selectedProduct?.id === item.id}>
        {item.description} ({item.quantity_per_serving_unit})
      </ItemSld>
    ));
  } else if (searchType === "food") {
    items = foods.map((item) => (
      <ItemSld key={item.id} onClick={() => setSelectedFood(item)} selected={selectedFood?.id === item.id}>
        {item.description}
      </ItemSld>
    ));
  }

  return (
    <>
      <ContainerMenu>
        <Navbar>
        <h1>{currentUser?.nome || "Nome de usuário"}</h1>{" "}
        {/* Exibindo o nome do usuário */}          <UserProvider>
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
            <Alimentolabel>Busca alimento ou produto consumido</Alimentolabel>
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite parte do nome do alimento ou produto"
            />
            <Button onClick={handleFood}>
              <Icon>
                <IonIcon icon={Icons.search} />
              </Icon>
            </Button>
          </Row>
          {items && (
            <Row>
              <SearchResultList>
                {items}
              </SearchResultList>
            </Row>
          )}  
          <Row>
            <Quantidadelabel>Quantidade consumida:</Quantidadelabel>
            <Input
              type="number"
              min="0"
              value={quantity || ''}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Quantidade"
            />
          </Row>

          <Button onClick={handleSave}>Salvar</Button>
          {showPopup && (
          <PopupMessage show={showPopup}>
            {messagePopup}
          </PopupMessage>
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

export default EatPage;

interface ItemSldProps {
  selected: boolean;
}

const ItemSld = styled.div<ItemSldProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    color: #fff;
    background-color: rgb(245, 149, 59);
  }

  background-color: ${(props) =>
    props.selected ? "rgb(34, 175, 163)" : "transparent"};
  color: ${(props) =>
    props.selected ? "#fff" : "#000"};
`;