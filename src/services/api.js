import axios from "axios";

const api = axios.create({
  baseURL: "http://seu-backend.com/api", // ajuste depois
});

export const getEventsByCategory = async (categoryId) => {
  // Ajuste a rota conforme seu backend
  const response = await api.get(`/eventos?categoria=${categoryId}`);
  return response.data;
};

export const getHighlightEventByCategory = async (categoryId) => {
  // Ajuste a rota conforme seu backend
  const response = await api.get(`/eventos/destaque?categoria=${categoryId}`);
  return response.data;
};