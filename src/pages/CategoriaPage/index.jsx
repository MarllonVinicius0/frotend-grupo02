import React from "react";
import { Wrapper } from "./style";
import Header from "../../components/HeaderPages";
import HighlightEvent from "../../components/HighlightEvent";
import EventList from "../../components/EventList";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";

export default function CategoriaPage() {
  const { id } = useParams(); // Pega o id da categoria da URL

  return (
    <Wrapper>
      <Header />
      <HighlightEvent categoriaId={id} />
      <EventList categoriaId={id} />
      <Footer />
    </Wrapper>
  );
}