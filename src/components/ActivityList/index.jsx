import React, { useState } from "react";
import { Pagination, Empty, Spin } from "antd";
import ActivityCard from "../ActivityCard";
import { 
  SectionContainer, 
  SectionTitle, 
  ActivityListContainer,
  PaginationContainer,
  LoadingContainer,
  SubmitButtonContainer,
  SubmitButton
} from "./style";

const atividades = [
  { id: 1, titulo: "Educação 1", responsavel: "Ana Souza", horario: "10:00 até 12:00", data: "15 de Setembro, 2025" },
  { id: 2, titulo: "Educação 2", responsavel: "Carlos Lima", horario: "14:00 até 16:00", data: "16 de Setembro, 2025" },
  { id: 3, titulo: "Educação 3", responsavel: "Fernanda Rocha", horario: "09:00 até 11:00", data: "17 de Setembro, 2025" },
  { id: 4, titulo: "Educação 4", responsavel: "João Pedro", horario: "15:00 até 17:00", data: "18 de Setembro, 2025" },
  { id: 5, titulo: "Educação 5", responsavel: "Maria Silva", horario: "13:00 até 15:00", data: "19 de Setembro, 2025" },
  { id: 6, titulo: "Educação 6", responsavel: "Roberto Santos", horario: "10:00 até 12:00", data: "20 de Setembro, 2025" },
  { id: 7, titulo: "Educação 7", responsavel: "Lucia Mendes", horario: "16:00 até 18:00", data: "21 de Setembro, 2025" },
  { id: 8, titulo: "Educação 8", responsavel: "Pedro Oliveira", horario: "11:00 até 13:00", data: "22 de Setembro, 2025" },
];

export default function ActivityList({ 
  loading = false,
  pageSize = 4,
  showPagination = true,
  isSubscribed = false
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedActivities, setSelectedActivities] = useState(new Set());

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentActivities = atividades.slice(startIndex, endIndex);

  const totalSelectedActivities = selectedActivities.size;

  const handleSubmitRegistrations = () => {
    if (totalSelectedActivities > 0) {
      console.log('Submetendo inscrições:', Array.from(selectedActivities));
      // Adicionar a lógica para submeter as inscrições
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleAddActivity = (activityId) => {
    setSelectedActivities(prev => new Set([...prev, activityId]));
  };

  const handleRemoveActivity = (activityId) => {
    setSelectedActivities(prev => {
      const newSet = new Set(prev);
      newSet.delete(activityId);
      return newSet;
    });
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
            horario={atividade.horario}
            data={atividade.data}
            isSubscribed={isSubscribed}
            onAdd={() => handleAddActivity(atividade.id)}
            onRemove={() => handleRemoveActivity(atividade.id)}
            selectedCount={selectedActivities.has(atividade.id) ? 1 : 0}
          />
        ))}
      </ActivityListContainer>

      {isSubscribed && (
        <SubmitButtonContainer>
          <SubmitButton
            type="primary"
            size="large"
            disabled={totalSelectedActivities === 0}
            onClick={handleSubmitRegistrations}
            $hasActivities={totalSelectedActivities > 0}
          >
            Submeter Inscrições
          </SubmitButton>
        </SubmitButtonContainer>
      )}

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