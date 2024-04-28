"use strict";

import { Element } from "easy";

import withStyle from "easy-with-style";  ///

import { WIGGLE_DELAY } from "../../constants";
import { wiggleCount, wiggleDuration } from "../../styles";

class LeafDiv extends Element {
  zoom(zoom) {
    const width = `${100/zoom}%`,
          minHeight = `${100/zoom}%`,
          transform = `scale(${zoom})`;

    const css = {
      width,
      minHeight,
      transform
    };

    this.css(css);
  }

  wiggle() {
    this.addClass("wiggle");

    setTimeout(() => {
      this.removeClass("wiggle");
    }, WIGGLE_DELAY);
  }

  setInitialState() {
    const zoom = 1;

    this.setState({
      zoom
    });
  }

  initialise() {
    this.setInitialState();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "leaf"
  };
}

export default withStyle(LeafDiv)`

  width: 100%;
  min-height: 100%;
  transform-origin: top left;
  
  @keyframes wiggle {
    0% { transform: translateX(0); }
    25% { transform: translateX(+3px); }
    75% { transform: translateX(-3px); }
    100% { transform: translateX(0); }
  }
  
  .wiggle {
    animation: wiggle ${wiggleDuration} ease-in-out ${wiggleCount};
  }

`;
