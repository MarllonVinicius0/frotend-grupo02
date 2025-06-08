// components/EventoCard/index.jsx
import React from 'react';
import { ClockCircleOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Container, InfoSection, Title, Subtitle, DateSection, TimeSection, ActionsSection, ActionButton } from './style';

const EventoCard = ({ evento, onRemove, onRestore }) => {
  const isRemoved = evento.removed || false;

  return (
    <Container $removed={isRemoved}>
      <InfoSection>
        <Title $removed={isRemoved}>{evento.titulo}</Title>
        <Subtitle $removed={isRemoved}>{evento.categoria}</Subtitle>
      </InfoSection>
      
      <DateSection $removed={isRemoved}>
        {evento.data}
      </DateSection>
      
      <TimeSection $removed={isRemoved}>
        <ClockCircleOutlined />
        {evento.horario}
      </TimeSection>
      
      <ActionsSection>
        {!isRemoved ? (
          <ActionButton onClick={() => onRemove(evento.id)} variant="remove">
            <MinusOutlined />
          </ActionButton>
        ) : (
          <ActionButton onClick={() => onRestore(evento.id)} variant="add">
            <PlusOutlined />
          </ActionButton>
        )}
      </ActionsSection>
    </Container>
  );
};

export default EventoCard;