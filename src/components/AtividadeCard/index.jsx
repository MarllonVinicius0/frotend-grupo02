import React from 'react';
import { ClockCircleOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Container, InfoSection, Title, Subtitle, DateSection, TimeSection, ActionsSection, ActionButton } from './style';

const AtividadeCard = ({ atividade, onRemove, onRestore }) => {
  const isRemoved = atividade.removed || false;

  return (
    <Container $removed={isRemoved}>
      <InfoSection>
        <Title $removed={isRemoved}>{atividade.titulo}</Title>
        <Subtitle $removed={isRemoved}>{atividade.categoria}</Subtitle>
      </InfoSection>
      
      <DateSection $removed={isRemoved}>
        {atividade.data}
      </DateSection>
      
      <TimeSection $removed={isRemoved}>
        <ClockCircleOutlined />
        {atividade.horario}
      </TimeSection>
      
      <ActionsSection>
        {!isRemoved ? (
          <ActionButton onClick={() => onRemove(atividade.id)} variant="remove">
            <MinusOutlined />
          </ActionButton>
        ) : (
          <ActionButton onClick={() => onRestore(atividade.id)} variant="add">
            <PlusOutlined />
          </ActionButton>
        )}
      </ActionsSection>
    </Container>
  );
};

export default AtividadeCard;