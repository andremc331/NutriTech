import React, { useState } from 'react';
import './Cadastro.css';

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para próxima página ou envio de dados
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="form-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Próxima Página</button>
      </form>
    </div>
  );
};

export default Cadastro;