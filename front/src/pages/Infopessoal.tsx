import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import logo from "../logo/logo.nutritech.png";
import styled_Infop from "../styled/styled_Infop";
import { Icon } from "../styled/styled_Main";
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";

const {
  Body,
  BackButton,
  Button,
  ButtonContainer,
  Container,
  FormRow,
  GenderContainer,
  GenderInput,
  GenderLabel,
  Input,
  Select,
  Label,
  Logo,
  LogoImage,
  Title,
} = styled_Infop();

type Sexo = "masculino" | "feminino" | "prefiro não informar"; // Atualização aqui
type NivelAtividade =
  | "sedentario"
  | "leve"
  | "moderado"
  | "intenso"
  | "muito_intenso";

interface UserData {
  username: string;
  dob: string;
  height: number | null;
  weight: number | null;
  gender: Sexo; // Atualização aqui
  nivelAtividade: NivelAtividade;
  idade: number | null;
}

const Infopessoal: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    username: "",
    dob: "",
    height: null,
    weight: null,
    gender: "masculino", // Valor padrão
    nivelAtividade: "moderado", // Valor padrão
    idade: null, // Adicione a idade
  });

  const [calorias, setCalorias] = useState<number | null>(null); // Adicione o estado para calorias
  const navigate = useNavigate(); // Inicializar o hook useNavigate

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "height" || name === "weight" || name === "idade") {
      const numberValue = value ? parseFloat(value) : null;
      if (numberValue === null || isNaN(numberValue) || numberValue < 0) {
        window.alert("Informe um valor válido e positivo");
      } else {
        setUserData((prevUserData) => ({
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

  const calcularCalorias = (
    peso: number,
    altura: number,
    idade: number,
    sexo: Sexo,
    nivelAtividade: NivelAtividade
  ): number => {
    // Calcula a Taxa de Metabolismo Basal (TMB)
    let tmb: number;
    if (sexo === "masculino") {
      tmb = 10 * peso + 6.25 * altura - 5 * idade + 5;
    } else {
      tmb = 10 * peso + 6.25 * altura - 5 * idade - 161;
    }

    // Fatores de atividade física
    const fatoresAtividade: Record<NivelAtividade, number> = {
      sedentario: 1.2,
      leve: 1.375,
      moderado: 1.55,
      intenso: 1.725,
      muito_intenso: 1.9,
    };

    // Calcula as calorias diárias necessárias
    const caloriasNecessarias = tmb * fatoresAtividade[nivelAtividade];

    return caloriasNecessarias;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let conversao = {
      ...userData,
      height: userData.height?.toFixed(2),
      weight: userData.weight?.toFixed(2),
    };
    console.log("dados de usuario", conversao);

    // Chame a função calcularCalorias aqui
    if (userData.weight && userData.height && userData.idade) {
      const caloriasCalculadas = calcularCalorias(
        userData.weight,
        userData.height,
        userData.idade,
        userData.gender,
        userData.nivelAtividade
      );
      setCalorias(caloriasCalculadas);
    } else {
      window.alert(
        "Por favor, preencha todos os dados necessários para calcular as calorias."
      );
    }

    // Muda para a página de definição de metas
    navigate("/definicao-metas");
  };

  return (
    <>
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
            <FormRow>
              <div>
                <Label htmlFor="dob">Data de nascimento:</Label>
                <Input
                  type="date"
                  id="dob"
                  name="dob"
                  value={userData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="idade">Idade:</Label>
                <Input
                  type="text"
                  id="idade"
                  name="idade"
                  value={userData.idade !== null ? userData.idade : ""}
                  onChange={handleChange}
                  placeholder="Informe sua idade"
                  required
                />
              </div>
            </FormRow>

            <FormRow>
              <div>
                <Label htmlFor="height">Altura (cm):</Label>
                <Input
                  type="text"
                  id="height"
                  name="height"
                  value={userData.height !== null ? userData.height : ""}
                  onChange={handleChange}
                  placeholder="EX: 180"
                  required
                />
              </div>
              <div>
                <Label htmlFor="weight">Peso (kg):</Label>
                <Input
                  type="text"
                  id="weight"
                  name="weight"
                  value={userData.weight !== null ? userData.weight : ""}
                  onChange={handleChange}
                  placeholder="EX: 55"
                  required
                />
              </div>
            </FormRow>

            <GenderContainer>
              <GenderLabel>Gênero:</GenderLabel>
              <GenderInput
                type="radio"
                name="gender"
                value="masculino"
                checked={userData.gender === "masculino"}
                onChange={handleChange}
                required
              />{" "}
              Masculino
              <GenderInput
                type="radio"
                name="gender"
                value="feminino"
                checked={userData.gender === "feminino"}
                onChange={handleChange}
                required
              />{" "}
              Feminino
              <GenderInput
                type="radio"
                name="gender"
                value="prefiro não informar"
                checked={userData.gender === "prefiro não informar"}
                onChange={handleChange}
                required
              />{" "}
              Prefiro não informar
            </GenderContainer>

            <Label htmlFor="nivelAtividade">Nível de Atividade:</Label>
            <Select
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
            </Select>

            <ButtonContainer>
            <BackButton type="button" onClick={() => navigate("/Bem-Vindo")}>
              <Icon>
                <IonIcon icon={Icons.chevronBack} />
              </Icon>
              Voltar
            </BackButton>
            <Button type="submit">Avançar
              <Icon>
                <IonIcon icon={Icons.chevronForward} />
              </Icon>
            </Button>
            </ButtonContainer>
          </form>

          {calorias !== null && (
            <p>Calorias diárias recomendadas: {calorias.toFixed(2)}</p>
          )}
        </Container>
      </Body>
    </>
  );
};

export default Infopessoal;
