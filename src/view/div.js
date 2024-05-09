"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { BACKGROUND_COLOUR } from "../constants";

class Div extends Element {
  getBackgroundColour() {
    const backgroundColour = this.css(BACKGROUND_COLOUR) || null;

    return backgroundColour;
  }

  zoom(zoom) {
    const width = `${100/zoom}%`,
          transform = `scale(${zoom})`;

    const css = {
      width,
      transform
    };

    this.css(css);
  }

  static tagName = "div";
}

export default withStyle(Div)`

  width: 100%;
  display: none;
  min-height: 100%;
  pointer-events: none;
  transform-origin: top left;
  
`;
