import React from 'react';

interface ConfiguracoesProps {
    setPage: (page: 'bem-vindo' | 'cadastro' | 'info-pessoal' | 'definicao-metas' | 'termosdeuso' | 'home' | 'cardapio' | 'historico' | 'metas' | 'configuracoes') => void;
}

const Configuracoes: React.FC<ConfiguracoesProps> = ({ setPage }) => {
    return (
        <div>
            <h1>Página de Configurações</h1>
            {/* Conteúdo da página */}
        </div>
    );
};

export default Configuracoes;