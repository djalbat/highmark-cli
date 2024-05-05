"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { areColoursInverted } from "../../state";

class LeafDiv extends Element {
  updateColours() {
    const coloursInverted = areColoursInverted();

    coloursInverted ?
      this.invertColours() :
        this.revertColours();
  }

  invertColours() {
    this.addClass("inverted-colours");
  }

  revertColours() {
    this.removeClass("inverted-colours");
  }

  zoom(zoom) {
    const width = `${100/zoom}%`,
          minHeight = `${100/zoom}vh`,
          transform = `scale(${zoom})`;

    const css = {
      width,
      minHeight,
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
  touch-action: none;
  pointer-events: none;
  transform-origin: top left;
  
  .inverted-colours {
    filter: invert(1);
  }
    
`;
