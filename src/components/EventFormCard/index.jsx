import React from "react";
import {
  FormContainer,
  StyledCard,
  StyledTitle,
  StyledForm,
  StyledInput,
  StyledTextArea,
  TwoColumn,
  StyledSelect,
  StyledUpload,
  UploadArea
} from "./style";

import {
  UploadOutlined,
  EnvironmentOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined
} from "@ant-design/icons";

import {
  Button,
  DatePicker,
  message
} from "antd";

import dayjs from 'dayjs';

export default function EventFormCard({
  dataInicio,
  dataFim,
  setDataInicio,
  setDataFim,
  evento = {}
}) {
  const [uploadedFile, setUploadedFile] = React.useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        message.error('Por favor, selecione apenas arquivos de imagem!');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        message.error('O arquivo deve ter no máximo 5MB!');
        return;
      }

      setUploadedFile(file);
      message.success('Imagem carregada com sucesso!');
    }
  };

  const handleUploadClick = () => {
    document.getElementById('image-upload-input').click();
  };

  const handleDataInicioChange = (date) => {
    setDataInicio(date);
    if (dataFim && date && date.isAfter(dataFim)) {
      setDataFim(null);
      message.warning('Data de fim foi limpa pois era anterior à nova data de início.');
    }
  };

  const handleDataFimChange = (date) => {
    if (dataInicio && date && date.isBefore(dataInicio)) {
      message.error('A data de término deve ser posterior à data de início!');
      return;
    }

    if (dataInicio && date && date.isSame(dataInicio, 'day')) {
      message.warning('A data de término é igual à data de início. Certifique-se de que os horários estejam corretos.');
    }

    setDataFim(date);
  };

  const disabledDataInicio = (current) => {
    return current && current.isBefore(dayjs().startOf('day'));
  };

  const disabledDataFim = (current) => {
    if (!dataInicio) return false;
    return current && current.isBefore(dataInicio, 'day');
  };

  return (
    <FormContainer>
      <StyledCard bordered={false}>
        <StyledTitle level={4}>
          <InfoCircleOutlined style={{ marginRight: '8px', color: '#52C0E7' }} />
          Informações do Evento
        </StyledTitle>

        <StyledForm layout="vertical">
          <StyledForm.Item label="Imagem do Evento:">
            <UploadArea onClick={handleUploadClick}>
              {uploadedFile ? (
                <>
                  <CheckCircleOutlined style={{ fontSize: '24px', color: '#52C0E7' }} />
                  <div style={{ marginTop: '8px', color: '#52C0E7', fontSize: '14px', fontWeight: '500' }}>
                    {uploadedFile.name}
                  </div>
                  <div style={{ color: '#999', fontSize: '12px' }}>
                    Clique para alterar
                  </div>
                </>
              ) : (
                <>
                  <UploadOutlined style={{ fontSize: '24px', color: '#999' }} />
                  <div style={{ marginTop: '8px', color: '#999', fontSize: '14px' }}>IMAGEM</div>
                </>
              )}
            </UploadArea>
            <input
              id="image-upload-input"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileUpload}
            />
          </StyledForm.Item>

          <StyledForm.Item label="Nome do Evento">
            <StyledInput
              defaultValue={evento.nome}
              placeholder="Ex: Conferência de Tecnologia 2024"
            />
          </StyledForm.Item>

          <TwoColumn>
            <StyledForm.Item label="Data de Início">
              <DatePicker
                style={{ width: "100%" }}
                placeholder="dd/mm/aaaa"
                format="DD/MM/YYYY"
                value={dataInicio}
                onChange={handleDataInicioChange}
                disabledDate={disabledDataInicio}
              />
            </StyledForm.Item>

            <StyledForm.Item label="Data de Término">
              <DatePicker
                style={{ width: "100%" }}
                placeholder="dd/mm/aaaa"
                format="DD/MM/YYYY"
                value={dataFim}
                onChange={handleDataFimChange}
                disabledDate={disabledDataFim}
                disabled={!dataInicio}
              />
            </StyledForm.Item>
          </TwoColumn>

          <StyledForm.Item label="Local">
            <StyledInput
              defaultValue={evento.local}
              placeholder="Endereço do evento"
              prefix={<EnvironmentOutlined style={{ color: '#999' }} />}
            />
          </StyledForm.Item>

          <StyledForm.Item label="Categoria">
            <StyledSelect defaultValue={evento.categoria} placeholder="Selecione uma categoria">
              <StyledSelect.Option value="educacao">Educação</StyledSelect.Option>
              <StyledSelect.Option value="tecnologia">Tecnologia</StyledSelect.Option>
              <StyledSelect.Option value="negocios">Negócios</StyledSelect.Option>
            </StyledSelect>
          </StyledForm.Item>

          <StyledForm.Item label="Descrição">
            <StyledTextArea
              defaultValue={evento.descricao}
              placeholder="Descreva seu evento..."
              rows={4}
            />
          </StyledForm.Item>
        </StyledForm>
      </StyledCard>
    </FormContainer>
  );
}
