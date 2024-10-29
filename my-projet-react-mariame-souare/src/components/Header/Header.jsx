import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/navigator-bar" className="/nav__logo">
          IsmaShop🛒
        </Link>
        <Link to="/" className="nav__link">
          Accueil
        </Link>
        <Link to="/contact" className="nav__link">
          Contact
        </Link>
        <Link to="/produits" className="nav__link">
          Produits
        </Link>
        <Link to="/espace-client" className="nav__link">
          Espace-Client
        </Link>
      </nav>
    </header>
  );
};

export default Header;
