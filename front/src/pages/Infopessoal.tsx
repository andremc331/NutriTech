import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import logo from "../logo/logo.nutritech.png";
import styled from "styled-components";

type Sexo = "masculino" | "feminino" | "prefiro não informar";
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
    gender: "masculino", // Valor padrão
    nivelAtividade: "moderado", // Valor padrão
    idade: null,
  });

  const [calorias, setCalorias] = useState<number | null>(null);
  const navigate = useNavigate();

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
    let tmb: number;
    if (sexo === "masculino") {
      tmb = 10 * peso + 6.25 * altura - 5 * idade + 5;
    } else {
      tmb = 10 * peso + 6.25 * altura - 5 * idade - 161;
    }

    const fatoresAtividade: Record<NivelAtividade, number> = {
      sedentario: 1.2,
      leve: 1.375,
      moderado: 1.55,
      intenso: 1.725,
      muito_intenso: 1.9,
    };

    return tmb * fatoresAtividade[nivelAtividade];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let conversao = {
      ...userData,
      height: userData.height?.toFixed(2),
      weight: userData.weight?.toFixed(2),
    };
    console.log("dados de usuario", conversao);

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

    navigate("/definicao-metas");
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
              value="masculino"
              checked={userData.gender === "masculino"}
              onChange={handleChange}
              required
            />
            <GenderLabel>Feminino</GenderLabel>
            <GenderInput
              type="radio"
              name="gender"
              value="feminino"
              checked={userData.gender === "feminino"}
              onChange={handleChange}
              required
            />
            <GenderLabel>Prefiro não informar</GenderLabel>
            <GenderInput
              type="radio"
              name="gender"
              value="prefiro não informar"
              checked={userData.gender === "prefiro não informar"}
              onChange={handleChange}
              required
            />
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
            <BackButton type="button" onClick={() => navigate("/cadastro")}>
              Voltar
            </BackButton>
            <Button type="submit">Próximo</Button>
          </ButtonContainer>
        </form>

        {calorias !== null && (
          <p>Calorias diárias recomendadas: {calorias.toFixed(2)}</p>
        )}
      </Container>
    </Body>
  );
};

export default Infopessoal;

const Body = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Container = styled.div`
  background-color: #7d4cdb;
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
  color: white;
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Label = styled.label`
  color: white;
  font-size: 14px;
  margin-bottom: 5px;
  display: grid;
`;

const Input = styled.input`
  width: 60%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Gender = styled.div`
  display: flex;
  gap: 5px;
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

const GenderLabel = styled.label`
  color: white;
`;

const GenderInput = styled.input`
  margin-left: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const BackButton = styled(Button)`
  background-color: red;

  &:hover {
    background-color: #c00;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 120px;
  margin-top: 20px;
`;