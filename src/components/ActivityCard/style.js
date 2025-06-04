import styled from "styled-components";

export const ActivityItem = styled.div`
  padding: 2rem 1.5rem;
  border-left: 4px solid #1FA0EA;
  border-bottom: 1px solid #f0f0f0;
  margin: 20px;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f8f9fa;
  }
`;

export const ActivityTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #222;
`;