import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #262626;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #8c8c8c;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CountSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

export const HeartIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  .anticon {
    font-size: 24px;
    color: #1890ff;
  }
`;

export const CountNumber = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: #262626;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const CountLabel = styled.div`
  font-size: 14px;
  color: #8c8c8c;
  margin-top: 4px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;