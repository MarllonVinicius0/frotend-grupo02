import styled from "styled-components";

export const HighlightContainer = styled.section`
  width: 90%;
  max-width: 900px;
  margin: 2rem auto;
  position: relative;
  height: 550px;
  background-color: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 2px solid #e9ecef;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EventImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  background: white;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 2;
  padding: 1rem;
`;

export const EventTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const EventDate = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "📅";
    font-size: 0.9rem;
  }
`;

export const EventLocation = styled.p`
  font-size: 1rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "📍";
    font-size: 0.9rem;
  }
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 35%;
  transform: translateY(-50%);
  ${props => props.position === 'left' ? 'left: 1rem;' : 'right: 1rem;'}
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;

export const LeftArrow = styled.span`
  color: #666;
  font-size: 1rem;
  font-weight: bold;
  user-select: none;
`;

export const RightArrow = styled.span`
  color: #666;
  font-size: 1rem;
  font-weight: bold;
  user-select: none;
`;

export const IndicatorsContainer = styled.div`
  position: absolute;
  bottom: 0.8rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.4rem;
  z-index: 3;
`;

export const Indicator = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#007bff' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#0056b3' : 'rgba(255, 255, 255, 0.8)'};
    transform: scale(1.2);
  }
`;