import styled from "styled-components";

const styled_Infop = () => {
  const Body = styled.div`
    font-family: Arial, sans-serif;
    /* background: linear-gradient(90deg, #7e5ec2, #c9b7e6, #f3f3f3); */
    display: flex; /* Alterado para flex */
    justify-content: center;
    align-items: center;
    /* width: 100vw; */
    /* height: 100vh; */
    flex-direction: column; /* Alinhar verticalmente */
    /* padding: 20px; */

    @media (max-width: 768px) {
      padding: 10px;
    }
  `;

  const Container = styled.div`
    background-color: #7d4cdb; 
    width: 800px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    display: flex;  /* Flex para ajustar melhor o conteúdo */
    flex-direction: column;
    justify-content: center; /* Centraliza o conteúdo verticalmente */

    @media (max-width: 1024px) {
      width: 600px;
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 15px;
    }
  `;

  const Title = styled.h2`
    color: white;
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  `;

  const Label = styled.label`
    color: white;
    font-size: 14px;
    margin-bottom: 5px;
    display: grid;
  `;

  const Input = styled.input`
    width: 60%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid;
    border-radius: 5px;

    @media (max-width: 768px) {
      width: 100%; /* O input ocupará toda a largura em telas menores */
    }
  `;

  const Gender = styled.div`
    display: flex;
    /* flex-direction: column; */
    gap: 5px;
    text-align: center;
    margin-bottom: 15px;
    margin-top: 10px;

    @media (max-width: 768px) {
      flex-direction: row;
      justify-content: space-around;
      margin-top: 15px;
      right: 5px;
    }
  `;

  const GenderLabel = styled.label`
    color: white;
  `;

  const GenderInput = styled.input`
    margin-right: 8px;
  `;

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
    }
  `;

  const Button = styled.button`
    background-color: #3dc4a7;
    color: white;
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;

    &:hover {
      background-color: #35ac91;
    }

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 12px;
    }
  `;

  const BackButton = styled(Button)`
    background-color: #6c63ff;

    &:hover {
      background-color: #5a51e1;
    }
  `;

  const Logo = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    max-width: 100%;

    @media (max-width: 768px) {
      margin-bottom: 15px;
    }
  `;

  const LogoImage = styled.img`
    width: 230px;
    height: auto;
    margin-top: 10px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      width: 200px; /* Reduz o tamanho da logo em telas menores */
    }
  `;

  return {
    Body,
    BackButton,
    Button,
    ButtonContainer,
    Container,
    Gender,
    GenderInput,
    GenderLabel,
    Input,
    Label,
    Logo,
    LogoImage,
    Title,
  };
};

export default styled_Infop;