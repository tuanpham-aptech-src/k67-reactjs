import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
export default function ProtectedRoutes({ isLogged }) {
  if (!isLogged) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <Header />
      <div className="container py-4">
        <Outlet />
      </div>
    </>
  );
}
