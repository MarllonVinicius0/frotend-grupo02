import React, { useState } from "react";
import {
  Container,
  StyledCard,
  StyledTitle,
  ActivityList,
  ActivityItem,
  ActivityInfo,
  ActivityActions,
  StyledForm,
  TwoColumn,
  AddButton,
} from "./style";

import {
  Button,
  DatePicker,
  Input,
  TimePicker,
  Space,
  Popconfirm,
  Typography,
  message,
  Empty
} from "antd";

import {
  ClockCircleOutlined
} from "@ant-design/icons";

const { TextArea } = Input;

export default function EventActivitiesCard() {
  const [atividades, setAtividades] = useState([

  ]);
  
  const [nova, setNova] = useState({
    titulo: "",
    dataInicio: null,
    dataFim: null,
    descricao: "",
    horaInicio: null,
    horaFim: null,
    capacidade: ""
  });

  const handleAdd = () => {
    const { titulo, dataInicio, dataFim, descricao, horaInicio, horaFim, capacidade } = nova;
    if (!titulo || !dataInicio || !dataFim || !descricao || !horaInicio || !horaFim || !capacidade) {
      message.warning("Preencha todos os campos da atividade.");
      return;
    }

    setAtividades([...atividades, { ...nova, id: Date.now() }]);
    setNova({
      titulo: "",
      dataInicio: null,
      dataFim: null,
      descricao: "",
      horaInicio: null,
      horaFim: null,
      capacidade: ""
    });
  };

  const handleRemove = (id) => {
    setAtividades(atividades.filter((a) => a.id !== id));
  };

  const handleCapacidadeChange = (e) => {
    const value = e.target.value;
    // Permite apenas números positivos ou campo vazio
    if (value === "" || (Number(value) >= 0 && !isNaN(value))) {
      setNova({ ...nova, capacidade: value });
    }
  };

  return (
    <Container>
      <StyledCard bordered={false}>
        <StyledTitle level={4}>
          <ClockCircleOutlined style={{ marginRight: '8px', color: '#52C0E7' }} />
          Atividades do Evento
        </StyledTitle>

        <ActivityList>
          {atividades.length > 0 ? (
            atividades.map((a) => (
              <ActivityItem key={a.id}>
                <ActivityInfo>
                  <div className="activity-title">{a.titulo}</div>
                  <Typography.Text type="secondary" className="activity-date">
                    {a.dataInicio?.format ? a.dataInicio.format("DD/MM/YY") : a.dataInicio}
                  </Typography.Text>
                </ActivityInfo>
                <ActivityActions>
                  <Button type="link" className="edit-btn">Editar</Button>
                  <Popconfirm
                    title="Remover esta atividade?"
                    onConfirm={() => handleRemove(a.id)}
                    okText="Sim"
                    cancelText="Não"
                  >
                    <Button type="link" danger className="remove-btn">Remover</Button>
                  </Popconfirm>
                </ActivityActions>
              </ActivityItem>
            ))
          ) : (
            <Empty description="Nenhuma atividade adicionada ainda." />
          )}
        </ActivityList>

        <div style={{ marginBottom: '1rem', fontSize: '16px', fontWeight: '500', color: '#333' }}>
          Adicionar Atividade
        </div>

        <StyledForm layout="vertical">
          <StyledForm.Item label="Nome da atividade">
            <Input
              value={nova.titulo}
              onChange={(e) => setNova({ ...nova, titulo: e.target.value })}
              placeholder="Nome da atividade"
            />
          </StyledForm.Item>

          <TwoColumn>
            <StyledForm.Item label="mm/dd/yyyy" className="date-label">
              <DatePicker
                style={{ width: "100%" }}
                value={nova.dataInicio}
                onChange={(date) => setNova({ ...nova, dataInicio: date })}
                placeholder="mm/dd/yyyy"
                format="MM/DD/YYYY"
              />
              <div className="date-hint">data de início</div>
            </StyledForm.Item>

            <StyledForm.Item label="mm/dd/yyyy" className="date-label">
              <DatePicker
                style={{ width: "100%" }}
                value={nova.dataFim}
                onChange={(date) => setNova({ ...nova, dataFim: date })}
                placeholder="mm/dd/yyyy"
                format="MM/DD/YYYY"
              />
              <div className="date-hint">data de fim</div>
            </StyledForm.Item>
          </TwoColumn>

          <StyledForm.Item label="Descrição da atividade...">
            <TextArea
              rows={3}
              value={nova.descricao}
              onChange={(e) => setNova({ ...nova, descricao: e.target.value })}
              placeholder="Descrição da atividade..."
            />
          </StyledForm.Item>

          <TwoColumn>
            <StyledForm.Item label="Horário de Início">
              <TimePicker
                style={{ width: "100%" }}
                value={nova.horaInicio}
                onChange={(time) => setNova({ ...nova, horaInicio: time })}
                placeholder="Horário de Início"
              />
            </StyledForm.Item>

            <StyledForm.Item label="Horário de Término">
              <TimePicker
                style={{ width: "100%" }}
                value={nova.horaFim}
                onChange={(time) => setNova({ ...nova, horaFim: time })}
                placeholder="Horário de Término"
              />
            </StyledForm.Item>
          </TwoColumn>

          <StyledForm.Item label="Capacidade">
            <Input
              type="number"
              min="0"
              value={nova.capacidade}
              onChange={handleCapacidadeChange}
              placeholder="Capacidade"
            />
          </StyledForm.Item>

          <AddButton type="primary" block onClick={handleAdd}>
            + Adicionar Atividade
          </AddButton>
        </StyledForm>
      </StyledCard>
    </Container>
  );
}