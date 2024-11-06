import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import BemVindo from "../pages/BemVindo";
import { Cadastro, Cardapio, DefinicaoMetas, InfoPessoal } from "../pages";
import TermosDeUso from "../pages/TermosDeUso";
import Home from "../pages/Home";
import Progresso from "../pages/Progresso";
import { UserProvider } from "../contexts";
import Historico from "../pages/Historico";
import Sobre from "../pages/Sobre";
import AtualizarUsuário from "../pages/AtualizarUsuário";

export default function UserRoutes() {
  return (
    <Router>
      <UserProvider>
        <Routes>
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
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/atualizar" element={<AtualizarUsuário />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};
