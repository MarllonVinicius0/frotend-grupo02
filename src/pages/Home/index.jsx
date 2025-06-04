import React from 'react';
import Footer from '../../components/Footer'; // Importando o componente Footer
import HeaderPage from '../../components/HeaderPages';
import HeroSection from '../../components/HeroSection';
import EventCarousel from '../../components/EventCarousel'; 
import EventCategories from '../../components/EventCategories';
import IncentiveSection from '../../components/IncentiveSection'; // Importando o componente IncentiveSection
import EntertainmentComponent from '../../components/EntertainmentComponent';
import HealtyComponent from '../../components/HealthyComponent';
import CityComponent from '../../components/CityComponent'; // Importando o componente CityComponent
import HeaderLoggedUser from '../../components/HeaderLoggedUser';
import { useAuth } from '../../contexts/useAuth';

export default function Home() {

  const { isLoggedIn } = useAuth();


  return (
    <div>
      {isLoggedIn ? <HeaderLoggedUser /> : <HeaderPage />}
      <HeroSection />
      <EventCarousel />
      <EventCategories />
      <HealtyComponent /> 
      <EntertainmentComponent />
      <CityComponent />
      <IncentiveSection />
      <Footer />
    </div>
  );
}