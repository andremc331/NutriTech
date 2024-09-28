import React, { useState } from "react";
// import "../CSS/TermosDeUso.css";
import logo from "../logo/logo.nutritech.png.png";
import styled from "styled-components";

interface TermosDeUsoProps {
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

const TermosDeUso: React.FC<TermosDeUsoProps> = ({ setPage }) => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

  const handleNextClick = () => {
    if (agreedToTerms && agreedToPrivacy) {
      setPage("home"); // Alterar para a próxima página desejada
    } else {
      alert("Você precisa concordar com ambos os termos antes de prosseguir.");
    }
  };

  return (
    <>
      <ImageContainer>
        <LogoImage src={logo} alt="Logo NutriTech" />
      </ImageContainer>
      <FormContainer>
        <Title>Termos de Uso</Title>
        <form>
          <TermsContainer>
            <p>
              Este documento estabelece os Termos de Uso que regulam a
              utilização do site e dos serviços oferecidos pela NutriTech. Ao
              acessar ou utilizar este site, você declara que leu, compreendeu e
              concorda em se submeter a estes termos. Caso não concorde com
              qualquer parte deste documento, solicitamos que você não utilize
              nosso site. <br /><br />
              <strong>1. Introdução</strong> <br />
              Os presentes Termos de Uso aplicam-se a todas as interações
              realizadas neste site e a quaisquer serviços associados. <br /><br />
              <strong>2. Licença de Uso</strong> <br />
              A NutriTech concede ao usuário uma licença limitada, não exclusiva e intransferível para
              visualizar, baixar e imprimir páginas do site, exclusivamente para
              fins pessoais e não comerciais, desde que respeitadas as
              restrições aqui estabelecidas. Esta licença não confere ao usuário
              qualquer direito sobre os conteúdos, marcas ou outros direitos de
              propriedade intelectual disponíveis no site. <br /><br />
              <strong>3. Uso Aceitável</strong> <br />
              O usuário compromete-se a não utilizar o site de maneira que possa
              causar danos, interromper ou prejudicar a disponibilidade e
              acessibilidade do site, ou de qualquer forma comprometer a
              segurança da NutriTech ou de seus usuários. É vedado o uso do site
              para fins ilícitos ou não autorizados, bem como a realização de
              atividades que possam resultar em responsabilidade civil ou
              criminal. <br /><br />
              <strong>4. Compromisso com Informações Pessoais</strong> <br />
              O usuário concorda em fornecer informações pessoais precisas,
              completas e atualizadas, conforme solicitado, para fins de
              avaliação e recomendações médicas. As informações fornecidas serão
              utilizadas exclusivamente para fins pessoais e médicos,
              respeitando a privacidade e a confidencialidade dos dados. O
              usuário é responsável por manter a veracidade e a atualização das
              informações fornecidas, isentando a NutriTech de qualquer
              responsabilidade em decorrência de informações incorretas ou
              desatualizadas. <br /><br />
              <strong>5. Modificações e Atualizações</strong> <br />
              A NutriTech reserva-se o direito de modificar, atualizar ou retirar quaisquer
              partes destes Termos de Uso a qualquer momento, sem aviso prévio.
              É responsabilidade do usuário revisar periodicamente os Termos de
              Uso para se manter informado sobre quaisquer alterações. A
              continuidade do uso do site após a publicação de modificações
              constitui a aceitação dos novos termos. <br /><br />
              {/* Adicione o restante dos termos aqui */}
            </p>
          </TermsContainer>
          <CheckboxGroup>
            <label>
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={() => setAgreedToTerms(!agreedToTerms)}
              />
              Eu concordo com os Termos de Uso
            </label>
          </CheckboxGroup>
          <CheckboxGroup>
            <label>
              <input
                type="checkbox"
                checked={agreedToPrivacy}
                onChange={() => setAgreedToPrivacy(!agreedToPrivacy)}
              />
              Eu concordo com a Política de Privacidade
            </label>
          </CheckboxGroup>
        </form>
      </FormContainer>
      <ButtonContainer>
        <NextButton className="next-button" onClick={handleNextClick}>
          →
        </NextButton>
      </ButtonContainer>
    </>
  );
};
export const Body = styled.body`
  background-color: #7E5EC2;
  margin: 0;
  font-family: 'Roboto', Arial, sans-serif;
`;

export const ImageContainer = styled.div`
  text-align: center;
  max-width: 100%;
  margin: 50px auto;
`;

export const LogoImage = styled.img`
  width: 300px;
  height: auto;
`;

export const FormContainer = styled.div`
  width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #7d4cdb;
  border-radius: 10px;
  background-color: #7d4cdb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  text-align: left;
  color: white;
  font-size: 40px;
  font-weight: bold;
`;

export const TermsContainer = styled.div`
  max-height: 200px;
  overflow-y: scroll;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 10px;
  color: black;
  margin-bottom: 20px;
`;

export const CheckboxGroup = styled.div`
  margin-bottom: 20px;
  color: white;
  font-size: 18px;

  input {
    margin-right: 10px;
  }
`;

export const ButtonContainer = styled.div`
  text-align: right;
  margin-right: 30px;
`;

export const NextButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: #21d29d;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 26px;
  cursor: pointer;

  &:hover {
    background-color: #1ca885;
  }
`;

export default TermosDeUso;
