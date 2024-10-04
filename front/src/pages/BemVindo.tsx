// import "../CSS/BemVindo.css";
import logo from "../logo/logo.nutritech.png";
import styled_BemV from "../styled/styled_BemV";
import { useNavigate } from 'react-router-dom'; // Importa o useNavigate

const {
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
} = styled_BemV();

export default function BemVindo() {
  const navigate = useNavigate(); // Inicializa o hook useNavigate

  return (
    <Background>
      <ContainerRightTitle>
        <Logo src={logo} alt="Logo NutriTech" />
        <JustifiedText>
          O MELHOR
          <br />
          PARA A SUA
          <br />
          SAÚDE!
        </JustifiedText>
        {/* Navegação para a página de cadastro */}
        <Button1 onClick={() => navigate('/cadastro')}>COMECE JÁ</Button1>
      </ContainerRightTitle>

      <ContainerLeft>
        <h1>Login</h1>
        <EmailLabel>Email:</EmailLabel>
        <Input type="email" className="email-input" />
        <PasswordLabel>Senha:</PasswordLabel>
        <Input type="password" className="password-input" />
        <MainContent>
          {/* Navegação para a página home */}
          <Button2 onClick={() => navigate('/home')}>&gt;</Button2>
        </MainContent>
      </ContainerLeft>
    </Background>
  );
}