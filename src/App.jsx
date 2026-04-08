import "./App.css";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProductsPage from "./pages/Products";
import ProductDetailPage from "./pages/ProductDetail";
import { Route, Routes, Link, useNavigate } from "react-router";
import Default from "./layouts/Default";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/Login";

// 1 - Setup & init Provider
// 2 - Sử dụng Routes, Route, Link
// 3 - Học về nested Route và Outlet
// 4 - ProtectedRoute
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const handleLogin = (payload) => {
    if (payload.username !== "admin" || payload.password !== "123456") {
      alert("Thông tin đăng nhập sai");
      return;
    }

    setCurrentUser({ name: "Admin", token: "kjsdkljfsdjfs9390i09309309" });
    navigate("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Default currentUser={currentUser} handleLogout={handleLogout} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Dùng nested route */}
          <Route
            path="/products"
            element={<ProtectedRoute currentUser={currentUser} />}
          >
            <Route index element={<ProductsPage />} />
            <Route path="detail" element={<ProductDetailPage />} />
          </Route>
        </Route>

        <Route path="login" element={<LoginPage handleLogin={handleLogin} />} />
      </Routes>
      
    </>
  );
}
export default App;

// Boostrap
// Tailwind

// Cài bộ kit
// link CDN