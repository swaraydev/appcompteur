import Compteur from "./components/Compteur";
import "./App.css";

function App() {
  const age = 30;
  return (
    <div className="App">
      <h2>voici une app compteur </h2>
      <Compteur />
      <Compteur />
      <Compteur />
      <Compteur />
      <Compteur />
    </div>
  );
}
export default App;
