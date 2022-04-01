import React from "react";

// Styles
import { PlanetImage, PlanetText } from "./PlanetCard.styles";

const PlanetCard = ({ image, name, climate, terrain, population }) => (
  <div>
    <PlanetImage src={image} alt="planet-image" />
    <PlanetText>
      <h3>{name}</h3>
      <p>Climate: {climate}</p>
      <p>Terrain: {terrain}</p>
      <p>Population: {population}</p>
    </PlanetText>
  </div>
);

export default PlanetCard;
