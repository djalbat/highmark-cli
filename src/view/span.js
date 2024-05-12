"use strict";

import withStyle from "easy-with-style";  ///

import Element from "./element";

import { spanColour, spanFontSize } from "../styles";

class Span extends Element {
  static tagName = "span";
}

export default withStyle(Span)`

  color: ${spanColour};
  font-size: ${spanFontSize};
  white-space: pre;
  font-family: serif;
  
`;
