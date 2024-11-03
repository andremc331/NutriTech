import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import BemVindo from "../pages/BemVindo";
import Captcha from "../pages/Captcha";
import { Cadastro, Cardapio, Configuracoes, DefinicaoMetas, InfoPessoal } from "../pages";
import TermosDeUso from "../pages/TermosDeUso";
import Home from "../pages/Home";
import Progresso from "../pages/Progresso";
import { UserProvider } from "../contexts";
import Historico from "../pages/Historico";

export default function UserRoutes() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/bem-vindo" />} />
          <Route path="/bem-vindo" element={<BemVindo />} />
          <Route path="/captcha" element={<Captcha />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/info-pessoal" element={<InfoPessoal />} />
          <Route path="/definicao-metas" element={<DefinicaoMetas />} />
          <Route path="/termosdeuso" element={<TermosDeUso />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/metas" element={<Progresso />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};
