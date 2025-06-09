import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: rgba(64, 167, 227, 0.9);
  height: 60px;
  padding: 0 32px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
    & a{
      text-decoration:none;
      color:white;
    }
  
  

  @media (max-width: 1024px) {
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    height: 60px;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
    height: 56px;
  }
`;


export const TextWrapper = styled.div`
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
  

  @media (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;