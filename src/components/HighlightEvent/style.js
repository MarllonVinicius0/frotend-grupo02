import styled from "styled-components";

export const HighlightContainer = styled.section`
  width: 90%;
  max-width: 900px;
  margin: 2rem auto;
  position: relative;
  height: 550px;
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid #f0f0f0;
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
  border-radius: 16px;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.3) 70%,
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: 1;
`;

export const InfoContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
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
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

export const EventDate = styled.div`
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

  .anticon {
    font-size: 0.9rem;
  }
`;

export const EventLocation = styled.div`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

  .anticon {
    font-size: 0.9rem;
  }
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.position === 'left' ? 'left: 1.5rem;' : 'right: 1.5rem;'}
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);

  .anticon {
    font-size: 1.1rem;
    color: #595959;
  }

  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.08);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.15);

    .anticon {
      color: #262626;
    }
  }

  &:active {
    transform: translateY(-50%) scale(0.98);
  }
`;

export const IndicatorsContainer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 3;
`;

export const Indicator = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#1890ff' : 'rgba(255, 255, 255, 0.6)'};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.active ? '0 2px 8px rgba(24, 144, 255, 0.4)' : 'none'};

  &:hover {
    background: ${props => props.active ? '#40a9ff' : 'rgba(255, 255, 255, 0.8)'};
    transform: scale(1.2);
  }
`;