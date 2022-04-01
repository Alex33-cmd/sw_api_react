import React from "react";
// Components
import Header from "./components/Header";
import Main from "./components/Main";
import PlanetCard from "./components/PlanetCard";

// Styles
import { GlobalStyle } from "./GlobalStyle";

// Hook
import { useMainFetch } from "./hooks/useMainFetch";
function App() {
  const { state, error } = useMainFetch();
  console.log(state);
  console.log(error);

  return (
    <>
      <Header
        title={"Known Galaxy Database"}
        text={"A long time ago in a galaxy far, far away...."}
        image={require("./assets/pexels-felix-mittermeier-957061.jpg")}
      />
      <Main header={"Something... something..."}>
        {state.results.map((planet, i) => (
          <PlanetCard
            key={i}
            image={require(`./assets/planets/${planet.name}.webp`)}
            name={planet.name}
            climate={planet.climate}
            terrain={planet.terrain}
            population={planet.population}
          />
        ))}
      </Main>
      <GlobalStyle />
    </>
  );
}

export default App;
