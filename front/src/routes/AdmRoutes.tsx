import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import UserRolePage from "../pages/AtualizarUsuário";
import AtualizarUsuário from "../pages/AtualizarUsuário";

export default function AdmRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserRolePage />} />
        <Route path="/adm" element={<UserRolePage />} />
        <Route path="/atualizar" element={<AtualizarUsuário />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
