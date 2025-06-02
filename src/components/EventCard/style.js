import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #333;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: left;
`;

export const CardInfo = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 0.4rem;
  display: flex;
  align-items: flex-start;
  gap: 0.4rem;
  line-height: 1.2;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const DateIcon = styled.span`
  font-size: 0.75rem;
  min-width: 14px;
  margin-top: 1px;
`;

export const LocationIcon = styled.span`
  font-size: 0.75rem;
  min-width: 14px;
  margin-top: 1px;
`;