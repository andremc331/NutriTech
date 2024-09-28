// import "../CSS/BemVindo.css";
import logo from "../logo/logo.nutritech.png.png";
import styled from 'styled-components';
import backgroud from '../logo/logofundo.png';

interface BemVindoProps {
  setPage: React.Dispatch<
    React.SetStateAction<
      | "bem-vindo"
      | "cadastro"
      | "info-pessoal"
      | "definicao-metas"
      | "termosdeuso"
      | "home"
      | "cardapio"
      | "historico"
      | "metas"
      | "configuracoes"
    >
  >;
}

export default function BemVindo({ setPage }: BemVindoProps) {
  return (
    <Background>
      <ContainerRight>
        <Logo src={logo} alt="Logo NutriTech" />
        <JustifiedText>
          O MELHOR
          <br />
          PARA A SUA
          <br />
          SAÚDE!
        </JustifiedText>
        <Button1 onClick={() => setPage("cadastro")}>COMECE JÁ</Button1>
      </ContainerRight>

      <ContainerLeft>
        <h1>Login</h1>
        <EmailLabel>Email:</EmailLabel>
        <Input type="email" className="email-input" />
        <PasswordLabel>Senha:</PasswordLabel>
        <Input type="password" className="password-input" />
        <MainContent>
          <Button2 onClick={() => setPage("home")}>&gt;</Button2>
        </MainContent>
      </ContainerLeft>
    </Background>
  );
}
const Background = styled.div`
   background-image: url(${backgroud});;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 352px;
  height: auto;
  margin: 80px;
`;

const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  padding: 70px;
  border-radius: 20px;
  background-color: #7E5EC2;
  margin-left: -650px;
`;

const EmailLabel = styled.label`
  font-size: 1rem;
  color: #fff;
  margin-top: 70px;
  display: block;
`;

const PasswordLabel = styled.label`
  font-size: 1rem;
  color: #fff;
  margin-top: 10px;
  display: block;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 5px;
  width: 92%;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Button1 = styled.button`
  background-color: #21D29D;
  border: none;
  color: black;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
  width: 200px;

  &:hover {
    background-color: #21a1f1;
  }
`;

const Button2 = styled.button`
  font-size: 80px;
  width: 90px;
  height: 70px;
  background-color: #21D29D;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1CA885;
  }
`;

const JustifiedText = styled.h2`
  text-align: justify;
  color: black;
  margin: 0;
`;
