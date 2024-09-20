import React, { useRef } from "react";
import '../CSS/DefinicaoMetas.css';
import logo from '../logo/logo.nutritech.png.png';

const DefinicaoMetas: React.FC = () => {
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
    <div className="form-container">
      <h2>Definição de Metas</h2>
      {/* Formulário que envolve os quadrados */}
      <form>
        {/* Botão para rolar à esquerda */}
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
          {/* Quadrados indefinidos */}
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

        {/* Botão para rolar à direita */}
        <button type="button" className="nav-button right" onClick={scrollRight}>
          &gt;
        </button>
      </form>
    </div>
    </div>
  );
};

export default DefinicaoMetas;