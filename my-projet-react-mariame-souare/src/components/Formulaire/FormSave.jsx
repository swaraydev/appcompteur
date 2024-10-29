import React from "react";
import InputText from "../Inputs/InputText";
import axios from "axios";
import "./FormSave.css";

const FormSave = () => {
  const [nom, setNom] = React.useState("");
  const [prenom, setPrenom] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mdp, setMdp] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      nom,
      prenom,
      email,
      mdp,
    };

    console.log(user);

    try {
      const response = await axios.post(
        "https://api-dev.akov-developpement.fr/api/users/save",
        user
      );

      alert("Enregistrement reussi");

      console.log(response);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className="container-form_style">
      <h2>S'enregistrer</h2>
      <div id="contact-form">
        <form onSubmit={handleSubmit}>
          <InputText
            label="first name"
            type="text"
            name="nom"
            onChange={(event) => setNom(event.target.value)}
          />
          <InputText
            label="last name"
            type="text"
            name="prenom"
            placeholder="Enter your second name"
            onChange={(event) => setPrenom(event.target.value)}
          />
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
          <button type="submit">Enregister</button>
        </form>
      </div>
    </div>
  );
};

export default FormSave;
