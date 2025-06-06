import React, { useState } from "react";
import { PageWrapper, ContentRow } from "./style";
import VoltarLink from "../../components/VoltarLink";
import PageHeader from "../../components/PageHeader";
import EventFormCard from "../../components/EventFormCard";
import EventActivitiesCard from "../../components/EventActivitiesCard";
import HeaderLoggedUser from "../../components/HeaderLoggedUser";
import FooterButtons from "../../components/FooterButtons";

export default function AdminCreateEventPage() {
  // Estado compartilhado
  const [dataInicioEvento, setDataInicioEvento] = useState(null);
  const [dataFimEvento, setDataFimEvento] = useState(null);

  return (
    <PageWrapper>
      <HeaderLoggedUser />
      <VoltarLink to="/eventadm" />
      <PageHeader
        titulo="Criar Novo Evento"
        subtitulo="Configure todos os detalhes do seu evento e suas atividades"
      />
      <ContentRow>
        <EventFormCard
          dataInicio={dataInicioEvento}
          dataFim={dataFimEvento}
          setDataInicio={setDataInicioEvento}
          setDataFim={setDataFimEvento}
        />
        <EventActivitiesCard
          dataInicioEvento={dataInicioEvento}
          dataFimEvento={dataFimEvento}
        />
      </ContentRow>
      <FooterButtons onPublicar={() => console.log("Enviar dados do evento")} 
        textoConfirmar="Publicar Evento"
      />
    </PageWrapper>
  );
}
