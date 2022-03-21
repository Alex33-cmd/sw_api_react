import React from "react";
// Components
import Header from "./components/Header";
import Main from "./components/Main";

// Styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <GlobalStyle />
    </div>
  );
}

export default App;
