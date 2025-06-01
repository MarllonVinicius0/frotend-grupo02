import { Card, Typography } from "antd";
import { useState, useEffect, useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;


import {
  SectionWrapper,
  SectionTitle,
  CarouselWrapper,
  ScrollContainer,
  StyledCard,
  CardTitle,
  CardInfo,
  ArrowButton,ContentContainer
} from "./style";

const mockData = [
  {
    id: 1,
    title: "Show 1",
    location: "Centro de Eventos | Fortaleza - CE",
    date: "Segunda, 16/07 às 15:00",
    imageUrl: "https://i.imgur.com/7y3a0G2.jpeg",
  },
  {
    id: 2,
    title: "Show 2",
    location: "Centro de Eventos | Fortaleza - CE",
    date: "Terça, 17/07 às 20:00",
    imageUrl: "https://i.imgur.com/7y3a0G2.jpeg",
  },
  {
    id: 3,
    title: "Show 3",
    location: "Praça do Ferreira | Fortaleza - CE",
    date: "Sexta, 20/07 às 22:00",
    imageUrl: "https://i.imgur.com/7y3a0G2.jpeg",
  },
  {
    id: 4,
    title: "Show 4",
    location: "Anfiteatro do Cocó | Fortaleza - CE",
    date: "Sábado, 21/07 às 18:00",
    imageUrl: "https://i.imgur.com/7y3a0G2.jpeg",
  },
  {
    id: 5,
    title: "Show 5",
    location: "Centro de Eventos | Fortaleza - CE",
    date: "Domingo, 22/07 às 17:00",
    imageUrl: "https://i.imgur.com/7y3a0G2.jpeg",
  },
  {
    id: 6,
    title: "Show 6",
    location: "Centro de Eventos | Fortaleza - CE",
    date: "Segunda, 23/07 às 19:00",
    imageUrl: "https://i.imgur.com/7y3a0G2.jpeg",
  },
   {
    id: 7,
    title: "Show 6",
    location: "Centro de Eventos | Fortaleza - CE",
    date: "Segunda, 23/07 às 19:00",
    imageUrl: "https://i.imgur.com/7y3a0G2.jpeg",
  },
];

const Entretenimento = () => {
  const scrollRef = useRef(null);
  
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollPosition = () => {
    setTimeout(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
      }
    }, 100);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    checkScrollPosition();
    if (scrollContainer) {
        scrollContainer.addEventListener('scroll', checkScrollPosition);
    }
    window.addEventListener('resize', checkScrollPosition);

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScrollPosition);
      }
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; 
      if (direction === 'left') {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <SectionWrapper>
      {/* O conteúdo agora fica dentro do ContentContainer para limitar a largura */}
      <ContentContainer>
        <SectionTitle level={2}>Entretenimento</SectionTitle>
        <CarouselWrapper>
          <ArrowButton
            className="arrow-left"
            icon={<LeftOutlined />}
            shape="circle"
            onClick={() => handleScroll('left')}
            $show={canScrollLeft}
          />
          <ScrollContainer ref={scrollRef}>
            {/* Voltamos a mapear a lista completa de dados */}
            {mockData.map((show) => (
              <StyledCard key={show.id} hoverable cover={<img alt={show.title} src={show.imageUrl} />}>
                <CardTitle>{show.title}</CardTitle>
                <CardInfo>{show.location}</CardInfo>
                <CardInfo>{show.date}</CardInfo>
              </StyledCard>
            ))}
          </ScrollContainer>
          <ArrowButton
            className="arrow-right"
            icon={<RightOutlined />}
            shape="circle"
            onClick={() => handleScroll('right')}
            $show={canScrollRight}
          />
        </CarouselWrapper>
      </ContentContainer>
    </SectionWrapper>
  );
};

export default Entretenimento;

// --- INTEGRAÇÃO COM API EXTERNA ---
// Para usar dados de uma API, descomente o código abaixo e remova 'mockData'.
/*
  const [shows, setShows] = useState([]); // Estado para armazenar os dados da API
  const [loading, setLoading] = useState(true); // Estado para controlar o loading

  useEffect(() => {
    // A função fetch faz a requisição para a sua API
    fetch('https://sua-api.com/eventos') // Substitua pela URL da sua API
      .then(response => response.json())
      .then(data => {
        // Mapeie os dados da sua API para o formato esperado se necessário
        const formattedData = data.map(item => ({
          id: item.id,
          title: item.nome_do_show,
          location: `${item.local} | ${item.cidade} - ${item.estado}`,
          date: new Date(item.data).toLocaleDateString('pt-BR', {
            weekday: 'long', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
          }),
          imageUrl: item.url_da_imagem
        }));
        setShows(formattedData); // Atualiza o estado com os dados recebidos
      })
      .catch(error => console.error("Erro ao buscar dados da API:", error))
      .finally(() => setLoading(false)); // Finaliza o loading
  }, []); // O array vazio [] faz com que o useEffect execute apenas uma vez

  // Enquanto estiver carregando, você pode mostrar um spinner ou mensagem
  if (loading) {
    return <SectionWrapper><SectionTitle level={2}>Carregando eventos...</SectionTitle></SectionWrapper>;
  }
  */

/* Aqui, troque 'mockData' por 'shows' quando estiver usando a API.
          O método .map() vai iterar sobre a lista de shows (seja a mock ou da API)
          e renderizar um Card para cada um.
        */
