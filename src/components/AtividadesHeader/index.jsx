import React from 'react';
import { HeartOutlined } from '@ant-design/icons';
import { Container, TitleSection, Title, Subtitle, CountSection, CountNumber, CountLabel, HeartIcon } from './style';

const AtividadesHeader = ({ totalAtividades }) => {
  return (
    <Container>
      <TitleSection>
        <Title>Minhas Atividades</Title>
        <Subtitle>Atividades inscritas</Subtitle>
      </TitleSection>
      
      <CountSection>
        <HeartIcon>
          <HeartOutlined />
        </HeartIcon>
        <div>
          <CountNumber>{totalAtividades}</CountNumber>
          <CountLabel>Total de Atividades</CountLabel>
        </div>
      </CountSection>
    </Container>
  );
};

export default AtividadesHeader;