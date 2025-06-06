import React, { useState } from "react";
import { Button, Input, Table, Space, Typography, Pagination } from "antd";
import {
  SearchOutlined,
  CalendarOutlined,
  TeamOutlined,
  EditOutlined,
  DeleteOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import {
  Container,
  Header,
  HeaderLeft,
  StatsContainer,
  StatCard,
  StatIcon,
  StatContent,
  StatNumber,
  StatLabel,
  SearchContainer,
  TableContainer,
  ActionButton,
  PaginationContainer,
} from "./style";
import HeaderLoggedUser from "../../components/HeaderLoggedUser";

const { Title, Text } = Typography;

function MyEvents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Exemplo de dados (substitua por dados da API futuramente)
  const data = [
    {
      key: "1",
      evento: "Palestra de Educação 2025",
      data: "1º de Setembro, 2025",
      participantes: 120,
    },
  ];

  const columns = [
    {
      title: "Evento",
      dataIndex: "evento",
      key: "evento",
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: "Data do Evento",
      dataIndex: "data",
      key: "data",
      render: (text) => <Text>{text}</Text>,
    },
    {
      title: "Participantes",
      dataIndex: "participantes",
      key: "participantes",
      render: (num) => <Text>{num}</Text>,
    },
    {
      title: "Ações",
      key: "acoes",
      render: () => (
        <Space size="small">
          <ActionButton type="text" icon={<EditOutlined />} size="small" /> 
          <ActionButton type="text" icon={<CopyOutlined />} size="small" />
          <ActionButton
            type="text"
            icon={<DeleteOutlined />}
            size="small"
            danger
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <HeaderLoggedUser />
      <Container>
        <Header>
          <HeaderLeft>
            <Title level={2} style={{ margin: 0, marginBottom: 8 }}>
              Meus Eventos
            </Title>
            <Text type="secondary">Gerencie todos os seus eventos criados</Text>
          </HeaderLeft>
          <Button type="primary" size="large" href="/organize-evento">
            Criar Novo Evento
          </Button>
        </Header>

        <StatsContainer>
          <StatCard>
            <StatIcon color="#52c41a">
              <CalendarOutlined />
            </StatIcon>
            <StatContent>
              <StatNumber>1</StatNumber>
              <StatLabel>Total de Eventos</StatLabel>
            </StatContent>
          </StatCard>
          <StatCard>
            <StatIcon color="#1890ff">
              <TeamOutlined />
            </StatIcon>
            <StatContent>
              <StatNumber>847</StatNumber>
              <StatLabel>Total de Inscrições</StatLabel>
            </StatContent>
          </StatCard>
        </StatsContainer>

        <SearchContainer>
          <Input
            placeholder="Buscar Evento"
            prefix={<SearchOutlined />}
            size="large"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ maxWidth: 400 }}
          />
        </SearchContainer>

        <TableContainer>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            size="large"
            style={{ borderRadius: "8px" }}
          />
        </TableContainer>

        <PaginationContainer>
          <Pagination
            current={currentPage}
            total={1}
            pageSize={10}
            onChange={setCurrentPage}
            showSizeChanger={false}
            showQuickJumper={false}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} de ${total} itens`
            }
          />
        </PaginationContainer>
      </Container>
    </>
  );
}

export default MyEvents;
