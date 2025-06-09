import styled from 'styled-components';
import { Card } from 'antd';

export const PageWrapper = styled.div`
  background-color: #f0f2f5; // Cor de fundo padrão do Ant Design
  min-height: 100vh;
`;

export const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

export const EventHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
`;

export const InfoCard = styled(Card)`
  .ant-card-head-title {
    font-weight: bold;
  }
`;

export const StatsCard = styled(Card)`
  .ant-card-body {
    padding: 20px 24px;
  }

  .icon-wrapper {
    background-color: #e6f7ff; // Azul claro do Ant Design
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #1890ff; // Azul primário do Ant Design
  }
`;