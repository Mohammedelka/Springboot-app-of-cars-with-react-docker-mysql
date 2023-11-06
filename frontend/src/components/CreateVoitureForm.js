import React, { useContext, useRef } from "react";
import { createVoiture } from "../services/ApiService";
import { useNavigate } from "react-router-dom";
import { VoitureContext } from "../context/VoitureContext";

export default function CreateVoitureForm() {
  const navigate = useNavigate();
  const marqueRef = useRef();
  const modeleRef = useRef();
  const couleurRef = useRef();
  const immatriculeRef = useRef();
  const anneeRef = useRef();
  const prixRef = useRef();

  const { addVoiture } = useContext(VoitureContext);

  async function add(event) {
    event.preventDefault();

    try {
      const newVoiture = {
        marque: marqueRef.current.value,
        modele: modeleRef.current.value,
        couleur: couleurRef.current.value,
        immatricule: immatriculeRef.current.value,
        annee: anneeRef.current.value,
        prix: prixRef.current.value,
      };

      console.log(newVoiture);

      const response = await createVoiture(newVoiture);
      console.log(response);
      addVoiture(response);
      navigate(`/${response.id}`);
    } catch (error) {
      console.error("Error", error);
    }
  }

  return (
    <form>
      <div className="mb-3 mt-5">
        <label htmlFor="marque" className="form-label">
          Marque
        </label>
        <input
          ref={marqueRef}
          type="text"
          className="form-control"
          id="marque"
          aria-describedby="marqueHelp"
        />
        <div id="marqueHelp" className="form-text">
          Input the voiture marque here.
        </div>
      </div>
      <div className="mb-3">
        <div className="row">
          <div className="col-6">
            <label htmlFor="modele" className="form-label">
              Modèle
            </label>
            <input
              ref={modeleRef}
              type="text"
              className="form-control"
              id="modele"
            />
          </div>
          <div className="col-6">
            <label htmlFor="couleur" className="form-label">
              Couleur
            </label>
            <input
              ref={couleurRef}
              type="text"
              className="form-control"
              id="couleur"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <label htmlFor="immatricule" className="form-label">
              Immatricule
            </label>
            <input
              ref={immatriculeRef}
              type="text"
              className="form-control"
              id="immatricule"
            />
          </div>
          <div className="col-6">
            <label htmlFor="annee" className="form-label">
              Année
            </label>
            <input
              ref={anneeRef}
              type="number"
              className="form-control"
              id="annee"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <label htmlFor="prix" className="form-label">
              Prix
            </label>
            <input
              ref={prixRef}
              type="number"
              className="form-control"
              id="prix"
            />
          </div>
        </div>
      </div>
      <button onClick={add} type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
}
