import React, { useState } from 'react';
import BemVindo from './pages/BemVindo';
import Cadastro from './pages/Cadastro';
import InfoPessoal from './pages/Infopessoal';
import DefinicaoMetas from './pages/DefinicaoMetas';
import TermosDeUso from './pages/TermosDeUso';
import MenuPrincipal from './pages/MenuPrincipal';

const App: React.FC = () => {
    // Estado para controlar a página atual
    const [page, setPage] = useState<'bem-vindo' | 'cadastro' | 'info-pessoal' | 'definicao-metas' | 'termosdeuso' | 'menu-principal'>('bem-vindo');

    return (
        <div>
            {/* Navegação Condicional */}
            {page === 'bem-vindo' && <BemVindo setPage={setPage} />}
            {page === 'cadastro' && <Cadastro setPage={setPage} />}
            {page === 'info-pessoal' && <InfoPessoal setPage={setPage} />}
            {page === 'definicao-metas' && <DefinicaoMetas />}
            {page === 'termosdeuso' && <TermosDeUso />}
            {page === 'menu-principal' && <MenuPrincipal setPage={setPage} />}
        </div>
    );
};

export default App;
///

/*
const BemVindoPage: React.FC = () => <div>BemVindo Page</div>;
const CadastroPage: React.FC = () => <div><Cadastro></Cadastro> Page</div>;
const InfoPessoalPage: React.FC = () => <div><InfoPessoal></InfoPessoal> Page</div>;*/