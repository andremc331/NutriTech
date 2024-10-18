import { Route, Routes } from "react-router-dom";
import BemVindo from "../pages/BemVindo";
import NotFoundPage from "../pages/NotFoundPage";


export default function UnsignedRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BemVindo />} />
        <Route path="/bem-vindo" element={<BemVindo />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
