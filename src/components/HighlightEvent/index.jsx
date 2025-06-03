import React, { useState } from "react";
import { LeftOutlined, RightOutlined, CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import {
  HighlightContainer,
  CarouselWrapper,
  EventImage,
  InfoContainer,
  EventTitle,
  EventDate,
  EventLocation,
  NavigationButton,
  IndicatorsContainer,
  Indicator,
  ImageOverlay
} from "./style";

export default function HighlightEvent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      id: 1,
      image: "/src/assets/evento-destaque.jpg",
      title: "Palestra Educativa",
      date: "11/08/25",
      location: "Russas - CE"
    },
    {
      id: 2,
      image: "/src/assets/evento-destaque.jpg",
      title: "Workshop de Tecnologia",
      date: "15/08/25",
      location: "Fortaleza - CE"
    },
    {
      id: 3,
      image: "/src/assets/evento-destaque.jpg",
      title: "Seminário de Inovação",
      date: "20/08/25",
      location: "Sobral - CE"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <HighlightContainer>
      <CarouselWrapper>
        <EventImage 
          src={events[currentSlide].image} 
          alt={events[currentSlide].title} 
        />
        
        <ImageOverlay />
        
        <NavigationButton onClick={prevSlide} position="left">
          <LeftOutlined />
        </NavigationButton>
        
        <NavigationButton onClick={nextSlide} position="right">
          <RightOutlined />
        </NavigationButton>
        
        <InfoContainer>
          <EventTitle>{events[currentSlide].title}</EventTitle>
          <EventDate>
            <CalendarOutlined />
            {events[currentSlide].date}
          </EventDate>
          <EventLocation>
            <EnvironmentOutlined />
            {events[currentSlide].location}
          </EventLocation>
        </InfoContainer>
        
        <IndicatorsContainer>
          {events.map((_, index) => (
            <Indicator
              key={index}
              active={index === currentSlide}
              onClick={() => goToSlide(index)}
            />
          ))}
        </IndicatorsContainer>
      </CarouselWrapper>
    </HighlightContainer>
  );
}