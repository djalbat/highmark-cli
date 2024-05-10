"use strict";

import CheckboxDiv from "../../div/checkbox";

export default class FullScreenCheckboxDiv extends CheckboxDiv {
  changeHandler = (event, element) => {
    const checkboxChecked = this.isCheckboxChecked();

    checkboxChecked ?
      controller.enterFullScreen() :
        controller.exitFullScreen();
  }

  parentContext() {
    const checkFullScreenCheckbox = this.checkCheckbox.bind(this), ///
          uncheckFullScreenCheckbox = this.uncheckCheckbox.bind(this); ///

    return ({
      checkFullScreenCheckbox,
      uncheckFullScreenCheckbox
    });
  }

  static message = `Full screen
(double tap to toggle)`;

  static defaultProperties = {
    className: "full-screen"
  };
}
