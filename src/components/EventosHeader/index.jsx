// components/EventosHeader/index.jsx
import React from 'react';
import { HeartOutlined } from '@ant-design/icons';
import { Container, TitleSection, Title, Subtitle, CountSection, CountNumber, CountLabel, HeartIcon } from './style';

const EventosHeader = ({ totalEventos }) => {
  return (
    <Container>
      <TitleSection>
        <Title>Meus Eventos</Title>
        <Subtitle>Eventos inscritos</Subtitle>
      </TitleSection>
      
      <CountSection>
        <HeartIcon>
          <HeartOutlined />
        </HeartIcon>
        <div>
          <CountNumber>{totalEventos}</CountNumber>
          <CountLabel>Total de Eventos</CountLabel>
        </div>
      </CountSection>
    </Container>
  );
};

export default EventosHeader;