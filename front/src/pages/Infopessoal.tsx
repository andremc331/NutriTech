import { useState } from "react";
// import "../CSS/Infopessoal.css";
import logo from "../logo/logo.nutritech.png";
import styled_Infop from "../styled/styled_Infop";
const{
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
  LogoImage , 
  Title
}=styled_Infop()

interface UserData {
  username: string;
  dob: string;
  height: number | null;
  weight: number | null;
  gender: string;
}

interface InfopessoalProps {
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

const Infopessoal: React.FC<InfopessoalProps> = ({ setPage }) => {
  const [userData, setUserData] = useState<UserData>({
    username: "",
    dob: "",
    height: null,
    weight: null,
    gender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "height" || name === "weight") {
      const numberValue = value ? parseFloat(value) : null;
      if (numberValue === null || isNaN(numberValue) || numberValue < 0) {
        window.alert("Informe um valor válido e positivo");
      } else {
        setUserData(prevUserData => ({
          ...prevUserData,
          [name]: numberValue,
        }));
      }
    } else {
      setUserData({
        ...userData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let conversao={
          ...userData,
          height: userData.height?.toFixed(2),
          weight: userData.weight?.toFixed(2),
        }
        console.log('dados de usuario',conversao)

    // Muda para a página de definição de metas
    setPage("definicao-metas");
  };

  return (
    <>
    <Logo>
      <LogoImage src={logo} alt="Nutritech logo" />
    </Logo>
      <Container>
        <Title>Informações de Usuário</Title>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="username">Nome de usuário:</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
            aria-describedby="usernameHelp"
          />

          <Label htmlFor="dob">Data de nascimento:</Label>
          <Input
            type="date"
            id="dob"
            name="dob"
            value={userData.dob}
            onChange={handleChange}
            required
          />

          <Label htmlFor="height">Altura (cm):</Label>
          <Input
            type="number"
            id="height"
            name="height"
            value={userData.height !== null ? userData.height : ""}
            onChange={handleChange}
            placeholder="EX: 1,80 (com uso da vírgula)"
            required
          />

          <Label htmlFor="weight">Peso (kg):</Label>
          <Input
            type="number"
            id="weight"
            name="weight"
            value={userData.weight !== null ? userData.weight : ""}
            onChange={handleChange}
            placeholder="EX: 55,80 (com uso da vírgula)"
            required
          />

          <Gender>
            <Label>Gênero:</Label>
            <GenderLabel>
              Masculino
            </GenderLabel>
              <GenderInput
                type="radio"
                name="gender"
                value="Masculino"
                checked={userData.gender === "Masculino"}
                onChange={handleChange}
                required
              />
            <GenderLabel>
              Feminino
            </GenderLabel>
              <GenderInput
                type="radio"
                name="gender"
                value="Feminino"
                checked={userData.gender === "Feminino"}
                onChange={handleChange}
                required
              />
            <GenderLabel>
              Prefiro não informar
            </GenderLabel>
              <GenderInput
                type="radio"
                name="gender"
                value="Prefiro não informar"
                checked={userData.gender === "Prefiro não informar"}
                onChange={handleChange}
                required
              />
          </Gender>

          <ButtonContainer>
            <BackButton type="button" onClick={() => setPage("cadastro")}>
              Voltar
            </BackButton>
            <Button type="submit">Próximo</Button>
          </ButtonContainer>
        </form>
      </Container>

    </>
  );
};
export default Infopessoal;
