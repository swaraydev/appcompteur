import React from "react";
import InputText from "../Inputs/InputText";
import axios from "axios";
import "./FormProduit.css";

const FormProduit = () => {
  const [nom, setNom] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [prix, setPrix] = React.useState("");
  const [image, setImage] = React.useState("");
  const [taille, setTaille] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const save = {
      nom,
      description,
      prix,
      image,
      taille,
    };

    try {
      const response = await axios.post(
        "https://api-dev.akov-developpement.fr/api/produit/save",
        save
      );

      alert("Produit enregistrer");

      console.log(response);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className="container form_style">
      <h2>Ajouter le produit</h2>
      <div id="contact-form">
        <form onSubmit={handleSubmit}>
          <InputText
            label="nom"
            type="text"
            name="nom"
            onChange={(event) => setNom(event.target.value)}
          />
          <textarea
            label="description"
            type="text"
            name="description"
            rows="5"
            cols="33"
            onChange={(event) => setDescription(event.target.value)}
          >
            Description
          </textarea>
          <InputText
            label="prix"
            type="number"
            name="prix"
            onChange={(event) => setPrix(event.target.value)}
          />
          <InputText
            label="Lien photo"
            name="Photo"
            type="text"
            onChange={(event) => setImage(event.target.value)}
          />
          <InputText
            label="taille"
            name="taille"
            type="number"
            onChange={(event) => setTaille(event.target.value)}
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default FormProduit;
