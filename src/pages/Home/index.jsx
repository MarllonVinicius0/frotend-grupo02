import React from 'react';
import Footer from '../../components/Footer'; // Importando o componente Footer
import HeaderPage from '../../components/HeaderPages';
import HeroSection from '../../components/HeroSection';
import EventCarousel from '../../components/EventCarousel'; 

export default function Home() {
  return (
    <div>
      <HeaderPage />
      <HeroSection />
      <EventCarousel />
      {/* Aqui você pode adicionar mais componentes ou conteúdo para a página inicial */}
      <Footer />
    </div>
  );
}