import React from "react";
import { pokemonTypeColors } from "../utils";

export default function TypeCard() {
  return (
    <div className="type-card">
      <div
        className="type-title"
        style={{
          color: `${pokemonTypeColors.grass.color}`,
          background: `${pokemonTypeColors.grass.background}`,
        }}
      >
        GRASS
      </div>
      <div
        className="type-title"
        style={{
          color: `${pokemonTypeColors.poison.color}`,
          background: `${pokemonTypeColors.poison.background}`,
        }}
      >
        POISON
      </div>
    </div>
  );
}
