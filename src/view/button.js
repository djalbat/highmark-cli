"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

import { buttonSize, borderWidth, borderRadius, borderColour } from "../styles";

export default withStyle(class extends Button {
  ///
})`

  width: ${buttonSize};
  height: ${buttonSize};
  cursor: pointer;
  border: ${borderWidth} solid ${borderColour};
  margin: 0;
  padding: 0;
  background: transparent;
  border-radius: ${borderRadius};   
  
`;
