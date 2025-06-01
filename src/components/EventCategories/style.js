import styled from "styled-components";

export const CategoriesContainer = styled.section`
  background-color: #E5E5E5;
  padding: 60px 20px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  /* Desktop large */
  @media (min-width: 1400px) {
    padding: 80px 40px;
  }
  
  /* Desktop medium */
  @media (max-width: 1199px) {
    padding: 60px 30px;
  }
  
  /* Tablets */
  @media (max-width: 992px) {
    padding: 50px 25px;
  }
  
  /* Tablet small */
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
  
  /* Mobile large */
  @media (max-width: 576px) {
    padding: 35px 15px;
  }
  
  /* Mobile small */
  @media (max-width: 375px) {
    padding: 30px 10px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.8em;
  color: #333;
  font-weight: bold;
  margin-bottom: 32px;
  text-align: left;
  width: 100%;
  max-width: 1200px;
  padding-left: 20px;

  /* Desktop large */
  @media (min-width: 1400px) {
    font-size: 2.2em;
    margin-bottom: 40px;
    max-width: 1400px;
    padding-left: 30px;
  }
  
  /* Desktop medium */
  @media (max-width: 1199px) {
    font-size: 2em;
    margin-bottom: 35px;
  }
  
  /* Tablets */
  @media (max-width: 992px) {
    font-size: 1.9em;
    margin-bottom: 30px;
    text-align: center;
    padding-left: 0;
  }
  
  /* Tablet small */
  @media (max-width: 768px) {
    font-size: 1.8em;
    margin-bottom: 28px;
    text-align: center;
    padding-left: 0;
  }
  
  /* Mobile large */
  @media (max-width: 576px) {
    font-size: 1.6em;
    margin-bottom: 25px;
  }
  
  /* Mobile small */
  @media (max-width: 375px) {
    font-size: 1.5em;
    margin-bottom: 20px;
  }
  
  /* Very small screens */
  @media (max-width: 320px) {
    font-size: 1.4em;
  }
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 50px;
  max-width: 1200px;
  width: 100%;
  justify-items: center;
  
  /* Desktop large */
  @media (min-width: 1400px) {
    max-width: 1400px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 60px;
  }
  
  /* Desktop medium */
  @media (max-width: 1199px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 45px;
    padding: 0 20px;
  }
  
  /* Tablets */
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 35px;
    padding: 0 15px;
  }
  
  /* Tablet small */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 30px;
    padding: 0 10px;
  }
  
  /* Mobile large */
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    padding: 0 5px;
  }
  
  /* Mobile small */
  @media (max-width: 375px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 0;
  }
  
  /* Very small screens */
  @media (max-width: 320px) {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 180px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border-radius: 12px;
  padding-bottom: 10px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }
  
  /* Desktop large */
  @media (min-width: 1400px) {
    max-width: 200px;
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
    }
  }
  
  /* Desktop medium */
  @media (max-width: 1199px) {
    max-width: 180px;
  }
  
  /* Tablets */
  @media (max-width: 992px) {
    max-width: 160px;
    
    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
    }
  }
  
  /* Tablet small */
  @media (max-width: 768px) {
    max-width: 140px;
    padding-bottom: 8px;
  }
  
  /* Mobile large */
  @media (max-width: 576px) {
    max-width: none;
    width: 100%;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
  }
  
  /* Mobile small */
  @media (max-width: 375px) {
    padding-bottom: 6px;
  }
  
  /* Very small screens */
  @media (max-width: 320px) {
    padding-bottom: 5px;
    
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

export const CardImageWrapper = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #ddd;
  
  /* Desktop large */
  @media (min-width: 1400px) {
    border-radius: 15px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
  }
  
  /* Tablets */
  @media (max-width: 992px) {
    border-radius: 10px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Mobile */
  @media (max-width: 576px) {
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
  
  /* Very small screens */
  @media (max-width: 320px) {
    border-radius: 6px;
  }
`;

export const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease-in-out;
  
  ${CategoryCard}:hover & {
    transform: scale(1.05);
  }
  
  /* Desktop large */
  @media (min-width: 1400px) {
    border-radius: 15px;
  }
  
  /* Tablets */
  @media (max-width: 992px) {
    border-radius: 10px;
  }
  
  /* Mobile */
  @media (max-width: 576px) {
    border-radius: 8px;
    
    ${CategoryCard}:hover & {
      transform: scale(1.03);
    }
  }
  
  /* Very small screens */
  @media (max-width: 320px) {
    border-radius: 6px;
    
    ${CategoryCard}:hover & {
      transform: scale(1.02);
    }
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.1em;
  color: #0D0D0D;
  font-weight: 600;
  margin-top: 15px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  width: 100%;
  
  /* Desktop large */
  @media (min-width: 1400px) {
    font-size: 1.3em;
    margin-top: 18px;
  }
  
  /* Desktop medium */
  @media (max-width: 1199px) {
    font-size: 1.2em;
    margin-top: 16px;
  }
  
  /* Tablets */
  @media (max-width: 992px) {
    font-size: 1.1em;
    margin-top: 14px;
  }
  
  /* Tablet small */
  @media (max-width: 768px) {
    font-size: 1em;
    margin-top: 12px;
  }
  
  /* Mobile large */
  @media (max-width: 576px) {
    font-size: 0.95em;
    margin-top: 10px;
    white-space: normal;
    line-height: 1.3;
    height: auto;
    max-height: 2.6em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  
  /* Mobile small */
  @media (max-width: 375px) {
    font-size: 0.9em;
    margin-top: 8px;
  }
  
  /* Very small screens */
  @media (max-width: 320px) {
    font-size: 0.85em;
    margin-top: 6px;
    -webkit-line-clamp: 1;
    white-space: nowrap;
  }
`;