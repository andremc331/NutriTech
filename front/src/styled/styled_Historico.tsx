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

    @media (min-width: 768px) {
      width: 60vw;
      height: 50vh;
    }

    @media (min-width: 1024px) {
      width: 60vw;
      height: 60vh;
    }
  `;

  const HistoryBox = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    width: 100%;
    border-radius: 15px;
    color: var(--color-1);
    background-color: var(--color-2);
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
      border-color: #4CAF50;
      outline: none; 
    }
  `;

  return {
    Title,
    HistoryboxContainer,
    HistoryBox,
    MealInfo,
    Input,
    Label
  };
};

export default styled_Historico;