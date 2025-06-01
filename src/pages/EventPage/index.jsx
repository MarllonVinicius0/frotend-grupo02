import React from 'react';
import HeaderPage from '../../components/HeaderPages';
import Footer from '../../components/Footer';
import PrincipalEvents from '../../components/PrincipalEvents';
import HealthyComponent from '../../components/HealthyComponent';
import EntertainmentComponent from '../../components/EntertainmentComponent';
import GastroComponent from '../../components/GastroComponent';
import FashionComponent from '../../components/FashionComponent';
import EdComponent from '../../components/EdComponent';
export default function EventPage() {
  return (
    <div>
      <HeaderPage />
      <PrincipalEvents />
      <EdComponent />
      <HealthyComponent />
      <EntertainmentComponent />
      <FashionComponent />
      <GastroComponent />
      <Footer />
    </div>
  );
}
