"use strict";

import Span from "../../span";
import Checkbox from "../../checkbox";
import CheckboxDiv from "../../div/checkbox";

export default class RestoreNativeGesturesCheckboxDiv extends CheckboxDiv {
  childElements() {
    return ([

      <Checkbox/>,
      <Span>
        {`Restore native gestures
(alternatively double tap 
and then tap to resume)`}
      </Span>

    ]);
  }

  static defaultProperties = {
    className: "restore-native-gestures"
  };
}
