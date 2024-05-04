"use strict";

import withStyle from "easy-with-style";  ///

import Element from "../element";

import { checkboxDivGap } from "../../styles";

class CheckboxDiv extends Element {
  initialise() {
    this.assignContext();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "checkbox"
  };
}

export default withStyle(CheckboxDiv)`
  
  gap: ${checkboxDivGap};
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;  
  
`;
