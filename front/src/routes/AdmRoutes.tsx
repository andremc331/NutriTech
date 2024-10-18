import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import Configuracoes from "../pages/Configuracoes";
import UserRolePage from "../pages/UserRolePage";

export default function AdmRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserRolePage />} />
        <Route path="/adm" element={<UserRolePage />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
