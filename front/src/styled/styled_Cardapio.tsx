import styled from "styled-components";

const styled_Cardapio = () => {
  const Title = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 50px;
    text-transform: uppercase;
  `;

  const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 16px;
    text-transform: uppercase;
    background-color: var(--color-7);
    color: var(--color-1);
    border-radius: 20px;
    padding: 30px;
    margin: 10px;
    margin-left: 90px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    width: 50vw;
    overflow: hidden;
  `;

  const Row = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 15px;
    align-items: center;
    width: 100%; 
    margin-bottom: 30px;  
  `;

  const SearchResultList = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 10px;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    top: 100%; /* Coloca a lista abaixo do campo de entrada */

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
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--color-1);
`;


  const Quantidadelabel = styled.label`
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    color: var(--color-1);
  `;

  const Input = styled.input`
    font-family: "Roboto", sans-serif;
    width: 250px;
    height: 40px;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 10px;
    font-size: 14px;
    transition: border-color 0.3s;


    &:focus {
      border-color: #000000;
      outline: none;
    }
  `;
  const InputQnt = styled.input`
    font-family: "Roboto", sans-serif;
    width: 140px;
    height: 40px;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 10px;
    font-size: 14px;
    transition: border-color 0.3s;


    &:focus {
      border-color: #000000;
      outline: none;
    }
  `;

  const Select = styled.select`
    font-family: "Roboto", sans-serif;
    width: 200px;
    height: 40px;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 10px;
    font-size: 14px;
    transition: border-color 0.3s;
    color: #000000; /* Aqui você define a cor da fonte */

    &:focus {
      border-color: #4caf50;
      outline: none;
    }
  `;

  const SearchButton = styled.button`
  align-items: center;
  justify-content: center;
  background-color: var(--color-5);
  color: var(--color-1);
  padding: 9px 11px;
  border: none;
  border-radius: 50%;
  cursor: pointer; 
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: #1ca885;
  }
`;


  const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: var(--color-5);
    font-weight: bold;
    font-size: 18px;
    color: var(--color-1);
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 50px;

    &:hover {
      background-color: #1ca885;
    }

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 12px;
    }
  `;

  return {
    Title,
    CardBox,
    Alimentolabel,
    Quantidadelabel,
    Select,
    Input,
    InputQnt,
    Row,
    Button,
    SearchButton,
    SearchResultList,
    SearchResultItem,
  };
};

export default styled_Cardapio;
