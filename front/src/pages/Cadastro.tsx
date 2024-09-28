import React, { useState } from "react";
// import "../CSS/Cadastro.css";
import logo from "../logo/logo.nutritech.png.png";
import styled from 'styled-components';

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
      e.preventDefault();
      console.log("Cadastro do usuário:", formData);
      setPage("info-pessoal");
    }
  };

  return (
    <div>
      <ImageContainer>
        <img src={logo} alt="Logo Nutritech" />
      </ImageContainer>
      <FormContainer>
        <Title>Informações de Usuário</Title>
        <form onSubmit={handleSubmit}>
          <div className="form-group-row">
            <FormGroup>
              <Label htmlFor="nome">Nome:</Label>
              <Input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="sobrenome">Sobrenome:</Label>
              <Input
                type="text"
                id="sobrenome"
                name="sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </div>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="senha">Senha:</Label>
            <Input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirmarSenha">Confirmar Senha:</Label>
            <Input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <ButtonContainer>
            <Button type="submit">Avançar</Button>
          </ButtonContainer>
        </form>
      </FormContainer>
    </div>
  );
};

// Estilo do body
export const Body = styled.body`
  background-color: #7E5EC2;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
`;

// Container para a imagem
const ImageContainer = styled.div`
  text-align: center;
  max-width: 100%;
  margin: 50px auto;

  img {
    width: 300px; /* Ajuste conforme necessário */
    height: auto; /* Mantém a proporção da imagem */
  }
`;

// Container para o formulário
const FormContainer = styled.div`
  width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #7d4cdb;
  border-radius: 10px;
  background-color: #7d4cdb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

// Estilo do título
export const Title = styled.h2`
  text-align: left;
  color: white;
  font-family: Anton;
  font-size: 50px;
  font-weight: bold;
`;

// Grupo do formulário
export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

// Estilo do label
export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

// Estilo do input
export const Input = styled.input`
  width: 50%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #000000;
  border-radius: 4px;

  &.email {
    width: 92%;
  }
`;

// Grupo do formulário em linha
export const FormGroupRow = styled.div`
  display: flex;
  justify-content: space-between;

  .form-group {
    flex: 1; /* Faz com que os campos ocupem o mesmo espaço */
    margin-right: -270px;
  }
`;

// Estilo do botão principal
export const Button = styled.button`
  width: 105px; /* Define a largura e altura iguais para criar um quadrado */
  height: 60px;
  background-color: #21D29D;
  color: white;
  border: none;
  border-radius: 10px; /* Remova o arredondamento para criar bordas retas */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px; /* Tamanho da fonte para o texto ou ícone */
  text-align: center;

  &:hover {
    background-color: #1CA885; /* Cor de fundo ao passar o mouse */
  }
`;

// Container para botões
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* Alinha o conteúdo à direita */
`;

// Estilo padrão dos botões de navegação
export const NavigationButton = styled.button`
  width: 150px; /* Largura dos botões */
  height: 50px; /* Altura dos botões */
  background-color: #21D29D; /* Cor de fundo */
  color: white; /* Cor do texto */
  border: none; /* Remove as bordas */
  border-radius: 5px; /* Arredonda os cantos */
  cursor: pointer; /* Aponta que o elemento é clicável */
  margin: 5px; /* Espaçamento entre os botões */
  font-size: 16px; /* Tamanho da fonte */
  transition: background-color 0.3s ease; /* Transição suave ao passar o mouse */

  &:hover {
    background-color: #1CA885; /* Cor de fundo ao passar o mouse */
  }
`;

export default Cadastro;

