// src/services/apiService.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api-store-do1w.onrender.com/shoes', // substitua pela URL da sua API    
});

export const fetchDadosDaAPI = async () => {
  try {
    const response = await apiClient.get('https://api-store-do1w.onrender.com/shoes'); // substitua '/dados' pelo endpoint da sua API
    console.log(response.data)
    return response.data; // retorna os dados recebidos da API
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error; // gerencia o erro conforme necessário
  }
};

export default apiClient