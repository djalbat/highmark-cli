"use strict";

import { Element } from "easy";

import withStyle from "easy-with-style";  ///

import eventMixins from "../../mixins/event";
import touchMixins from "../../mixins/touch";

class LeafDiv extends Element {
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
  min-height: 100vh;

`;
