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

import dayjs from 'dayjs';

const { TextArea } = Input;

export default function EventActivitiesCard({ dataInicioEvento, dataFimEvento, atividadesIniciais = [] }) {
  const [atividades, setAtividades] = useState(atividadesIniciais);

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

    if (dataInicio.isAfter(dataFim)) {
      message.error("A data de início não pode ser posterior à data de término!");
      return;
    }

    if (dataInicio.isSame(dataFim, 'day')) {
      if (horaInicio.isAfter(horaFim) || horaInicio.isSame(horaFim)) {
        message.error("O horário de início deve ser anterior ao horário de término!");
        return;
      }
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
    message.success("Atividade adicionada com sucesso!");
  };

  const handleRemove = (id) => {
    setAtividades(atividades.filter((a) => a.id !== id));
    message.success("Atividade removida com sucesso!");
  };

  const handleCapacidadeChange = (e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 0 && !isNaN(value))) {
      setNova({ ...nova, capacidade: value });
    }
  };

  const handleDataInicioChange = (date) => {
    setNova((prev) => ({
      ...prev,
      dataInicio: date,
      dataFim: prev.dataFim && date && date.isAfter(prev.dataFim) ? null : prev.dataFim
    }));

    if (nova.dataFim && date && date.isAfter(nova.dataFim)) {
      message.warning('Data de fim foi limpa pois era anterior à nova data de início.');
    }
  };

  const handleDataFimChange = (date) => {
    if (nova.dataInicio && date && date.isBefore(nova.dataInicio)) {
      message.error('A data de término deve ser posterior ou igual à data de início!');
      return;
    }
    setNova({ ...nova, dataFim: date });
  };

  const handleHoraInicioChange = (time) => {
    setNova((prev) => ({
      ...prev,
      horaInicio: time,
      horaFim:
        prev.dataInicio &&
        prev.dataFim &&
        prev.dataInicio.isSame(prev.dataFim, 'day') &&
        prev.horaFim &&
        (time.isAfter(prev.horaFim) || time.isSame(prev.horaFim))
          ? null
          : prev.horaFim
    }));

    if (
      nova.dataInicio &&
      nova.dataFim &&
      nova.dataInicio.isSame(nova.dataFim, 'day') &&
      nova.horaFim &&
      time &&
      (time.isAfter(nova.horaFim) || time.isSame(nova.horaFim))
    ) {
      message.warning('Horário de término foi limpo pois era anterior ou igual ao novo horário de início.');
    }
  };

  const handleHoraFimChange = (time) => {
    if (
      nova.dataInicio &&
      nova.dataFim &&
      nova.dataInicio.isSame(nova.dataFim, 'day') &&
      nova.horaInicio &&
      time &&
      (time.isBefore(nova.horaInicio) || time.isSame(nova.horaInicio))
    ) {
      message.error('O horário de término deve ser posterior ao horário de início!');
      return;
    }

    setNova({ ...nova, horaFim: time });
  };

  // Corrigido: evita quebra ao acessar props nulas
  const disabledDataInicio = (current) => {
    const today = dayjs().startOf('day');
    const beforeStart = dataInicioEvento && current.isBefore(dayjs(dataInicioEvento), 'day');
    const afterEnd = dataFimEvento && current.isAfter(dayjs(dataFimEvento), 'day');
    return current && (current.isBefore(today) || beforeStart || afterEnd);
  };

  const disabledDataFim = (current) => {
    if (!nova.dataInicio) return true;
    const beforeActivityStart = current.isBefore(nova.dataInicio, 'day');
    const afterEventEnd = dataFimEvento && current.isAfter(dayjs(dataFimEvento), 'day');
    return current && (beforeActivityStart || afterEventEnd);
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
                    {a.dataInicio?.format("DD/MM/YYYY")}
                    {a.dataFim && !a.dataInicio.isSame(a.dataFim, 'day') &&
                      ` - ${a.dataFim.format("DD/MM/YYYY")}`}
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
            <StyledForm.Item label="dd/mm/aaaa" className="date-label">
              <DatePicker
                style={{ width: "100%" }}
                value={nova.dataInicio}
                onChange={handleDataInicioChange}
                placeholder="dd/mm/aaaa"
                format="DD/MM/YYYY"
                disabledDate={disabledDataInicio}
              />
              <div className="date-hint">data de início</div>
            </StyledForm.Item>

            <StyledForm.Item label="dd/mm/aaaa" className="date-label">
              <DatePicker
                style={{ width: "100%" }}
                value={nova.dataFim}
                onChange={handleDataFimChange}
                placeholder="dd/mm/aaaa"
                format="DD/MM/YYYY"
                disabledDate={disabledDataFim}
                disabled={!nova.dataInicio}
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
                onChange={handleHoraInicioChange}
                placeholder="Horário de Início"
                format="HH:mm"
              />
            </StyledForm.Item>

            <StyledForm.Item label="Horário de Término">
              <TimePicker
                style={{ width: "100%" }}
                value={nova.horaFim}
                onChange={handleHoraFimChange}
                placeholder="Horário de Término"
                format="HH:mm"
                disabled={!nova.horaInicio || (!nova.dataInicio || !nova.dataFim)}
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
