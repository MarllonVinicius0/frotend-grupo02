import styled from "styled-components";
import { Card, Typography, Form, Button } from "antd";

const { Title } = Typography;

export const Container = styled.div`
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

export const ActivityList = styled.div`
  margin-bottom: 2rem;
`;

export const ActivityItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #ffffff;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

export const ActivityInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  .activity-title {
    font-size: 0.95rem;
    font-weight: 500;
    color: #333;
    margin-bottom: 4px;
  }
  
  .activity-date {
    font-size: 0.85rem;
    color: #666;
  }
`;

export const ActivityActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  .edit-btn {
    color: #666;
    padding: 0;
    font-size: 14px;
    
    &:hover {
      color: #52C0E7;
    }
  }
  
  .remove-btn {
    color: #ff4d4f;
    padding: 0;
    font-size: 14px;
    
    &:hover {
      color: #ff7875;
    }
  }
`;

export const StyledForm = styled(Form)`
  width: 100%;

  .ant-form-item-label > label {
    font-weight: 500;
    color: #333;
    font-size: 14px;
  }
  
  .date-label .ant-form-item-label > label {
    color: #999;
    font-size: 13px;
  }
  
  .date-hint {
    font-size: 12px;
    color: #999;
    margin-top: 4px;
  }
  
  .ant-input,
  .ant-picker,
  .ant-input-number {
    border-radius: 6px;
    border: 1px solid #d9d9d9;
    height: 40px;
    font-size: 14px;
    
    &:focus,
    &:hover {
      border-color: #52C0E7;
    }
  }
  
  .ant-picker {
    height: 40px;
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

export const AddButton = styled(Button)`
  && {
    margin-top: 1rem;
    font-weight: 600;
    background-color: #52C0E7;
    border-color: #52C0E7;
    border-radius: 6px;
    height: 45px;
    font-size: 15px;
    
    &:hover {
      background-color: #47a3c7;
      border-color: #47a3c7;
    }
  }
`;