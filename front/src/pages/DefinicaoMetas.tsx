import React, { useRef } from "react";
import '../CSS/DefinicaoMetas.css';
import logo from '../logo/logo.nutritech.png.png';

interface DefinicaoMetasProps {
  setPage: React.Dispatch<React.SetStateAction<"bem-vindo" | "cadastro" | "info-pessoal" | "definicao-metas" | "termosdeuso" | "menu-principal">>;
}

const DefinicaoMetas: React.FC<DefinicaoMetasProps> = ({ setPage }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="image-container">
        <img src={logo} alt="Logo Nutritech" />
      </div>
    <div>
      {/* Formulário envolvido pelo contêiner roxo */}
      <div className="form-container">
        <h2>Definição de Metas</h2>
        <form>
          <button type="button" className="nav-button left" onClick={scrollLeft}>
            &lt;
          </button>

          <div className="carousel" ref={carouselRef}>
            <div className="card">
              <h3>Ganhar ou Perder Peso</h3>
              <div className="button-group">
                <button type="button" className="minus-button">-</button>
                <button type="button" className="plus-button">+</button>
              </div>
            </div>
            <div className="card">
              <h3>Monitore seu problema alimentar</h3>
            </div>
            <div className="card">
              <h3>Auxiliar</h3>
            </div>
            <div className="card">
              <h3>Quadrado Indefinido 1</h3>
            </div>
            <div className="card">
              <h3>Quadrado Indefinido 2</h3>
            </div>
            <div className="card">
              <h3>Quadrado Indefinido 3</h3>
            </div>
          </div>

          <button type="button" className="nav-button right" onClick={scrollRight}>
            &gt;
          </button>
        </form>
      </div>

      {/* Botão de avançar fora do formulário roxo */}
      <div className="button-container">
        <button type="button" className="next-button" onClick={() => setPage('termosdeuso')}>
          →
        </button>
      </div>
    </div>
    </div>
  );
};

export default DefinicaoMetas;