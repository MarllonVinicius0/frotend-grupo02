import React, { useState } from "react";
import { Pagination, Empty, Spin } from "antd";
import ActivityCard from "../ActivityCard"; // Ajuste o caminho conforme sua estrutura
import { 
  SectionContainer, 
  SectionTitle, 
  ActivityListContainer,
  PaginationContainer,
  LoadingContainer
} from "./style";

const atividades = [
  { id: 1, titulo: "Educação 1", responsavel: "Ana Souza", data: "20/06 às 15h" },
  { id: 2, titulo: "Educação 2", responsavel: "Carlos Lima", data: "21/06 às 14h" },
  { id: 3, titulo: "Educação 3", responsavel: "Fernanda Rocha", data: "22/06 às 16h" },
  { id: 4, titulo: "Educação 4", responsavel: "João Pedro", data: "23/06 às 10h" },
  { id: 5, titulo: "Educação 5", responsavel: "Maria Silva", data: "24/06 às 09h" },
  { id: 6, titulo: "Educação 6", responsavel: "Roberto Santos", data: "25/06 às 11h" },
  { id: 7, titulo: "Educação 7", responsavel: "Lucia Mendes", data: "26/06 às 13h" },
  { id: 8, titulo: "Educação 8", responsavel: "Pedro Oliveira", data: "27/06 às 17h" },
];

export default function ActivityList({ 
  loading = false,
  pageSize = 4,
  showPagination = true
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentActivities = atividades.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <SectionContainer>
        <SectionTitle>Atividades</SectionTitle>
        <LoadingContainer>
          <Spin size="large" />
        </LoadingContainer>
      </SectionContainer>
    );
  }

  if (atividades.length === 0) {
    return (
      <SectionContainer>
        <SectionTitle>Atividades</SectionTitle>
        <Empty 
          description="Nenhuma atividade encontrada"
          style={{ margin: '2rem 0' }}
        />
      </SectionContainer>
    );
  }

  return (
    <SectionContainer>
      <SectionTitle>Atividades</SectionTitle>
      
      <ActivityListContainer>
        {currentActivities.map((atividade) => (
          <ActivityCard
            key={atividade.id}
            titulo={atividade.titulo}
          />
        ))}
      </ActivityListContainer>

      {showPagination && atividades.length > pageSize && (
        <PaginationContainer>
          <Pagination
            current={currentPage}
            total={atividades.length}
            pageSize={pageSize}
            onChange={handlePageChange}
            showSizeChanger={false}
            showQuickJumper
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} de ${total} atividades`
            }
          />
        </PaginationContainer>
      )}
    </SectionContainer>
  );
}