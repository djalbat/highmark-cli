"use strict";

import { Element, window } from "easy";

import withStyle from "easy-with-style";  ///

import eventMixins from "../../mixins/event";
import touchMixins from "../../mixins/touch";

class LeafDiv extends Element {
  customSwipeHandler = (event, element, swipeDirection) => {
    alert(swipeDirection)
  }

  customTapHandler = (event, element) => {
    alert("tap")
  }

  didMount() {
    this.enableTouch();

    this.onCustomTap(this.customTapHandler);
    this.onCustomSwipe(this.customSwipeHandler);
  }

  willUnmount() {
    this.offCustomSwipe(this.customSwipeHandler);

    this.offCustomTap(this.customTapHandler);
    this.offCustomSwipe(this.customSwipeHandler);
  }

  getStartPosition() {
    const { startPosition } = this.getState();

    return startPosition;
  }

  setStartPosition(startPosition) {
    this.updateState({
      startPosition
    });
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
