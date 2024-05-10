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

  update() {
    const coloursInverted = areColoursInverted();

    coloursInverted ?
      this.checkCheckbox() :
        this.uncheckCheckbox();
  }

  parentContext() {
    const updateInvertColoursCheckboxDiv = this.update.bind(this);

    return ({
      updateInvertColoursCheckboxDiv
    });
  }

  static message = "Invert colours";

  static defaultProperties = {
    className: "invert-colours"
  };
}
