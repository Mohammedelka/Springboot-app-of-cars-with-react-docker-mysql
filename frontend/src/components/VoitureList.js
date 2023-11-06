import React, { useContext, useEffect } from "react";
import VoitureTableRow from "./VoitureTableRow";
import { VoitureContext } from "../context/VoitureContext";
import { getVoitures } from "../services/ApiService";
import { NavLink } from "react-router-dom";

export default function VoitureList() {
  const { voitures, updateVoitures } = useContext(VoitureContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const voitures = await getVoitures();
        updateVoitures(voitures);
      } catch (error) {
        console.error("Error fetching voitures:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/">Voitures</NavLink>
          </li>
        </ol>
      </nav>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Marque</th>
            <th scope="col">Modèle</th>
            <th scope="col">Couleur</th>
            <th scope="col">Immatricule</th>
            <th scope="col">Année</th>
            <th scope="col">Prix</th>
          </tr>
        </thead>
        <tbody>
          {voitures.map((voiture) => (
            <VoitureTableRow key={voiture.id} {...voiture} />
          ))}
        </tbody>
      </table>
      <div>
        <NavLink className="btn btn-primary" to="/new">
          Add
        </NavLink>
      </div>
    </div>
  );
}
