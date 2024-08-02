import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL || 'https://api.serversocial.xyz/api/v1';

// Subir una nueva imagen de perfil
export const uploadProfileImage = async (image: string | ArrayBuffer | null) => {
  const response = await axios.post(`${API_URL}/images/profile`, { image }, {
    withCredentials: true // Para enviar cookies de autenticación si es necesario
  });

  return response.data;
};

// Subir una nueva imagen de portada
export const uploadCoverImage = async (image: string | ArrayBuffer | null) => {
  const response = await axios.post(`${API_URL}/images/background`, { image }, {
    withCredentials: true // Para enviar cookies de autenticación si es necesario
  });

  return response.data;
};

// Obtener imágenes del usuario
export const getUserImages = async (userId: string) => {
  const response = await axios.get(`${API_URL}/images/${userId}`, {
    withCredentials: true // Para enviar cookies de autenticación si es necesario
  });

  return response.data.images;
};
