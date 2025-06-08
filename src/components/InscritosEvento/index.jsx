import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Input, 
  Table, 
  Tag, 
  Button, 
  Typography, 
  Space,
  Pagination
} from "antd";
import { 
  ArrowLeftOutlined, 
  SearchOutlined, 
  UserOutlined 
} from "@ant-design/icons";
import {
  PageContainer,
  Header,
  BackButton,
  Title,
  EventInfo,
  EventTitle,
  EventDetails,
  LocationInfo,
  StatsContainer,
  StatsCard,
  StatsNumber,
  StatsLabel,
  SearchContainer,
  TableContainer,
  PaginationContainer
} from "./style";

const { Search } = Input;
const { Text } = Typography;

export default function InscritosEvento() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Dados mockados dos inscritos
  const inscritosData = [
    {
      key: 1,
      nome: "João Silva",
      email: "joao.silva@email.com",
      status: "Inscrito"
    },
    {
      key: 2,
      nome: "Maria Santos",
      email: "maria.santos@email.com",
      status: "Inscrito"
    },
    {
      key: 3,
      nome: "Pedro Oliveira",
      email: "pedro.oliveira@email.com",
      status: "Inscrito"
    },
    {
      key: 4,
      nome: "Ana Costa",
      email: "ana.costa@email.com",
      status: "Inscrito"
    },
    {
      key: 5,
      nome: "Carlos Ferreira",
      email: "carlos.ferreira@email.com",
      status: "Inscrito"
    },
    // Adicione mais dados conforme necessário
  ];

  // Filtrar dados baseado na pesquisa
  const filteredData = inscritosData.filter(
    (inscrito) =>
      inscrito.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inscrito.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Colunas da tabela
  const columns = [
    {
      title: 'Participante',
      dataIndex: 'nome',
      key: 'nome',
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text) => <Text type="secondary">{text}</Text>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      align: 'right',
      render: (status) => (
        <Tag color="green" style={{ borderRadius: '12px', padding: '4px 12px' }}>
          {status}
        </Tag>
      ),
    },
  ];

  const handleBack = () => {
    navigate('/eventadm');
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset para primeira página ao pesquisar
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <PageContainer>
      <Header>
        <BackButton onClick={handleBack}>
          <ArrowLeftOutlined />
          <span>Voltar</span>
        </BackButton>
      </Header>

      <Title>Inscritos no Evento </Title>

      <EventInfo>
        <div>
          <EventTitle>Educação 1</EventTitle>
          <EventDetails>Palestra da Educação 2025</EventDetails>
          <LocationInfo>
            <span>📍 Sala 2 - Setor 1</span>
          </LocationInfo>
        </div>

        <StatsContainer>
          <StatsCard>
            <UserOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
            <div>
              <StatsNumber>45</StatsNumber>
              <StatsLabel>Total de Inscritos</StatsLabel>
            </div>
          </StatsCard>
        </StatsContainer>
      </EventInfo>

      <SearchContainer>
        <Search
          placeholder="Buscar Participante"
          allowClear
          onSearch={handleSearch}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ maxWidth: 400 }}
          prefix={<SearchOutlined />}
        />
      </SearchContainer>

      <TableContainer>
        <Table
          columns={columns}
          dataSource={filteredData.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
          )}
          pagination={false}
          bordered={false}
          rowClassName="table-row"
        />
      </TableContainer>

      <PaginationContainer>
        <Pagination
          current={currentPage}
          total={filteredData.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
          showQuickJumper={false}
          showTotal={(total, range) => 
            `${range[0]}-${range[1]} de ${total} inscritos`
          }
        />
      </PaginationContainer>
    </PageContainer>
  );
}