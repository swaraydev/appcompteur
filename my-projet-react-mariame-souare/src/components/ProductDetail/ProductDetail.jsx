import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/Api";
import Produit from "../../model/Produit";
import "./ProductDetail.css";
import InputText from "../Inputs/InputText";

const ProductDetail = () => {
  const { id } = useParams();
  const [produit, setProduit] = useState(null);
  const [error, setError] = useState(null);
  const [qte, setQte] = useState(1);

  useEffect(() => {
    const fetchProduit = async () => {
      try {
        const response = await api.post(`/api/produit/${id}`);

        const fetchedProduit = new Produit(
          response.data.id,
          response.data.nom,
          response.data.prix,
          response.data.image,
          response.data.description,
          response.data.tail
        );
        setProduit(fetchedProduit);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduit();
  }, [id]);

  const handleOrder = async () => {
    setError(null);
    if (qte <= 0 || isNaN(qte)) {
      setError("Merci de renter une quantité valide.");
      return;
    }

    const user = localStorage.getItem("user");
    if (user == null) {
      alert("Merci de vous connecter");
      return;
    }
    const orderData = {
      idUser: JSON.parse(user).id,
      idProduit: id,
      qte: qte,
    };

    api
      .post("api/commande/save", orderData)
      .then(function (response) {
        alert("Commande enregistrée");
        window.location = "/listproduits";
        //Navigate("/produits");
      })
      .catch(function (error) {
        console.log(error);
        alert("Erreur lors de l'enregistrement de la commande");
      });
  };

  if (!produit) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="product-detail-container">
        <div className="product-detail">
          <img
            src={produit.image}
            alt={produit.nom}
            className="product-image"
          />
          <h1>{produit.nom}</h1>
          <p>{produit.description}</p>
          <p>Price: ${produit.prix}</p>
        </div>
      </div>
      <div className="order-section">
        <InputText
          label="Quantité"
          name="quantité"
          type="number"
          value={qte}
          onChange={(event) => setQte(event.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" onClick={handleOrder} className="order-button">
          Commander
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
