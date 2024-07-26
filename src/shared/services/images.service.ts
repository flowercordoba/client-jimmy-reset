import axios from 'axios';

const API_URL = 'http://yeebam-dev.eba-jubbbszd.us-east-1.elasticbeanstalk.com/api/v1'; // Cambia esto por la URL de tu API

// Subir una nueva imagen de perfil
export const uploadProfileImage = async (image: string | ArrayBuffer | null) => {
  const response = await axios.post(`${API_URL}/images/profile`, { image }, {
    withCredentials: true // Para enviar cookies de autenticación si es necesario
  });

  return response.data;
};

// Subir una nueva imagen de portada
export const uploadCoverImage = async (imageFile: File) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  const response = await axios.post(`${API_URL}/images/background`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
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
