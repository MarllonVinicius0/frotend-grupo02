// components/EventosTable/style.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  
  .ant-input-search {
    .ant-input-search-button {
      background-color: #1890ff;
      border-color: #1890ff;
      
      &:hover {
        background-color: #40a9ff;
        border-color: #40a9ff;
      }
    }
  }

  .ant-input-affix-wrapper {
    border-radius: 6px;
    
    &:hover {
      border-color: #40a9ff;
    }
    
    &.ant-input-affix-wrapper-focused {
      border-color: #1890ff;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  }

  @media (max-width: 768px) {
    justify-content: stretch;
    
    .ant-input-search {
      width: 100%;
    }
  }
`;

export const TableContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 1.5fr 120px;
  background-color: #fafafa;
  border-bottom: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderItem = styled.div`
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #595959;
  text-align: left;

  &:last-child {
    text-align: center;
  }
`;

export const TableBody = styled.div`
  min-height: 200px;
`;

export const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  font-size: 16px;
  color: #8c8c8c;
  text-align: center;
  border-bottom: none;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 0;

  .ant-pagination {
    .ant-pagination-item-active {
      background-color: #1890ff;
      border-color: #1890ff;
      
      a {
        color: #fff;
      }
    }
    
    .ant-pagination-item {
      border-radius: 6px;
      
      &:hover {
        border-color: #40a9ff;
        
        a {
          color: #40a9ff;
        }
      }
    }
    
    .ant-pagination-prev,
    .ant-pagination-next {
      border-radius: 6px;
      
      &:hover {
        border-color: #40a9ff;
        
        .anticon {
          color: #40a9ff;
        }
      }
    }
    
    .ant-pagination-jump-prev,
    .ant-pagination-jump-next {
      border-radius: 6px;
    }
  }

  @media (max-width: 768px) {
    .ant-pagination {
      .ant-pagination-total-text {
        display: none;
      }
    }
  }
`;