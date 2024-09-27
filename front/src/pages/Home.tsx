import React from "react";
import "../CSS/Home.css";

interface HomeProps {
  setPage: (
    page:
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
  ) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="container-menu">
      {/* Barra de navegação superior */}
      <div className="barra-navegacao">
        <h1>Nome de usuário</h1>
        <div className="nav-links">
          <button className="nav-button">Link 1</button>
          <button className="nav-button">Link 2</button>
        </div>
      </div>

      {/* Barra lateral */}
      <div className="sidebar">
        <div className="sidebar-content">
          <button className="item" onClick={() => setPage("home")}>
            <div className="text">Home</div>
            <div className="icon">🏠</div>
          </button>
          <button className="item" onClick={() => setPage("cardapio")}>
            <div className="text">Cardápio</div>
            <div className="icon">⚙️</div>
          </button>
          <button className="item" onClick={() => setPage("historico")}>
            <div className="text">Histórico</div>
            <div className="icon">🔍</div>
          </button>
          <button className="item" onClick={() => setPage("metas")}>
            <div className="text">Progresso</div>
            <div className="icon">⚙️</div>
          </button>
          <button className="item" onClick={() => setPage("configuracoes")}>
            <div className="text">Configurações</div>
            <div className="icon">⚙️</div>
          </button>
        </div>
      </div>

      {/* Conteúdo principal com os três contêineres */}
      <div className="home-container">
        {/* Retângulo Vermelho */}
        <div className="info-box red-box">
          <p>IMC: Grau de IMC</p>
          <p>Objetivo: Hipertrofia</p>
          <p>Kcal indicada por dia: 435 kcal</p> 
        </div>

        {/* Retângulo Azul */}
        <div className="info-box blue-box">
          <p>Litros de água por dia: 3L</p>
        </div>

        {/* Retângulo Branco */}
        <div className="white-box">
          <div className="meal-info">
            <span className="meal-type">Almoço</span>
            <span className="meal-time">Horário: 12:20</span>
            <span className="meal-items">
              <p>150g de frango grelhado</p> <p>1 colher de arroz integral</p>
              <p>25g de brócolis</p> <p>salada verde com azeite de oliva</p>
            </span>
          </div>
          <button className="edit-button">
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6.99996H6C4.93913 6.99996 3.92172 7.42139 3.17157 8.17154C2.42143 8.92168 2 9.9391 2 11V39C2 40.0608 2.42143 41.0782 3.17157 41.8284C3.92172 42.5785 4.93913 43 6 43H34C35.0609 43 36.0783 42.5785 36.8284 41.8284C37.5786 41.0782 38 40.0608 38 39V25M35 3.99996C35.7956 3.20432 36.8748 2.75732 38 2.75732C39.1252 2.75732 40.2044 3.20432 41 3.99996C41.7956 4.79561 42.2426 5.87475 42.2426 6.99996C42.2426 8.12518 41.7956 9.20432 41 9.99996L22 29L14 31L16 23L35 3.99996Z"
                stroke="#1E1E1E"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
