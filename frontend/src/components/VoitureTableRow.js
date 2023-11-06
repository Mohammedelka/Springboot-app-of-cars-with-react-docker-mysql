import { NavLink } from "react-router-dom";
import { deleteVoitureById } from "../services/ApiService";
import { useContext } from "react";
import { VoitureContext } from "../context/VoitureContext";

export default function VoitureTableRow({
  id,
  marque,
  modele,
  couleur,
  immatricule,
  annee,
  prix,
}) {
  const { removeVoitureById } = useContext(VoitureContext);

  async function deleteVoiture() {
    try {
      await deleteVoitureById(id);
      removeVoitureById(id);
    } catch (error) {
      console.error("Error deleting voiture:", error);
    }
  }

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{marque}</td>
      <td>{modele}</td>
      <td>{couleur}</td>
      <td>{immatricule}</td>
      <td>{annee}</td>
      <td>{prix}</td>
      <td>
        <div className="btn-group">
          <NavLink className="btn btn-info" to={`/${id}`}>
            View
          </NavLink>
          <NavLink className="btn btn-light" to={`/${id}/edit`}>
            Edit
          </NavLink>
          <button onClick={deleteVoiture} className="btn btn-danger">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
