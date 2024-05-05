"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { areColoursInverted } from "../../state";
import { isOrientationPortrait } from "../../state";

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
    const orientationPortrait = isOrientationPortrait(),
          width = `${100/zoom}%`,
          minHeight = orientationPortrait ?
                        `${100/zoom}vh` :
                          `${100/zoom}vw`,
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
