import styled from "styled-components";

const styled_Historico = () => {
  const Title = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 50px;
    text-transform: uppercase;
  `;

  const HistoryboxContainer = styled.div`
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 30px;
    margin: 20px 0 30px;
    border-radius: 10px;
    width: 90%;
    max-width: 720px;
    height: 200px;
    color: var(--color-10);
    background-color: var(--color-1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-height: 9000px; /* Defina a altura máxima desejada */
    overflow-y: auto; /* Permite a rolagem vertical */

    @media (min-width: 768px) {
      width: 60vw;
      height: 50vh;
    }

    @media (min-width: 1024px) {
      width: 60vw;
      height: 60vh;
    }
  `;

  const MealContainer = styled.div`
    background-color: white;
    padding: 15px;
    margin: 10px 0;
    border-radius: 8px;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: black;
  `;

  const HistoryBox = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    width: 100%;
    border-radius: 15px;
    color: var(--color-1);
    background-color: var(--color-7);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  `;

  const MealInfo = styled.div`
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    margin-bottom: 10px;
  `;

  const Label = styled.label`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
    display: block;
    margin-top: 10px;
    color: var(--color-10);
  `;

  const Input = styled.input`
    width: 60%;
    height: 30px;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    transition: border-color 0.3s;
    margin-left: 10px;

    &:focus {
      border-color: #4caf50;
      outline: none;
    }
  `;

  const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top:5px;
  `;

  const FilterButton = styled.button`
    background-color: var(--color-5);
    border: none;
    padding: 2px 5px;
    color: var(--color-1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #1ca885;
    }
  `;

  return {
    Title,
    HistoryboxContainer,
    MealContainer,
    HistoryBox,
    MealInfo,
    Input,
    Label,
    FilterButton,
    FilterContainer
  };
};

export default styled_Historico;
