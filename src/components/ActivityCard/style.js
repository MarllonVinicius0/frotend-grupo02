import styled from "styled-components";
import { Button } from "antd";

export const ActivityItem = styled.div`
  padding: 2rem 1.5rem;
  border-left: 4px solid #1FA0EA;
  border-bottom: 1px solid #f0f0f0;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f8f9fa;
  }
`;

export const ActivityContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ActivityTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 0.5rem;
`;

export const ActivityInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #1FA0EA;
  
  .anticon {
    font-size: 14px;
  }
  
  span {
    color: #666;
  }
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
    border-radius: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition: all 0.3s ease;
    
    ${props => props.$variant === 'add' && `
      background-color: ${props.$isSelected ? '#389e0d' : 'rgba(82, 196, 26, 0.4)'};
      border-color: ${props.$isSelected ? '#389e0d' : 'rgba(82, 196, 26, 0.4)'};
      opacity: ${props.$isSelected ? '1' : '0.7'};
      
      &:hover {
        background-color: ${props.$isSelected ? '#237804' : 'rgba(115, 209, 61, 0.6)'} !important;
        border-color: ${props.$isSelected ? '#237804' : 'rgba(115, 209, 61, 0.6)'} !important;
        opacity: 1 !important;
      }
    `}
    
    ${props => props.$variant === 'remove' && `
      background-color: rgba(255, 77, 79, 0.4);
      border-color: rgba(255, 77, 79, 0.4);
      opacity: 0.7;
      
      &:hover {
        background-color: rgba(255, 120, 117, 0.6) !important;
        border-color: rgba(255, 120, 117, 0.6) !important;
        opacity: 1 !important;
      }
    `}
    
    .anticon {
      font-size: 14px;
    }
  }
`;