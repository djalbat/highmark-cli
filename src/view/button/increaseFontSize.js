"use strict";

import Button from "../button";
import IncreaseFontSizeSVG from "../svg/increaseFontSize";

export default class IncreaseFontSizeButton extends Button {
  clickHandler = (event, element) => {
    controller.increaseFontSize();
  }

  childElements() {
    return (

      <IncreaseFontSizeSVG onclick={this.clickHandler} />

    );
  }

  static defaultProperties = {
    className: "increase-font-size"
  };
}
