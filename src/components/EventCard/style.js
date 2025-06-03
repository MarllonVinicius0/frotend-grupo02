import styled from "styled-components";
import { Card } from "antd";

export const StyledCard = styled(Card)`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: white;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .ant-card-cover img {
    height: 180px;
    object-fit: cover;
    width: 100%;
  }

  .ant-card-body {
    padding: 16px;
    background: white;
  }
`;

export const EventInfo = styled.div`
  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #333;
    margin: 0 0 8px 0;
    line-height: 1.3;
  }

  .ant-typography {
    display: block;
    font-size: 0.85rem;
    color: #666;
    line-height: 1.4;
    margin-bottom: 4px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;