import styled from "styled-components";
import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

export const DescriptionBox = styled.div`
  flex: 1;
  max-width: auto;
  margin: 2rem 0 0 0;
  padding: 0;

  @media (max-width: 1024px) {
    margin: 2rem 0 0 0;
    max-width: 100%;
  }
`;

export const StyledCard = styled(Card)`
  &.ant-card {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    
    .ant-card-body {
      padding: 2rem;
      
      @media (max-width: 768px) {
        padding: 1.5rem;
      }
    }
  }
`;

export const StyledTitle = styled(Title)`
  &.ant-typography {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-top: 0;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  &.ant-typography {
    font-size: 1rem;
    color: #333;
    line-height: 1.6;
    margin-bottom: 0;
  }
`;