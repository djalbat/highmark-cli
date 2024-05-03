"use strict";

import withStyle from "easy-with-style";  ///

import Element from "./element";

import { spanColour, spanFontSize } from "../styles";

class Span extends Element {
  static tagName = "span";
}

export default withStyle(Span)`

  color: ${spanColour};
  display: inline-block;
  font-size: ${spanFontSize};
  line-height: 1;
  white-space: pre;
  font-family: serif;
  
`;
