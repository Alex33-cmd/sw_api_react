import React from "react";

// Styles
import { Wrapper, Content } from "./Header.styles";

const Header = ({ image, title }) => (
  <Wrapper image={image}>
    <Content>
      <h1>{title}</h1>
    </Content>
  </Wrapper>
);

export default Header;
