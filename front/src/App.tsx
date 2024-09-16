import React, { useState } from 'react';
import Cadastro from './pages/Cadastro';  // Ajuste o caminho conforme necessário
import InfoPessoal from './pages/Infopessoal';  // Ajuste o caminho conforme necessário
import DefinicaoMetas from './pages/DefinicaoMetas';
import TermosDeUso from './pages/TermosDeUso';
import MenuPrincipal from './pages/MenuPrincipal';

const BemVindoPage: React.FC = () => <div>Página de Boas-Vindas</div>;

const App: React.FC = () => {
  // Estado para controlar a página atual
  const [page, setPage] = useState<'bem-vindo' | 'cadastro' | 'info-pessoal' | 'definicao-metas' | 'termosdeuso' | 'menu-principal'>('info-pessoal');

  return (
    <div>
      {/* Navegação */}
      <nav>
      <button className="navigation-button" onClick={() => setPage('bem-vindo')}>Bem-Vindo</button>
      <button className="navigation-button" onClick={() => setPage('cadastro')}>Cadastro</button>
      <button className="navigation-button" onClick={() => setPage('info-pessoal')}>Info Pessoal</button>
      <button className="navigation-button" onClick={() => setPage('definicao-metas')}>Definição de Metas</button>
      <button className="navigation-button" onClick={() => setPage('termosdeuso')}>Termos de Uso</button>
      <button className="navigation-button" onClick={() => setPage('menu-principal')}>Menu Principal</button>
      </nav>
      {/* Conteúdo Condicional */}
      {page === 'bem-vindo' && <BemVindoPage />}
      {page === 'cadastro' && <Cadastro />}
      {page === 'info-pessoal' && <InfoPessoal />}
      {page === 'definicao-metas' && <DefinicaoMetas />}
      {page === 'termosdeuso' && <TermosDeUso />}
      {page === 'menu-principal' && <MenuPrincipal />}
    </div>
  );
};

export default App;
///

/*
const BemVindoPage: React.FC = () => <div>BemVindo Page</div>;
const CadastroPage: React.FC = () => <div><Cadastro></Cadastro> Page</div>;
const InfoPessoalPage: React.FC = () => <div><InfoPessoal></InfoPessoal> Page</div>;*/