"use strict";

import Button from "../button";
import DecreaseFontSizeSVG from "../svg/decreaseFontSize";

export default class DecreaseFontSizeButton extends Button {
  clickHandler = (event, element) => {
    controller.decreaseFontSize();
  }

  childElements() {
    return (

      <DecreaseFontSizeSVG onClick={this.clickHandler} />

    );
  }

  static defaultProperties = {
    className: "decrease-font-size"
  };
}
