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
    const zoomRatio = 100 / zoom,
          width = `${zoomRatio}%`,
          minHeight = `${zoomRatio}%`,
          transform = `scale(${zoom})`;

    const css = {
      width,
      minHeight,
      transform
    };

    this.css(css);
  }

  didMount() {
    this.hide();
  }

  willUnmount() {
    ///
  }

  static tagName = "div";
}

export default withStyle(Div)`

  width: 100%;
  transform-origin: top left;
  
`;
