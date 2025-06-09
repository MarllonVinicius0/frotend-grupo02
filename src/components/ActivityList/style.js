import styled from "styled-components";
import { Typography, Button } from "antd";

const { Title } = Typography;

export const SectionContainer = styled.section`
  width: 100%;
  margin: 2rem auto;
  padding: 0;

  @media (max-width: 768px) {
    width: 100%;
    margin: 2rem auto;
    padding: 0;
  }
`;

export const SectionTitle = styled(Title)`
  &.ant-typography {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #222;
  }
`;

export const ActivityListContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  overflow: hidden;
  margin-bottom: 2rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  
  .ant-pagination {
    .ant-pagination-item-active {
      border-color: #1FA0EA;
      
      a {
        color: #1FA0EA;
      }
    }
    
    .ant-pagination-item:hover {
      border-color: #1FA0EA;
      
      a {
        color: #1FA0EA;
      }
    }
    
    .ant-pagination-next:hover .ant-pagination-item-link,
    .ant-pagination-prev:hover .ant-pagination-item-link {
      border-color: #1FA0EA;
      color: #1FA0EA;
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

export const SubmitButton = styled(Button)`
  &.ant-btn {
    background-color: ${props => props.$hasActivities ? '#52c41a' : '#d9d9d9'};
    border-color: ${props => props.$hasActivities ? '#52c41a' : '#d9d9d9'};
    color: ${props => props.$hasActivities ? '#fff' : '#00000040'};
    font-weight: 600;
    font-size: 1rem;
    height: auto;
    padding: 0.75rem 2rem;
    border-radius: 8px;
    cursor: ${props => props.$hasActivities ? 'pointer' : 'not-allowed'};
    
    &:hover:not(:disabled) {
      background-color: #73d13d !important;
      border-color: #73d13d !important;
    }
    
    &:disabled {
      cursor: not-allowed;
      
      &:hover {
        background-color: #d9d9d9 !important;
        border-color: #d9d9d9 !important;
        color: #00000040 !important;
      }
    }
  }
`;