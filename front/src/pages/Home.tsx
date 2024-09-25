import React from 'react';
import '../CSS/Home.css';

interface MenuPrincipalProps {
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
                    <button className="item" onClick={() => setPage("home")}>
                        <div className="text">Home</div>
                        <div className="icon">🏠</div>
                    </button>
                    <button className="item" onClick={() => setPage("historico")}>
                        <div className="text">Histórico</div>
                        <div className="icon">🔍</div>
                    </button>
                    <button className="item" onClick={() => setPage("cardapio")}>
                        <div className="text">Cardápio</div>
                        <div className="icon">⚙️</div>
                    </button>
                    <button className="item" onClick={() => setPage("metas")}>
                        <div className="text">Metas</div>
                        <div className="icon">⚙️</div>
                    </button>
                    <button className="item" onClick={() => setPage("configuracoes")}>
                        <div className="text">Configurações</div>
                        <div className="icon">⚙️</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuPrincipal;
