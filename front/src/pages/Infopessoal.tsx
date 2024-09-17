import { useState } from "react";
// import './Info.css'
import logo from '../logo/logo.nutritech.png.png';

// Definindo o tipo para os dados do usuário
interface UserData {
    username: string;
    dob: string;
    height: number;
    weight: number;
    gender: string;
  }
   
  const Infopessoal: React.FC = () => {
    const [userData, setUserData] = useState<UserData>({
      username: '',
      dob: '',
      height: 0,
      weight: 0,
      gender: '',
    });
   
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUserData({
        ...userData,
        [name]: value,
      });
    };
   
      const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
        console.log('Dados do usuário:', userData);
    

      // Aqui você pode enviar os dados para um servidor ou fazer outra ação
    };
   
    return (
      <><div className="logo">
        <img src={logo} alt="Nutritech logo" />
      </div><div className="container">
          <h2>Informações de usuário</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Nome de usuário:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={userData.username}
              onChange={handleChange} />

            <label htmlFor="dob">Data de nascimento:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={userData.dob}
              onChange={handleChange} />

            <label htmlFor="height">Altura (cm):</label>
            <input
              type="number"
              id="height"
              name="height"
              value={userData.height}
              onChange={handleChange} />

            <label htmlFor="weight">Peso (kg):</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={userData.weight}
              onChange={handleChange} />

            <div className="gender">
              <label>Gênero:</label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Masculino"
                  checked={userData.gender === 'Masculino'}
                  onChange={handleChange} />
                Masculino
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Feminino"
                  checked={userData.gender === 'Feminino'}
                  onChange={handleChange} />
                Feminino
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Prefiro não informar"
                  checked={userData.gender === 'Prefiro não informar'}
                  onChange={handleChange} />
                Prefiro não informar
              </label>
            </div>

            <div className="buttons">
              <button type="button" className="back">
                Voltar
              </button>
              <button type="submit">Próximo</button>
            </div>
          </form>
        </div></>
    );
  };
   
  export default Infopessoal;
