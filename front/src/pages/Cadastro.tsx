import React, { useState } from "react";
import "../CSS/Cadastro.css";
import logo from "../logo/logo.nutritech.png.png";

interface CadastroProps {
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

const Cadastro: React.FC<CadastroProps> = ({ setPage }) => {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const Verificar = (): boolean => {
    if (formData.senha !== formData.confirmarSenha) {
      window.alert(
        "As senhas não estão batendo, porfavor verifique se as senhas são correspondentes"
      );
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Verificar()) {
      setPage("info-pessoal");
    }
  };

  return (
    <div>
      <div className="image-container">
        <img src={logo} alt="Logo Nutritech" />
      </div>
      <div className="form-container">
        <h2>Informações de Usuário</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="sobrenome">Sobrenome:</label>
              <input
                type="text"
                id="sobrenome"
                name="sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmarSenha">Confirmar Senha:</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-container">
            <button type="submit">Avançar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
