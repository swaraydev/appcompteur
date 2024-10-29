import React from "react";
import { Link } from "react-router-dom";
import Produit from "../../model/Produit";
import api from "../../api/Api";
import "./Cards.css";

const Cards = () => {
  const [produits, setProduits] = React.useState([]);

  const recupProduits = async () => {
    api
      .post("/api/produit/all")
      .then(function (response) {
        const listProduits = response.data.map(
          (produit) =>
            new Produit(
              produit.id,
              produit.nom,
              produit.prix,
              produit.image,
              produit.description,
              produit.tail
            )
        );
        setProduits(listProduits);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // useEffect
  React.useEffect(() => {
    recupProduits();
  }, []);

  return (
    <>
      <div className="row">
        {produits.map((produit) => (
          <div className="col-md-3 mt-3">
            <Link to={`/product/${produit.id}`} className="card-link">
              <div className="card">
                <img src={produit.image} className="card-img" alt="parfun" />
                <div className="card-body">
                  <p className="card-text">
                    Ce parfum d'exception s'ouvre sur une symphonie enivrante de
                    notes de tête d'agrumes pétillants et de bergamote
                    lumineuse, évoquant une fraîcheur délicate et éclatante.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
