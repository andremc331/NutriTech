import styled from "styled-components";

const styled_Metas = () => {
  const Title = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 50px;
    text-transform: uppercase;
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
  `;

  const ChartContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
  `;

  const PesoChart = styled.div`
    flex-direction: row;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 450px;
    height: 280px;
    margin-top: 20px;
    color: var(--color-12);
    background-color: var(--color-1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    flex: 2;

    .content {
      display: flex;

      width: 90%;
      height: 90%;
      z-index: 1;
    }
  `;

  const VerticalContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1; /* Isso vai garantir que o container vertical use o espaço restante */
    gap: 20px; /* Espaçamento entre os componentes */
  `;

  const FoodChart = styled.div`
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 400px;
    height: 280px;
    margin: 20px 0 0;
    color: var(--color-1);
    background-color: var(--color-3);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    flex: 1;

    .content {
      display: flex;
      position: relative;
      width: 90%;
      height: 90%;
      z-index: 1;
    }
  `;

  const GoalInfo = styled.div`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    text-align: left;
    position: relative;
    padding: 30px;
    margin: 20px 0 0;
    border-radius: 10px;
    width: 100%;
    height: 310px;
    color: var(--color-1);
    background-color: var(--color-5);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    .content {
      display: flex;
      position: relative;
      flex-direction: column;
      align-items: center;

      min-height: 100%;
      gap: 10px;
      z-index: 1;
    }

    .peso {
      font-size: 40px;
      text-align: center;
    }

    .peso-label {
      font-size: 20px;
      text-align: center;
    }

    .objetivo-container {
      display: flex;
      justify-content: center; /* Centraliza horizontalmente */
      align-items: center; /* Centraliza verticalmente */
    }

    .objetivo {
      font-size: 25px;
      margin-left: 10px; /* Espaço entre os labels, se necessário */
    }
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

  const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-left: 20px;
    background-color: var(--color-5);
    font-weight: bold;
    font-size: 18px;
    color: var(--color-1);
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #1ca885;
    }
  `;

  const FilterButton = styled.button`
    background-color: var(--color-5);
    border: none;
    padding: 2px 6px;
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

  // Estilos do Modal
  const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px); /* Efeito de embasamento */
    z-index: 9999; /* Garante que o modal fique sobre o conteúdo */
  `;

  const ModalContent = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra leve */
  `;

  const ModalButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  `;

  const ButtonCancel = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-left: 20px;
    background-color: var(--color-13);
    font-weight: bold;
    font-size: 18px;
    color: var(--color-1);
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #de3163;
    }
  `;

  return {
    Title,
    FoodChart,
    GoalInfo,
    PesoChart,
    Label,
    Input,
    FilterButton,
    Button,
    ButtonCancel,
    Container,
    ChartContainer,
    VerticalContainer,
    ModalOverlay,
    ModalContent,
    ModalButtons,
  };
};
export default styled_Metas;
