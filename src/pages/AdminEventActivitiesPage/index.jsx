import React, { useState } from "react";
import HeaderLoggedUser from "../../components/HeaderLoggedUser";
import VoltarLink from "../../components/VoltarLink";
import ActivityListAdmin from "../../components/ActivityListAdmin";
import { PageWrapper, ContentWrapper, Title, PaginationWrapper } from "./style";
import { Pagination } from "antd";

export default function AdminEventActivitiesPage() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const porPagina = 3;

  // MOCK: Lista de atividades
  const atividades = [
    {
      id: 1,
      titulo: "Educação 1",
      descricao: [
        "Descrição da Atividade",
        "Descrição da Atividade",
        "Descrição da Atividade",
        "Descrição da Atividade"
      ],
      dataInicio: "17/06/25",
      dataFim: "18/06/25",
      vagasOcupadas: 450,
      vagasTotais: 500,
      localizacao: "Sala 2 - Setor 1"
    },
    {
      id: 2,
      titulo: "Educação 1",
      descricao: ["Descrição da Atividade"],
      dataInicio: "17/06/25",
      dataFim: "18/06/25",
      vagasOcupadas: 300,
      vagasTotais: 500,
      localizacao: "Sala 2 - Setor 1"
    },
    {
      id: 3,
      titulo: "Educação 1",
      descricao: ["Descrição da Atividade"],
      dataInicio: "17/06/25",
      dataFim: "18/06/25",
      vagasOcupadas: 200,
      vagasTotais: 500,
      localizacao: "Sala 2 - Setor 1"
    },
    {
      id: 4,
      titulo: "Educação 1",
      descricao: ["Descrição extra"],
      dataInicio: "17/06/25",
      dataFim: "18/06/25",
      vagasOcupadas: 150,
      vagasTotais: 500,
      localizacao: "Sala 3 - Setor 2"
    }
  ];

  const inicio = (paginaAtual - 1) * porPagina;
  const fim = paginaAtual * porPagina;
  const atividadesPaginadas = atividades.slice(inicio, fim);

  return (
    <PageWrapper>
      <HeaderLoggedUser />
      <ContentWrapper>
        <VoltarLink to="/eventadm" children="Voltar ao evento" />
        <Title>Atividades do Evento</Title>

        <ActivityListAdmin atividades={atividadesPaginadas} />

        <PaginationWrapper>
          <Pagination
            current={paginaAtual}
            total={atividades.length}
            pageSize={porPagina}
            onChange={(page) => setPaginaAtual(page)}
            showSizeChanger={false}
          />
        </PaginationWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
}
