import React from 'react';
import styled from "styled-components";
import NavigateButton from "./NavigateButton";
import { useFood } from "../hooks";

interface FoodItem {
    id: number;
    description: string; // Assumindo que o seu item de alimento tem uma descrição
}

interface ListFoodProps {
    data: FoodItem[]; // Define o tipo das props
}

const ListFood: React.FC<ListFoodProps> = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>Nenhum dado encontrado.</p>; // Mensagem para quando não há dados
    }

    // Mapeia os itens da página atual para renderizar a lista
    const lines = data.map((item: FoodItem) => (
        <LineSld key={item.id}>
            {item.description}
        </LineSld>
    ));

    return (
        <Wrapper>
            {lines}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #52c991;
  color: #111;
  width: 100%;
  margin-top: 10px;
  box-sizing: border-box;
`;

const LineSld = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    color: #fff;
    background-color: rgb(31, 94, 65);
  }
`;

export default ListFood;