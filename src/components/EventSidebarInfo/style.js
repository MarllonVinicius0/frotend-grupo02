import styled from "styled-components";
import { Card, Button, Typography } from "antd";

const { Text } = Typography;

export const SidebarBox = styled.div`
  width: 400px;
  flex-shrink: 0;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 2rem 0 0 0;
  }
`;

export const StyledCard = styled(Card)`
  &.ant-card {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
    border-radius: 12px;
    
    .ant-card-body {
      padding: 1.5rem;
    }
  }
`;

export const StyledButton = styled(Button)`
  &.ant-btn-primary {
    background-color: #1674B3;
    border-color: #1674B3;
    font-weight: 700;
    font-size: 1rem;
    height: auto;
    padding: 0.75rem;
    border-radius: 8px;
    margin-bottom: 1.2rem;
    
    &:hover {
      background-color: #1FA0EA !important;
      border-color: #1FA0EA !important;
    }
  }
`;

export const InfoItem = styled.div`
  margin-top: 1.2rem;
  
  &:first-child {
    margin-top: 0;
  }
`;

export const StyledText = styled(Text)`
  &.ant-typography {
    font-size: 0.9rem;
    color: #777;
    display: block;
  }
`;

export const InfoLabel = styled(Text)`
  &.ant-typography {
    font-size: 0.9rem;
    color: #777;
  }
`;

export const InfoValue = styled(Text)`
  &.ant-typography {
    font-size: 1rem;
    font-weight: 600;
    color: #222;
    
    .anticon {
      margin-right: 8px;
      color: #777;
    }
  }
`;