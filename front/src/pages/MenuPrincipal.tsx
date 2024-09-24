import React from 'react';
import '../CSS/MenuPrincipal.css';

interface MenuPrincipalProps {
    setPage: (page: 'bem-vindo' | 'cadastro' | 'info-pessoal' | 'definicao-metas' | 'termosdeuso' | 'menu-principal') => void;
}

const MenuPrincipal: React.FC<MenuPrincipalProps> = ({ setPage }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="item">
                    <div className="text">Início</div>
                    <div className="icon">🏠</div>
                </div>
                <div className="item">
                    <div className="text">Buscar</div>
                    <div className="icon">🔍</div>
                </div>
                <div className="item">
                    <div className="text">Configurações</div>
                    <div className="icon">⚙️</div>
                </div>
            </div>
        </div>
    );
};

export default MenuPrincipal;