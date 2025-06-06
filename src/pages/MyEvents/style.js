import styled from 'styled-components';
import { Card, Button } from 'antd';

export const Container = styled.div`
  padding: 24px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
`;

export const StatCard = styled(Card)`
  flex: 1;
  .ant-card-body {
    padding: 16px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

export const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color || '#1890ff'};
  color: white;
  font-size: 18px;
`;

export const StatContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatNumber = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #262626;
  line-height: 1;
`;

export const StatLabel = styled.div`
  font-size: 14px;
  color: #8c8c8c;
  margin-top: 4px;
`;

export const SearchContainer = styled.div`
  margin-bottom: 24px;
`;

export const TableContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

export const ActionButton = styled(Button)`
  border: none;
  box-shadow: none;
  padding: 4px 8px;
  height: auto;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  padding: 16px;
  background: white;
  border-radius: 8px;
`;