import { Card, Typography, Button } from "antd";
import styled from "styled-components";
const { Title, Text } = Typography;

export const SectionWrapper = styled.section`
  background-color: #E5E5E5; 
  padding: 60px 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  /* Desktop large */
  @media (min-width: 1400px) {
    padding: 80px 120px;
  }
  
  /* Desktop medium */
  @media (max-width: 1199px) {
    padding: 60px 80px;
  }
  
  /* Tablets */
  @media (max-width: 992px) {
    padding: 50px 60px;
  }
  
  /* Tablet small */
  @media (max-width: 768px) {
    padding: 40px 40px;
  }
  
  /* Mobile large */
  @media (max-width: 576px) {
    padding: 35px 20px;
  }
  
  /* Mobile small */
  @media (max-width: 375px) {
    padding: 30px 15px;
  }
  
  /* Very small screens */
  @media (max-width: 320px) {
    padding: 25px 10px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  
  /* Desktop large */
  @media (min-width: 1400px) {
    max-width: 1400px;
  }
  
  /* Mobile adjustments */
  @media (max-width: 576px) {
    max-width: 100%;
  }
`;

export const SectionTitle = styled(Title)`
  && {
    font-size: 1.8em;
    color: #333;
    font-weight: bold;
    margin-bottom: 32px;
    text-align: left;
    width: 100%;
    
    /* Desktop large */
    @media (min-width: 1400px) {
      font-size: 2.2em;
      margin-bottom: 40px;
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
    }
    
    /* Tablet small */
    @media (max-width: 768px) {
      font-size: 1.8em;
      margin-bottom: 28px;
      text-align: center;
    }
    
    /* Mobile large */
    @media (max-width: 576px) {
      font-size: 1.6em;
      margin-bottom: 25px;
      text-align: center;
    }
    
    /* Mobile small */
    @media (max-width: 375px) {
      font-size: 1.5em;
      margin-bottom: 20px;
    }
    
    /* Very small screens */
    @media (max-width: 320px) {
      font-size: 1.4em;
      margin-bottom: 18px;
    }
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  
  /* Desktop adjustments for arrows */
  @media (min-width: 1200px) {
    margin: 0 30px;
  }
  
  /* Tablet adjustments */
  @media (max-width: 992px) {
    margin: 0 15px;
  }
  
  /* Mobile - remove margin for arrows */
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 16px 0;
  scroll-behavior: smooth;
  gap: 16px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  /* Desktop large */
  @media (min-width: 1400px) {
    gap: 20px;
    padding: 20px 0;
  }
  
  /* Desktop medium */
  @media (max-width: 1199px) {
    gap: 18px;
    padding: 18px 0;
  }
  
  /* Tablets */
  @media (max-width: 992px) {
    gap: 16px;
    padding: 16px 0;
  }
  
  /* Mobile large */
  @media (max-width: 576px) {
    gap: 12px;
    padding: 12px 0;
  }
  
  /* Mobile small */
  @media (max-width: 375px) {
    gap: 10px;
    padding: 10px 0;
  }
`;

export const StyledCard = styled(Card)`
  flex-shrink: 0; 
  width: 280px; 
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .ant-card-cover img {
    height: 160px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover .ant-card-cover img {
    transform: scale(1.05);
  }
  
  .ant-card-body {
    padding: 16px;
  }
  
  /* Desktop large */
  @media (min-width: 1400px) {
    width: 320px;
    
    .ant-card-cover img {
      height: 180px;
    }
    
    .ant-card-body {
      padding: 20px;
    }
  }
  
  /* Desktop medium */
  @media (max-width: 1199px) {
    width: 300px;
    
    .ant-card-cover img {
      height: 170px;
    }
    
    .ant-card-body {
      padding: 18px;
    }
  }
  
  /* Tablets */
  @media (max-width: 992px) {
    width: 280px;
    
    .ant-card-cover img {
      height: 160px;
    }
  }
  
  /* Tablet small */
  @media (max-width: 768px) {
    width: 260px;
    
    .ant-card-cover img {
      height: 150px;
    }
    
    .ant-card-body {
      padding: 14px;
    }
    
    &:hover {
      transform: translateY(-2px);
    }
  }
  
  /* Mobile large */
  @media (max-width: 576px) {
    width: 240px;
    
    .ant-card-cover img {
      height: 140px;
    }
    
    .ant-card-body {
      padding: 12px;
    }
  }
  
  /* Mobile small */
  @media (max-width: 375px) {
    width: 220px;
    border-radius: 8px;
    
    .ant-card-cover img {
      height: 130px;
    }
    
    .ant-card-body {
      padding: 10px;
    }
  }
  
  /* Very small screens */
  @media (max-width: 320px) {
    width: 200px;
    
    .ant-card-cover img {
      height: 120px;
    }
    
    .ant-card-body {
      padding: 8px;
    }
  }
`;

