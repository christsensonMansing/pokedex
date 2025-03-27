import React, { useEffect, useState } from "react";
import TypeCard from "./TypeCard";
import EvolutionLine from "./EvolutionCard";
import {
  first151Pokemon,
  getFullPokedexNumber,
  getPokedexNumber,
} from "../utils";

export default function PokemonCard(props) {
  const { selectedPokemon } = props;
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);

  const { name, types, sprites, stats, moves } = pokemonData || {};

  useEffect(() => {
    if (loading) {
      return;
    }

    let cache = JSON.parse(localStorage.getItem("pokedex-data")) || {};

    if (selectedPokemon in cache) {
      //read from cache
      setPokemonData(cache[selectedPokemon]);
      console.log("Found pokemon in cache");
      console.log(cache[selectedPokemon]);
      return;
    }

    async function fetchPokemonData() {
      setLoading(true);
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${getPokedexNumber(
          selectedPokemon
        )}`;
        const res = await fetch(url);
        const data = await res.json();
        setPokemonData(data);
        cache[selectedPokemon] = data;
        localStorage.setItem("pokedex-data", JSON.stringify(cache));
        console.log("Loaded from api");
        console.log(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemonData();
  }, [selectedPokemon]);

  return (
    <>
      <div className="poke-card">
        <h3># {getFullPokedexNumber(selectedPokemon)}</h3>
        <h2 className="">
          {name ? name.charAt(0).toUpperCase() + name.slice(1) : "Loading"}
        </h2>

        <div className="type-card">
          {types?.map((type, index) => {
            return <TypeCard key={index} type={type?.type?.name} />;
          })}
        </div>

        <img className="pokemon-img" src={`/pokemon/${getFullPokedexNumber(selectedPokemon)}.png`} alt="" />

        <div className="img-container">
          <img src="/public/17.png" alt="" />
          <img src="/public/17.png" alt="" />
          <img src="/public/17.png" alt="" />
          <img src="/public/17.png" alt="" />
        </div>

        <h2>Stats</h2>
        <div className="stats-container">
          <div className="stats">
            <p>Hp</p>
            <h4>51</h4>
          </div>
          <div className="stats">
            <p>Attack</p>
            <h4>51</h4>
          </div>
          <div className="stats">
            <p>Defense</p>
            <h4>51</h4>
          </div>
          <div className="stats">
            <p>Special Attack</p>
            <h4>51</h4>
          </div>
          <div className="stats">
            <p>Special Defense</p>
            <h4>51</h4>
          </div>
          <div className="stats">
            <p>Speed</p>
            <h4>51</h4>
          </div>
        </div>

        <h2>Weakness</h2>
        <div className="weakness-container">
          <div className="weakness-card">FIRE</div>
          <div className="weakness-card">ELECTRIC</div>
        </div>

        <h2>Evolutions</h2>
        <div className="evolution-container">
          <EvolutionLine />
          <EvolutionLine />
          <EvolutionLine />
        </div>

        <h2>Move sets</h2>
        <div className="moves-container">
          <div className="move-tile">Move</div>
          <div className="move-tile">Move</div>
          <div className="move-tile">Move</div>
          <div className="move-tile">Move</div>
          <div className="move-tile">Move</div>
          <div className="move-tile">Move</div>
          <div className="move-tile">Move</div>
          <div className="move-tile">Move</div>
          <div className="move-tile">Move</div>
        </div>
      </div>
    </>
  );
}
