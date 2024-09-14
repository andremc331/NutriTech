import './App.css';
import Cadastro from './pages/Cadastro';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          NutriTech
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      </div>
  );
}*/

import React, { useState } from 'react';

// Componentes das páginas
const HomePage: React.FC = () => <div>Home Page</div>;
const CadastroPage: React.FC = () => <div><Cadastro></Cadastro> Page</div>;

const App: React.FC = () => {
  // Estado para controlar a página atual
  const [page, setPage] = useState<'home' | 'cadastro'>('home');

  return (
    <div>
      {/* Navegação */}
      <nav>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('cadastro')}>Cadastro</button>
      </nav>

      {/* Conteúdo Condicional */}
      {page === 'home' && <HomePage />}
      {page === 'cadastro' && <CadastroPage />}
    </div>
  );
};
//////////////
export default App;