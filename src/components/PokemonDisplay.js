import React, { useState, useEffect } from "react";

function fetchPokemon(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) =>
    response.json()
  );
}

function PokemonDisplay({ name }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const index =
      name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % 898; // Using 898 as an example total count of Pokémon
    fetchPokemon(index + 1).then((pokemonData) => {
      setPokemon(pokemonData);
      // Assuming the cries are part of the fetched data
      if (pokemonData.cries && pokemonData.cries.latest) {
        const audio = new Audio(pokemonData.cries.latest);
        audio
          .play()
          .catch((error) => console.error("Audio play failed", error)); // Handle the promise rejection
      }
    });
  }, [name]);

  if (!pokemon) return <p>Chargement...</p>;

  return (
    <div>
      <h1>Tu es {pokemon.name}! 😊 </h1>
      <img
        src={pokemon.sprites.other.officialArtwork.front_default}
        alt={pokemon.name}
      />
    </div>
  );
}

export default PokemonDisplay;
