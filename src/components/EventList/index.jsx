import React, { useState } from "react";
import { GridContainer, SectionHeader, EventsSection } from "./style";
import EventCard from "../EventCard";
import SectionTitle from "../SectionTitle";
import VerMaisButton from "../VerMaisButton";

const eventosMock = [
  {
    id: 1,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra da Educação 2025",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 19h07 às 19h30",
    categoria: "educacao"
  },
  {
    id: 2,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 19h07 às 19h30",
    categoria: "tecnologia"
  },
  {
    id: 3,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 19h07 às 19h30",
    categoria: "educacao"
  },
  {
    id: 4,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 19h07 às 19h30",
    categoria: "tecnologia"
  },
  {
    id: 5,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 19h07 às 19h30",
    categoria: "educacao"
  },
  {
    id: 6,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 19h07 às 19h30",
    categoria: "tecnologia"
  },
  {
    id: 7,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 19h07 às 19h30",
    categoria: "educacao"
  },
  {
    id: 8,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 19h07 às 19h30",
    categoria: "tecnologia"
  },
  {
    id: 9,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 19h07 às 19h30",
    categoria: "educacao"
  },
  {
    id: 10,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 19h07 às 19h30",
    categoria: "tecnologia"
  },
  {
    id: 11,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 19h07 às 19h30",
    categoria: "educacao"
  },
  {
    id: 12,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 19h07 às 19h30",
    categoria: "tecnologia"
  },
];

export default function EventList() {
  const [visibleEvents, setVisibleEvents] = useState(12);

  const handleEventClick = (evento) => {
    console.log('Evento clicado:', evento);
    // Aqui você pode adicionar navegação ou modal
  };

  const handleVerMais = () => {
    alert("Você clicou em Ver Mais Eventos!");
    // Aqui você pode chamar uma função para carregar mais eventos
  };

  return (
    <EventsSection>
      <SectionTitle>Eventos Imperdíveis!</SectionTitle>
      
      <SectionHeader>
        <h3>Todos os Eventos</h3>
      </SectionHeader>
      
      <GridContainer>
        {eventosMock.slice(0, visibleEvents).map((evento) => (
          <EventCard
            key={evento.id}
            imagem={evento.imagem}
            titulo={evento.titulo}
            local={evento.local}
            dataHora={evento.dataHora}
            onClick={() => handleEventClick(evento)}
          />
        ))}
      </GridContainer>
      
      <VerMaisButton onClick={handleVerMais} />
    </EventsSection>
  );
}