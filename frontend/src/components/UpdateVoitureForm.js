import React, { useContext, useEffect, useState } from "react";
import { getVoitureById, updateVoitureById } from "../services/ApiService";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { VoitureContext } from "../context/VoitureContext";

export default function UpdateVoitureForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { voiture, updateVoiture } = useContext(VoitureContext);

  const [inputValues, setInputValues] = useState({
    marque: "",
    modele: "",
    couleur: "",
    immatricule: "",
    annee: "",
    prix: "",
  });

  useEffect(() => {
    console.log("useEffect");
    async function fetchData() {
      try {
        const fetchedVoiture = await getVoitureById(id);
        updateVoiture(fetchedVoiture);
        setInputValues({
          marque: fetchedVoiture.marque,
          modele: fetchedVoiture.modele,
          couleur: fetchedVoiture.couleur,
          immatricule: fetchedVoiture.immatricule,
          annee: fetchedVoiture.annee,
          prix: fetchedVoiture.prix,
        });
      } catch (error) {
        console.error("Error fetching voitures:", error);
      }
    }

    fetchData();
  }, []);


  const update = async (event) => {
    event.preventDefault();

    try {
      const response = await updateVoitureById(id, inputValues);
      navigate(`/${response.id}`);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    console.log(id, value);
    setInputValues({ ...inputValues, [id]: value });
  };

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
          <li className="breadcrumb-item active">
            <NavLink active to={`/${id}/edit`}>
              edit
            </NavLink>
          </li>
        </ol>
      </nav>
      <form>
        <div className="mb-3 mt-5">
          <label htmlFor="marque" className="form-label">
            Marque
          </label>
          <input
            onChange={(e) => handleChange(e)}
            defaultValue={voiture.marque}
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
                onChange={handleChange}
                defaultValue={voiture.modele}
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
                onChange={handleChange}
                defaultValue={voiture.couleur}
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
                onChange={handleChange}
                defaultValue={voiture.immatricule}
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
                onChange={handleChange}
                defaultValue={voiture.annee}
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
                onChange={handleChange}
                defaultValue={voiture.prix}
                type="number"
                className="form-control"
                id="prix"
              />
            </div>
          </div>
        </div>
        <button onClick={update} type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}
