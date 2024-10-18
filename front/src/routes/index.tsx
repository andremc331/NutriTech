import { useUser } from "../hooks";
import Loading from "../pages/Loading";
import AdmRoutes from "./AdmRoutes";
import UnsignedRoutes from "./UnsignedRoutes";
import UserRoutes from "./UserRoutes";

export default function Routes() {
  const { token, loading } = useUser();

  if (loading) {
    return <Loading />;
  }
  
  return !token ? (
    <UnsignedRoutes />
  ) : token.role === "adm" ? (
    <AdmRoutes />
  ) : (
    <UserRoutes />
  );
}
