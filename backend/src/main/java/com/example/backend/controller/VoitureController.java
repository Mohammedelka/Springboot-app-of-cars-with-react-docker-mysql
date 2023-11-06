package com.example.backend.controller;

import com.example.backend.model.Voiture;
import com.example.backend.service.VoitureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/voitures")
public class VoitureController {

    @Autowired
    private VoitureService voitureService;

    @PostMapping
    public Voiture save(@RequestBody Voiture voiture) {
        return voitureService.save(voiture);
    }

    @PutMapping("/{id}")
    public Voiture update(@PathVariable Long id, @RequestBody Voiture voiture) {
        return voitureService.updateById(id, voiture);
    }

    @GetMapping
    public List<Voiture> findAll() {
        return voitureService.findAll();
    }

    @GetMapping("/{id}")
    public Voiture findById(@PathVariable Long id) {
        return voitureService.findById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id) {
        voitureService.deleteById(id);
    }

}
