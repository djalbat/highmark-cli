"use strict";

import CheckboxDiv from "../../div/checkbox";

import { isFullScreen } from "../../../utilities/fullScreen";

export default class FullScreenCheckboxDiv extends CheckboxDiv {
  changeHandler = (event, element) => {
    const checkboxChecked = this.isCheckboxChecked();

    checkboxChecked ?
      controller.enterFullScreen() :
        controller.exitFullScreen();
  }

  update() {
    const fullScreen = isFullScreen();

    fullScreen ?
      this.checkCheckbox() :
        this.uncheckCheckbox();
  }

  parentContext() {
    const updateFullScreenCheckboxDiv = this.update.bind(this); ///

    return ({
      updateFullScreenCheckboxDiv
    });
  }

  static message = `Full screen
(double tap to toggle)`;

  static defaultProperties = {
    className: "full-screen"
  };
}