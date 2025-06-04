// inscritosAtividadeStyle.js
import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 24px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Header = styled.div`
  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #1890ff;
  font-size: 16px;
  cursor: pointer;
  padding: 8px 0;
  transition: all 0.3s ease;

  &:hover {
    color: #40a9ff;
  }

  span {
    font-weight: 500;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #262626;
  margin-bottom: 16px;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 12px;
  }
`;

export const EventInfo = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    margin-bottom: 20px;
  }
`;

export const EventTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #262626;
  margin: 0 0 8px 0;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const EventDetails = styled.p`
  font-size: 16px;
  color: #8c8c8c;
  margin: 0 0 12px 0;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #595959;
  font-family: "Poppins", sans-serif;

  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const StatsCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f0f9ff;
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid #e6f7ff;

  @media (max-width: 768px) {
    padding: 14px 16px;
  }
`;

export const StatsNumber = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #1890ff;
  line-height: 1;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const StatsLabel = styled.div`
  font-size: 12px;
  color: #8c8c8c;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
`;

export const SearchContainer = styled.div`
  margin-bottom: 24px;

  .ant-input-affix-wrapper {
    border-radius: 8px;
    border: 1px solid #d9d9d9;
    
    &:hover {
      border-color: #40a9ff;
    }
    
    &:focus-within {
      border-color: #1890ff;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    
    .ant-input-search {
      width: 100% !important;
      max-width: none !important;
    }
  }
`;

export const TableContainer = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  margin-bottom: 24px;

  .ant-table {
    .ant-table-thead > tr > th {
      background-color: #fafafa;
      border-bottom: 1px solid #f0f0f0;
      font-weight: 600;
      color: #262626;
      font-family: "Poppins", sans-serif;
      padding: 16px 24px;
    }

    .ant-table-tbody > tr > td {
      padding: 16px 24px;
      border-bottom: 1px solid #f0f0f0;
      font-family: "Poppins", sans-serif;
    }

    .ant-table-tbody > tr:hover > td {
      background-color: #fafafa;
    }

    .ant-table-tbody > tr:last-child > td {
      border-bottom: none;
    }
  }

  @media (max-width: 768px) {
    .ant-table {
      .ant-table-thead > tr > th,
      .ant-table-tbody > tr > td {
        padding: 12px 16px;
        font-size: 14px;
      }
    }
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;

  .ant-pagination {
    .ant-pagination-item {
      border-radius: 6px;
      border: 1px solid #d9d9d9;
      
      &:hover {
        border-color: #40a9ff;
      }

      &.ant-pagination-item-active {
        background-color: #1890ff;
        border-color: #1890ff;
        
        a {
          color: white;
        }
      }
    }

    .ant-pagination-prev,
    .ant-pagination-next {
      border-radius: 6px;
      border: 1px solid #d9d9d9;
      
      &:hover {
        border-color: #40a9ff;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 16px 0;
    
    .ant-pagination {
      .ant-pagination-total-text {
        display: none;
      }
    }
  }
`;