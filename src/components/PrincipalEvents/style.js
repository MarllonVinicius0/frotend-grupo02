import { Row, Col, Carousel, Typography, Space } from 'antd';
import { CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

// Container principal da seção
export const SectionWrapper = styled.section`
  padding: 60px 20px;
  background-color: #fff;
  padding-left:40px;
  font-family: 'Roboto', sans-serif;
`;

// Título principal com a palavra "imperdíveis!" em negrito
export const MainTitle = styled(Title)`
  
  && {
    color: #144F78; // Um tom de azul escuro
    font-size: 3em;
    line-height: 1.2;
    margin-bottom: 16px;


    span {
      font-weight: 700;
    }

    @media (max-width: 768px) {
        font-size: 2.5em;
        text-align: center;
    }
  }
`;

export const Description = styled(Paragraph)`
  && {
    color: #555;
    font-size: 1.1em;
    max-width: 400px;
    
    @media (max-width: 768px) {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
  }
`;

// Wrapper para o carrossel para permitir customização de setas e pontos
export const CarouselWrapper = styled.div`
  .slick-slide {
    padding: 0 10px; // Espaçamento para a sombra do card não ser cortada
  }

  /* Estilização das setas */
  .slick-arrow {
    background-color: rgba(255, 255, 255, 0.29);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    z-index: 1;
    display: flex !important;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);

    &:before {
      content: ''; // Remove o conteúdo padrão do slick
    }

    .anticon {
      font-size: 18px;
      color: #003366;
    }
  }

  .slick-prev {
    left: -20px;
  }

  .slick-next {
    right: -20px;
  }
  
  /* Estilização dos pontos de paginação */
  .slick-dots li button {
    background: #ccc;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    transition: all 0.3s ease;
  }
  
  .slick-dots li.slick-active button {
    background: #003366;
    width: 12px;
  }
`;

export const SlideCard = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const EventImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`;

export const EventInfo = styled.div`
  padding: 20px;
`;

export const EventTitle = styled(Title)`
  && {
    font-size: 1.5em;
    margin-bottom: 16px;
  }
`;
