import styled from "styled-components";

export const EventsSection = styled.section`
  background-color:rgb(231, 231, 231);
  padding: 2rem 0 4rem 0;
  min-height: 100vh;
`;

export const SectionHeader = styled.div`
  padding: 0 7%;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #333;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 0 4%;
  }

  @media (max-width: 480px) {
    padding: 0 3%;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 0 7%;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 4%;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 0 3%;
    gap: 1rem;
  }
`;