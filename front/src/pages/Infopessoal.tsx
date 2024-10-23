import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import logo from "../logo/logo.nutritech.png";
import styled from "styled-components";
import { useUser } from "../hooks";
import { calculateAge, dateFormat } from "../utils";
import {
  InputDatePicker,
  Select,
  PopupMessage,
  Button,
  Error,
  Input,
} from "../components";

// Tipos para os dados de usuário
// type Sexo = "masculino" | "feminino" | "prefiro não informar";
type NivelAtividade = "sedentario" | "leve" | "moderado" | "intenso" | "muito_intenso";

const Infopessoal: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [height, setHeight] = useState<number | null>(null);
  const [weight, setWeight] = useState("");
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [sex, setSex] = useState("");
  const [nivelAtividade, setNivelAtividade] = useState<NivelAtividade>("moderado");
  const [idade, setIdade] = useState<number | null>(null);
  const [calorias, setCalorias] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [messagePopup, setMessagePopup] = useState("");
  const { profile, saveProfile, deleteProfile, error, setError } = useUser();

  const navigate = useNavigate();

  // Função para buscar os dados do profile
  useEffect(() => {
    if (profile) {
      setBirthDate(new Date(`${profile.birth_date} 00:00:00`));
      setWeight(profile.weight);
      setSex(profile.sex);
      setHeight(profile.height || null);
    } else {
      setBirthDate(null);
      setWeight("");
      setSex("masculino");
      setHeight(null);
    }
  }, [profile, setError]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "height") {
      const numberValue = value ? parseFloat(value) : null;
      setHeight(numberValue);
    } else if (name === "weight") {
      setWeight(value);
    } else if (name === "sex") {
      setSex(value as string);
    } else if (name === "nivelAtividade") {
      setNivelAtividade(value as NivelAtividade);
    }
  };

  const calcularCalorias = (
    peso: number,
    altura: number,
    idade: number,
    sex: string,
    nivelAtividade: NivelAtividade
  ): number => {
    let tmb: number;
    if (sex === "") {
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

  const calculateAge = (dateOfBirth: Date): number => {
    const today = new Date();
    const age = today.getFullYear() - dateOfBirth.getFullYear();
    const month = today.getMonth() - dateOfBirth.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < dateOfBirth.getDate())) {
      return age - 1;
    }
    return age;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação detalhada
    if (!birthDate) {
      setError({ error: "Forneça a data de nascimento" });
    } else if (calculateAge(birthDate) < 1) {
      setError({ error: "É necessário idade mínima de 1 ano" });
    } else if (!weight) {
      setError({ error: "Forneça o peso" });
    } else if (!height) {
      setError({ error: "Forneça a altura" });
    } else if (!idade) {
      setError({ error: "Forneça a idade" });
    } else {
      const caloriasCalculadas = calcularCalorias(
        parseFloat(weight),
        height,
        idade,
        sex,
        nivelAtividade
      );
      setCalorias(caloriasCalculadas);

      const formattedDate = birthDate.toISOString().split('T')[0];
      saveProfile(formattedDate, weight, sex);
      setMessagePopup("Perfil salvo com sucesso");
      setShowPopup(true);
      
      navigate("/definicao-metas");
    }
  };

  const handleDelete = async () => {
    const response = await deleteProfile();
    if (response) {
      setMessagePopup("Perfil excluído com sucesso");
      setShowPopup(true);
    }
  };

  return (
    <Body>
      <Logo>
        <LogoImage src={logo} alt="Nutritech logo" />
      </Logo>
      <Container>
        <Title>Informações de Usuário</Title>
        {error && <Error>{error.error}</Error>}
        {showPopup && (
          <PopupMessage message={messagePopup} setShowPopup={setShowPopup} />
        )}
        <form onSubmit={handleSubmit}>
          <Label htmlFor="username">Nome de usuário:</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <InputDatePicker
            label="Data de nascimento"
            value={birthDate}
            setValue={setBirthDate}
          />

          <Label htmlFor="height">Altura (cm):</Label>
          <Input
            type="number"
            id="height"
            name="height"
            label="Nome de Usuário"
            value={height !== null ? height : ""}
            onChange={handleChange}
            placeholder="EX: 180"
            required
          />

          <Label htmlFor="weight">Peso (kg):</Label>
          <Input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={handleChange}
            required
          />

          <Label htmlFor="gender">Gênero:</Label>
          <Select
            id="gender"
            label="Gênero"
            value={sex}
            setValue={setSex}
            options={[
              { value: "masculino", label: "Masculino" },
              { value: "feminino", label: "Feminino" },
              { value: "prefiro não informar", label: "Prefiro não informar" },
            ]}
          />

          <ButtonContainer>
            <Button label="Salvar" click={handleSubmit} />
            {profile && <Button label="Excluir" click={handleDelete} />}
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

// Estilização mantida de InfoPessoal.tsx
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
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