import styled from "styled-components";
import { Button } from "antd";

export const ActivityItem = styled.div`
  padding: 2rem 1.5rem;
  border-left: 4px solid #1FA0EA;
  border-bottom: 1px solid #f0f0f0;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f8f9fa;
  }
`;

export const ActivityTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #222;
  flex: 1;
`;

export const ActivityActions = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const ActionButton = styled(Button)`
  &.ant-btn-primary {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    
    ${props => props.$variant === 'add' && `
      background-color: #52c41a;
      border-color: #52c41a;
      
      &:hover {
        background-color: #73d13d !important;
        border-color: #73d13d !important;
      }
    `}
    
    ${props => props.$variant === 'remove' && `
      background-color: #ff4d4f;
      border-color: #ff4d4f;
      
      &:hover {
        background-color: #ff7875 !important;
        border-color: #ff7875 !important;
      }
    `}
    
    .anticon {
      font-size: 14px;
    }
  }
`;