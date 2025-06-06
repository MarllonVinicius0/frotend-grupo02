import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin: 0 2rem 2rem 2rem;
  
  @media (max-width: 768px) {
    margin: 0 1rem 2rem 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #222;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #555;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;