import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    padding-top: 60px;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }

  @media (max-width: 480px) {
    padding: 20px 12px;
  }
`;