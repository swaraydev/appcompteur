import React from "react";
import InputText from "../Inputs/InputText";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [nom, setNom] = React.useState("");
  const [prenom, setPrenom] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [sujet, setSujet] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contact = {
      nom,
      prenom,
      email,
      tel,
      sujet,
      message,
    };

    console.log(contact);

    try {
      const response = await axios.post(
        "https://api-dev.akov-developpement.fr/api/users/save",
        contact
      );

      alert("Enregistrement reussi");

      console.log(response);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className="container form_style">
      <h2>Contactez-nous</h2>
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
            label="telephone"
            type="number"
            name="telephone"
            onChange={(event) => setTel(event.target.value)}
          />
          <InputText
            label="sujet"
            type="text"
            required
            autocomplete="off"
            name="sujet"
            onChange={(event) => setSujet(event.target.value)}
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            rows="5"
            cols="33"
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
