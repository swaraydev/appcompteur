import React from "react";
import api from "../../api/Api";
import Produit from "../../model/Produit";
import { Carousel } from "react-bootstrap";
import "./Accueil.css";

const Accueil = () => {
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
        setProduits(listProduits.slice(0, 6, 7, 11));
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
    <div>
      <Carousel>
        {produits.map((produit) => (
          <Carousel.Item key={produit.id}>
            <img
              className="d-block w-100"
              src={produit.image}
              alt={`Produit ${produit.id}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Accueil;
