import React from 'react';

interface HistoricoProps {
    setPage: (page: 'bem-vindo' | 'cadastro' | 'info-pessoal' | 'definicao-metas' | 'termosdeuso' | 'home' | 'cardapio' | 'historico' | 'metas' | 'configuracoes') => void;
}

const Historico: React.FC<HistoricoProps> = ({ setPage }) => {
    return (
        <div>
            <h1>Página de Histórico</h1>
            {/* Conteúdo da página */}
        </div>
    );
};

export default Historico;