import React from "react";
import { ButtonWrapper } from "./style";

export default function VerMaisButton({ onClick, disabled, loading }) {
  return (
    <ButtonWrapper onClick={onClick} disabled={disabled}>
      {loading ? "Carregando..." : "Ver Mais Eventos"}
    </ButtonWrapper>
  );
}