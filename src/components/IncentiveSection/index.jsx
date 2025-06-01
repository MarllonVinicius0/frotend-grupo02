import React from 'react';
import { IncentiveContainer,MainMessage,SubMessage,ActionButton, } from './style';

const IncentiveSection = () => {
  return (
    <IncentiveContainer>
      <MainMessage>
        Seu próximo evento incrível está a um clique de distância
      </MainMessage>
      <SubMessage>
        inscreva-se agora e garanta sua vaga!
      </SubMessage>
      <ActionButton onClick={() => console.log('Botão Explorar Eventos clicado!')}>
        Explorar Eventos
      </ActionButton>
    </IncentiveContainer>
  );
};

export default IncentiveSection;