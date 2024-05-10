"use strict";

import CheckboxDiv from "../../div/checkbox";

import { areNativeGesturesRestored } from "../../../state";

export default class NativeGesturesCheckboxDiv extends CheckboxDiv {
  changeHandler = (event, element) => {
    const checkboxChecked = this.isCheckboxChecked();

    checkboxChecked ?
      controller.restoreNativeGestures() :
        controller.suppressNativeGestures();
  }

  update() {
    const nativeGesturesRestored = areNativeGesturesRestored();

    nativeGesturesRestored ?
      this.checkCheckbox() :
        this.uncheckCheckbox();
  }

  parentContext() {
    const updateNativeGesturesCheckboxDiv = this.update.bind(this); ///

    return ({
      updateNativeGesturesCheckboxDiv
    });
  }

  static message = `Native gestures
(double tap to toggle)`;

  static defaultProperties = {
    className: "native-gestures"
  };
}
