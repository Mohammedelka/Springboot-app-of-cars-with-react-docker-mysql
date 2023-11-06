package com.example.backend.service;

import com.example.backend.model.Voiture;

import java.util.List;

public interface VoitureService {
    Voiture save(Voiture voiture);

    Voiture updateById(Long id, Voiture voiture);

    List<Voiture> findAll();

    Voiture findById(Long id);

    void deleteById(Long id);
}
