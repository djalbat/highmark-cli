"use strict";

import withStyle from "easy-with-style";  ///

import Element from "../element";
import CloseMenuButton from "../button/closeMenu";
import ZoomMenuInButton from "../button/zoomMenuIn";
import ZoomMenuOutButton from "../button/zoomMenuOut";

import { buttonsDivGap } from "../../styles";

class ButtonsDiv extends Element {
  childElements() {
    return ([

      <CloseMenuButton/>,
      <ZoomMenuInButton/>,
      <ZoomMenuOutButton/>

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
