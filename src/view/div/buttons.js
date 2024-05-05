"use strict";

import withStyle from "easy-with-style";  ///

import Element from "../element";
import CloseMenuButton from "../button/closeMenu";
import FullScreenButton from "../button/fullScreen";
import ZoomMenuInButton from "../button/zoomMenuIn";
import ZoomMenuOutButton from "../button/zoomMenuOut";

import { buttonsDivGap } from "../../styles";

class ButtonsDiv extends Element {
  childElements() {
    return ([

      <ZoomMenuInButton/>,
      <CloseMenuButton/>,
      <ZoomMenuOutButton/>,
      <FullScreenButton/>

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
  grid-template-rows: min-content min-content;
  grid-template-columns: min-content min-content;
  
`;
