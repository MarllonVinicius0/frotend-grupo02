import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IncentiveContainer, MainMessage, SubMessage, ActionButton } from './style';

const IncentiveSection = () => {
  const navigate = useNavigate();

  const handleExplorarEventos = () => {
    navigate('/eventos');
  };

  return (
    <IncentiveContainer>
      <MainMessage>
        Seu próximo evento incrível está a um clique de distância
      </MainMessage>
      <SubMessage>
        inscreva-se agora e garanta sua vaga!
      </SubMessage>
      <ActionButton onClick={handleExplorarEventos}>
        Explorar Eventos
      </ActionButton>
    </IncentiveContainer>
  );
};

export default IncentiveSection;