import React, { useEffect, useState } from "react";

const VoirProfil = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
  if (!user) {
    return <div>Loading....</div>;
  }
  return (
    <div className="profil-container">
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="avatar"
        className="profil-avatar"
      />
      <h1 className="profil-header">Profil de l'utilisateur</h1>
      <hr />
      <div className="profil-info">
        <p>
          <strong>first name:</strong> {user.nom}
        </p>
        <p>
          <strong>last name:</strong> {user.prenom}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
};
export default VoirProfil;
