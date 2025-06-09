import React from "react";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #164264; /* Dark blue background for the main footer */
  color: white;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "poppins", sans-serif;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1200px; 
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  margin: 0 20px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
    align-items: center; 
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.25em;
  margin-bottom: 15px;
  font-weight: 500;

  &.brand {
    font-size: 2em;
    font-weight: bold;
  }
`;

export const SectionText = styled.p`
  font-size: 0.875em;
  font-weight: lighter;
  font-family: "poppins", sans-serif;
  line-height: 1.5;
  max-width: 250px; 
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px; 
  margin-top: 15px;
`;

export const IconLink = styled.a`
  color: white;
  font-size: 1.8em;
  text-decoration: none;
  &:hover {
    color: #e0e0e0; 
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px; 

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.875em;
  font-weight:lighter;

  svg {
    
    margin-right: 8px;
    font-size:1.5em;
  }
`;

export const Separator = styled.div`
  width: 1px;
  background-color: #4a6c8e; 
  margin: 0 40px; 

  @media (max-width: 768px) {
    display: none; 
  }
`;

export const CopyrightSection = styled.div`
  background-color: #2492D3; 
  width: 100%;
  font-family: "poppins",sans-serif;
  padding: 15px 20px;
  text-align: center;
  font-weight:lighter;
  font-size: 0.9em;
  color: white;
`;
