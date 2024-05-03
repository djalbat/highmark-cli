"use strict";

import Button from "../button";
import IncreaseFontSizeSVG from "../svg/increaseFontSize";

export default class IncreaseFontSizeButton extends Button {
  childElements() {
    return (

      <IncreaseFontSizeSVG/>

    );
  }

  static defaultProperties = {
    className: "increase-font-size"
  };
}
