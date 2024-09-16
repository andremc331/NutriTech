import React, { useState } from 'react';
import Cadastro from './pages/Cadastro';  // Ajuste o caminho conforme necessário
import InfoPessoal from './pages/Infopessoal';  // Ajuste o caminho conforme necessário

const BemVindoPage: React.FC = () => <div>Página de Boas-Vindas</div>;

const App: React.FC = () => {
  // Estado para controlar a página atual
  const [page, setPage] = useState<'bem-vindo' | 'cadastro' | 'info-pessoal'>('info-pessoal');

  return (
    <div>
      {/* Navegação */}
      <nav>
      <button className="navigation-button" onClick={() => setPage('bem-vindo')}>Bem-Vindo</button>
      <button className="navigation-button" onClick={() => setPage('cadastro')}>Cadastro</button>
      <button className="navigation-button" onClick={() => setPage('info-pessoal')}>Info Pessoal</button>
      </nav>
      {/* Conteúdo Condicional */}
      {page === 'bem-vindo' && <BemVindoPage />}
      {page === 'cadastro' && <Cadastro />}
      {page === 'info-pessoal' && <InfoPessoal />}
    </div>
  );
};

export default App;


/*
const BemVindoPage: React.FC = () => <div>BemVindo Page</div>;
const CadastroPage: React.FC = () => <div><Cadastro></Cadastro> Page</div>;
const InfoPessoalPage: React.FC = () => <div><InfoPessoal></InfoPessoal> Page</div>;*/