// components/EventosTable/index.jsx
import React, { useState, useEffect } from 'react';
import { Input, Pagination } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import EventoCard from '../EventoCard';
import { 
  Container, 
  SearchContainer, 
  TableContainer, 
  TableHeader, 
  HeaderItem, 
  TableBody, 
  PaginationContainer,
  EmptyState 
} from './style';

const { Search } = Input;

const EventosTable = ({ 
  eventos, 
  onRemoveEvento, 
  onRestoreEvento,
  loading = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const pageSize = 3; // Menor número já que eventos são menos frequentes que atividades

  // Filtrar eventos baseado na busca
  useEffect(() => {
    const filtered = eventos.filter(evento =>
      evento.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evento.categoria.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
    
    // Só reseta a página se houver uma busca ativa
    if (searchTerm) {
      setCurrentPage(1);
    }
  }, [eventos, searchTerm]);

  // Calcular eventos para a página atual
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageEvents = filteredEvents.slice(startIndex, endIndex);

  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page, size) => {
    setCurrentPage(page);
  };

  const handleShowSizeChange = (current, size) => {
    setCurrentPage(1);
  };

  return (
    <Container>
      <SearchContainer>
        <Search
          placeholder="Buscar Evento"
          allowClear
          enterButton={<SearchOutlined />}
          size="large"
          onSearch={handleSearch}
          onChange={(e) => !e.target.value && handleSearch('')}
          style={{ maxWidth: 400 }}
          loading={loading}
        />
      </SearchContainer>

      <TableContainer>
        <TableHeader>
          <HeaderItem>Evento</HeaderItem>
          <HeaderItem>Data do Evento</HeaderItem>
          <HeaderItem>Horário</HeaderItem>
          <HeaderItem>Ações</HeaderItem>
        </TableHeader>
        
        <TableBody>
          {currentPageEvents.length > 0 ? (
            currentPageEvents.map((evento) => (
              <EventoCard
                key={evento.id}
                evento={evento}
                onRemove={onRemoveEvento}
                onRestore={onRestoreEvento}
              />
            ))
          ) : (
            <EmptyState>
              {loading ? 'Carregando eventos...' : 
               searchTerm ? 'Nenhum evento encontrado para sua busca.' : 
               'Nenhum evento encontrado.'}
            </EmptyState>
          )}
        </TableBody>
      </TableContainer>

      {filteredEvents.length > 0 && (
        <PaginationContainer>
          <Pagination
            current={currentPage}
            total={filteredEvents.length}
            pageSize={pageSize}
            onChange={handlePageChange}
            onShowSizeChange={handleShowSizeChange}
            showSizeChanger={false}
            showQuickJumper={true}
            showTotal={(total, range) => 
              `${range[0]}-${range[1]} de ${total} eventos`
            }
          />
        </PaginationContainer>
      )}
    </Container>
  );
};

export default EventosTable;