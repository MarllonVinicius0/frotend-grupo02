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
  
  /* Desktop large */
  @media (min-width: 1200px) {
    padding: 0 120px;
    min-height: 100vh;
  }
  
  /* Desktop medium */
  @media (max-width: 1199px) {
    padding: 0 80px;
    min-height: 90vh;
  }
  
  /* Tablets */
  @media (max-width: 992px) {
    padding: 0 60px;
    min-height: 80vh;
    justify-content: center;
  }
  
  /* Tablet small */
  @media (max-width: 768px) {
    padding: 0 40px;
    min-height: 70vh;
    justify-content: center;
  }
  
  /* Mobile large */
  @media (max-width: 576px) {
    padding: 0 20px;
    min-height: 60vh;
    justify-content: center;
  }
  
  /* Mobile small */
  @media (max-width: 375px) {
    padding: 0 15px;
    min-height: 55vh;
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
  
  /* Desktop large */
  @media (min-width: 1200px) {
    max-width: 750px;
    padding: 50px;
  }
  
  /* Desktop medium */
  @media (max-width: 1199px) {
    max-width: 650px;
    padding: 45px;
  }
  
  /* Tablets */
  @media (max-width: 992px) {
    max-width: 90%;
    padding: 35px;
    text-align: center;
  }
  
  /* Tablet small */
  @media (max-width: 768px) {
    max-width: 95%;
    padding: 30px 25px;
    text-align: center;
  }
  
  /* Mobile large */
  @media (max-width: 576px) {
    max-width: 100%;
    padding: 25px 20px;
    text-align: center;
  }
  
  /* Mobile small */
  @media (max-width: 375px) {
    padding: 20px 15px;
    border-radius: 8px;
  }
`;

export const HeroTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
  color: white;
  
  @media (min-width: 1200px) {
    font-size: 3em;
    margin-bottom: 25px;
  }
  
  /* Desktop medium */
  @media (max-width: 1199px) {
    font-size: 2.8em;
  }
  
  /* Tablets */
  @media (max-width: 992px) {
    font-size: 2.3em;
    margin-bottom: 18px;
  }
  
  /* Tablet small */
  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 16px;
    line-height: 1.3;
  }
  
  /* Mobile large */
  @media (max-width: 576px) {
    font-size: 1.8em;
    margin-bottom: 15px;
    line-height: 1.4;
  }
  
  /* Mobile small */
  @media (max-width: 375px) {
    font-size: 1.6em;
    margin-bottom: 12px;
  }
  
  /* Very small screens */
  @media (max-width: 320px) {
    font-size: 1.4em;
  }
`;

export const HeroSubtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 0;
  color: white;
  
  /* Desktop large */
  @media (min-width: 1200px) {
    font-size: 1.3em;
    line-height: 1.6;
  }
  
  /* Desktop medium */
  @media (max-width: 1199px) {
    font-size: 1.2em;
  }
  
  /* Tablets */
  @media (max-width: 992px) {
    font-size: 1.1em;
    line-height: 1.5;
  }
  
  /* Tablet small */
  @media (max-width: 768px) {
    font-size: 1em;
    line-height: 1.6;
  }
  
  /* Mobile large */
  @media (max-width: 576px) {
    font-size: 0.95em;
    line-height: 1.6;
  }
  
  /* Mobile small */
  @media (max-width: 375px) {
    font-size: 0.9em;
    line-height: 1.7;
  }
  
  /* Very small screens */
  @media (max-width: 320px) {
    font-size: 0.85em;
  }
`;