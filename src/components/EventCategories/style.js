import styled from "styled-components";


export const CategoriesContainer = styled.section`
  background-color: #E5E5E5; /* Fundo cinza claro conforme a imagem */
  padding: 60px 20px;
  font-family: 'Roboto', sans-serif; /* Use uma fonte mais moderna, se disponível */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo horizontalmente */
`;

export const SectionTitle = styled.h2`
  font-size: 1.8em; /* Aumenta um pouco o tamanho para o destaque */
  color: #333;
  font-weight:bold;
  margin-bottom: 32px;
  text-align: left; /* Título alinhado à esquerda na imagem */
  width: 100%; /* Permite alinhar à esquerda */
  max-width: 1200px; /* Limita a largura do título como o grid */
  padding-left: 20px; /* Um pouco de padding para não colar na borda */

  @media (max-width: 768px) {
    font-size: 2em;
    text-align: center; /* Centraliza em telas menores */
    padding-left: 0;
  }
`;

export const CategoriesGrid = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os itens quebrem para a próxima linha */
  justify-content: center; /* Centraliza os itens quando há menos do que a linha cheia */
  gap: 50px; /* Espaço entre os cards */
  max-width: 1200px; /* Largura máxima para a grade */
  width: 100%; /* Ocupa a largura total disponível dentro do container */

  @media (max-width: 1200px) {
    padding: 0 20px; /* Adiciona padding nas laterais em telas médias */
  }

  @media (max-width: 768px) {
    gap: 20px; /* Menos espaço em telas menores */
  }
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px; /* Largura fixa para cada card conforme a imagem */
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 12px; /* Borda arredondada para o card */
  padding-bottom: 10px; /* Espaço para o título embaixo da imagem */

  &:hover {
    transform: translateY(-5px); /* Efeito de "subir" no hover */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* Sombra mais forte no hover */
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px); /* 2 cards por linha em tablets */
    max-width: 150px; /* Limita o tamanho para não ficarem muito grandes */
  }

  @media (max-width: 480px) {
    width: calc(100% - 20px); /* 1 card por linha em celulares */
    max-width: 120px; /* Ainda menor em celulares */
  }
`;

export const CardImageWrapper = styled.div`
  width: 100%;
  padding-top: 100%; /* Cria um espaço quadrado (1:1 aspect ratio) */
  position: relative;
  border-radius: 12px; /* Borda arredondada, igual ao card */
  overflow: hidden; /* Garante que a imagem respeite o border-radius */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra suave para a imagem */
  background-color: #ddd; /* Cor de fundo para o wrapper enquanto a imagem carrega */
`;

export const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Garante que a imagem cubra o espaço sem distorcer */
  border-radius: 12px; /* Aplica o border-radius diretamente na imagem também */
`;

export const CardTitle = styled.h3`
  font-size: 1.1em;
  color: #0D0D0D;
  font-weight: 600;
  margin-top: 15px; /* Espaço entre a imagem e o título */
  text-align: center;
  white-space: nowrap; /* Evita que o texto quebre em várias linhas */
  overflow: hidden; /* Esconde qualquer texto que transborde */
  text-overflow: ellipsis; /* Adiciona "..." se o texto for muito longo */
  max-width: 100%; /* Garante que o texto não exceda a largura do card */

  @media (max-width: 480px) {
    font-size: 1em;
    margin-top: 10px;
  }
`;