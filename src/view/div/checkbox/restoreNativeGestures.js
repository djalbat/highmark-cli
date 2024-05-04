"use strict";

import Span from "../../span";
import Checkbox from "../../checkbox";
import CheckboxDiv from "../../div/checkbox";

export default class RestoreNativeGesturesCheckboxDiv extends CheckboxDiv {
  clickHandler = (event, element) => {
    setTimeout(() => {
      const checkboxChecked = this.isCheckboxChecked();

      checkboxChecked ?
        controller.restoreNativeGestures() :
          controller.suppressNativeGestures();
    }, 100);
  }

  childElements() {
    return ([

      <Checkbox onClick={this.clickHandler} />,
      <Span>
        {`Restore native gestures
(alternatively double tap 
and then tap to suppress)`}
      </Span>

    ]);
  }

  static defaultProperties = {
    className: "restore-native-gestures"
  };
}
