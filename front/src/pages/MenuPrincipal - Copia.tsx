import React from 'react';
import '../CSS/MenuPrincipal.css';

interface MenuPrincipalProps {
    setPage: (page: 'bem-vindo' | 'cadastro' | 'info-pessoal' | 'definicao-metas' | 'termosdeuso' | 'menu-principal') => void;
}

const MenuPrincipal: React.FC<MenuPrincipalProps> = ({ setPage }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <button className="item">
                    <div className="text">Início</div>
                    <div className="icon">🏠</div>
                </button>               
                <button className="item">
                    <div className="text">Histórico</div>
                    <div className="icon">🔍</div>
                </button>
                <button className="item">
                    <div className="text">Cardápio</div>
                    <div className="icon">⚙️</div>
                </button>
                <button className="item">
                    <div className="text">Gráficos</div>
                    <div className="icon">⚙️</div>
                </button>
                <button className="item">
                    <div className="text">Perfil</div>
                    <div className="icon">⚙️</div>
                </button>
            </div>
        </div>
    );
};

export default MenuPrincipal;