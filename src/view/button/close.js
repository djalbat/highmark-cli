"use strict";

import Button from "../button";
import CloseSVG from "../svg/close";

export default class CloseButton extends Button {
  childElements() {
    return (

      <CloseSVG/>

    );
  }

  static defaultProperties = {
    className: "close"
  };
}
