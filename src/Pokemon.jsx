import { useState, useEffect } from "react";

export default function Pokemon({ name }) {
  // Need some way to describe selected or not for game

  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const result = await response.json();

        setPokemonData(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="card">
        <h1 className="text-center capitalize-text">
          {pokemonData && pokemonData.name}
        </h1>
        <div className="flex justify-center">
          <img
            className="pokemon-img"
            src={pokemonData && pokemonData.sprites.front_default}
            alt="Pokemon Character"
          />
        </div>
      </div>
    </>
  );
}
