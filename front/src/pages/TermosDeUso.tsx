import React, { useState } from "react";
import '../CSS/TermosDeUso.css';
import logo from '../logo/logo.nutritech.png.png';

interface TermosDeUsoProps {
  setPage: React.Dispatch<React.SetStateAction<'bem-vindo' | 'cadastro' | 'info-pessoal' | 'definicao-metas' | 'termosdeuso' | 'menu-principal'>>;
}

const TermosDeUso: React.FC<TermosDeUsoProps> = ({ setPage }) => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

  const handleNextClick = () => {
    if (agreedToTerms && agreedToPrivacy) {
      setPage('menu-principal'); // Alterar para a próxima página desejada
    } else {
      alert('Você precisa concordar com ambos os termos antes de prosseguir.');
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
              Aqui você insere os termos de uso da empresa. Estes termos descrevem as regras e 
              regulamentos para o uso do site e serviços oferecidos pela empresa NutriTech. 
              Ao usar este site, você concorda em cumprir e ser regido por esses termos. <br />
              <br />
              1. Introdução <br />
              Estes Termos de Uso regem o uso de nosso site e serviços. <br />
              <br />
              2. Licença de uso <br />
              Você pode visualizar, baixar e imprimir páginas do site para seu uso pessoal, sujeito às restrições estabelecidas nestes termos. <br />
              <br />
              3. Uso aceitável <br />
              Você não deve usar nosso site de nenhuma maneira que cause, ou possa causar, danos ao site ou prejudicar a disponibilidade ou acessibilidade do site... <br />
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