"use strict";

import withStyle from "easy-with-style";  ///

import Element from "../element";
import ButtonsDiv from "../div/buttons";
import CheckboxesDiv from "../div/checkboxes";

import { GRID } from "../../constants";
import { borderColour, menuDivPadding, buttonsDivWidth, menuDivBackgroundColour } from "../../styles";

class MenuDiv extends Element {
  increaseFontSize() {
    debugger
  }

  decreaseFontSize() {
    debugger
  }

  openMenu() {
    const display = GRID;

    this.display(display);
  }

  closeMenu() {
    this.hide();
  }

  childElements() {
    return ([

      <CheckboxesDiv/>,
      <ButtonsDiv/>

    ]);
  }

  parentContext() {
    const context = this.getContext(),
          openMenu = this.openMenu.bind(this),
          closeMenu = this.closeMenu.bind(this),
          increaseFontSize = this.increaseFontSize.bind(this),
          decreaseFontSize = this.decreaseFontSize.bind(this),
          getMenuDivHeight = this.getHeight.bind(this), ///
          isMenuDivDisplayed = this.isDisplayed.bind(this);  ///

    return ({
      ...context,
      openMenu,
      closeMenu,
      increaseFontSize,
      decreaseFontSize,
      getMenuDivHeight,
      isMenuDivDisplayed
    });
  }

  initialise() {
    this.hide();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "menu"
  };
}

export default withStyle(MenuDiv)`

  left: 0;
  width: 100%;
  height: fit-content;
  filter: brightness(0.8);
  bottom: 0;
  display: grid;
  padding: ${menuDivPadding};
  position: fixed;
  border-top: 1px solid ${borderColour};
  background-color: ${menuDivBackgroundColour};
  grid-template-rows: auto;
  grid-template-columns: auto ${buttonsDivWidth};

`;
