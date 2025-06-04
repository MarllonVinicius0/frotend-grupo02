import React, { useState } from "react";
import { 
  Row, 
  Col, 
  Typography, 
  Button,
  Empty 
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import EventCard from "../EventCard";
import { 
  EventsSection, 
  SectionHeader, 
  GridContainer, 
  LoadMoreContainer 
} from "./style";

//Implementação Posterior 

// import{getEventsByCategory} from "../../services/eventService"; // Importar serviço de eventos se necessário

// import{useEffect} from "react"; // Importar useEffect se necessário para buscar eventos

//export default function EventList({ categoriaId }) {
//  const [events, setEvents] = useState([]);
//  const [loading, setLoading] = useState(true);

//  useEffect(() => {
//    setLoading(true);
//    getEventsByCategory(categoriaId)
//      .then(data => setEvents(data))
//      .catch(() => setEvents([]))
//      .finally(() => setLoading(false));
//  }, [categoriaId]);

//if (loading) return <div>Carregando eventos...</div>;
//  if (events.length === 0) return <div>Nenhum evento encontrado.</div>;





const { Title } = Typography;

const eventosMock = [
  {
    id: 1,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra da Educação 2025",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 16h07 às 15h00",
    categoria: "educacao"
  },
  {
    id: 2,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 16h07 às 15h00",
    categoria: "tecnologia"
  },
  {
    id: 3,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 16h07 às 15h00",
    categoria: "negocios"
  },
  {
    id: 4,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 16h07 às 15h00",
    categoria: "saude"
  },
  {
    id: 5,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 16h07 às 15h00",
    categoria: "negocios"
  },
  {
    id: 6,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 16h07 às 15h00",
    categoria: "tecnologia"
  },
  {
    id: 7,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 16h07 às 15h00",
    categoria: "educacao"
  },
  {
    id: 8,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 16h07 às 15h00",
    categoria: "negocios"
  },
  {
    id: 9,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 16h07 às 15h00",
    categoria: "tecnologia"
  },
  {
    id: 10,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 16h07 às 15h00",
    categoria: "educacao"
  },
  {
    id: 11,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 16h07 às 15h00",
    categoria: "saude"
  },
  {
    id: 12,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 16h07 às 15h00",
    categoria: "negocios"
  },
  {
    id: 13,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 16h07 às 15h00",
    categoria: "negocios"
  },
  {
    id: 14,
    imagem: "/src/assets/evento-destaque.jpg",
    titulo: "Palestra 2",
    local: "Centro de Eventos | Fortaleza - CE",
    dataHora: "Segunda, 16h07 às 15h00",
    categoria: "negocios"
  }
];

export default function EventList() {
  const [visibleEvents, setVisibleEvents] = useState(8);
  const [loading, setLoading] = useState(false);

  const handleEventClick = (evento) => {
    console.log('Evento clicado:', evento);
  };

  const handleLoadMore = async () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleEvents(prev => prev + 8);
      setLoading(false);
    }, 1000);
  };

  const displayedEvents = eventosMock.slice(0, visibleEvents);

  return (
    <EventsSection>
      <SectionHeader>
        <Title 
          level={2} 
          style={{ 
            color: 'rgb(15, 77, 148)', 
            marginBottom: '8px',
            fontSize: '2rem',
            fontWeight: 600
          }}
        >
          Eventos Imperdíveis!
        </Title>
        <Title 
          level={3} 
          style={{ 
            color: '#333', 
            marginBottom: 0,
            fontSize: '1.4rem',
            fontWeight: 600
          }}
        >
          Todos os Eventos
        </Title>
      </SectionHeader>

      <GridContainer>
        {displayedEvents.length > 0 ? (
          <Row gutter={[24, 24]}>
            {displayedEvents.map((evento) => (
              <Col 
                key={evento.id}
                xs={24} 
                sm={12} 
                md={8} 
                lg={6}
              >
                <EventCard
                  imagem={evento.imagem}
                  titulo={evento.titulo}
                  local={evento.local}
                  dataHora={evento.dataHora}
                  onClick={() => handleEventClick(evento)}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <Empty 
            description="Nenhum evento encontrado"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        )}
      </GridContainer>

      {eventosMock.length > visibleEvents && (
        <LoadMoreContainer>
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            onClick={handleLoadMore}
            loading={loading}
            style={{
              backgroundColor: '#28a745',
              borderColor: '#28a745',
              borderRadius: '8px',
              padding: '8px 48px',
              height: 'auto',
              fontSize: '1rem',
              fontWeight: 600,
              boxShadow: '0 2px 4px rgba(40, 167, 69, 0.2)',
            }}
          >
            {loading ? 'Carregando...' : 'Ver Mais Eventos'}
          </Button>
        </LoadMoreContainer>
      )}
    </EventsSection>
  );
}