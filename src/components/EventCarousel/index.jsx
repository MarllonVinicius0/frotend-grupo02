// -- importar useefect posteriormente para carregar dados de uma API real

import React , { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import {CarouselContainer, ArrowButton, ContentWrapper, ImageContainer, EventCard, CardTitle, CardDetail, CardDetailIcon} from './style';


// --- REMOVA OU COMENTE ESTE BLOCO DE DADOS QUANDO ESTIVER USANDO UMA API REAL ---
const events = [
  {
    id: 1,
    title: 'Festa de Aniversário da Cidade',
    date: 'Sexta-feira, 23/07/25',
    location: 'Russas - CE',
    image: 'https://www.idace.ce.gov.br/wp-content/uploads/sites/84/2019/11/images.jpg', // Placeholder image
    // You could also use a video URL here if you want to display videos
    // video: 'https://www.youtube.com/embed/your_video_id'
  },
  {
    id: 2,
    title: 'Conferência Tech',
    date: 'Quarta-feira, 10/08/25',
    location: 'São Paulo - SP',
    image: 'https://cdn.folhape.com.br/upload/dn_arquivo/2017/01/campus-party-1-1159274338jpg.jpg',
  },
  {
    id: 3,
    title: 'Workshop de Design',
    date: 'Sábado, 05/09/25',
    location: 'Rio de Janeiro - RJ',
    image: 'https://napne.com.br/wp-content/uploads/2023/05/design-thinking-supplies-1.jpg',
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

  return (
    <CarouselContainer>
      <ArrowButton onClick={goToPrevious} aria-label="Evento anterior">
        <FaArrowLeft />
      </ArrowButton>

      <ContentWrapper>
        <ImageContainer>
          {/* You can conditionally render an img or iframe based on currentEvent.type or if video exists */}
          {currentEvent.image && <img src={currentEvent.image} alt={currentEvent.title} />}
          {/* Example for video:
          {currentEvent.video && (
            <iframe
              src={currentEvent.video}
              title={currentEvent.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          */}
        </ImageContainer>

        <EventCard>
          <CardTitle>{currentEvent.title}</CardTitle>
          <CardDetail>
            <CardDetailIcon><FaCalendarAlt /></CardDetailIcon>
            {currentEvent.date}
          </CardDetail>
          <CardDetail>
            <CardDetailIcon><FaMapMarkerAlt /></CardDetailIcon>
            {currentEvent.location}
          </CardDetail>
        </EventCard>
      </ContentWrapper>

      <ArrowButton onClick={goToNext} aria-label="Próximo evento">
        <FaArrowRight />
      </ArrowButton>
    </CarouselContainer>
  );
};

export default EventCarousel;




// --- React Component --- Quando estiver usando uma API real, você pode descomentar o código abaixo e remover o bloco de dados acima:

// const EventCarousel = () => {
//   // 1. ESTADO PARA ARMAZENAR OS EVENTOS DA API
//   const [events, setEvents] = useState([]);
//   // 2. ESTADO PARA GERENCIAR O CARREGAMENTO
//   const [loading, setLoading] = useState(true);
//   // 3. ESTADO PARA GERENCIAR ERROS
//   const [error, setError] = useState(null);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // 4. useEffect PARA FAZER A CHAMADA DA API
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         setLoading(true); // Começa o carregamento
//         setError(null); // Limpa qualquer erro anterior

//         // SUBSTITUA ESTA URL PELA SUA URL REAL DA API
//         const response = await fetch('SUA_URL_DA_API_AQUI/eventos');
//         // Exemplo: const response = await fetch('https://api.meusite.com/eventos');

//         if (!response.ok) {
//           throw new Error(`Erro HTTP! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setEvents(data); // Armazena os eventos recebidos da API
//       } catch (err) {
//         console.error("Erro ao buscar eventos:", err);
//         setError("Não foi possível carregar os eventos. Tente novamente mais tarde.");
//       } finally {
//         setLoading(false); // Termina o carregamento, independente de sucesso ou falha
//       }
//     };

//     fetchEvents(); // Chama a função de busca quando o componente é montado
//   }, []); // O array vazio [] como segundo argumento garante que useEffect rode apenas uma vez (ao montar)

//   // 5. LÓGICA DE NAVEGAÇÃO DEVE CONSIDERAR QUE `events` PODE ESTAR VAZIO INICIALMENTE
//   const currentEvent = events[currentIndex];

//   const goToPrevious = () => {
//     if (events.length === 0) return; // Evita erro se não houver eventos
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? events.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNext = () => {
//     if (events.length === 0) return; // Evita erro se não houver eventos
//     setCurrentIndex((prevIndex) =>
//       prevIndex === events.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // 6. ADICIONE TELAS DE CARREGAMENTO E ERRO
//   if (loading) {
//     return (
//       <CarouselContainer>
//         <p>Carregando eventos...</p> {/* OU um spinner de carregamento mais elaborado */}
//       </CarouselContainer>
//     );
//   }

//   if (error) {
//     return (
//       <CarouselContainer>
//         <p style={{ color: 'red' }}>{error}</p>
//       </CarouselContainer>
//     );
//   }

//   if (events.length === 0) {
//     return (
//       <CarouselContainer>
//         <p>Nenhum evento disponível no momento.</p>
//       </CarouselContainer>
//     );
//   }

//   return (
//     <CarouselContainer>
//       <ArrowButton onClick={goToPrevious} aria-label="Evento anterior">
//         <FaArrowLeft />
//       </ArrowButton>

//       <ContentWrapper>
//         <ImageContainer>
//           {currentEvent.image && <img src={currentEvent.image} alt={currentEvent.title} />}
//           {/* Você pode adaptar para vídeo se sua API retornar um campo 'videoUrl'
//           {currentEvent.videoUrl && (
//             <iframe
//               src={currentEvent.videoUrl}
//               title={currentEvent.title}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           )}
//           */}
//         </ImageContainer>

//         <EventCard>
//           <CardTitle>{currentEvent.title}</CardTitle>
//           <CardDetail>
//             <CardDetailIcon><FaCalendarAlt /></CardDetailIcon>
//             {currentEvent.date}
//           </CardDetail>
//           <CardDetail>
//             <CardDetailIcon><FaMapMarkerAlt /></CardDetailIcon>
//             {currentEvent.location}
//           </CardDetail>
//         </EventCard>
//       </ContentWrapper>

//       <ArrowButton onClick={goToNext} aria-label="Próximo evento">
//         <FaArrowRight />
//       </ArrowButton>
//     </CarouselContainer>
//   );
// };

// export default EventCarousel;