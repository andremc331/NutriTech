// import "../CSS/BemVindo.css";
import logo from "../logo/logo.nutritech.png";
import styled_BemV from "../styled/styled_BemV";
const { Background,Logo,ContainerRightTitle,ContainerLeft,EmailLabel,PasswordLabel,Input,MainContent,Button1,Button2,JustifiedText} = styled_BemV()



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
      <ContainerRightTitle>
        <Logo src={logo} alt="Logo NutriTech" />
        <JustifiedText>
          O MELHOR
          <br />
          PARA A SUA
          <br />
          SAÚDE!
        </JustifiedText>
        <Button1 onClick={() => setPage("cadastro")}>COMECE JÁ</Button1>
      </ContainerRightTitle>

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
