import React from "react";
// Components
import Header from "./components/Header";
import Main from "./components/Main";

// Styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <Header
        title={"Known Galaxy Database"}
        text={"A long time ago in a galaxy far, far away...."}
        image={require("./assets/pexels-felix-mittermeier-957061.jpg")}
      />
      <Main header={"Something... something..."} />
      <GlobalStyle />
    </div>
  );
}

export default App;
