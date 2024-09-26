import React, { useState } from 'react';
import '../CSS/Cardapio.css';

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

const Cardapio: React.FC<MenuPrincipalProps> = ({ setPage }) => {

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex (expandedIndex === index ? null : index); // Alterna a expansão
    };

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
            <div className="central-content">
                {['Café da manhã', 'Lanche da manhã', 'Almoço', 'Lanche da tarde', 'Jantar', 'Ceia', 'Pré-treino', 'Pós-treino'].map((item, index) => (
                    <div key={index} className="white-box" onClick={() => toggleExpand(index)}>
                        <div className="item-container">
                            <span>{item}</span>
                            <span className="simbolo-mais">+</span>
                        </div>
                        <div className={`expanded-content ${expandedIndex === index ? 'expanded' : ''}`}>
                            {expandedIndex === index && <p>Conteúdo expandido para {item}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cardapio;
