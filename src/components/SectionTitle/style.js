import styled from "styled-components";

export const TitleWrapper = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color:rgb(15, 77, 148);
  text-align: left;
  margin: 2rem 0 1.5rem 0;
  padding-left: 7%;
  width: 100%;
  

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin: 1.5rem 0 1rem 0;
    padding-left: 4%;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    padding-left: 3%;
  }
`;