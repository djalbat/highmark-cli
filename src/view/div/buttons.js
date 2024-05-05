"use strict";

import withStyle from "easy-with-style";  ///

import Element from "../element";
import CloseMenuButton from "../button/closeMenu";
import FullScreenButton from "../button/fullScreen";
import ZoomMenuInButton from "../button/zoomMenuIn";
import ZoomMenuOutButton from "../button/zoomMenuOut";

import { buttonsDivGap } from "../../styles";

class ButtonsDiv extends Element {
  getButtons() {
    const buttonChildElements = this.getChildElements("button"),
          buttons = buttonChildElements;  ///

    return buttons;
  }

  tap(top, left) {
    const buttons = this.getButtons();

    buttons.forEach((button) => {
      button.tap(top, left);
    });
  }

  childElements() {
    return ([

      <ZoomMenuInButton/>,
      <CloseMenuButton/>,
      <ZoomMenuOutButton/>,
      <FullScreenButton/>

    ]);
  }

  parentContext() {
    const tapButtonsDiv = this.tap.bind(this);  ///

    return ({
      tapButtonsDiv
    });
  }

  static tagName = "div";

  static defaultProperties = {
    className: "buttons"
  };
}

export default withStyle(ButtonsDiv)`

  gap: ${buttonsDivGap};
  display: grid;
  grid-template-rows: min-content min-content;
  grid-template-columns: min-content min-content;
  
`;
