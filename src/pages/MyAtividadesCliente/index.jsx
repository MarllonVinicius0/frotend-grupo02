import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import HeaderLoggedUser from '../../components/HeaderLoggedUser';
import VoltarLink from '../../components/VoltarLink';
import AtividadesHeader from '../../components/AtividadesHeader';
import AtividadesTable from '../../components/AtividadesTable';
import { Container, Content } from './style';

const MinhasAtividades = () => {
  const [atividades, setAtividades] = useState([]);
  const [loading, setLoading] = useState(false);

  // Dados mockados expandidos para demonstrar paginação
  const dadosMockados = [
    {
      id: 1,
      titulo: 'Educação 1',
      categoria: 'Educação',
      data: '16 de Setembro, 2025',
      horario: '10:00h até 12:00h',
      removed: false
    },
    {
      id: 2,
      titulo: 'Educação 2',
      categoria: 'Educação',
      data: '16 de Setembro, 2025',
      horario: '10:00h até 12:00h',
      removed: false
    },
    {
      id: 3,
      titulo: 'Workshop de Tecnologia',
      categoria: 'Tecnologia',
      data: '18 de Setembro, 2025',
      horario: '14:00h até 17:00h',
      removed: false
    },
    {
      id: 4,
      titulo: 'Palestras de Saúde',
      categoria: 'Saúde',
      data: '20 de Setembro, 2025',
      horario: '09:00h até 11:00h',
      removed: false
    },
    {
      id: 5,
      titulo: 'Curso de Marketing Digital',
      categoria: 'Marketing',
      data: '22 de Setembro, 2025',
      horario: '13:00h até 16:00h',
      removed: false
    },
    {
      id: 6,
      titulo: 'Treinamento em Liderança',
      categoria: 'Gestão',
      data: '25 de Setembro, 2025',
      horario: '08:00h até 12:00h',
      removed: false
    },
    {
      id: 7,
      titulo: 'Seminário de Inovação',
      categoria: 'Tecnologia',
      data: '28 de Setembro, 2025',
      horario: '14:00h até 18:00h',
      removed: false
    },
    {
      id: 8,
      titulo: 'Workshop de Design Thinking',
      categoria: 'Design',
      data: '30 de Setembro, 2025',
      horario: '09:00h até 13:00h',
      removed: false
    },
    {
      id: 9,
      titulo: 'Curso de Finanças Pessoais',
      categoria: 'Finanças',
      data: '02 de Outubro, 2025',
      horario: '19:00h até 21:00h',
      removed: false
    },
    {
      id: 10,
      titulo: 'Palestra de Sustentabilidade',
      categoria: 'Meio Ambiente',
      data: '05 de Outubro, 2025',
      horario: '15:00h até 17:00h',
      removed: false
    },
    {
      id: 11,
      titulo: 'Treinamento em Excel Avançado',
      categoria: 'Tecnologia',
      data: '08 de Outubro, 2025',
      horario: '08:00h até 12:00h',
      removed: false
    },
    {
      id: 12,
      titulo: 'Workshop de Comunicação',
      categoria: 'Desenvolvimento Pessoal',
      data: '10 de Outubro, 2025',
      horario: '14:00h até 17:00h',
      removed: false
    }
  ];

  useEffect(() => {
    // Simular carregamento de dados
    setLoading(true);
    setTimeout(() => {
      setAtividades(dadosMockados);
      setLoading(false);
    }, 1000);
  }, []);

  const handleRemoveAtividade = async (id) => {
    try {
      // Encontrar a atividade
      const atividade = atividades.find(a => a.id === id);
      
      // Marcar como removida (soft delete)
      setAtividades(prev => 
        prev.map(atividade => 
          atividade.id === id 
            ? { ...atividade, removed: true }
            : atividade
        )
      );
      
      message.warning(`"${atividade.titulo}" foi marcada para remoção. Clique no botão + para restaurar.`);
    } catch (error) {
      message.error('Erro ao remover atividade. Tente novamente.');
    }
  };

  const handleRestoreAtividade = async (id) => {
    try {
      // Encontrar a atividade
      const atividade = atividades.find(a => a.id === id);
      
      // Restaurar atividade
      setAtividades(prev => 
        prev.map(atividade => 
          atividade.id === id 
            ? { ...atividade, removed: false }
            : atividade
        )
      );
      
      message.success(`"${atividade.titulo}" foi restaurada com sucesso!`);
    } catch (error) {
      message.error('Erro ao restaurar atividade. Tente novamente.');
    }
  };

  // Contar apenas atividades não removidas
  const atividadesAtivas = atividades.filter(a => !a.removed).length;

  return (
    <>
      <HeaderLoggedUser />
      <Container>
        <VoltarLink />
        <Content>  
          <AtividadesHeader totalAtividades={atividadesAtivas} />
          
          <AtividadesTable 
            atividades={atividades}
            onRemoveAtividade={handleRemoveAtividade}
            onRestoreAtividade={handleRestoreAtividade}
            loading={loading}
          />
        </Content>
      </Container>
    </>
  );
};

export default MinhasAtividades;