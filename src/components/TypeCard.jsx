import React from "react";
import { pokemonTypeColors } from "../utils";

export default function TypeCard(props) {
  const { type } = props;

  return (
    <div
      className="type-title"
      style={{
        color: `${pokemonTypeColors?.[type]?.color}`,
        background: `${pokemonTypeColors?.[type]?.background}`,
      }}
    >
      {type.toUpperCase()}
    </div>
  );
}
