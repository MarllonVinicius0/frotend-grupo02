import React, { useEffect, useState } from "react";
import { PageWrapper, ContentRow } from "./style";
import VoltarLink from "../../components/VoltarLink";
import PageHeader from "../../components/PageHeader";
import EventFormCard from "../../components/EventFormCard";
import EventActivitiesCard from "../../components/EventActivitiesCard";
import HeaderLoggedUser from "../../components/HeaderLoggedUser";
import FooterButtons from "../../components/FooterButtons";
import dayjs from "dayjs";

export default function EditEvent() {
  const [dataInicioEvento, setDataInicioEvento] = useState(null);
  const [dataFimEvento, setDataFimEvento] = useState(null);
  const [evento, setEvento] = useState(null);

  // Simulando carregamento dos dados do evento
  useEffect(() => {
    const eventoCarregado = {
      nome: "Semana Acadêmica 2025",
      descricao: "Discussões, palestras e oficinas sobre educação e tecnologia.",
      local: "Auditório Central - UFC",
      categoria: "educacao",
      dataInicio: dayjs("2025-09-10"),
      dataFim: dayjs("2025-09-12"),
      atividades: [
        {
          id: 1,
          titulo: "Palestra de Abertura",
          descricao: "Boas-vindas aos participantes",
          dataInicio: dayjs("2025-09-10"),
          dataFim: dayjs("2025-09-10"),
          horaInicio: dayjs("08:00", "HH:mm"),
          horaFim: dayjs("09:30", "HH:mm"),
          capacidade: "150"
        },
        {
          id: 2,
          titulo: "Painel sobre IA",
          descricao: "Discussão sobre impactos da inteligência artificial",
          dataInicio: dayjs("2025-09-11"),
          dataFim: dayjs("2025-09-11"),
          horaInicio: dayjs("14:00", "HH:mm"),
          horaFim: dayjs("15:30", "HH:mm"),
          capacidade: "120"
        }
      ]
    };

    setEvento(eventoCarregado);
    setDataInicioEvento(eventoCarregado.dataInicio);
    setDataFimEvento(eventoCarregado.dataFim);
  }, []);

  // Enquanto os dados estão carregando
  if (!evento) return <div>Carregando evento...</div>;

  return (
    <PageWrapper>
      <HeaderLoggedUser />
      <VoltarLink to="/eventadm" />
      <PageHeader
        titulo="Editar Evento"
        subtitulo="Configure todos os detalhes do seu evento e suas atividades"
      />

      <ContentRow>
        <EventFormCard
          dataInicio={dataInicioEvento}
          dataFim={dataFimEvento}
          setDataInicio={setDataInicioEvento}
          setDataFim={setDataFimEvento}
          evento={evento}
        />

        <EventActivitiesCard
          dataInicioEvento={dataInicioEvento}
          dataFimEvento={dataFimEvento}
          atividadesIniciais={evento.atividades}
        />
      </ContentRow>

      <FooterButtons
        onPublicar={() => console.log("Salvar alterações do evento")}
        textoConfirmar="Salvar Alterações"
      />
    </PageWrapper>
  );
}
