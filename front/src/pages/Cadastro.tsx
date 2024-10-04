import React, { useState } from "react";
import logo from "../logo/logo.nutritech.png";
import styled_Cadastro from "../styled/styled_Cadastro";
import { useNavigate } from 'react-router-dom'; // Importar useNavigate


const{Body,ImageContainer,FormContainer,Title,FormGroup,Label,Input,Button,ButtonContainer}=styled_Cadastro()

const Cadastro: React.FC = () => {
  const navigate = useNavigate(); // Inicializa o hook useNavigate

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
        "As senhas não estão batendo, por favor, verifique se as senhas são correspondentes"
      );
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Verificar()) {
      console.log("Cadastro do usuário:", formData);
      navigate("/info-pessoal"); // Redireciona para a página info-pessoal
    }
  };

  return (
    <Body>
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
    </Body>
  );
};

export default Cadastro;