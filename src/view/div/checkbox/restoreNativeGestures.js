"use strict";

import CheckboxDiv from "../../div/checkbox";

export default class RestoreNativeGesturesCheckboxDiv extends CheckboxDiv {
  clickHandler = (event, element) => {
    const checkboxChecked = this.isCheckboxChecked();

    checkboxChecked ?
      controller.restoreNativeGestures() :
        controller.suppressNativeGestures();
  }

  parentContext() {
    const checkRestoreNativeGesturesCheckbox = this.checkCheckbox.bind(this); ///

    return ({
      checkRestoreNativeGesturesCheckbox
    });
  }

  static message = `Restore native gestures
(alternatively double tap 
and then tap to suppress)`;

  static defaultProperties = {
    className: "restore-native-gestures"
  };
}
