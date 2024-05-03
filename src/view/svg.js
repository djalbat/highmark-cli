"use strict";

import withStyle from "easy-with-style";  ///

import Element from "./element";

import { svgFill } from "../styles";

class FontSizeSVG extends Element {
  static tagName = "svg";

  static defaultProperties = {
    viewBox: "0 0 25 25"
  };
}

export default withStyle(FontSizeSVG)`

  fill: ${svgFill};
  stroke: none;
  display: block;
  pointer-events: none;
  
`;
