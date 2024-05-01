"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

import touchMixins from "../../mixins/touch";

import { menuDivHeight } from "../../style";

class MenuDiv extends Element {
  customTapHandler = (event, element) => {
    alert("MENU DIV TAP!")
  }

  didMount() {
    this.enableTouch();

    this.onCustomTap(this.customTapHandler);
  }

  willUnmount() {
    this.disableTouch();

    this.offCustomTap(this.customTapHandler);
  }

  initialise() {
    this.hide();
  }

  parentContext() {
    const showMenuDiv = this.show.bind(this),  ///
          hideMenuDiv = this.hide.bind(this),  ///
          isMenuDivDisplayed = this.isDisplayed.bind(this);  ///

    return ({
      showMenuDiv,
      hideMenuDiv,
      isMenuDivDisplayed
    });
  }

  static tagName = "div";

  static defaultProperties = {
    className: "menu"
  };
}

Object.assign(MenuDiv.prototype, touchMixins);

export default withStyle(MenuDiv)`

  left: 0;
  width: 100%;
  height: ${menuDivHeight};
  bottom: 0;
  position: fixed;
  background-color: black;
  
`;
