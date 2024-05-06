"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { BACKGROUND_COLOUR } from "../../constants";

class LeafDiv extends Element {
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

  static defaultProperties = {
    className: "leaf"
  };
}

export default withStyle(LeafDiv)`

  width: 100%;
  min-height: 100%;
  touch-action: none;
  pointer-events: none;
  transform-origin: top left;
  
`;
