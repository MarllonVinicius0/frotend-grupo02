import React from "react";
import { Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Se há uma função onClick personalizada, execute ela primeiro
    if (onClick) {
      onClick();
    }
    
    // Navega para a rota do evento específico
    navigate('/evento_esp');
  };

  return (
    <StyledCard
      hoverable
      cover={<img alt={titulo} src={imagem} />}
      onClick={handleCardClick}
    >
      <EventInfo>
        <h3>{titulo}</h3>
        <Text>{local}</Text>
        <Text>{dataHora}</Text>
      </EventInfo>
    </StyledCard>
  );
}