import React from "react";
import InputText from "../Inputs/InputText";
import "./FormLogin.css";
import api from "../../api/Api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const FormLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [mdp, setMdp] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      mdp,
    };

    console.log(user);

    api
      .post("/api/users/login", user)
      .then(function (response) {
        // tout est bien enregistrer // serveur ma envoyer le ok code 200
        // sauvegarder les informations du serveur
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(response.data.role);
        // redirection
        if (response.data.role === "ADMIN") {
          navigate("/admin/produits");
        } else {
          navigate("/user");
        }
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
      });
  };
  return (
    <div className="container form_style">
      <h2>Identification</h2>
      <div id="contact-form">
        <form onSubmit={handleSubmit}>
          <InputText
            label="email"
            type="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <InputText
            label="password"
            type="password"
            name="mdp"
            onChange={(event) => setMdp(event.target.value)}
          />
          <button type="submit">Connexion</button>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
