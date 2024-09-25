import React, { useState } from 'react';
import BemVindo from './pages/BemVindo';
import Cadastro from './pages/Cadastro';
import InfoPessoal from './pages/Infopessoal';
import DefinicaoMetas from './pages/DefinicaoMetas';
import TermosDeUso from './pages/TermosDeUso';
import Home from './pages/Home';
import Cardapio from './pages/Cardapio';
import Historico from './pages/Historico';
import Metas from './pages/Metas';
import Configuracoes from './pages/Configuracoes';

const App: React.FC = () => {
    const [page, setPage] = useState<'bem-vindo' | 'cadastro' | 'info-pessoal' | 'definicao-metas' | 'termosdeuso' | 'home' | 'cardapio' | 'historico' | 'metas' | 'configuracoes'>('bem-vindo');

    return (
        <div>
            {page === 'bem-vindo' && <BemVindo setPage={setPage} />}
            {page === 'cadastro' && <Cadastro setPage={setPage} />}
            {page === 'info-pessoal' && <InfoPessoal setPage={setPage} />}
            {page === 'definicao-metas' && <DefinicaoMetas setPage={setPage} />}
            {page === 'termosdeuso' && <TermosDeUso setPage={setPage} />}
            {page === 'home' && <Home setPage={setPage} />}
            {page === 'cardapio' && <Cardapio setPage={setPage} />}
            {page === 'historico' && <Historico setPage={setPage} />}
            {page === 'metas' && <Metas setPage={setPage} />}
            {page === 'configuracoes' && <Configuracoes setPage={setPage} />}
        </div>
    );
};

export default App;