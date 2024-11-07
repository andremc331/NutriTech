import styled from "styled-components";

const styled_Cardapio = () => {
  const Title = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 50px;
    text-transform: uppercase;
  `;

  const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 16px;
    text-transform: uppercase;
    background-color: var(--color-2);
    color: var(--color-1);
    border-radius: 8px;
    padding: 30px;
    margin: 10px;
    margin-left: 90px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    width: 50vw;
    overflow: hidden;
  `;

  const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    color: var(--color-1);
  `;

  // Criar os novos componentes Alimentolabel e Quantidadelabel
  const Alimentolabel = styled.label`
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    color: var(--color-1);
  `;

  const Quantidadelabel = styled.label`
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    color: var(--color-1);
  `;

  const Input = styled.input`
    width: 17%;
    height: 30px;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 20px;
    font-size: 14px;
    transition: border-color 0.3s;
    margin-left: 10px;

    &:focus {
      border-color: #4caf50;
      outline: none;
    }
  `;

  const Select = styled.select`
    width: 26%;
    height: 40px;
    margin-left: 10px;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 20px;
    font-size: 14px;
    transition: border-color 0.3s;
    color: #5f5f5f; /* Aqui você define a cor da fonte */

    &:focus {
      border-color: #4caf50;
      outline: none;
    }
  `;

  const ButtonAdd = styled.button`
    background-color: var(--color-5);
    color: var(--color-1);
    border: none;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 95%;
    width: 50px;
    height: 50px;
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

  const Row = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;

    width: 100%; /* Para ocupar a largura total */
    margin-bottom: 10px; /* Espaço entre as linhas */
  `;

  return {
    Title,
    CardBox,
    Label, // Mantido por enquanto, mas pode ser removido após a alteração do código
    Alimentolabel, // Novo componente
    Quantidadelabel, // Novo componente
    Select,
    Input,
    Row,
    Button,
    ButtonAdd,
  };
};

export default styled_Cardapio;
