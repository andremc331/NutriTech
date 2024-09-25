import React from 'react';
import '../CSS/MenuPrincipal.css';

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
}

const MenuPrincipal: React.FC<MenuPrincipalProps> = ({ setPage }) => {
    return (
        <div className="container-menu">
            <div className="barra-navegacao">
                <h1>Nome do usuário</h1>
                <div className="nav-links">
                    <button className="nav-button">Link 1</button>
                    <button className="nav-button">Link 2</button>
                </div>
            </div>
            <div className="sidebar">
                <div className="sidebar-content">
                    <button className="item" onClick={() => setPage("bem-vindo")}>
                        <div className="text">Início</div>
                        <div className="icon">🏠</div>
                    </button>
                    <button className="item" onClick={() => setPage("bem-vindo")}>
                        <div className="text">Histórico</div>
                        <div className="icon">🔍</div>
                    </button>
                    <button className="item" onClick={() => setPage("bem-vindo")}>
                        <div className="text">Cardápio</div>
                        <div className="icon">⚙️</div>
                    </button>
                    <button className="item" onClick={() => setPage("bem-vindo")}>
                        <div className="text">Gráficos</div>
                        <div className="icon">⚙️</div>
                    </button>
                    <button className="item" onClick={() => setPage("bem-vindo")}>
                        <div className="text">Perfil</div>
                        <div className="icon">⚙️</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuPrincipal;
