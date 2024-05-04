"use strict";

import withStyle from "easy-with-style";  ///

import Element from "../element";
import CloseMenuButton from "../button/closeMenu";
import IncreaseFontSizeButton from "../button/increaseFontSize";
import DecreaseFontSizeButton from "../button/decreaseFontSize";

import { buttonsDivGap } from "../../styles";

class ButtonsDiv extends Element {
  childElements() {
    return ([

      <CloseMenuButton/>,
      <IncreaseFontSizeButton/>,
      <DecreaseFontSizeButton/>

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "buttons"
  };
}

export default withStyle(ButtonsDiv)`

  gap: ${buttonsDivGap};
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-start;
  
`;
