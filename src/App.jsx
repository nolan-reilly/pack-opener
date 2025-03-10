import { useState } from "react";

import "./Index.css";
import Pokemon from "./Pokemon";

// Tasks
// - Randomize positions at start and after every selection
//     - Create an array of the Pokemon and use map with pop or shift???
// - Create a state that gets passed into each Pokemon as selected or unselected

function App() {
  // We can possibly use a dictionary to control wether each card has been
  // selected or not
  const pokemonArr = [
    "mewtwo",
    "pikachu",
    "suicune",
    "charizard",
    "rayquaza",
    "gengar",
    "blaziken",
    "greninja",
    "garchomp",
    "decidueye",
    "metagross",
    "wobbuffet",
    "arcanine",
    "snorlax",
    "venusaur",
    "dialga",
    "nidoking",
    "dragonite",
    "alakazam",
    "torterra",
  ];

  const [pokemonState, setPokemonState] = useState({
    mewtwo: false,
    pikachu: false,
    suicune: false,
    charizard: false,
    rayquaza: false,
    gengar: false,
    blaziken: false,
    greninja: false,
    garchomp: false,
    decidueye: false,
    metagross: false,
    wobbuffet: false,
    arcanine: false,
    snorlax: false,
    venusaur: false,
    dialga: false,
    nidoking: false,
    dragonite: false,
    alakazam: false,
    torterra: false,
  });

  const listItems = pokemonArr.map((name) => <Pokemon name={name} />);

  return (
    <>
      <div className="container content-spacing">
        <div className="flex flex-row space-between">
          <div className="margin-bottom-24 flex flex-col gap-16">
            <h1>Pokemon Memory Game</h1>
            <p>
              Get points by clicking on an image but don't click on any more
              than once!
            </p>
          </div>

          <div>
            <p>Score: 0</p>
            <p>Best Score: 0</p>
          </div>
        </div>

        <div className="grid-container">{listItems}</div>
      </div>
    </>
  );
}

export default App;
