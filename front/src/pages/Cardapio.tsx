import React, { useState } from "react";
import imgLogoSemFundo from "../logo/img-logo-semfundo.png";
import styled_Cardapio from "../styled/styled_Cardapio";
import { useNavigate } from "react-router-dom";
import {
  AdmMenu,
  Error,
  PopupMessage,
  InputDatePickerConsumer,
  Input,
  TableEatProduct,
  TableEatFood,
  Button,
} from "../components";
import { useEat } from "../hooks";
import { FoodProps, ProductNutrientsProps } from "../types";
import { dateFormat } from "../utils";
import { Button } from "../components";

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
  // LabelSld,
  InputSld,
  // Button,
  // SpacerSld,
  // ItemWrapperSld,
  // ItemSld,
  // BodyWrapper,
  // LineSld, // Make sure this is defined in styled_Cardapio
} = styled_Cardapio();

const Cardapio: React.FC = () => {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [messagePopup, setMessagePopup] = useState("");
  const [term, setTerm] = useState("");
  const [selectedFood, setSelectedFood] = useState<FoodProps | null>(null);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductNutrientsProps | null>(null);
  const [searchType, setSearchType] = useState<string | null>(null);
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());

  const {
    products,
    foods,
    error,
    setError,
    createProduct,
    createFood,
    searchFood,
    searchProduct,
    eatProducts,
    eatFoods,
  } = useEat();

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleFood = async () => {
    if (term.trim().length >= 3) {
      const response = await searchFood(term);
      if (response) {
        setMessagePopup("Não existem alimentos que possuem o termo digitado");
        setShowPopup(true);
      } else {
        setSearchType("food");
        setSelectedFood(null);
      }
    }
  };

  const handleProduct = async () => {
    if (term.trim().length >= 3) {
      const response = await searchProduct(term);
      if (response) {
        setMessagePopup("Não existem produtos que possuem o termo digitado");
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
        setError({
          error: "A quantidade consumida precisa ser um valor maior que zero",
        });
      } else {
        const response = await createProduct(
          selectedProduct.id,
          dateFormat(date),
          parseFloat(quantity)
        );
        if (response) {
          setMessagePopup("Consumo registrado com sucesso");
          setShowPopup(true);
        }
      }
    } else if (searchType === "food" && selectedFood) {
      if (!date) {
        setError({ error: "Selecione a data" });
      } else if (!quantity || isNaN(parseFloat(quantity))) {
        setError({ error: "Forneça a quantidade consumida" });
      } else if (parseFloat(quantity) <= 0) {
        setError({
          error: "A quantidade consumida precisa ser um valor maior que zero",
        });
      } else {
        const response = await createFood(
          selectedFood.id,
          dateFormat(date),
          parseFloat(quantity)
        );
        if (response) {
          setMessagePopup("Consumo registrado com sucesso");
          setShowPopup(true);
        }
      }
    } else {
      setError({ error: "Selecione um alimento ou produto" });
    }
  };

  let items = null;
  if (searchType === "product") {
    items = products.map((item) => (
      <Item
        key={item.id}
        onClick={() => setSelectedProduct(item)}
        selected={selectedProduct?.id === item.id}
      >
        {item.description} ({item.quantity_per_serving_unit})
      </Item>
    ));
  } else if (searchType === "food") {
    items = foods.map((item) => (
      <Item
        key={item.id}
        onClick={() => setSelectedFood(item)}
        selected={selectedFood?.id === item.id}
      >
        {item.description}
      </Item>
    ));
  }

  return (
    <CardapioBody>
      <ContainerMenu>
        <BarraNavegacao>
          <h1>Nome de usuário</h1>
          <AdmMenu />
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
          </SidebarContent>
        </Sidebar>
        <CentralContent>
          {[
            "Café da manhã",
            "Lanche da manhã",
            "Almoço",
            "Lanche da tarde",
            "Jantar",
            "Ceia",
            "Pré-treino",
            "Pós-treino",
          ].map((item, index) => (
            <WhiteBox key={index} onClick={() => toggleExpand(index)}>
              <div className="item-container">
                <span>{item}</span>
                <SimboloMais>+</SimboloMais>
              </div>
              <ExpandedContent isExpanded={expandedIndex === index}>
                {expandedIndex === index && (
                  <p>Conteúdo expandido para {item}</p>
                )}
              </ExpandedContent>
            </WhiteBox>
          ))}
        </CentralContent>
      </ContainerMenu>
      <ImageContainer>
        <img src={imgLogoSemFundo} alt="Descrição da Imagem" />
      </ImageContainer>
      {/* <BodyWrapper> */}
      {error && <Error>{error.error}</Error>}
      {showPopup && (
        <PopupMessage message={messagePopup} setShowPopup={setShowPopup} />
      )}
      {/* <InputSld> */}
      {/* <LabelSld>Busca alimento ou produto consumido</LabelSld> */}
      <InputSld
        placeholder="Digite parte do nome do alimento ou produto e clique no botão"
        value={term}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTerm(e.target.value)
        }
      />
      {/* <LineSld> */}
      <Button label="Alimento" click={handleFood} />
      <Button label="Produto" click={handleProduct} />
      {/* </LineSld> */}
      <Item>{items}</Item>
      {/* <LineSld> */}
      <InputDatePickerConsumer
        label="Data de consumo"
        value={date}
        setValue={setDate}
      />
      {/* <SpacerSld /> */}
      <Input
        type="number"
        id="weight"
        label="Quantidade consumida (colheres, unidades, ...)"
        value={quantity}
        setValue={setQuantity}
      />
      {/* </LineSld>
        <LineSld> */}
      <Button label="Salvar" click={handleSave} />
      {/* </LineSld> */}
      {eatProducts.length > 0 && <TableEatProduct items={eatProducts} />}
      {eatFoods.length > 0 && <TableEatFood items={eatFoods} />}
      {/* </BodyWrapper> */}
    </CardapioBody>
  );
};

export default Cardapio;
