import React from 'react';

// Importações do Ant Design
import { Row, Col, Typography, Button, Card, Space, Flex } from 'antd';
import { ArrowLeftOutlined, CalendarOutlined, EnvironmentOutlined, UserOutlined } from '@ant-design/icons';
import HeaderLoggedUser from '../../components/HeaderLoggedUser';


// Importações dos nossos componentes estilizados
import { PageWrapper, MainContent, EventHeader, InfoCard, StatsCard } from './style';

const { Title, Text, Link } = Typography;

const EventDetailsPage = () => {
  // Dados do evento (geralmente viriam de uma API)
  const eventData = {
    title: 'Palestra da Educação 2025',
    date: '15 de Setembro, 2025',
    location: 'Centro de Eventos, Fortaleza - CE',
    description: 'A maior palestra de educação do Brasil, reunindo os principais especialistas da área para discutir o sistema de ensino no Brasil.',
    startDate: '15/07/25',
    endDate: '16/07/25',
    category: 'Educação',
    registered: 847,
    limit: 1000,
  };

  return (
    <>
     <HeaderLoggedUser /> 
      <PageWrapper>
        <MainContent>
          <Link href="/myevents">
            <ArrowLeftOutlined /> Voltar aos meus eventos
          </Link>

          <Row gutter={[32, 32]} style={{ marginTop: '24px' }}>
            {/* Coluna Principal (Esquerda) */}
            <Col xs={24} lg={16}>
              <EventHeader>
                <div>
                  <Title level={2} style={{ marginBottom: 0 }}>{eventData.title}</Title>
                  <Space size="middle" style={{ marginTop: '8px' }}>
                    <Text type="secondary"><CalendarOutlined /> {eventData.date}</Text>
                    <Text type="secondary"><EnvironmentOutlined /> {eventData.location}</Text>
                  </Space>
                </div>
                <Space>
                  <Button>Editar Evento</Button>
                </Space>
              </EventHeader>

              <InfoCard title="Informações do Evento" bordered={false}>
                <Text>{eventData.description}</Text>
                <Row gutter={[16, 24]} style={{ marginTop: '24px' }}>
                  <Col span={12}>
                    <Text type="secondary" style={{ display: 'block' }}>Data de Início</Text>
                    <Text strong>{eventData.startDate}</Text>
                  </Col>
                  <Col span={12}>
                    <Text type="secondary" style={{ display: 'block' }}>Data de Fim</Text>
                    <Text strong>{eventData.endDate}</Text>
                  </Col>
                  <Col span={12}>
                    <Text type="secondary" style={{ display: 'block' }}>Categoria</Text>
                    <Text strong>{eventData.category}</Text>
                  </Col>
                  <Col span={12}>
                    <Text type="secondary" style={{ display: 'block' }}>Localização</Text>
                    <Text strong>{eventData.location}</Text>
                  </Col>
                </Row>
              </InfoCard>
            </Col>

            {/* Sidebar (Direita) */}
            <Col xs={24} lg={8}>
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <Card bordered={false}>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Button block>Ver Todas as Atividades</Button>
                    <Button block>Ver Lista de Inscritos</Button>
                  </Space>
                </Card>

                <StatsCard bordered={false}>
                  <Flex justify="space-between" align="center">
                    <div>
                      <Text>Total de Inscritos</Text>
                      <Title level={3} style={{ marginTop: 0 }}>
                        {eventData.registered}/{eventData.limit}
                      </Title>
                    </div>
                    <div className="icon-wrapper">
                      <UserOutlined />
                    </div>
                  </Flex>
                </StatsCard>
              </Space>
            </Col>
          </Row>
        </MainContent>
      </PageWrapper>
    </>
  );
};

export default EventDetailsPage;