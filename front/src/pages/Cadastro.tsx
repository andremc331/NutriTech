import React, { useState } from 'react';
import styles from './Cadastro.module.css'; // Atualizado para usar CSS Modules

interface FormData {
  nome: string;
  email: string;
  senha: string;
}

const Cadastro: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    senha: '',
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: string[] = [];
    if (!formData.nome) newErrors.push('Nome é obrigatório.');
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.push('Email inválido.');
    if (!formData.senha) newErrors.push('Senha é obrigatória.');

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Aqui você pode adicionar a lógica para enviar os dados do formulário
      console.log('Dados do formulário enviados:', formData);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite seu nome"
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu email"
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            placeholder="Digite sua senha"
          />
        </div>
        {errors.length > 0 && (
          <ul className={styles['error-list']}>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
