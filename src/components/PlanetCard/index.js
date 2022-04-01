import React from 'react';

// Styles
import { PlanetImage, PlanetText } from './PlanetCard.styles';

const PlanetCard = ({ image, name, description }) => (
	<div>
		<PlanetImage src={image} alt="planet-image" />
		<PlanetText>
			<h3>{name}</h3>
			<p>{description}</p>
		</PlanetText>
	</div>
);

export default PlanetCard;
