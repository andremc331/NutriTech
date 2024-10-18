import React, { useState } from 'react';
import imgLogoSemFundo from '../logo/img-logo-semfundo.png';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { AdmMenu, Error, PopupMessage, InputDatePickerConsumer, Input, TableEatProduct, TableEatFood, Button } from '../components';
import { useEat } from '../hooks';
import { FoodProps, ProductNutrientsProps } from '../types';
import { dateFormat } from '../utils';

const Cardapio: React.FC = () => {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [messagePopup, setMessagePopup] = useState("");
  const [term, setTerm] = useState("");
  const [selectedFood, setSelectedFood] = useState<FoodProps | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductNutrientsProps | null>(null);
  const [searchType, setSearchType] = useState<string | null>(null);
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());

  const { products, foods, error, setError, createProduct, createFood, searchFood, searchProduct, eatProducts, eatFoods } = useEat();

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
        setError({ error: "A quantidade consumida precisa ser um valor maior que zero" });
      } else {
        const response = await createProduct(selectedProduct.id, dateFormat(date), parseFloat(quantity));
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
        setError({ error: "A quantidade consumida precisa ser um valor maior que zero" });
      } else {
        const response = await createFood(selectedFood.id, dateFormat(date), parseFloat(quantity));
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
      </ContainerMenu>
      <ImageContainer>
        <img src={imgLogoSemFundo} alt="Descrição da Imagem" />
      </ImageContainer>
      <BodyWrapper>
        {error && <Error>{error.error}</Error>}
        {showPopup && <PopupMessage message={messagePopup} setShowPopup={setShowPopup} />}
        <LineInputSld>
          <LabelSld>Busca alimento ou produto consumido</LabelSld>
          <InputSld
            placeholder="Digite parte do nome do alimento ou produto e clique no botão"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </LineInputSld>
        <LineSld>
          <Button label="Alimento" click={handleFood} />
          <Button label="Produto" click={handleProduct} />
        </LineSld>
        <ItemWrapperSld>{items}</ItemWrapperSld>
        <LineSld>
          <InputDatePickerConsumer
            label="Data de consumo"
            value={date}
            setValue={setDate}
          />
          <SpacerSld />
          <Input
            type="number"
            id="weight"
            label="Quantidade consumida (colheres, unidades, ...)"
            value={quantity}
            setValue={setQuantity}
          />
        </LineSld>
        <LineSld>
          <Button label="Salvar" click={handleSave} />
        </LineSld>
        {eatProducts.length > 0 && <TableEatProduct items={eatProducts} />}
        {eatFoods.length > 0 && <TableEatFood items={eatFoods} />}
      </BodyWrapper>
    </CardapioBody>
  );
};

const CardapioBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #f0f0f0;
  min-height: 100vh;
  margin-top: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  bottom: 1px;
  right: 20px;
  z-index: 999;

  img {
    max-width: 150px;
    height: auto;

    @media (max-width: 768px) {
      max-width: 100px;
    }

    @media (max-width: 480px) {
      max-width: 80px;
    }
  }
`;

const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const BarraNavegacao = styled.div`
  width: 100%;
  height: 80px;
  background-color: #c9b7e6;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  h1 {
    font-size: 20px;
  }
`;

const Sidebar = styled.nav`
  width: 80px;
  background-color: #9b71cc;
`;

const SidebarContent = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 80px;
  width: 100%;
`;

const Text = styled.span`
  font-size: 12px;
`;

const Icon = styled.span`
  font-size: 22px;
`;

const CentralContent = styled.div`
  padding: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const WhiteBox = styled.div`
  background-color: #fff;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;

  .item-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const SimboloMais = styled.span`
  font-size: 24px;
  color: #bbb;
`;

const ExpandedContent = styled.div<{ isExpanded: boolean }>`
  display: ${(props) => (props.isExpanded ? "block" : "none")};
`;

const BodyWrapper = styled.div`
  margin-top: 20px;
`;

const LineInputSld = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const LineSld = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const LabelSld = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

const InputSld = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SpacerSld = styled.div`
  width: 20px;
`;

const ItemWrapperSld = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const ItemSld = styled.div<{ selected: boolean }>`
  padding: 10px;
  background-color: ${(props) => (props.selected ? "#e0e0e0" : "#fff")};
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default Cardapio;