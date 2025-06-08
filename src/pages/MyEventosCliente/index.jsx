import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import HeaderLoggedUser from '../../components/HeaderLoggedUser';
import VoltarLink from '../../components/VoltarLink';
import EventosHeader from '../../components/EventosHeader';
import EventosTable from '../../components/EventosTable';
import { Container, Content } from './style';

const MeusEventos = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Dados mockados para eventos
  const dadosMockados = [
    {
      id: 1,
      titulo: 'Palestra da Educação 2025',
      categoria: 'Educação',
      data: '16 de Setembro, 2025',
      horario: '10:00h até 12:00h',
      removed: false
    },
    {
      id: 2,
      titulo: 'Congresso de Tecnologia',
      categoria: 'Tecnologia',
      data: '20 de Setembro, 2025',
      horario: '08:00h até 18:00h',
      removed: false
    },
    {
      id: 3,
      titulo: 'Summit de Inovação',
      categoria: 'Inovação',
      data: '25 de Setembro, 2025',
      horario: '09:00h até 17:00h',
      removed: false
    },
    {
      id: 4,
      titulo: 'Feira de Saúde e Bem-estar',
      categoria: 'Saúde',
      data: '30 de Setembro, 2025',
      horario: '14:00h até 20:00h',
      removed: false
    },
    {
      id: 5,
      titulo: 'Workshop de Marketing Digital',
      categoria: 'Marketing',
      data: '05 de Outubro, 2025',
      horario: '13:00h até 17:00h',
      removed: false
    },
    {
      id: 6,
      titulo: 'Conferência de Sustentabilidade',
      categoria: 'Meio Ambiente',
      data: '10 de Outubro, 2025',
      horario: '08:00h às 16:00h',
      removed: false
    }
  ];

  useEffect(() => {
    // Simular carregamento de dados
    setLoading(true);
    setTimeout(() => {
      setEventos(dadosMockados);
      setLoading(false);
    }, 1000);
  }, []);

  const handleRemoveEvento = async (id) => {
    try {
      // Encontrar o evento
      const evento = eventos.find(e => e.id === id);
      
      // Marcar como removido (soft delete)
      setEventos(prev => 
        prev.map(evento => 
          evento.id === id 
            ? { ...evento, removed: true }
            : evento
        )
      );
      
      message.warning(`"${evento.titulo}" foi marcado para remoção. Clique no botão + para restaurar.`);
    } catch (error) {
      message.error('Erro ao remover evento. Tente novamente.');
    }
  };

  const handleRestoreEvento = async (id) => {
    try {
      // Encontrar o evento
      const evento = eventos.find(e => e.id === id);
      
      // Restaurar evento
      setEventos(prev => 
        prev.map(evento => 
          evento.id === id 
            ? { ...evento, removed: false }
            : evento
        )
      );
      
      message.success(`"${evento.titulo}" foi restaurado com sucesso!`);
    } catch (error) {
      message.error('Erro ao restaurar evento. Tente novamente.');
    }
  };

  // Contar apenas eventos não removidos
  const eventosAtivos = eventos.filter(e => !e.removed).length;

  return (
    <>
      <HeaderLoggedUser />
      <Container>
        <VoltarLink />
        <Content>  
          <EventosHeader totalEventos={eventosAtivos} />
          
          <EventosTable 
            eventos={eventos}
            onRemoveEvento={handleRemoveEvento}
            onRestoreEvento={handleRestoreEvento}
            loading={loading}
          />
        </Content>
      </Container>
    </>
  );
};

export default MeusEventos;