export const CardTitle = styled(Text)`
  font-size: 1.1em;
  font-weight: bold;
  display: block;
  color: #111;
  margin-bottom: 8px;
  line-height: 1.4;
  
  /* Desktop large */
  @media (min-width: 1400px) {
    font-size: 1.3em;
    margin-bottom: 10px;
  }
  
  /* Desktop medium */
  @media (max-width: 1199px) {
    font-size: 1.2em;
    margin-bottom: 9px;
  }
  
  /* Tablets */
  @media (max-width: 992px) {
    font-size: 1.1em;
  }
  
  /* Tablet small */
  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 6px;
  }
  
  /* Mobile large */
  @media (max-width: 576px) {
    font-size: 0.95em;
    margin-bottom: 5px;
  }
  
  /* Mobile small */
  @media (max-width: 375px) {
    font-size: 0.9em;
    margin-bottom: 4px;
  }
  
  /* Very small screens */
  @media (max-width: 320px) {
    font-size: 0.85em;
  }
`;

export const CardInfo = styled(Text)`
  font-size: 0.9em;
  color: #666;
  display: block;
  margin-bottom: 4px;
  line-height: 1.4;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  /* Desktop large */
  @media (min-width: 1400px) {
    font-size: 1em;
    margin-bottom: 6px;
  }
  
  /* Desktop medium */
  @media (max-width: 1199px) {
    font-size: 0.95em;
    margin-bottom: 5px;
  }
  
  /* Tablets */
  @media (max-width: 992px) {
    font-size: 0.9em;
  }
  
  /* Tablet small */
  @media (max-width: 768px) {
    font-size: 0.85em;
    margin-bottom: 3px;
  }
  
  /* Mobile large */
  @media (max-width: 576px) {
    font-size: 0.8em;
    margin-bottom: 2px;
  }
  
  /* Mobile small */
  @media (max-width: 375px) {
    font-size: 0.75em;
    line-height: 1.3;
  }
  
  /* Very small screens */
  @media (max-width: 320px) {
    font-size: 0.7em;
  }
`;

export const ArrowButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  display: ${props => (props.$show ? 'flex' : 'none')}; 
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-50%) scale(1.1);
  }

  &.arrow-left {
    left: -20px;
  }

  &.arrow-right {
    right: -20px;
  }
  
  /* Desktop large */
  @media (min-width: 1400px) {
    width: 45px;
    height: 45px;
    
    &.arrow-left {
      left: -25px;
    }

    &.arrow-right {
      right: -25px;
    }
  }
  
  /* Desktop medium */
  @media (max-width: 1199px) {
    width: 42px;
    height: 42px;
    
    &.arrow-left {
      left: -22px;
    }

    &.arrow-right {
      right: -22px;
    }
  }
  
  /* Tablets */
  @media (max-width: 992px) {
    width: 38px;
    height: 38px;
    
    &.arrow-left {
      left: -18px;
    }

    &.arrow-right {
      right: -18px;
    }
  }

  /* Hide arrows on mobile and smaller screens */
  @media (max-width: 768px) {
    display: none !important;
  }
`;