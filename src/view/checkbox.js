"use strict";

import withStyle from "easy-with-style";  ///

import { Checkbox } from "easy";

import { borderWidth, borderRadius, borderColour, checkboxSize, checkboxBackgroundColour } from "../styles";

export default withStyle(class extends Checkbox {
  check() {
    const checked = true;

    super.check(checked);
  }

  uncheck() {
    const checked = false;

    super.check(checked);
  }

  parentContext() {
    const checkCheckbox = this.check.bind(this),  ///
          uncheckCheckbox = this.uncheck.bind(this),  ///
          isCheckboxChecked = this.isChecked.bind(this);  ///

    return ({
      checkCheckbox,
      uncheckCheckbox,
      isCheckboxChecked
    });
  }
})`

  width: ${checkboxSize};
  height: ${checkboxSize};
  cursor: pointer;  
  display: block;
  outline: none;
  position: relative;
  appearance: none;
  
  ::before {
    width: ${checkboxSize};
    height: ${checkboxSize};
    border: ${borderWidth} solid ${borderColour};
    content: " ";
    position: absolute;
    border-radius: ${borderRadius};
    background-color: ${checkboxBackgroundColour};
  }
  
  ::after {
    top: 0;
    left: 0;
    width: ${checkboxSize};
    height: ${checkboxSize};
    content: " ";
    position: absolute;
    background-size: 0;
    background-image: url("checkmark.svg");
  }

  :checked::after {
    background-size: 100%;
  }
  
`;
