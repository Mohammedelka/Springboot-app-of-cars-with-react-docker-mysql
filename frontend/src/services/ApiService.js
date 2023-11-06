import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const apiUrl = `${baseURL}/api/voitures`;

export const getVoitures = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createVoiture = async (voiture) => {
  try {
    const response = await axios.post(apiUrl, voiture);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getVoitureById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateVoitureById = async (id, voiture) => {
  try {
    const response = await axios.put(`${apiUrl}/${id}`, voiture);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteVoitureById = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
