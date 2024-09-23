import React from 'react';
import '../CSS/MenuPrincipal.css';

interface MenuPrincipalProps {
    setPage: (page: 'bem-vindo' | 'cadastro' | 'info-pessoal' | 'definicao-metas' | 'termosdeuso' | 'menu-principal') => void;
}

const MenuPrincipal: React.FC<MenuPrincipalProps> = ({ setPage }) => {
    return (
        <div className="menu-principal-container">
            <div className="sidebar">
                <nav>
                    <button className="navigation-button" onClick={() => setPage('bem-vindo')}>Bem-Vindo</button>
                    <button className="navigation-button" onClick={() => setPage('cadastro')}>Cadastro</button>
                    <button className="navigation-button" onClick={() => setPage('info-pessoal')}>Info Pessoal</button>
                    <button className="navigation-button" onClick={() => setPage('definicao-metas')}>Definição de Metas</button>
                    <button className="navigation-button" onClick={() => setPage('termosdeuso')}>Termos de Uso</button>
                </nav>
            </div>
            <div className="content">
                <h1>Menu Principal</h1>
                {/* Conteúdo principal da página pode ser inserido aqui */}
            </div>
        </div>
    );
};

export default MenuPrincipal;