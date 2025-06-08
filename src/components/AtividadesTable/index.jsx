import React, { useState, useEffect } from 'react';
import { Input, Pagination } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import AtividadeCard from '../AtividadeCard';
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

const AtividadesTable = ({ 
  atividades, 
  onRemoveAtividade, 
  onRestoreAtividade,
  loading = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const pageSize = 5; // Reduzido para melhor demonstração da paginação

  // Filtrar atividades baseado na busca
  useEffect(() => {
    const filtered = atividades.filter(atividade =>
      atividade.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      atividade.categoria.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredActivities(filtered);
    
    // Só reseta a página se houver uma busca ativa
    // Não reseta quando as atividades mudam por remoção/restauração
    if (searchTerm) {
      setCurrentPage(1);
    }
  }, [atividades, searchTerm]);

  // Calcular atividades para a página atual
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageActivities = filteredActivities.slice(startIndex, endIndex);

  const handleSearch = (value) => {
    setSearchTerm(value);
    // Reseta para primeira página apenas quando há uma nova busca
    setCurrentPage(1);
  };

  const handlePageChange = (page, size) => {
    setCurrentPage(page);
  };

  const handleShowSizeChange = (current, size) => {
    setCurrentPage(1);
    // Aqui você pode implementar mudança do pageSize se necessário
  };

  return (
    <Container>
      <SearchContainer>
        <Search
          placeholder="Buscar Atividade"
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
          <HeaderItem>Atividades</HeaderItem>
          <HeaderItem>Data da Atividade</HeaderItem>
          <HeaderItem>Horário</HeaderItem>
          <HeaderItem>Ações</HeaderItem>
        </TableHeader>
        
        <TableBody>
          {currentPageActivities.length > 0 ? (
            currentPageActivities.map((atividade) => (
              <AtividadeCard
                key={atividade.id}
                atividade={atividade}
                onRemove={onRemoveAtividade}
                onRestore={onRestoreAtividade}
              />
            ))
          ) : (
            <EmptyState>
              {loading ? 'Carregando atividades...' : 
               searchTerm ? 'Nenhuma atividade encontrada para sua busca.' : 
               'Nenhuma atividade encontrada.'}
            </EmptyState>
          )}
        </TableBody>
      </TableContainer>

      {filteredActivities.length > 0 && (
        <PaginationContainer>
          <Pagination
            current={currentPage}
            total={filteredActivities.length}
            pageSize={pageSize}
            onChange={handlePageChange}
            onShowSizeChange={handleShowSizeChange}
            showSizeChanger={false}
            showQuickJumper={true}
            showTotal={(total, range) => 
              `${range[0]}-${range[1]} de ${total} atividades`
            }
            pageSizeOptions={['5', '10', '20', '50']}
          />
        </PaginationContainer>
      )}
    </Container>
  );
};

export default AtividadesTable;