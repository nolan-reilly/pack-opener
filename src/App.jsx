import "./Index.css";
import Pokemon from "./Pokemon";

// Randomize positions at start and after every selection

function App() {
  return (
    <>
      <div className="container">
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

        <div className="grid-container">
          <Pokemon name="mewtwo" />
          <Pokemon name="pikachu" />
          <Pokemon name="suicune" />
          <Pokemon name="charizard" />
          <Pokemon name="rayquaza" />

          <Pokemon name="gengar" />
          <Pokemon name="blaziken" />
          <Pokemon name="greninja" />
          <Pokemon name="garchomp" />
          <Pokemon name="decidueye" />

          <Pokemon name="metagross" />
          <Pokemon name="wobbuffet" />
          <Pokemon name="arcanine" />
          <Pokemon name="snorlax" />
          <Pokemon name="venusaur" />

          <Pokemon name="dialga" />
          <Pokemon name="nidoking" />
          <Pokemon name="dragonite" />
          <Pokemon name="alakazam" />
          <Pokemon name="torterra" />
        </div>
      </div>
    </>
  );
}

export default App;
