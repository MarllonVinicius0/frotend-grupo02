import React from "react";
import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardInfo,
  DateIcon,
  LocationIcon,
} from "./style";

export default function EventCard({ imagem, titulo, local, dataHora, onClick }) {
  return (
    <CardContainer onClick={onClick}>
      <CardImage src={imagem} alt={titulo} />
      <CardContent>
        <CardTitle>{titulo}</CardTitle>
        <CardInfo>
          <LocationIcon>📍</LocationIcon>
          {local}
        </CardInfo>
        <CardInfo>
          <DateIcon>📅</DateIcon>
          {dataHora}
        </CardInfo>
      </CardContent>
    </CardContainer>
  );
}