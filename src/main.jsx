import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login/Index";
import Home from "./pages/Home";
import Eventpage from "./pages/EventPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/eventos" element={<Eventpage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
