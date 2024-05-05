"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

import { buttonSize, borderWidth, borderRadius, borderColour, buttonPadding } from "../styles";
import {TAP_CUSTOM_EVENT_TYPE} from "../customEventTypes";

export default withStyle(class extends Button {
  tap(top, left) {
    const bounds = this.getBounds(),
          mouseTop = top, ///
          mouseLeft = left, ///
          overlappingMouse = bounds.isOverlappingMouse(mouseTop, mouseLeft);

    if (overlappingMouse) {
      const event = null,
            element = this,
            customEventType = TAP_CUSTOM_EVENT_TYPE;

      this.callCustomHandlers(customEventType, event, element);
    }
  }

  didMount() {
    const customEventType = TAP_CUSTOM_EVENT_TYPE;

    this.onCustomEvent(customEventType, this.tapCustomHandler);
  }

  willUnmount() {
    const customEventType = TAP_CUSTOM_EVENT_TYPE;

    this.offCustomEvent(customEventType, this.tapCustomHandler);
  }

  childElements() {
    const { SVG } = this.constructor;

    return (

      <SVG/>

    );
  }
})`

  width: ${buttonSize};
  height: ${buttonSize};
  cursor: pointer;
  border: ${borderWidth} solid ${borderColour};
  margin: 0;
  padding: ${buttonPadding};
  background: transparent;
  border-radius: ${borderRadius};   
  
`;
