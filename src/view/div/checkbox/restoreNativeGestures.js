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
    const checkRestoreNativeGesturesCheckbox = this.checkCheckbox.bind(this), ///
          uncheckRestoreNativeGesturesCheckbox = this.uncheckCheckbox.bind(this); ///

    return ({
      checkRestoreNativeGesturesCheckbox,
      uncheckRestoreNativeGesturesCheckbox
    });
  }

  static message = "Restore native gestures";

  static defaultProperties = {
    className: "restore-native-gestures"
  };
}
