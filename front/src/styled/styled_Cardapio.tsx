import styled from "styled-components";

const styled_Cardapio = () => {
  const Title = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 50px;
    text-transform: uppercase;
  `;

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

  const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--color-2);
    color: var(--color-1);
    border-radius: 8px;
    padding: 30px;
    margin: 10px 0 0 90px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    width: 50vw;
    overflow: hidden;
  `;

  const Row = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
  `;

  const SearchResultList = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 5px;
    margin-bottom: 15px;
    width: 1000px;
    max-height: 200px;
    overflow-y: auto;
    top: 100%;
    left: 0;
    border: 2px solid #adadad;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 1;
  `;

  const SearchResultItem = styled.li`
    background-color: var(--color-3);
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--color-5);
    }

    & > button {
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 8px;
      padding: 5px 10px;
      cursor: pointer;

      &:hover {
        background-color: #0c3d0f;
      }
    }
  `;

  const Alimentolabel = styled.label`
    font-size: 14px;
    color: var(--color-1);
  `;

  const Quantidadelabel = styled.label`
    font-size: 14px;
    color: var(--color-1);
    margin-bottom: 15px;
  `;

  const Select = styled.select`
    width: 26%;
    height: 40px;
    margin-left: 10px;
    padding: 10px;
    font-size: 16px;
    border-radius: 8px;
  `;

  const Input = styled.input`
    width: 40%;
    height: 40px;
    padding: 10px;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    margin-top: 10px;
    margin-bottom: 20px;
    justify-content: flex-start;  
  `;

  const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0c3d0f;
    }
  `;

  const SearchButton = styled(Button)`
    margin-left: -60px;
    margin-bottom: 50px;
  `;

  return {
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
    SearchButton,
    ItemSld
  };
};

export default styled_Cardapio;