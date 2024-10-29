import React from "react";
import FormProduit from "../components/Formulaire/FormProduit";
import TableForm from "../components/Formulaire/ListProduits";

const AdminGestionProduit = () => {
  return (
    <div>
      <FormProduit />
      <TableForm />
    </div>
  );
};

export default AdminGestionProduit;
