import styled from "styled-components";
import { Tag } from "antd";

export const CardWrapper = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  color: #222;
  margin: 0;
`;

export const TagStyled = styled(Tag)`
  &.ant-tag {
    background-color: #d7f7e2;
    color: #189e60;
    font-weight: 600;
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
    border-radius: 10px;
    border: none;
  }
`;

export const DescriptionList = styled.ul`
  padding-left: 1.2rem;
  margin: 0;
  color: #444;
  font-size: 0.95rem;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #555;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
`;

export const InfoText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  .anticon {
    color: #888;
  }
`;

export const VagasTexto = styled.span`
  font-weight: 600;
  color: ${({ ocupadas, total }) => {
    const percentual = (ocupadas / total) * 100;
    if (percentual <= 30) return '#52c41a'; // verde
    if (percentual <= 80) return '#faad14'; // amarelo
    return '#ff4d4f'; // vermelho
  }};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #777;

  .anticon {
    color: #999;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;

    button {
      width: 100%;
    }
  }
`;
