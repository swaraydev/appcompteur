import React, { useState } from "react";

export default function Compteur() {
  const [compteur, setCompteur] = useState(5);
  const incrementer = () => {
    setCompteur(compteur + 1);
   
  };
  const decrementer = () => {
    setCompteur(compteur -1);
  };
  return (
    <div className="compteur">
      <button onClick={incrementer}>+</button>
      <p className={compteur < 0 && "error"}>{compteur}</p>
      <button onClick={decrementer}>-</button>
    </div>
  );
}
