import React, { useState } from "react";
import "../CSS/TermosDeUso.css";
import logo from "../logo/logo.nutritech.png.png";

interface TermosDeUsoProps {
  setPage: React.Dispatch<
    React.SetStateAction<
      | "bem-vindo"
      | "cadastro"
      | "info-pessoal"
      | "definicao-metas"
      | "termosdeuso"
      | "menu-principal"
    >
  >;
}

const TermosDeUso: React.FC<TermosDeUsoProps> = ({ setPage }) => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

  const handleNextClick = () => {
    if (agreedToTerms && agreedToPrivacy) {
      setPage("menu-principal"); // Alterar para a próxima página desejada
    } else {
      alert("Você precisa concordar com ambos os termos antes de prosseguir.");
    }
  };

  return (
    <div>
      <div className="image-container">
        <img src={logo} alt="Logo NutriTech" />
      </div>
      <div className="form-container">
        <h2>Termos de Uso</h2>
        <form>
          <div className="terms-container">
            {/* Conteúdo dos Termos de Uso */}
            <p>
              Este documento estabelece os Termos de Uso que regulam a
              utilização do site e dos serviços oferecidos pela NutriTech. Ao
              acessar ou utilizar este site, você declara que leu, compreendeu e
              concorda em se submeter a estes termos. Caso não concorde com
              qualquer parte deste documento, solicitamos que você não utilize
              nosso site. <br />
              <br />
              <strong>1. Introdução</strong> <br />
              Os presentes Termos de Uso aplicam-se a todas as interações
              realizadas neste site e a quaisquer serviços associados. <br />
              <br />
              <strong>2. Licença de Uso</strong> <br />A NutriTech concede ao
              usuário uma licença limitada, não exclusiva e intransferível para
              visualizar, baixar e imprimir páginas do site, exclusivamente para
              fins pessoais e não comerciais, desde que respeitadas as
              restrições aqui estabelecidas. Esta licença não confere ao usuário
              qualquer direito sobre os conteúdos, marcas ou outros direitos de
              propriedade intelectual disponíveis no site. <br />
              <br />
              <strong>3. Uso Aceitável</strong> <br />
              O usuário compromete-se a não utilizar o site de maneira que possa
              causar danos, interromper ou prejudicar a disponibilidade e
              acessibilidade do site, ou de qualquer forma comprometer a
              segurança da NutriTech ou de seus usuários. É vedado o uso do site
              para fins ilícitos ou não autorizados, bem como a realização de
              atividades que possam resultar em responsabilidade civil ou
              criminal. <br />
              <br />
              <strong>4. Compromisso com Informações Pessoais</strong> <br />
              O usuário concorda em fornecer informações pessoais precisas,
              completas e atualizadas, conforme solicitado, para fins de
              avaliação e recomendações médicas. As informações fornecidas serão
              utilizadas exclusivamente para fins pessoais e médicos,
              respeitando a privacidade e a confidencialidade dos dados. O
              usuário é responsável por manter a veracidade e a atualização das
              informações fornecidas, isentando a NutriTech de qualquer
              responsabilidade em decorrência de informações incorretas ou
              desatualizadas. <br />
              <br />
              <strong>5. Modificações e Atualizações</strong> <br />A NutriTech
              reserva-se o direito de modificar, atualizar ou retirar quaisquer
              partes destes Termos de Uso a qualquer momento, sem aviso prévio.
              É responsabilidade do usuário revisar periodicamente os Termos de
              Uso para se manter informado sobre quaisquer alterações. A
              continuidade do uso do site após a publicação de modificações
              constitui a aceitação dos novos termos. <br />
              <br />
              {/* Adicione o restante dos termos aqui */}
            </p>
          </div>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={() => setAgreedToTerms(!agreedToTerms)}
              />
              Eu concordo com os Termos de Uso
            </label>
          </div>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={agreedToPrivacy}
                onChange={() => setAgreedToPrivacy(!agreedToPrivacy)}
              />
              Eu concordo com a Política de Privacidade
            </label>
          </div>
        </form>
      </div>
      {/* Botão de avançar */}
      <div className="button-container">
        <button className="next-button" onClick={handleNextClick}>
          →
        </button>
      </div>
    </div>
  );
};

export default TermosDeUso;
