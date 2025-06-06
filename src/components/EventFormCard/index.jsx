import React, { useState } from "react";
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

const { RangePicker } = DatePicker;

export default function EventFormCard() {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validar se é uma imagem
      if (!file.type.startsWith('image/')) {
        message.error('Por favor, selecione apenas arquivos de imagem!');
        return;
      }
      
      // Validar tamanho do arquivo (5MB)
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
            <StyledInput placeholder="Ex: Conferência de Tecnologia 2024" />
          </StyledForm.Item>

          <TwoColumn>
            <StyledForm.Item label="Data de Início">
              <DatePicker 
                style={{ width: "100%" }} 
                placeholder="mm/dd/yyyy"
                format="MM/DD/YYYY"
              />
            </StyledForm.Item>

            <StyledForm.Item label="Data de Término">
              <DatePicker 
                style={{ width: "100%" }} 
                placeholder="mm/dd/yyyy"
                format="MM/DD/YYYY"
              />
            </StyledForm.Item>
          </TwoColumn>

          <StyledForm.Item label="Local">
            <StyledInput
              placeholder="Endereço do evento"
              prefix={<EnvironmentOutlined style={{ color: '#999' }} />}
            />
          </StyledForm.Item>

          <StyledForm.Item label="Categoria">
            <StyledSelect placeholder="Selecione uma categoria">
              <StyledSelect.Option value="educacao">Educação</StyledSelect.Option>
              <StyledSelect.Option value="tecnologia">Tecnologia</StyledSelect.Option>
              <StyledSelect.Option value="negocios">Negócios</StyledSelect.Option>
            </StyledSelect>
          </StyledForm.Item>

          <StyledForm.Item label="Descrição">
            <StyledTextArea placeholder="Descreva seu evento..." rows={4} />
          </StyledForm.Item>
        </StyledForm>
      </StyledCard>
    </FormContainer>
  );
}