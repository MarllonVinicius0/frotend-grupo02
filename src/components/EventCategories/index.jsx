import React from "react";
import {CardImage, CardImageWrapper, CardTitle, CategoryCard, CategoriesContainer, CategoriesGrid, SectionTitle} from "./style";
import EducacaoImg from "../../assets/img/Educacao.png";
import SaudeImg from "../../assets/img/Saude.png";
import EntretenimentoImg from "../../assets/img/Entret.png";
import ModaBelezaImg from "../../assets/img/Moda.png";
import GastronomiaImg from "../../assets/img/Gastro.png";
import { useNavigate } from "react-router-dom";

// --- Dados de Exemplo das Categorias ---
// Em um projeto real, você buscaria isso de uma API, assim como nos eventos.
const categories = [
    {
        id: 1,
        name: 'Educação',
        image: EducacaoImg
    },
    {
        id: 2,
        name: 'Saúde',
        image: SaudeImg, 
    },
    {
        id: 3,
        name: 'Entretenimento',
        image: EntretenimentoImg, 
    },
    {
        id: 4,
        name: 'Moda e Beleza',
        image: ModaBelezaImg, 
    },
    {
        id: 5,
        name: 'Gastronomia',
        image: GastronomiaImg, 
    },
    // Adicione mais categorias aqui se precisar!
];






const EventCategories = () => {
  // Em um caso real, você buscaria 'categories' de uma API aqui, como no EventCarousel.
  // Exemplo de como ficaria a busca (mas para este componente, usaremos os dados locais por simplicidade agora):
  /*
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch('SUA_URL_DA_API_DE_CATEGORIAS');
        if (!response.ok) {
          throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.error("Erro ao buscar categorias:", err);
        setError("Não foi possível carregar as categorias.");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) return <CategoriesContainer><p>Carregando categorias...</p></CategoriesContainer>;
  if (error) return <CategoriesContainer><p style={{color: 'red'}}>{error}</p></CategoriesContainer>;
  if (categories.length === 0) return <CategoriesContainer><p>Nenhuma categoria disponível.</p></CategoriesContainer>;
  */


const navigate = useNavigate();

return (
  <CategoriesContainer>
    <SectionTitle>Categorias de eventos</SectionTitle>
    <CategoriesGrid>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          onClick={() => navigate(`/categoria/${category.id}`)}
          style={{ cursor: "pointer" }}
        >
          <CardImageWrapper>
            <CardImage src={category.image} alt={category.name} />
          </CardImageWrapper>
          <CardTitle>{category.name}</CardTitle>
        </CategoryCard>
      ))}
    </CategoriesGrid>
  </CategoriesContainer>
);
};

export default EventCategories;