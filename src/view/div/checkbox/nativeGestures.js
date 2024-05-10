"use strict";

import CheckboxDiv from "../../div/checkbox";

export default class NativeGesturesCheckboxDiv extends CheckboxDiv {
  changeHandler = (event, element) => {
    const checkboxChecked = this.isCheckboxChecked();

    checkboxChecked ?
      controller.restoreNativeGestures() :
        controller.suppressNativeGestures();
  }

  parentContext() {
    const checkNativeGesturesCheckbox = this.checkCheckbox.bind(this), ///
          uncheckNativeGesturesCheckbox = this.uncheckCheckbox.bind(this); ///

    return ({
      checkNativeGesturesCheckbox,
      uncheckNativeGesturesCheckbox
    });
  }

  static message = `Native gestures
(tap to toggle)`;

  static defaultProperties = {
    className: "native-gestures"
  };
}
