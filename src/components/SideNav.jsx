import React from "react";
import SearchInput from "./SearchInput";
import { first151Pokemon, getFullPokedexNumber } from "../utils";

export default function SideNav(props) {
  const { selectedPokemon } = props;
  return (
    <>
      <nav>
        <SearchInput />
        {first151Pokemon.map((pokemon, index) => {
          return (
            <button
              key={index}
              className={selectedPokemon === index ? "active" : ""}
            >
              {getFullPokedexNumber(index)} {pokemon}
            </button>
          );
        })}
        <button className="active">001 Bulbasaur</button>
      </nav>
    </>
  );
}
