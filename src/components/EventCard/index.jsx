import React from "react";
import { Card, Typography } from "antd";
import { StyledCard, EventInfo } from "./style";

const { Meta } = Card;
const { Text } = Typography;

export default function EventCard({ 
  imagem, 
  titulo, 
  local, 
  dataHora, 
  onClick 
}) {
  return (
    <StyledCard
      hoverable
      cover={<img alt={titulo} src={imagem} />}
      onClick={onClick}
    >
      <EventInfo>
        <h3>{titulo}</h3>
        <Text>{local}</Text>
        <Text>{dataHora}</Text>
      </EventInfo>
    </StyledCard>
  );
}