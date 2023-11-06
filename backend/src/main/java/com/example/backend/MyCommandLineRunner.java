package com.example.backend;

import com.example.backend.model.Voiture;
import com.example.backend.service.VoitureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MyCommandLineRunner implements CommandLineRunner {

    @Autowired
    private VoitureService voitureService;

    @Override
    public void run(String... args) throws Exception {
        // Create and save two Voiture objects
        Voiture voiture1 = new Voiture();
        voiture1.setMarque("BMW");
        voiture1.setModele("X5");
        voiture1.setCouleur("Black");
        voiture1.setImmatricule("ABC123");
        voiture1.setAnnee(2022);
        voiture1.setPrix(50000);
        voitureService.save(voiture1);

        Voiture voiture2 = new Voiture();
        voiture2.setMarque("Mercedes");
        voiture2.setModele("C-Class");
        voiture2.setCouleur("Silver");
        voiture2.setImmatricule("XYZ789");
        voiture2.setAnnee(2020);
        voiture2.setPrix(40000);
        voitureService.save(voiture2);

       
    }
}
