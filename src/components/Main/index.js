import React from "react";

// Styles
import { Wrapper, Content } from "./Main.styles";

const Main = ({ header, children }) => {
  return (
    <Wrapper>
      <h2>{header}</h2>
      <Content>{children}</Content>
    </Wrapper>
  );
};
export default Main;
