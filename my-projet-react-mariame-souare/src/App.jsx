import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  MemoryRouter,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import {
  Accueil,
  NavigatorBar,
  Produits,
  Contact,
  EspaceClient,
} from "./components/pages";
import Footer from "./components/Footer/Footer";
import "./App.css";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import AdminGestionProduit from "./admin/AdminGestionProduit";
import { Toaster } from "react-hot-toast";
import ListProduits from "./components/Formulaire/ListProduits";
import VoirProfil from "./components/user/VoirProfil";

const PrivateAdminRoute = ({ element: Component }) => {
  // code qui va être executer avant l'affichage de notre page
  // localStorage.getItem('user') => vérifier si user et dans le localStorage
  // JSON.parse => convertir le string en objet

  const isAuth =
    localStorage.getItem("user") != null &&
    JSON.parse(localStorage.getItem("user")).role === "ADMIN";
  return isAuth ? <Component /> : <Navigate to="/espace-client" />;
};

const PrivateUserRoute = ({ element: Component }) => {
  const isAuth =
    localStorage.getItem("user") != null &&
    JSON.parse(localStorage.getItem("user")).role === "USER";
  return isAuth ? <Component /> : <Navigate to="/espace-client" />;
};

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route exact path="/" element={<Accueil />} />
          <Route path="/navigator-bar" element={<NavigatorBar />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/espace-client" element={<EspaceClient />} />

          <Route path="/listproduits" element={<ListProduits />} />
          <Route path="/voirprofil" element={<VoirProfil />} />

          <Route
            path="/admin/produits"
            element={<PrivateAdminRoute element={AdminGestionProduit} />}
          />

          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>

      <Footer />
      <div>
        <Toaster />
      </div>
    </Router>
  );
}
export default App;
