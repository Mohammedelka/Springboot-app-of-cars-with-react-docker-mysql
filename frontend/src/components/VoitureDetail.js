import React, { useEffect, useContext } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { deleteVoitureById, getVoitureById } from "../services/ApiService";
import { VoitureContext } from "../context/VoitureContext";

export default function VoitureDetail() {
  const { id } = useParams();
  const { voiture, updateVoiture, removeVoitureById } = useContext(VoitureContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const voiture = await getVoitureById(id);
        updateVoiture(voiture);
      } catch (error) {
        console.error("Error fetching voitures:", error);
      }
    }

    fetchData();
  }, [id, updateVoiture]);

  async function deleteVoiture() {
    try {
      await deleteVoitureById(id);
      removeVoitureById(id);
      navigate("/");
    } catch (error) {
      console.error("Error deleting voiture:", error);
    }
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/">Voitures</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink active to={`/${id}`}>
              {id}
            </NavLink>
          </li>
        </ol>
      </nav>
      <h4 className="text-center mb-5 mt-5">Voiture Info: {id}</h4>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Marque</th>
            <td>{voiture.marque}</td>
          </tr>
          <tr>
            <th scope="row">Modèle</th>
            <td>{voiture.modele}</td>
          </tr>
          <tr>
            <th scope="row">Couleur</th>
            <td>{voiture.couleur}</td>
          </tr>
          <tr>
            <th scope="row">Immatricule</th>
            <td>{voiture.immatricule}</td>
          </tr>
          <tr>
            <th scope="row">Année</th>
            <td>{voiture.annee}</td>
          </tr>
          <tr>
            <th scope="row">Prix</th>
            <td>{voiture.prix}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <div className="row">
          <div className="col-6">
            <NavLink className="btn btn-light" to={`/${id}/edit`}>
              Edit
            </NavLink>
          </div>
          <div className="col-6 text-end">
            <button
              onClick={deleteVoiture}
              className="btn btn-danger pull-right"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
