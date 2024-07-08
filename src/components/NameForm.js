import React, { useState } from "react";
import pokemonImage from "../assets/pokemon.png"; // Assurez-vous que le chemin est correct

function NameForm({ onSubmit }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <>
      <img src={pokemonImage} alt="Pokémon" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Renseigne ton prénom"
          required
        />
        <button type="submit">Trouvez mon Pokémon</button>
      </form>
    </>
  );
}

export default NameForm;
