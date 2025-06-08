import React from "react";
import { ListWrapper } from "./style";
import ActivityCardAdmin from "../ActivityCardAdmin";

export default function ActivityListAdmin({ atividades = [] }) {
  const handleEditar = (atividade) => {
    console.log("Editar atividade:", atividade);
  };

  const handleVerInscritos = (atividade) => {
    console.log("Ver inscritos da atividade:", atividade);
  };

  return (
    <ListWrapper>
      {atividades.map((atividade) => (
        <ActivityCardAdmin
          key={atividade.id}
          {...atividade}
          onEditar={() => handleEditar(atividade)}
          onVerInscritos={() => handleVerInscritos(atividade)}
        />
      ))}
    </ListWrapper>
  );
}
