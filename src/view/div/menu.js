"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

import { menuDivHeight } from "../../style";

class MenuDiv extends Element {
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

export default withStyle(MenuDiv)`

  left: 0;
  width: 100%;
  height: ${menuDivHeight};
  bottom: 0;
  position: fixed;
  background-color: black;
  
`;
