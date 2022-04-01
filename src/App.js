import React from 'react';
// Components
import Header from './components/Header';
import Main from './components/Main';
import PlanetCard from './components/PlanetCard';

// Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
	return (
		<>
			<Header
				title={'Known Galaxy Database'}
				text={'A long time ago in a galaxy far, far away....'}
				image={require('./assets/pexels-felix-mittermeier-957061.jpg')}
			/>
			<Main header={'Something... something...'}>
				<PlanetCard image={'no-image-yet'} title="Planet name" description="some description" />
				<PlanetCard image={'no-image-yet'} title="Planet name" description="some description" />
				<PlanetCard image={'no-image-yet'} title="Planet name" description="some description" />
				<PlanetCard image={'no-image-yet'} title="Planet name" description="some description" />
				<PlanetCard image={'no-image-yet'} title="Planet name" description="some description" />
				<PlanetCard image={'no-image-yet'} title="Planet name" description="some description" />
			</Main>
			<GlobalStyle />
		</>
	);
}

export default App;
