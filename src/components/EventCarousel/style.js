import React from "react";
import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px 0;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
  position: relative;
  flex-direction: column;

  @media (min-width: 901px) {
    flex-direction: row;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
  }

  @media (max-width: 480px) {
    padding: 16px 0;
  }
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 3em;
  color: #333;
  cursor: pointer;
  padding: 0 20px;
  transition: transform 0.2s ease-in-out;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }

  &.desktop-arrow {
    @media (max-width: 900px) {
      display: none;
    }
  }

  &.mobile-arrow {
    display: none;
    font-size: 2em;
    padding: 0 15px;

    @media (max-width: 900px) {
      display: block;
    }

    @media (max-width: 480px) {
      font-size: 1.5em;
      padding: 0 10px;
    }
  }

  @media (max-width: 768px) {
    &.desktop-arrow {
      font-size: 2.5em;
      padding: 0 15px;
    }
  }

  @media (max-width: 480px) {
    &.desktop-arrow {
      font-size: 2em;
      padding: 0 10px;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  max-width: 100%;
  width: 100%;
  justify-content: center;

  @media (max-width: 1200px) {
    gap: 20px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
    gap: 16px;
  }
`;

export const ImageContainer = styled.div`
  width: 700px;
  height: 400px;
  background-color: #000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 1200px) {
    width: 600px;
    height: 338px;
  }

  @media (max-width: 1024px) {
    width: 500px;
    height: 281px;
  }

  @media (max-width: 900px) {
    width: 90vw;
    max-width: 600px;
    height: calc(90vw * 9 / 16);
    max-height: 338px;
  }

  @media (max-width: 768px) {
    width: 95vw;
    max-width: 500px;
    height: calc(95vw * 9 / 16);
    max-height: 281px;
  }

  @media (max-width: 480px) {
    width: calc(100vw - 32px);
    height: calc((100vw - 32px) * 9 / 16);
    border-radius: 6px;
  }
`;

export const EventCard = styled.div`
  background-color: #e0e0e0;
  border-radius: 8px;
  padding: 25px;
  width: 300px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-shrink: 0;

  @media (max-width: 1200px) {
    width: 280px;
    padding: 20px;
  }

  @media (max-width: 1024px) {
    width: 250px;
    padding: 18px;
  }

  @media (max-width: 900px) {
    width: 90vw;
    max-width: 500px;
    padding: 20px;
  }

  @media (max-width: 768px) {
    width: 95vw;
    max-width: 400px;
    padding: 18px;
    gap: 12px;
  }

  @media (max-width: 480px) {
    width: calc(100vw - 32px);
    padding: 16px;
    gap: 10px;
    border-radius: 6px;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.8em;
  color: #333;
  margin-bottom: 5px;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 1.6em;
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.3em;
    margin-bottom: 0;
  }
`;

export const CardDetail = styled.p`
  font-size: 1.1em;
  color: #555;
  display: flex;
  align-items: center;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

export const CardDetailIcon = styled.span`
  margin-right: 10px;
  color: #777;
  font-size: 1.2em;
  flex-shrink: 0;

  @media (max-width: 480px) {
    margin-right: 8px;
    font-size: 1.1em;
  }
`;

export const MobileArrowContainer = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  width: 100%;

  @media (max-width: 900px) {
    display: flex;
  }

  @media (max-width: 480px) {
    gap: 15px;
    margin-top: 16px;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

export const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${({ active }) => (active ? '#333' : '#bbb')};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
  }
`;