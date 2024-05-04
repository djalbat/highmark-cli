"use strict";

import CheckboxDiv from "../../div/checkbox";

import { areColoursInverted } from "../../../state";

export default class InvertColoursCheckboxDiv extends CheckboxDiv {
  changeHandler = (event, element) => {
    const checkboxChecked = this.isCheckboxChecked();

    checkboxChecked ?
      controller.invertColours() :
        controller.revertColours();
  }

  didMount() {
    const coloursInverted = areColoursInverted(),
          checked = coloursInverted; ///

    this.checkCheckbox(checked);
  }

  willUnmount() {
    ///
  }

  static message = "Invert colours";

  static defaultProperties = {
    className: "invert-colours"
  };
}
