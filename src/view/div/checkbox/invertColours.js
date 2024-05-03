"use strict";

import Span from "../../span";
import Checkbox from "../../checkbox";
import CheckboxDiv from "../../div/checkbox";

export default class InvertColoursCheckboxDiv extends CheckboxDiv {
  childElements() {
    return ([

      <Checkbox/>,
      <Span>
        Invert colours
      </Span>

    ]);
  }

  static defaultProperties = {
    className: "invert-colours"
  };
}
