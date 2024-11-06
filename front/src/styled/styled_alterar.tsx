import styled from "styled-components";

const styled_alterar = () => {
  
  const FormContainer = styled.div`
    width: 400px;
    margin: 20px auto;
    padding: 30px;
    margin-top: 10px;
    border: 2px solid #7d4cdb;
    border-radius: 20px;
    background-color: var(--color-2);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

    @media (max-width: 1024px) {
      width: 600px;
    }

    @media (max-width: 768px) {
      width: 90%;
    }

    @media (max-width: 480px) {
      width: 100%; /* O formulário ocupa toda a largura em dispositivos muito pequenos */
    }
  `;

  const Title = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 40px;
    text-transform: uppercase;
    text-align: center;
    color: white;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 32px; /* Reduz o tamanho da fonte em telas menores */
    }

    @media (max-width: 480px) {
      font-size: 24px; /* Reduz ainda mais em telas muito pequenas */
    }
  `;

  const FormGroup = styled.div`
    margin-bottom: 15px;
  `;

  const Label = styled.label`
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    text-transform: uppercase;
    display: block;
    margin-bottom: 5px;
    color: var(--color-1);
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  `;

  const Input = styled.input`
    width: 100%;
    height: 40px;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #000000;
    border-radius: 10px;

    &.email {
      width: 92%;
    }

    @media (max-width: 768px) {
      width: 100%; /* Ajusta a largura dos inputs em telas menores */
    }
  `;

  const SaveButton = styled.button`
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
    margin-top: 10px;
    margin-bottom: 10px;

    &:hover {
      background-color: #1ca885;
    }

    @media (max-width: 768px) {
      width: 90px;
      height: 50px;
      font-size: 22px;
    }

    @media (max-width: 480px) {
      width: 80px;
      height: 40px;
      font-size: 18px;
    }
  `;

  const CancelButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: var(--color-13);
    font-weight: bold;
    font-size: 18px;
    color: var(--color-1);
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 10px;
    margin-bottom: 10px;

    &:hover {
      background-color: #de3163;
    }
  `;

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      justify-content: center; /* Centraliza os botões em telas menores */
    }
  `;

  const NavigationButton = styled.button`
    width: 150px;
    height: 50px;
    background-color: #21d29d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #1ca885;
    }

    @media (max-width: 768px) {
      width: 120px;
      height: 45px;
      font-size: 14px;
    }

    @media (max-width: 480px) {
      width: 100px;
      height: 40px;
      font-size: 12px;
    }
  `;

  return {
    FormContainer,
    Title,
    FormGroup,
    Label,
    Input,
    SaveButton,
    CancelButton,
    ButtonContainer,
    NavigationButton,
  };
};

export default styled_alterar;