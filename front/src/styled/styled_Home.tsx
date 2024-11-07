import styled from "styled-components";

const styled_Home = () => {
  const InfoBoxContainer = styled.div`
    display: flex; /* Mantém os InfoBox lado a lado */
    gap: 20px; /* Espaço entre os InfoBox */
  `;

  const InfoBox1 = styled.div`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    text-align: left;
    position: relative;
    padding: 30px;
    margin: 20px 0 0;
    border-radius: 10px;
    width: 100%;
    max-width: 500px;
    height: 250px;
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

    .imc {
      font-size: 60px;
      text-align: center;
    }

    .imc-label {
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
      margin-left: 5px; /* Espaço entre os labels, se necessário */
    }
  `;

  const InfoBox2 = styled.div`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
    text-align: left;
    padding: 30px;
    border-radius: 10px;
    width: 90%;
    max-width: 250px;
    height: 250px;
    margin: 20px 0 0;
    color: var(--color-1);
    position: relative;
    background-color: var(--color-8);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    .content {
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      min-height: 100%;
      z-index: 1;
    }

    .consumo-label {
      font-size: 18px;
      text-align: center;
    }

    .consumo-agua {
      font-size: 60px;
      text-align: center;
    }
  `;

  const FoodBoxContainer = styled.div`
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

  const FoodBox = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-radius: 15px; 
  color: var(--color-1);
  background-color: var(--color-3);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
  const MealInfo = styled.div`
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    margin-bottom: 10px;
  `;

  const MealKcal = styled.h2`
    font-family: "Roboto", sans-serif;
    font-size: 35px;
    margin-top: 5px;
  `;

  const MealTypeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const MealType = styled.h3`
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: bold;

    @media (min-width: 768px) {
      font-size: 27px;
    }
  `;

  const MealTimeContainer = styled.div`
    display: inline-block;
    align-items: center;
    margin-top: 5px;
  `;

  const Mealtime = styled.h2`
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    margin-left: 10px;
  `;

  const MealItems = styled.div`
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    margin-top: 15px;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  `;

  const ChartContainer = styled.div`
    margin-left: 40px;
  `;

  return {
    InfoBox1,
    InfoBox2,
    FoodBox,
    MealInfo,
    MealKcal,
    MealType,
    Mealtime,
    MealItems,
    FoodBoxContainer,
    MealTimeContainer,
    MealTypeContainer,
    InfoBoxContainer,
    ChartContainer,
  };
};

export default styled_Home;