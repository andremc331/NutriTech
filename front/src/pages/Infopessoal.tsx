import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.nutritech.png";
import styled_Infop from "../styled/styled_Infop";
import profile from "../services/Profile"; // Importe o serviço de profile

const {
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
} = styled_Infop();

type Sexo = "male" | "female";
type NivelAtividade = "sedentario" | "leve" | "moderado" | "intenso" | "muito_intenso";

interface UserData {
  username: string;
  dob: string;
  height: number | null;
  weight: number | null;
  gender: Sexo;
  nivelAtividade: NivelAtividade;
  idade: number | null;
}

const Infopessoal: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    username: "",
    dob: "",
    height: null,
    weight: null,
    gender: "male",
    nivelAtividade: "moderado",
    idade: null,
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: name === "height" || name === "weight" || name === "idade" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { dob, weight, gender } = userData;
  
    if (weight && dob && gender) {
      console.log("Enviando dados:", { dob, weight, gender }); // Log dos dados
      try {
        const response = await profile.save(dob, weight.toString(), gender );
        console.log("Resposta do servidor:", response); // Log da resposta do servidor
        
        if (response && "error" in response) {
          alert("Erro ao enviar os dados para o servidor");
        } else {
          navigate("/definicao-metas");
        }
      } catch (error) {
        console.error("Erro ao salvar o perfil:", error);
      }
    } else {
      alert("Por favor, preencha todos os dados necessários.");
    }
  };

  return (
    <Body>
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

          <Label htmlFor="idade">Idade:</Label>
          <Input
            type="number"
            id="idade"
            name="idade"
            value={userData.idade !== null ? userData.idade : ""}
            onChange={handleChange}
            placeholder="Informe sua idade"
            required
          />

          <Label htmlFor="height">Altura (cm):</Label>
          <Input
            type="number"
            id="height"
            name="height"
            value={userData.height !== null ? userData.height : ""}
            onChange={handleChange}
            placeholder="EX: 180"
            required
          />

          <Label htmlFor="weight">Peso (kg):</Label>
          <Input
            type="number"
            id="weight"
            name="weight"
            value={userData.weight !== null ? userData.weight : ""}
            onChange={handleChange}
            placeholder="EX: 55"
            required
          />

          <Gender>
            <Label>Gênero:</Label>
            <GenderLabel>Masculino</GenderLabel>
            <GenderInput
              type="radio"
              name="gender"
              value="male"
              checked={userData.gender === "male"}
              onChange={handleChange}
              required
            />
            <GenderLabel>Feminino</GenderLabel>
            <GenderInput
              type="radio"
              name="gender"
              value="female"
              checked={userData.gender === "female"}
              onChange={handleChange}
              required
            />
            {/* <GenderLabel>Prefiro não informar</GenderLabel>
            <GenderInput
              type="radio"
              name="gender"
              value="prefiro não informar"
              checked={userData.gender === "prefiro não informar"}
              onChange={handleChange}
              required
            /> */}
          </Gender>

          <Label htmlFor="nivelAtividade">Nível de Atividade:</Label>
          <select
            name="nivelAtividade"
            value={userData.nivelAtividade}
            onChange={handleChange}
            required
          >
            <option value="sedentario">Sedentário</option>
            <option value="leve">Leve</option>
            <option value="moderado">Moderado</option>
            <option value="intenso">Intenso</option>
            <option value="muito_intenso">Muito Intenso</option>
          </select>
          <ButtonContainer>
            <BackButton type="button" onClick={() => navigate("/cadastro")}>Voltar</BackButton>
            <Button type="submit">Próximo</Button>
          </ButtonContainer>
        </form>
      </Container>
    </Body>
  );
};

export default Infopessoal; 