"use strict";

import withStyle from "easy-with-style";  ///

import Element from "../element";
import CloseButton from "../button/close";
import IncreaseFontSizeButton from "../button/increaseFontSize";
import DecreaseFontSizeButton from "../button/decreaseFontSize";

import { buttonsDivGap } from "../../styles";

class ButtonsDiv extends Element {
  childElements() {
    return ([

      <CloseButton/>,
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
  flex-direction: column;
  
`;