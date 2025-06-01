// -- importar useefect posteriormente para carregar dados de uma API real

import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  CarouselContainer,
  ArrowButton,
  ContentWrapper,
  ImageContainer,
  EventCard,
  CardTitle,
  CardDetail,
  CardDetailIcon,
  MobileArrowContainer,
  DotsContainer,
  Dot,
} from "./style";

// --- REMOVA OU COMENTE ESTE BLOCO DE DADOS QUANDO ESTIVER USANDO UMA API REAL ---
const events = [
  {
    id: 1,
    title: "Festa de Aniversário da Cidade",
    date: "Sexta-feira, 23/07/25",
    location: "Russas - CE",
    image:
      "https://www.idace.ce.gov.br/wp-content/uploads/sites/84/2019/11/images.jpg",
  },
  {
    id: 2,
    title: "Conferência Tech",
    date: "Quarta-feira, 10/08/25",
    location: "São Paulo - SP",
    image:
      "https://cdn.folhape.com.br/upload/dn_arquivo/2017/01/campus-party-1-1159274338jpg.jpg",
  },
  {
    id: 3,
    title: "Workshop de Design",
    date: "Sábado, 05/09/25",
    location: "Rio de Janeiro - RJ",
    image:
      "https://napne.com.br/wp-content/uploads/2023/05/design-thinking-supplies-1.jpg",
  },
];
// --- FIM DO BLOCO A SER REMOVIDO/COMENTADO ---

// --- React Component ---
const EventCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentEvent = events[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <CarouselContainer>
      {/* Desktop Arrows */}
      <ArrowButton onClick={goToPrevious} aria-label="Evento anterior" className="desktop-arrow">
        <FaArrowLeft />
      </ArrowButton>

      <ContentWrapper>
        <ImageContainer>
          {currentEvent.image && (
            <img src={currentEvent.image} alt={currentEvent.title} />
          )}
        </ImageContainer>

        <EventCard>
          <CardTitle>{currentEvent.title}</CardTitle>
          <CardDetail>
            <CardDetailIcon>
              <FaCalendarAlt />
            </CardDetailIcon>
            {currentEvent.date}
          </CardDetail>
          <CardDetail>
            <CardDetailIcon>
              <FaMapMarkerAlt />
            </CardDetailIcon>
            {currentEvent.location}
          </CardDetail>
        </EventCard>
      </ContentWrapper>

      {/* Desktop Arrows */}
      <ArrowButton onClick={goToNext} aria-label="Próximo evento" className="desktop-arrow">
        <FaArrowRight />
      </ArrowButton>

      {/* Mobile Navigation */}
      <MobileArrowContainer>
        <ArrowButton onClick={goToPrevious} aria-label="Evento anterior" className="mobile-arrow">
          <FaArrowLeft />
        </ArrowButton>
        
        <DotsContainer>
          {events.map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </DotsContainer>

        <ArrowButton onClick={goToNext} aria-label="Próximo evento" className="mobile-arrow">
          <FaArrowRight />
        </ArrowButton>
      </MobileArrowContainer>
    </CarouselContainer>
  );
};

export default EventCarousel;