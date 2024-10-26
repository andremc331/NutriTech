import styled from "styled-components";

const styled_Cadastro = () => {
  // const Body = styled.body`
  //   background-color: #7E5EC2;
  //   overflow: hidden;
  //   width: 100vw;
  //   height: 100vh;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   padding: 20px; /* Ajuste de padding para telas menores */

  //   @media (max-width: 768px) {
  //     padding: 10px; /* Reduz o padding em telas menores */
  //   }
  // `;

  const ImageContainer = styled.div`
    text-align: center;
    max-width: 100%;
    margin: 10px auto;

    img {
      width: 230px; /* Ajuste conforme necessário */
      height: auto;

      @media (max-width: 768px) {
        width: 200px; /* Reduz a imagem em telas menores */
      }

      @media (max-width: 480px) {
        width: 150px; /* Reduz ainda mais para telas muito pequenas */
      }
    }
  `;

  const ErrorMessage = styled.div`
  color: red;
  font-size: 0.9em;
  margin-bottom: 1em;
`;

  const FormContainer = styled.div`
    width: 800px;
    margin: 20px auto;
    padding: 20px;
    border: 2px solid #7d4cdb;
    border-radius: 10px;
    background-color: #7d4cdb;
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
    text-align: left;
    color: white;
    font-family: Anton, sans-serif;
    font-size: 40px;
    font-weight: bold;

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
    display: block;
    margin-bottom: 5px;
    color: white;
    font-size: 18px;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  `;

  const Input = styled.input`
    width: 50%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #000000;
    border-radius: 4px;

    &.email {
      width: 92%;
    }

    @media (max-width: 768px) {
      width: 100%; /* Ajusta a largura dos inputs em telas menores */
    }
  `;

  const FormGroupRow = styled.div`
    display: flex;
    justify-content: space-between;

    .form-group {
      flex: 1;
      margin-right: -270px;

      @media (max-width: 768px) {
        margin-right: 0; /* Remove margens em telas menores */
      }

      @media (max-width: 480px) {
        flex-direction: column; /* Empilha os campos em telas muito pequenas */
      }
    }
  `;

  const Button = styled.button`
    width: 105px;
    height: 60px;
    background-color: #21D29D;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    text-align: center;

    &:hover {
      background-color: #1CA885;
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

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    @media (max-width: 768px) {
      justify-content: center; /* Centraliza os botões em telas menores */
    }
  `;

  const NavigationButton = styled.button`
    width: 150px;
    height: 50px;
    background-color: #21D29D;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #1CA885;
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
    // Body,
    ImageContainer,
    FormContainer,
    Title,
    FormGroup,
    Label,
    Input,
    FormGroupRow,
    Button,
    ButtonContainer,
    NavigationButton,
    ErrorMessage
  };
};

export default styled_Cadastro;