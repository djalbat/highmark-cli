"use strict";

import withStyle from "easy-with-style";  ///

import Element from "../element";
import ButtonsDiv from "../div/buttons";
import CheckboxesDiv from "../div/checkboxes";

import { GRID } from "../../constants";
import { menuDivPadding, buttonsDivWidth, menuDivBackgroundColour } from "../../styles";

class MenuDiv extends Element {
  closeButtonClickHandler = (event, element) => {
    this.hide();
  }

  show() {
    const display = GRID;

    this.display(display);
  }

  didMount() {
    this.onCloseButtonClick(this.closeButtonClickHandler);
  }

  willUnmount() {
    this.offCloseButtonClick(this.closeButtonClickHandler);
  }

  childElements() {
    return ([

      <CheckboxesDiv/>,
      <ButtonsDiv/>

    ]);
  }

  parentContext() {
    const context = this.getContext(),
          showMenuDiv = this.show.bind(this),  ///
          hideMenuDiv = this.hide.bind(this),  ///
          getMenuDivHeight = this.getHeight.bind(this), ///
          isMenuDivDisplayed = this.isDisplayed.bind(this);  ///

    return ({
      ...context,
      showMenuDiv,
      hideMenuDiv,
      getMenuDivHeight,
      isMenuDivDisplayed
    });
  }

  initialise() {
    this.assignContext([
      "onCloseButtonClick",
      "offCloseButtonClick"
    ]);

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
  background-color: ${menuDivBackgroundColour};
  grid-template-rows: auto;
  grid-template-columns: auto ${buttonsDivWidth};

`;
