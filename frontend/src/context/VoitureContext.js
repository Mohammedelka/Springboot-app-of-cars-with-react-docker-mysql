import React, { createContext, useState } from 'react';

export const VoitureContext = createContext();

export const VoitureListProvider = ({ children }) => {
  const [voitures, setVoitures] = useState([]);
  const [voiture, setVoiture] = useState({});

  const updateVoitures = (voitures) => {
    setVoitures(voitures)
  }

  const addVoiture = (voiture) => {
    setVoitures([... voitures, voiture]);
  }

  const updateVoiture = (voiture) => {
    setVoiture(voiture);
  }

  const removeVoitureById = (id) => {
    const newVoitures = voitures.filter((voiture) => voiture.id !== id);
    setVoitures(newVoitures);
  }

  return (
    <VoitureContext.Provider value={{ voitures, voiture, updateVoitures, updateVoiture, removeVoitureById, addVoiture }}>
      {children}
    </VoitureContext.Provider>
  );
}