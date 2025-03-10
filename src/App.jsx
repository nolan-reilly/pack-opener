import "./Index.css";
import Pokemon from "./Pokemon";

// Randomize positions at start and after every selection

function App() {
  return (
    <div className="container">
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
  );
}

export default App;
