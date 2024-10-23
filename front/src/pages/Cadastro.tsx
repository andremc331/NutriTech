import React, { useState } from "react";
import logo from "../logo/logo.nutritech.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUser } from '../hooks'; // Adjust the path as needed
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
const Cadastro: React.FC = () => {
  const navigate = useNavigate();
  const { create, error, setError } = useUser(); // Custom hook for user management
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });
  const [userData, setUserData] = useState<UserData>({
    username: "",
    dob: "",
    height: null,
    weight: null,
    gender: "masculino",
    nivelAtividade: "moderado",
    idade: null,
  });
  const [calorias, setCalorias] = useState<number | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (["height", "weight", "idade"].includes(name)) {
      const numberValue = value ? parseFloat(value) : null;
      if (numberValue === null || isNaN(numberValue) || numberValue < 0) {
        window.alert("Informe um valor válido e positivo");
      } else {
        setUserData((prevUserData) => ({
          ...prevUserData,
          [name]: numberValue,
        }));
      }
    } else if (["nome", "email", "senha", "confirmarSenha"].includes(name)) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setUserData({
        ...userData,
        [name]: value,
      });
    }
  };
  const Verificar = (): boolean => {
    if (formData.senha !== formData.confirmarSenha) {
      window.alert("As senhas não estão batendo. Por favor, verifique se as senhas são correspondentes.");
      return false;
    }
    return true;
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Verificar()) {
      try {
        await create(formData.nome, formData.email, formData.senha);
        navigate("/info-pessoal"); // Redirect after successful registration
      } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        alert("Ocorreu um erro ao cadastrar o usuário. Tente novamente.");
      }
    }
    if (userData.weight && userData.height && userData.idade) {
      const caloriasCalculadas = calcularCalorias(
        userData.weight,
        userData.height,
        userData.idade,
        userData.gender,
        userData.nivelAtividade
      );
      setCalorias(caloriasCalculadas);
      navigate("/definicao-metas");
    } else {
      window.alert("Por favor, preencha todos os dados necessários para calcular as calorias.");
    }
  };
  return (
    <Body>
      <Logo>
        <LogoImage src={logo} alt="Nutritech logo" />
      </Logo>
      <Container>
        <Title>Informações de Usuário</Title>
        {error && <ErrorMessage>{error.error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <Label htmlFor="nome">Nome:</Label>
          <Input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Label htmlFor="senha">Senha:</Label>
          <Input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
          <Label htmlFor="confirmarSenha">Confirmar Senha:</Label>
          <Input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            value={formData.confirmarSenha}
            onChange={handleChange}
            required
          />
          <Label htmlFor="username">Nome de usuário:</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
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
export default Cadastro;
// Styled components dentro do mesmo arquivo
const ImageContainer = styled.div`
  text-align: center;
  max-width: 100%;
  margin: 10px auto;
  img {
    width: 230px;
    height: auto;
    @media (max-width: 768px) {
      width: 200px;
    }
    @media (max-width: 480px) {
      width: 150px;
    }
  }
`;
const FormContainer = styled.div`
  width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #7d4cdb;
  border-radius: 10px;
  background-color: #7d4cdb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 1024px) {
    width: 600px;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
// const Title = styled.h2`
//   text-align: left;
//   color: white;
//   font-family: Anton, sans-serif;
//   font-size: 40px;
//   font-weight: bold;
//   @media (max-width: 768px) {
//     font-size: 32px;
//   }
//   @media (max-width: 480px) {
//     font-size: 24px;
//   }
// `;
const ErrorMessage = styled.div`
  color: red; /* Estilo para mensagens de erro */
  margin-bottom: 15px;
`;
const FormGroup = styled.div`
  margin-bottom: 15px;
`;
// const Label = styled.label`
//   display: block;
//   margin-bottom: 5px;
//   color: white;
//   font-size: 18px;
//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
//   @media (max-width: 480px) {
//     font-size: 14px;
//   }
// `;
// const Input = styled.input`
//   width: 50%;
//   padding: 8px;
//   box-sizing: border-box;
//   border: 1px solid #000000;
//   border-radius: 4px;
//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;
const FormGroupRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   @media (max-width: 768px) {
//     justify-content: center;
//   }
// `;
const NavigationButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: #21d29d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #1ca885;
  }
  @media (max-width: 768px) {
    width: 120px;
    height: 45px;
    font-size: 14px;
  }
  @media (max-width: 480px) {
    width: 100px;
    height: 40px;
    font-size: 12px;
  }
`;
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