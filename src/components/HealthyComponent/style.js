import { Card, Typography, Button } from "antd";
import styled from "styled-components";
const { Title, Text } = Typography;

// Container principal da seção, agora espelhando o estilo de 'CategoriesContainer'
export const SectionWrapper = styled.section`
  /* Cor e espaçamento iguais ao componente de categorias */
  background-color: #E5E5E5; 
  padding: 60px 95px;

  /* Centraliza o conteúdo interno (o nosso ContentContainer) */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// NOVO: Container para limitar a largura do conteúdo e garantir o alinhamento
export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px; /* A CHAVE PARA O ALINHAMENTO! */
`;

// Título da seção, agora dentro do ContentContainer
export const SectionTitle = styled(Title)`
  && {
    font-size: 1.8em;
    color: #333;
    font-weight: bold;
    margin-bottom: 32px;
    text-align: left;
    width: 100%;
    
    @media (max-width: 768px) {
    text-align: center;
    }
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 16px; 
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const StyledCard = styled(Card)`
  flex-shrink: 0; 
  width: 280px; 
  margin-right: 16px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: none;

  .ant-card-cover img {
    height: 160px;
    object-fit: cover;
  }
  .ant-card-body {
    padding: 16px;
  }
`;

export const CardTitle = styled(Text)`
  font-size: 1.1em;
  font-weight: bold;
  display: block;
  color: #111;
`;

export const CardInfo = styled(Text)`
  font-size: 0.9em;
  color: #666;
  display: block;
`;

export const ArrowButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  display: ${props => (props.$show ? 'flex' : 'none')}; 
  align-items: center;
  justify-content: center;

  &.arrow-left {
    left: -20px;
  }

  &.arrow-right {
    right: -20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;