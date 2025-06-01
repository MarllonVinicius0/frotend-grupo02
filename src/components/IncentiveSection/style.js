import styled from 'styled-components';



export const IncentiveContainer = styled.section`
  background-color: #1674B3; /* Cor azul do background da imagem */
  color: white;
  padding: 60px 20px; /* Padding superior/inferior para espaçamento */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  justify-content: center; /* Centraliza o conteúdo verticalmente */
  text-align: center; /* Centraliza o texto */
  font-family: 'Roboto', sans-serif; /* Use uma fonte mais moderna, se disponível */

  @media (max-width: 768px) {
    padding: 40px 15px; /* Menos padding em telas menores */
  }
`;

export const MainMessage = styled.h2`
  font-size: 2em; /* Tamanho da fonte para a mensagem principal */
  font-weight: 600; /* Deixa a fonte em negrito */
  margin-bottom: 20px; /* Espaço abaixo da mensagem principal */
  max-width: 900px; /* Limita a largura do texto para melhor leitura */
  line-height: 1.3; /* Espaçamento entre linhas */

  @media (max-width: 1024px) {
    font-size: 2.2em;
  }

  @media (max-width: 768px) {
    font-size: 1.8em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

export const SubMessage = styled.p`
  font-size: 1.3em; /* Tamanho da fonte para a mensagem secundária */
  font-weight:lighter;
  margin-bottom: 33px; /* Espaço abaixo da mensagem secundária */
  max-width: 700px; /* Limita a largura do texto */
  line-height: 1.5;

  @media (max-width: 1024px) {
    font-size: 1.2em;
  }

  @media (max-width: 768px) {
    font-size: 1.1em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

export const ActionButton = styled.button`
  background-color: #4CAF50; /* Cor verde do botão na imagem */
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 15px 30px; /* Padding interno do botão */
  border: none;
  border-radius: 8px; /* Borda arredondada do botão */
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra suave para o botão */

  & a{
    text-decoration:none;
    color:white;
  }

  &:hover {
    background-color: #4CAF50; /* Um verde um pouco mais escuro no hover */
    transform: translateY(-2px); /* Efeito de "subir" no hover */
  }

  &:active {
    background-color: #3C8D40; /* Verde mais escuro ao clicar */
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    font-size: 1.1em;
    padding: 12px 25px;
  }
`;