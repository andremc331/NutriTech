import styled from "styled-components";

const styled_Home = () => {
  const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    margin-top: 60px;
    margin-left: 90px;

    @media (min-width: 768px) {
      margin-top: 80px;
      margin-left: 120px;
    }
  `;

  const InfoBoxContainer = styled.div`
    display: flex; /* Mantém os InfoBox lado a lado */
    gap: 20px; /* Espaço entre os InfoBox */
  `;

  const InfoBox = styled.div`
    background-color: mediumspringgreen;
    padding: 15px;
    border-radius: 10px;
    color: white;
    text-align: left;
    width: 100vw;
    height: 250px;
    font-size: 18px;
    font-weight: bold;
    align-self: center;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    img {
      position: absolute;
      top: 0;
      left: 200px;
      width: calc(100% - 200px);
      height: 100%;
      border-radius: 10px; /* Arredonda os cantos da imagem */
      object-fit: cover; /* Cobre o contêiner sem distorcer */
      z-index: 0; /* Coloca a imagem atrás do conteúdo */
    }

    .content {
      position: relative; /* Para que o conteúdo fique acima da imagem */
      z-index: 1; /* Coloca o conteúdo acima da imagem */
      display: flex;
      flex-direction: column;
      justify-content: center; /* Centraliza verticalmente */
      gap: 10px;
      min-height: 100%;
    }

    .pair {
      display: flex;
      gap: 10px;
      align-items: center;
      height: 40px;
    }

    &.blue-box {
      background-color: mediumslateblue;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start; /* Alinha itens no topo */
      flex-direction: column; /* Alinha verticalmente */
      font-size: 22px;
    }

    @media (min-width: 768px) {
      width: 70vw;
      font-size: 22px;
    }

    @media (min-width: 1024px) {
      width: 900px;
      font-size: 24px;
    }
  `;

  const WhiteBox = styled.div`
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    color: black;
    width: 90vw;
    height: 40vh;
    margin-top: 20px;
    align-self: center;
    flex-direction: row,
    0 4px 8px rgba(0, 0, 0, 0.2);

    @media (min-width: 768px) {
      width: 60vw;
      height: 50vh;
    }

    @media (min-width: 1024px) {
      width: 60vw;
      height: 60vh;
    }
  `;

  const MealInfo = styled.div`
    margin-bottom: 20px;
  `;

  const MealType = styled.h3`
    font-size: 22px;

    @media (min-width: 768px) {
      font-size: 27px;
    }
  `;

  const MealTime = styled.p`
    font-family: Aldrich;
  `;

  const MealItems = styled.div`
    font-family: Aldrich;
    font-size: 18px;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  `;

  const EditButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    bottom: 140px;
    right: 250px;

    svg {
      fill: #000;
    }
  `;

  return {
    HomeContainer,
    InfoBox,
    WhiteBox,
    MealInfo,
    MealType,
    MealTime,
    MealItems,
    EditButton,
    InfoBoxContainer,
  };
};

export default styled_Home;