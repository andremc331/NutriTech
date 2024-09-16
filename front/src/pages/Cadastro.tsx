import React, { useState } from 'react';
import './Cadastro.css';
import logo from '../logo/logo.nutritech.png.png';

const Cadastro: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextPage = () => {
    // Redireciona para outra página
    window.location.href = "./Infopessoal.tsx"; // Substitua pelo caminho da sua página
  };

  return (
    <div>
      {/* Imagem do logo no topo da página */}
      <div className="image-container">
        <img src={logo} alt="Logo Nutritech" />
      </div>

      {/* Contêiner do formulário */}
      <div className="form-container">
        <h2>Informações de Usuário</h2>
        <form onSubmit={(e) => e.preventDefault()}>
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
          <button type="button" onClick={handleNextPage}>
            →
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;