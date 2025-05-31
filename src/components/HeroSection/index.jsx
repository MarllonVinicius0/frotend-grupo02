import React from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
} from './style';

export default function HeroSection() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>
          Descubra, inscreva-se e viva<br />
          experiências incríveis!
        </HeroTitle>
        <HeroSubtitle>
          Um catálogo para se inscrever em eventos exclusivos: palestras,<br />
          workshops, seminários e muito mais!
        </HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
}