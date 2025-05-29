import React from 'react';
import Footer from '../../components/Footer'; // Importando o componente Footer
import HeaderPage from '../../components/HeaderPages';

export default function Home() {
  return (
    <div>
      <HeaderPage />
      <h1>Bem-vindo ao Portal de Eventos</h1>
      <p>Descubra os melhores eventos do Brasil!</p>
      {/* Aqui você pode adicionar mais componentes ou conteúdo para a página inicial */}
      <Footer />
    </div>
  );
}