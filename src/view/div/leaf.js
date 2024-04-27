"use strict";

import { Element } from "easy";

import withStyle from "easy-with-style";  ///

import eventMixins from "../../mixins/event";
import touchMixins from "../../mixins/touch";

import { WIGGLE_DELAY } from "../../constants";
import { wiggleCount, wiggleDuration } from "../../styles";

class LeafDiv extends Element {
  wiggle() {
    this.addClass("wiggle");

    setTimeout(() => {
      this.removeClass("wiggle");
    }, WIGGLE_DELAY);
  }

  didMount() {
    this.enableTouch();
  }

  willUnmount() {
    this.disableTouch();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "leaf"
  };
}

Object.assign(LeafDiv.prototype, eventMixins);
Object.assign(LeafDiv.prototype, touchMixins);

export default withStyle(LeafDiv)`

  width: 100%;
  position: absolute;
  min-height: 100%;
  
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
