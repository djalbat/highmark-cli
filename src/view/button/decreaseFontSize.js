"use strict";

import Button from "../button";
import DecreaseFontSizeSVG from "../svg/decreaseFontSize";

export default class DecreaseFontSizeButton extends Button {
  childElements() {
    return (

      <DecreaseFontSizeSVG/>

    );
  }

  static defaultProperties = {
    className: "decrease-font-size"
  };
}
