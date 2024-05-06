"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

import { buttonSize, borderWidth, borderRadius, borderColour, buttonPadding } from "../styles";

export default withStyle(class extends Button {
  didMount() {
    this.onClick(this.clickHandler);
  }

  willUnmount() {
    this.offClick(this.clickHandler);
  }

  childElements() {
    const { SVG } = this.constructor;

    return (

      <SVG/>

    );
  }
})`

  width: ${buttonSize};
  height: ${buttonSize};
  cursor: pointer;
  border: ${borderWidth} solid ${borderColour};
  margin: 0;
  padding: ${buttonPadding};
  background: transparent;
  border-radius: ${borderRadius};   
  
`;
