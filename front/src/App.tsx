import React, { useState } from 'react';
import Cadastro from './pages/Cadastro';  
import InfoPessoal from './pages/Infopessoal';  
import DefinicaoMetas from './pages/DefinicaoMetas';
import TermosDeUso from './pages/TermosDeUso';
import MenuPrincipal from './pages/MenuPrincipal';

const BemVindoPage: React.FC<{ setPage: React.Dispatch<React.SetStateAction<'bem-vindo' | 'cadastro' | 'info-pessoal' | 'definicao-metas' | 'termosdeuso' | 'menu-principal'>> }> = ({ setPage }) => {
  return (
    <div>
      <h1>Página de Boas-Vindas</h1>
      <button onClick={() => setPage('cadastro')}>Cadastrar</button>
    </div>
  );
};

const App: React.FC = () => {
  // Estado para controlar a página atual
  const [page, setPage] = useState<'bem-vindo' | 'cadastro' | 'info-pessoal' | 'definicao-metas' | 'termosdeuso' | 'menu-principal'>('bem-vindo');

  return (
    <div>
      {/* Navegação Condicional */}
      {page === 'bem-vindo' && <BemVindoPage setPage={setPage} />}
      {page === 'cadastro' && <Cadastro setPage={setPage} />}
      {page === 'info-pessoal' && <InfoPessoal />}
      {page === 'definicao-metas' && <DefinicaoMetas />}
      {page === 'termosdeuso' && <TermosDeUso />}
      {page === 'menu-principal' && <MenuPrincipal setPage={setPage}/>}
    </div>
  );
};

export default App;
///

/*
const BemVindoPage: React.FC = () => <div>BemVindo Page</div>;
const CadastroPage: React.FC = () => <div><Cadastro></Cadastro> Page</div>;
const InfoPessoalPage: React.FC = () => <div><InfoPessoal></InfoPessoal> Page</div>;*/