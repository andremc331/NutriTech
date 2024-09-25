import { useState } from "react";
import "../CSS/Infopessoal.css";
import logo from "../logo/logo.nutritech.png.png";

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
      if (numberValue === 0) {
        window.alert("informe um valor valido");
      } else {
        setUserData({
          ...userData,
          [name]: numberValue,
        });
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
    console.log("Dados do usuário:", userData);

    // Muda para a página de definição de metas
    setPage("definicao-metas");
  };

  return (
    <>
      <div className="logo">
        <img src={logo} alt="Nutritech logo" />
      </div>
      <div className="container">
        <h2>Informações de usuário</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Nome de usuário:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />

          <label htmlFor="dob">Data de nascimento:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={userData.dob}
            onChange={handleChange}
            required
          />

          <label htmlFor="height">Altura (cm):</label>
          <input
            type="number"
            id="height"
            name="height"
            value={userData.height !== null ? userData.height : ""}
            onChange={handleChange}
            required
          />

          <label htmlFor="weight">Peso (kg):</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={userData.weight !== null ? userData.weight : ""}
            onChange={handleChange}
            required
          />

          <div className="gender">
            <label>Gênero:</label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Masculino"
                checked={userData.gender === "Masculino"}
                onChange={handleChange}
                required
              />
              Masculino
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Feminino"
                checked={userData.gender === "Feminino"}
                onChange={handleChange}
                required
              />
              Feminino
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Prefiro não informar"
                checked={userData.gender === "Prefiro não informar"}
                onChange={handleChange}
                required
              />
              Prefiro não informar
            </label>
          </div>

          <div className="buttons">
            <button
              type="button"
              className="back"
              onClick={() => setPage("cadastro")}
            >
              Voltar
            </button>
            <button>Próximo</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Infopessoal;
