import styled from "styled-components";

export const EventsSection = styled.section`
  background-color: rgb(231, 231, 231);
  padding: 2rem 0 4rem 0;
  min-height: 100vh;
`;

export const SectionHeader = styled.div`
  padding: 0 24px;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;

export const FilterSection = styled.div`
  padding: 0 24px;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
    
    .ant-space {
      width: 100%;
      
      .ant-space-item {
        width: 100%;
        
        .ant-input, .ant-select {
          width: 100% !important;
        }
      }
    }
  }
`;

export const GridContainer = styled.div`
  padding: 0 24px;
  
  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;

export const LoadMoreContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    margin-top: 2.5rem;
    
    .ant-btn {
      padding: 6px 40px !important;
      font-size: 0.95rem !important;
    }
  }
`;