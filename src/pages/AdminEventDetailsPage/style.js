import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
`;

export const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin: 0 auto;
  width: 90%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
    width: 95%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;