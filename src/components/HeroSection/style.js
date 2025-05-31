import styled from "styled-components";
import hero from "../../assets/hero.jpg";

export const HeroContainer = styled.section`
  width: 100%;
  height: 600px;
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 100px;
  
  @media (max-width: 768px) {
    height: 300px;
    padding: 0 20px;
    justify-content: center;
  }
`;

export const HeroContent = styled.div`
  max-width: 700px;
  color: #333;
  text-align: left;
  background-color: rgba(201, 201, 201, 0.45);
  padding: 40px;
  border-radius: 10px;
  backdrop-filter: blur(1px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    max-width: 90%;
    text-align: center;
  }
`;

export const HeroTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 2em;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8em;
  }
`;

export const HeroSubtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 0;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;