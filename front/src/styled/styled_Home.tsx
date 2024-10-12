import styled from "styled-components";

const styled_Home = () => {
  const ImageContainer = styled.div`
    position: absolute;
    bottom: 5px;
    right: 20px;
    z-index: 999;

    img {
      max-width: 100px;
      height: auto;

      @media (min-width: 768px) {
        max-width: 150px; /* Ajuste para telas maiores */
      }
    }
  `;

  const HomeBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #f0f0f0;
    min-height: 100vh;
  `;

  const ContainerMenu = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const BarraNavegacao = styled.div`
    width: 100%;
    height: 60px; /* Altura ajustada para dispositivos móveis */
    background-color: #c9b7e6;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    @media (min-width: 768px) {
      height: 80px; /* Altura maior para telas maiores */
      padding: 0 20px;
    }
  `;

  const Sidebar = styled.div`
    width: 80px; /* Menor largura para dispositivos móveis */
    height: calc(100% - 60px);
    background-color: #714d95;
    color: #ffffff;
    position: fixed;
    top: 60px;
    left: 0;
    transition: width 0.3s;
    overflow: hidden;
    border-bottom-right-radius: 15px;

    &:hover {
      width: 240px;
    }

    @media (min-width: 768px) {
      width: 100px;
      top: 80px;
    }

    @media (min-width: 1024px) {
      &:hover {
        width: 270px;
      }
    }
  `;

  const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    padding: 10px;
  `;

  const Item = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 10px 0;
    padding: 8px;
    position: relative;
    transition: background-color 0.3s;
    border-radius: 5px;
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #947cc7;

      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        width: 5px;
        height: 100%;
        background-color: #21d29d;
      }
    }
  `;

  const Text = styled.div`
    font-size: 16px;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  `;

  const Icon = styled.div`
    font-size: 20px;
    margin-left: 8px;
    margin-right: 15px;

    @media (min-width: 768px) {
      font-size: 24px;
      margin-left: 10px;
      margin-right: 20px;
    }
  `;

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

  const InfoBox = styled.div`
    padding: 15px;
    border-radius: 10px;
    color: white;
    text-align: left;
    width: 90vw;
    font-size: 18px;
    align-self: center;

    &.red-box {
      background-color: #ff0000;
    }

    &.blue-box {
      background-color: #0000ff;
      display: flex;
      justify-content: flex-start;
      align-items: center;
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
    ImageContainer,
    HomeBody,
    ContainerMenu,
    BarraNavegacao,
    Sidebar,
    SidebarContent,
    Item,
    Text,
    Icon,
    HomeContainer,
    InfoBox,
    WhiteBox,
    MealInfo,
    MealType,
    MealTime,
    MealItems,
    EditButton,
  };
};

export default styled_Home;
