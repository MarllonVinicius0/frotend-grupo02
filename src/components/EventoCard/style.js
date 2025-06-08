// components/EventoCard/style.js
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 1.5fr 120px;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  opacity: ${props => props.$removed ? 0.9 : 1};
  background-color: ${props => props.$removed ? '#f5f5f5' : 'transparent'};

  &:hover {
    background-color: ${props => props.$removed ? '#f0f0f0' : '#fafafa'};
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 16px;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.$removed ? '#bfbfbf' : '#262626'};
  margin: 0;
  text-decoration: ${props => props.$removed ? 'line-through' : 'none'};
  transition: all 0.3s ease;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: ${props => props.$removed ? '#d9d9d9' : '#8c8c8c'};
  margin: 0;
  text-decoration: ${props => props.$removed ? 'line-through' : 'none'};
  transition: all 0.3s ease;
`;

export const DateSection = styled.div`
  font-size: 14px;
  color: ${props => props.$removed ? '#d9d9d9' : '#595959'};
  text-decoration: ${props => props.$removed ? 'line-through' : 'none'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    order: 1;
  }
`;

export const TimeSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${props => props.$removed ? '#d9d9d9' : '#595959'};
  text-decoration: ${props => props.$removed ? 'line-through' : 'none'};
  transition: all 0.3s ease;

  .anticon {
    color: ${props => props.$removed ? '#d9d9d9' : '#1890ff'};
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    order: 2;
  }
`;

export const ActionsSection = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    order: 3;
    justify-content: flex-start;
  }
`;

export const ActionButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
  background-color: ${props => props.variant === 'add' ? '#52c41a' : '#ff4d4f'};
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  .anticon {
    font-size: 14px;
    color: #fff;
  }

  &:hover {
    ${props => props.variant === 'add' 
      ? 'background-color: #73d13d; border-color: #73d13d;'
      : 'background-color: #ff7875; border-color: #ff7875;'
    }
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.variant === 'add' ? 'rgba(82, 196, 26, 0.2)' : 'rgba(255, 77, 79, 0.2)'};
  }
`;