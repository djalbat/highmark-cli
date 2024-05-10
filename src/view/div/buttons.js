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

      <ZoomMenuOutButton/>,
      <ZoomMenuInButton/>,
      <CloseMenuButton/>

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "buttons"
  };
}

export default withStyle(ButtonsDiv)`

  gap: ${buttonsDivGap};
  display: grid;
  grid-template-rows: min-content;
  grid-template-columns: min-content min-content min-content;
  
`;
