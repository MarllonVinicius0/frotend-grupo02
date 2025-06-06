import styled from "styled-components";
import { Card, Typography, Form, Input, Select, Upload } from "antd";

const { Title } = Typography;

export const FormContainer = styled.div`
  flex: 1;
  min-width: 450px;
  max-width: 600px;
`;

export const StyledCard = styled(Card)`
  &.ant-card {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border: 1px solid #f0f0f0;

    .ant-card-body {
      padding: 2.5rem;
    }
  }
`;

export const StyledTitle = styled(Title)`
  && {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #333;
    display: flex;
    align-items: center;
  }
`;

export const StyledForm = styled(Form)`
  width: 100%;

  .ant-form-item-label > label {
    font-weight: 500;
    color: #333;
    font-size: 14px;
  }
`;

export const StyledInput = styled(Input)`
  && {
    height: 45px;
    border-radius: 6px;
    border: 1px solid #d9d9d9;
    font-size: 14px;
    
    &:focus,
    &:hover {
      border-color: #52C0E7;
    }
  }
`;

export const StyledTextArea = styled(Input.TextArea)`
  && {
    border-radius: 6px;
    border: 1px solid #d9d9d9;
    
    &:focus,
    &:hover {
      border-color: #52C0E7;
    }
  }
`;

export const StyledSelect = styled(Select)`
  && {
    width: 100%;
    
    .ant-select-selector {
      height: 45px !important;
      border-radius: 6px;
      border: 1px solid #d9d9d9;
      
      &:focus,
      &:hover {
        border-color: #52C0E7;
      }
    }
  }
`;

export const StyledUpload = styled(Upload)`
  && {
    display: block;
    padding: 0.5rem 0;
  }
`;

export const UploadArea = styled.div`
  width: 100%;
  height: 150px;
  border: 2px dashed #d9d9d9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #52C0E7;
    background-color: #f6f8ff;
  }
`;

export const TwoColumn = styled.div`
  display: flex;
  gap: 1rem;

  > * {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;