package com.example.backend.service.impl;

import com.example.backend.model.Voiture;
import com.example.backend.repository.VoitureRepository;
import com.example.backend.service.VoitureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VoitureServiceImpl implements VoitureService {

    @Autowired
    private VoitureRepository voitureRepository;

    @Override
    public Voiture save(Voiture voiture) {
        return voitureRepository.save(voiture);
    }

    @Override
    public Voiture updateById(Long id, Voiture voiture) {

        Voiture managedVoiture = this.findById(id);
        // Update the managedVoiture object with new values
        managedVoiture.setMarque(voiture.getMarque()); // Update marque
        managedVoiture.setModele(voiture.getModele()); // Update modele
        managedVoiture.setCouleur(voiture.getCouleur()); // Update couleur
        managedVoiture.setImmatricule(voiture.getImmatricule()); // Update immatricule
        managedVoiture.setAnnee(voiture.getAnnee()); // Update annee
        managedVoiture.setPrix(voiture.getPrix()); // Update prix

        return this.save(managedVoiture);
    }

    @Override
    public List<Voiture> findAll() {
        return voitureRepository.findAll();
    }

    @Override
    public Voiture findById(Long id) {
        return voitureRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteById(Long id) {
        voitureRepository.deleteById(id);
    }

}
