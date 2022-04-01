import React from 'react';

// Styles
import { Wrapper, Content } from './Main.styles';

// Hook
import { useMainFetch } from '../../hooks/useMainFetch';

const Main = ({ header, children }) => {
	const { state, error } = useMainFetch();

	console.log(state);
	console.log(error);
	console.log(children);

	return (
		<Wrapper>
			<h2>{header}</h2>
			<Content>{children}</Content>
		</Wrapper>
	);
};
export default Main;
