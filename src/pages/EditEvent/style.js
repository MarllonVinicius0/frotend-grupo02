import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f9fafa;
  display: flex;
  flex-direction: column;
`;

export const ContentRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  margin: 0 auto 2rem auto;
  width: 100%;
  max-width: 1400px;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 1rem;
  }
`;