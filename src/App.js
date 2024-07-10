import React, { useState } from "react";
import NameForm from "./components/NameForm";
import PokemonDisplay from "./components/PokemonDisplay";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <h1>Quel Pokémon es-tu???</h1>
      <NameForm onSubmit={setName} />
      {name && <PokemonDisplay name={name} />}
      <Footer />
    </div>
  );
}

export default App;
