import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  width: 100%;
  background-color: #f9fafa;

  .cancel-btn {
    background-color: #ff4d4f;
    border-color: #ff4d4f;
    color: white;
    font-weight: 600;
    border-radius: 6px;
    min-width: 180px;
    height: 45px;
    font-size: 15px;
    
    &:hover {
      background-color: #ff7875 !important;
      border-color: #ff7875 !important;
      color: white !important;
    }
  }

  .publish-btn {
    background-color: #52C0E7;
    border-color: #52C0E7;
    font-weight: 600;
    border-radius: 6px;
    min-width: 180px;
    height: 45px;
    font-size: 15px;
    
    &:hover {
      background-color: #47a3c7 !important;
      border-color: #47a3c7 !important;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;

    .cancel-btn,
    .publish-btn {
      width: 100%;
      max-width: 300px;
    }
  }
`;