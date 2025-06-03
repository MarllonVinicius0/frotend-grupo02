import React from "react";
import { Wrapper } from "./style";
import Header from "../../components/HeaderPages";
import HighlightEvent from "../../components/HighlightEvent";
import EventList from "../../components/EventList";
import Footer from "../../components/Footer";

export default function CategoriaPage() {
  return (
    <Wrapper>
      <Header />
      <HighlightEvent />
      <EventList />
      <Footer />
    </Wrapper>
  );
}