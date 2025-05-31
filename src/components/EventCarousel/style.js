import React from "react";
import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px 0;
  background-color: #f0f0f0; /* Light background for the overall section */
  font-family: Arial, sans-serif;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 3em;
  color: #333;
  cursor: pointer;
  padding: 0 20px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px; /* Space between image and card */

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ImageContainer = styled.div`
  width: 700px; /* Based on typical presentation aspect ratio */
  height: 400px;
  background-color: #000; /* Black background for the image/video area */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image covers the area without distortion */
  }

  /* If you want to support embedded videos (e.g., YouTube) */
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 900px) {
    width: 90vw; /* Take more width on smaller screens */
    height: calc(90vw * 9 / 16); /* Maintain 16:9 aspect ratio */
  }

  @media (max-width: 600px) {
    height: calc(95vw * 9 / 16); /* Even more width on very small screens */
  }
`;

export const EventCard = styled.div`
  background-color: #e0e0e0; /* Light gray background for the card */
  border-radius: 8px;
  padding: 25px;
  width: 300px; /* Fixed width for the card */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 900px) {
    width: 90vw; /* Take more width on smaller screens */
    max-width: 400px; /* But don't get too wide */
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.8em;
  color: #333;
  margin-bottom: 5px;
`;

export const CardDetail = styled.p`
  font-size: 1.1em;
  color: #555;
  display: flex;
  align-items: center;
`;

export const CardDetailIcon = styled.span`
  margin-right: 10px;
  color: #777;
  font-size: 1.2em;
`;