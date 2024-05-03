"use strict";

import Checkbox from "../checkbox";

export default class RestoreNativeGesturesCheckbox extends Checkbox {
  parentContext() {
    const onRestoreNativeGesturesCheckboxChange = this.onChange.bind(this), ///
          isRestoreNativeGesturesCheckboxChecked = this.isChecked.bind(this); ///

    return ({
      onRestoreNativeGesturesCheckboxChange,
      isRestoreNativeGesturesCheckboxChecked
    });
  }

  static defaultProperties = {
    className: "restore-native-gestures"
  };
}
