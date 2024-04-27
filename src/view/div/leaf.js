"use strict";

import { Element } from "easy";

import withStyle from "easy-with-style";  ///

import eventMixins from "../../mixins/event";
import touchMixins from "../../mixins/touch";

class LeafDiv extends Element {
  wiggle() {
    this.removeClass("wiggle");
    this.addClass("wiggle");
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

  width: 100vw;
  position: absolute;
  min-height: 100vh;
  
  @keyframes wiggle {
    0% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    100% { transform: translateX(-5px); }
  }
  
  .wiggle {
    animation: wiggle 0.5s ease-in-out 1;
  }

`;
