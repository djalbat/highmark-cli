"use strict";

import withStyle from "easy-with-style";  ///

import Element from "../element";

import Span from "../span";
import Checkbox from "../checkbox";

import { checkboxDivGap } from "../../styles";

class CheckboxDiv extends Element {
  childElements() {
    const { message } = this.constructor;

    return ([

      <Checkbox onChange={this.changeHandler} />,
      <Span>
        {message}
      </Span>

    ]);
  }

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
