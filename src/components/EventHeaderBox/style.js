import styled from "styled-components";
import { Tag, Button, Typography } from "antd";

const { Text } = Typography;

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HeaderBox = styled.div`
  width: 90%;
  background: linear-gradient(135deg, #1FA0EA, #1674B3);
  color: white;
  border-radius: 16px;
  padding: 2rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledTag = styled(Tag)`
  &.ant-tag {
    background-color: white;
    color: #2a7ae4;
    font-weight: 600;
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    border: none;
    margin: 0 0 0.8rem 0;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin: 0.8rem 0;
  color: white;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const InfoItem = styled.div`
  font-size: 1rem;
  
  .ant-space {
    .anticon {
      color: white;
      font-size: 1rem;
    }
  }
`;

export const StyledText = styled(Text)`
  &.ant-typography {
    color: white !important;
    font-size: 0.9rem;
    
    .anticon {
      margin-right: 4px;
    }
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  text-align: right;
  justify-content: end;

  @media (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
    margin-top: 1.5rem;
    text-align: left;
  }
`;

export const Highlight = styled.span`
  font-weight: 700;
  font-size: 1rem;
  color: white;
`;

export const StyledButton = styled(Button)`
  &.ant-btn-primary {
    background-color: #1ed760;
    border-color: #1ed760;
    font-weight: 700;
    font-size: 1rem;
    height: auto;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    
    &:hover {
      background-color: #17b450 !important;
      border-color: #17b450 !important;
    }
  }
`;