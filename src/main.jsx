import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login/Index";
import Home from "./pages/Home";
import Eventpage from "./pages/EventPage";
import CategoriaPage from "./pages/CategoriaPage";
import { AuthProvider } from "./contexts/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/eventos" element={<Eventpage />} />
          <Route path="/categoria/:id" element={<CategoriaPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);