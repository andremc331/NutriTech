import React from "react";
import "../CSS/MenuPrincipal.css";

interface MenuPrincipalProps {
  setPage: (
    page:
      | "bem-vindo"
      | "cadastro"
      | "info-pessoal"
      | "definicao-metas"
      | "termosdeuso"
      | "menu-principal"
  ) => void;
  username: string; // Recebe o nome de usuário como prop
}

const MenuPrincipal: React.FC<MenuPrincipalProps> = ({ setPage, username }) => {
  return (
    <div className="menu-principal-container">
      {/* Barra Lateral */}
      <div className="sidebar">
        <button
          className="navigation-button"
          onClick={() => setPage("bem-vindo")}
        >
          <div className="text">Início</div>
          <div className="icon">🏠</div>
        </button>
        <button
          className="navigation-button"
          onClick={() => setPage("cadastro")}
        >
          <div className="text">Buscar</div>
          <div className="icon">🔍</div>
        </button>
        <button
          className="navigation-button"
          onClick={() => setPage("info-pessoal")}
        >
          <div className="text">Configurações</div>
          <div className="icon">⚙️</div>
        </button>
        <button
          className="navigation-button"
          onClick={() => setPage("definicao-metas")}
        >
          <i className="fas fa-tasks"></i> {/* Ícone de definição de metas */}
        </button>
        <button
          className="navigation-button"
          onClick={() => setPage("termosdeuso")}
        >
          <i className="fas fa-file-contract"></i>{" "}
          {/* Ícone de termos de uso */}
        </button>
      </div>

      {/* Barra Superior */}
      <div className="top-bar">
        <span className="username">Olá, {username}</span>
      </div>

      {/* Conteúdo */}
      <div className="content">
        <h1>Menu Principal</h1>
      </div>
    </div>
  );
};

export default MenuPrincipal;
