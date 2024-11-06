import styled from "styled-components";

const styled_Infop = () => {
  const Body = styled.div`
    font-family: "Roboto", sans-serif;
    display: flex; /* Alterado para flex */
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
      padding: 10px;
    }
  `;

  const Container = styled.div`
    background-color: var(--color-2);
    width: 800px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1024px) {
      width: 600px;
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 15px;
    }
  `;

  const Title = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 40px;
    text-transform: uppercase;
    color: var(--color-1);
    text-align: center;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  `;

  const FormRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    & > div {
      flex: 1;
      margin-right: 10px;

      &:last-child {
        margin-right: 0; /* Remove a margem do último item */
      }
    }

    @media (max-width: 768px) {
      flex-direction: column; /* Empilha os elementos em telas menores */
    }
  `;

  const Label = styled.label`
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    text-transform: uppercase;
    color: var(--color-1);
    font-size: 14px;
    margin-bottom: 5px;
    display: grid;
  `;

  const Input = styled.input`
    height: 40px;
    width: 90%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid;
    border-radius: 10px;

    @media (max-width: 768px) {
      width: 100%; /* O input ocupará toda a largura em telas menores */
    }
  `;

  const Select = styled.select`
    width: auto; /* Deixa o select ocupar apenas o necessário */
    height: 40px;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    transition: border-color 0.3s;

    &:focus {
      border-color: #4caf50;
      outline: none;
    }
  `;

  const Gender = styled.div`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 15px;
    text-transform: uppercase;
    display: flex;
    gap: 10px;
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

  const GenderContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    color: var(--color-1);
    gap: 10px; /* Espaço entre os gêneros e o select */
  `;

  const GenderLabel = styled.label`
    color: var(--color-1);
    margin-right: 5px; /* Espaço entre o label e o input */
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
    FormRow,
    Gender,
    GenderContainer,
    GenderInput,
    GenderLabel,
    Input,
    Select,
    Label,
    Logo,
    LogoImage,
    Title,
  };
};

export default styled_Infop;