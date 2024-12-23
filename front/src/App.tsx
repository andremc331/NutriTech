import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import BemVindo from './pages/BemVindo';
import Cadastro from './pages/Cadastro';
import InfoPessoal from './pages/Infopessoal';
import DefinicaoMetas from './pages/DefinicaoMetas';
import TermosDeUso from './pages/TermosDeUso';
import Home from './pages/Home';
import Cardapio from './pages/Cardapio';
import Historico from './pages/Historico';
import Progresso from './pages/Progresso';
import Configuracoes from './pages/Configuracoes';
import AlterarUser from './pages/AlterarUser';
import { UserProvider } from './hooks/useUser';
import { GlobalStyles } from './styled/styled_Main';

const App: React.FC = () => {
    return (
            <Router>
                <UserProvider>
                <GlobalStyles />
                <Routes>
                    {/* Define as rotas para cada página */}
                    <Route path="/" element={<Navigate to="/bem-vindo" />} />
                    <Route path="/bem-vindo" element={<BemVindo />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/info-pessoal" element={<InfoPessoal />} />
                    <Route path="/definicao-metas" element={<DefinicaoMetas />} />
                    <Route path="/termosdeuso" element={<TermosDeUso />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/cardapio" element={<Cardapio />} />
                    <Route path="/historico" element={<Historico />} />
                    <Route path="/metas" element={<Progresso />} />
                    <Route path="/configuracoes" element={<Configuracoes />} />
                    <Route path="/alterar-user" element={<AlterarUser />} />
                </Routes>
                </UserProvider>
            </Router>
    );
};

export default App;