import { useEffect, useState } from "react";

import "./Index.css";
import Pokemon from "./Pokemon";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
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

  // Maybe don't need best score
  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(bestScore + 1);
    }
  }, [currentScore, bestScore]);

  function handleClick(name) {
    if (pokemonState[name] === false) {
      setCurrentScore(currentScore + 1);

      setPokemonState({
        ...pokemonState,
        [name]: true, // To use values passed in we must use brackets
      });
    } else {
      setCurrentScore(0);
      setPokemonState({
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
    }
  }

  function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
      // Get random index
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--; // Reduce to avoid duplicates and leave while loop

      // Swap the randomIndex with the current Index
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  shuffle(pokemonArr);

  const listItems = pokemonArr.map((name) => (
    <div key={name} onClick={() => handleClick(name)}>
      <Pokemon name={name} />
    </div>
  ));

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
            <p>Score: {currentScore}</p>
            <p>Best Score: {bestScore}</p>
          </div>
        </div>

        <div className="grid-container">{listItems}</div>
      </div>
    </>
  );
}

export default App;
