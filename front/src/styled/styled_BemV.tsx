import styled from "styled-components";
import logofundo from '../assets/logofundo.png';

const styled_BemV = () => {
  const Background = styled.div`
  display: flex;
  height: 100vh;
  background-image: url(${logofundo});
  background-size: cover;
  background-position: center;
  flex-direction: row; /* Alinhamento horizontal dos containers */
  @media (max-width: 768px) {
    flex-direction: column; /* Mudança para coluna em telas menores */
  }
`;

const ContainerRightTitle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 60px;
  text-transform: uppercase;
  padding: 5px;
  border-radius: 10px;
  margin-bottom: 5%;
  margin-right: 20%;

  @media (max-width: 1024px) {
    margin-right: 10%;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    width: 100%;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Logo = styled.img`
  width: 250px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 25px;
  text-transform: uppercase;
  width: 20%;
  height: 500px;
  padding: 20px;
  background: var(--color-7);
  color: var(--color-1);
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  margin-top: 10%;
  margin-left: 25%; /* Ajustar margem para telas pequenas */
  font-family: 'Playpen Sans', sans-serif; /* Mudança para a fonte correta */

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1200px) {
    width: 25%;
    margin-left: 20px; /* Reduzir margem à esquerda */
  }

  @media (max-width: 900px) {
    width: 40%;
    margin-left: 0;
    margin-top: 100px;
  }

  @media (max-width: 600px) {
    width: 80%;
    margin-top: 50px;
  }

  @media (max-width: 400px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const EmailLabel = styled.label`
  margin-top: 20px;
  font-weight: bold;
  font-size: 18px;
  color: var(--color-1);
`;

const PasswordLabel = styled.label`
  margin-top: 20px;
  font-weight: bold;
  font-size: 18px;
  color: var(--color-1);
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  width: 80%; /* Ocupa toda a largura disponível */

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }
`;

const MainContent = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
`;

const Button1 = styled.button`
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
    background-color: #1CA885;
  }
`;

const Button2 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-5);
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1CA885;
  }
`;

const JustifiedText = styled.p`
  font-size: 60px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  color: var(--color-6);
  margin: 0;
`;

  return {
    Background,
    Logo,
    ContainerRightTitle,
    ContainerLeft,
    EmailLabel,
    PasswordLabel,
    Input,
    MainContent,
    Button1,
    Button2,
    JustifiedText,
  };
};
export default styled_BemV;