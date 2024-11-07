import styled from "styled-components";

const styled_Definicao_M = () => {
  const ImageContainer = styled.div`
    text-align: center;
    max-width: 100%;
    margin: 30px auto;
  `;

  const LogoImage = styled.img`
    width: 200px;
    height: auto;
    margin-top: 10px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      width: 200px; /* Reduz o tamanho da logo em telas menores */
    }
  `;

  const FormContainer = styled.div`
    width: 100%;
    max-width: 90%;
    height: 480px;
    margin: 20px auto;
    padding: 30px;
    border: 2px solid #7d4cdb;
    border-radius: 15px;
    background-color: var(--color-2);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

    @media (max-width: 900px) {
      padding: 15px;
    }

    @media (max-width: 600px) {
      padding: 10px;
      flex-wrap: wrap; /* Permite que os cards quebrem em telas menores */
    }
  `;

  const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin-top: 30px;

    @media (max-width: 900px) {
      justify-content: center;
      flex-wrap: wrap;
    }
  `;

  const Title = styled.h2`
    font-family: "Roboto", sans-serif;
    font-size: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    color: var(--color-1);

    @media (max-width: 600px) {
      font-size: 2rem;
    }
  `;
  const Text = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    text-align: center;
  `;

  const CardLoseWeight = styled.div`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 15px;
    text-transform: uppercase;
    flex: 1;
    min-width: 300px;
    margin: 10px;
    background-color: var(--color-8);
    color: var(--color-1);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover {
      background-color: var(--color-7);
      transform: scale(1.5); /* Expande levemente o card */
    }

    &.selected {
      background-color: var(--color-7);
      transform: scale(1.05); /* Aplicando hover enquanto estiver selecionado */
    }

    @media (max-width: 600px) {
      flex: 0 0 90%; /* Em telas pequenas, ocupa a largura total */
    }
  `;
  const CardGainWeight = styled.div`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 15px;
    text-transform: uppercase;
    flex: 1;
    min-width: 300px;
    margin: 10px;
    background-color: var(--color-8);
    color: var(--color-1);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover {
      background-color: var(--color-7);
      transform: scale(1.5); /* Expande levemente o card */
    }

    &.selected {
      background-color: var(--color-7);
      transform: scale(1.05); /* Aplicando hover enquanto estiver selecionado */
    }

    @media (max-width: 600px) {
      flex: 0 0 90%; /* Em telas pequenas, ocupa a largura total */
    }
  `;
  const CardMuscle = styled.div`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 15px;
    text-transform: uppercase;
    flex: 1;
    min-width: 300px;
    margin: 10px;
    background-color: var(--color-8);
    color: var(--color-1);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover {
      background-color: var(--color-7);
      transform: scale(1.5); /* Expande levemente o card */
    }

    &.selected {
      background-color: var(--color-7);
      transform: scale(1.05); /* Aplicando hover enquanto estiver selecionado */
    }

    @media (max-width: 600px) {
      flex: 0 0 90%; /* Em telas pequenas, ocupa a largura total */
    }
  `;
  const CardDiet = styled.div`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 15px;
    text-transform: uppercase;
    flex: 1; /
    min-width: 300px; 
    margin: 10px; 
    background-color: var(--color-8);
    color: var(--color-1);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column; /* O título permanece acima */
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, background-color 0.3s ease;


    &:hover {
      background-color: var(--color-7);
      transform: scale(1.50); /* Expande levemente o card */

    }

    &.selected {
      background-color: var(--color-7);
      transform: scale(1.05); /* Aplicando hover enquanto estiver selecionado */
    }

    @media (max-width: 600px) {
      flex: 0 0 90%; /* Em telas pequenas, ocupa a largura total */
    }
  `;

  const CardTitle = styled.h3`
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;

    @media (max-width: 600px) {
      font-size: 16px;
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
    margin-top: 20px;

    &:hover {
      background-color: #1ca885;
      transform: scale(1.5); /* Expande levemente o card */
    }

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 12px;
    }
  `;

  const BackButton = styled(Button)`
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
    margin-top: 20px;

    &:hover {
      background-color: #1ca885;
    }
  `;

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  `;

  const PopupMessage = styled.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.5s ease-in-out, fadeOut 0.5s ease-in-out 2.5s;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  `;

  return {
    ImageContainer,
    LogoImage,
    FormContainer,
    Title,
    Text,
    CardContainer,
    CardLoseWeight,
    CardGainWeight,
    CardMuscle,
    CardDiet,
    CardTitle,
    Button,
    BackButton,
    ButtonContainer,
    PopupMessage,
  };
};

export default styled_Definicao_M;
