import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login/Index";
import Home from "./pages/Home";
import Eventpage from "./pages/EventPage";
import CategoriaPage from "./pages/CategoriaPage";
import HomeLogada from "./pages/HomeLogada";
import { AuthProvider } from "./contexts/AuthProvider";
import RotaProtegida from "./routes/RotaProtegida";
import TelaInscritos from "./pages/ListaInscritosAtividade";
import TelaInscritosEvento from "./pages/ListainscritosEvento";
import EventDetailsPage from "./pages/EventDetailsPage";
import AdminCreateEventPage from "./pages/AdminCreateEventPage";
import MyEvents from "./pages/MyEvents";
import EventAdm from "./pages/EventAdm";
import EditEvent from "./pages/EditEvent"
import AdminEventActivitiesPage from "./pages/AdminEventActivitiesPage";
import MyAtividadesCliente from "./pages/MyAtividadesCliente";
import MyEventosCliente from "./pages/MyEventosCliente";
import AdminEventDetailsPage from "./pages/AdminEventDetailsPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/home-usuario"
            element={
              <RotaProtegida>
                <HomeLogada />
              </RotaProtegida>
            }
          />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/eventos" element={<Eventpage />} />
          <Route path="/categoria/:id" element={<CategoriaPage />} />
          <Route path="/evento_esp" element={<EventDetailsPage />} />
          <Route path="/listaInscritos" element={<TelaInscritos />} />
          <Route path="/listaInscritoseventos" element={<TelaInscritosEvento />} />
          <Route path="/organize-evento" element={<AdminCreateEventPage />} />
          <Route path="/myevents" element={<MyEvents />} />
          <Route path ="/eventadm" element = {<EventAdm />} />
          <Route path ="/editEvent" element = {<EditEvent />} />          
          <Route path ="/listaAtividades" element = {<AdminEventActivitiesPage />} />
          <Route path ="/minhasAtividades" element = {<MyAtividadesCliente />} />
          <Route path ="/meusEventos" element = {<MyEventosCliente />} />
          <Route path ="/visuInscrição" element = {<AdminEventDetailsPage />} />
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
