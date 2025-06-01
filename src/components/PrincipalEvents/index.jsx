import React from 'react';
import { Row, Col, Carousel, Typography, Space } from 'antd';
import { CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { SectionWrapper, MainTitle, Description, CarouselWrapper,SlideCard,EventImage,EventInfo,EventTitle } from './style';


const { Title, Paragraph } = Typography;

// --- DADOS MOCKADOS ---
// Estes dados simulam o que viria de uma API.
// A data está no formato DD/MM/AA para corresponder à imagem.
const mockEvents = [
  {
    id: 1,
    title: 'Evento 1',
    date: '11/08/25',
    location: 'Russas - CE',
    imageUrl: 'https://cdn.folhape.com.br/upload/dn_arquivo/2017/01/campus-party-1-1159274338jpg.jpg', // Imagem de exemplo
  },
  {
    id: 2,
    title: 'Congresso de Tecnologia',
    date: '25/09/25',
    location: 'Fortaleza - CE',
    imageUrl: 'https://cidadetotal.com/wp-content/uploads/2023/04/Campos-Party.jpg',
  },
  {
    id: 3,
    title: 'Feira Gastronômica',
    date: '15/10/25',
    location: 'Quixadá - CE',
    imageUrl: 'https://inovasocial.com.br/wp-content/uploads/2021/12/campus-party-evento-revista-cientifica-blockchain-cultura-inovacao-tecnologia-inovasocial-00.jpg',
  },
];


const PrincipalEvents = () => {
  return (
    <SectionWrapper>
      {/* Usamos o Grid do Ant Design para o layout de colunas */}
      <Row gutter={[48, 32]} align="middle">
        {/* Coluna da Esquerda: Textos */}
        <Col lg={10} md={24} xs={24}>
          <MainTitle level={2}>
            Eventos <br />
            <span>imperdíveis!</span>
          </MainTitle>
          <Description>
            Aqui você encontra os melhores eventos do Brasil e muito mais perto de você!
          </Description>
        </Col>

        {/* Coluna da Direita: Carrossel */}
        <Col lg={14} md={24} xs={24}>
          <CarouselWrapper>
            <Carousel arrows draggable>
              {mockEvents.map(event => (
                <div key={event.id}>
                  <SlideCard>
                    <EventImage src={event.imageUrl} alt={event.title} />
                    <EventInfo>
                      <EventTitle level={3}>{event.title}</EventTitle>
                      <Space size="large" wrap>
                        <Space>
                          <CalendarOutlined />
                          <span>{event.date}</span>
                        </Space>
                        <Space>
                          <EnvironmentOutlined />
                          <span>{event.location}</span>
                        </Space>
                      </Space>
                    </EventInfo>
                  </SlideCard>
                </div>
              ))}
            </Carousel>
          </CarouselWrapper>
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default PrincipalEvents;