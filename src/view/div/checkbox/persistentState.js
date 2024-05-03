"use strict";

import Span from "../../span";
import Checkbox from "../../checkbox";
import CheckboxDiv from "../../div/checkbox";

export default class PersistentStateCheckboxDiv extends CheckboxDiv {
  childElements() {
    return ([

      <Checkbox/>,
      <Span>
        Persistent state
      </Span>

    ]);
  }

  static defaultProperties = {
    className: "persistent-state"
  };
}
