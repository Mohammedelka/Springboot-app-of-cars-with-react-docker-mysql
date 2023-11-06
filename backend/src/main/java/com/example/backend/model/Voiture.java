package com.example.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
public class Voiture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    private String marque;
    
    @NonNull
    private String modele;
    
    @NonNull
    private String couleur;
    
    @NonNull
    private String immatricule;
    
    @NonNull
    private int annee;
    
    @NonNull
    private int prix;
}
