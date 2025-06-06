import React from "react";
import { PageWrapper, ContentRow } from "./style";
import VoltarLink from "../../components/VoltarLink";
import PageHeader from "../../components/PageHeader";
import EventFormCard from "../../components/EventFormCard";
import EventActivitiesCard from "../../components/EventActivitiesCard";
import HeaderLoggedUser from "../../components/HeaderLoggedUser";
import FooterButtons from "../../components/FooterButtons";

export default function AdminCreateEventPage() {
  return (
    <PageWrapper>
      <HeaderLoggedUser />
      <VoltarLink to="/admin/eventos" />
      <PageHeader
        titulo="Criar Novo Evento"
        subtitulo="Configure todos os detalhes do seu evento e suas atividades"
      />
      <ContentRow>
        <EventFormCard />
        <EventActivitiesCard />
      </ContentRow>
      <FooterButtons onPublicar={() => console.log("Enviar dados do evento")} />
    </PageWrapper>
  );
}