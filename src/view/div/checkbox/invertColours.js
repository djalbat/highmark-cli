"use strict";

import Span from "../../span";
import CheckboxDiv from "../../div/checkbox";
import InvertColoursCheckbox from "../../checkbox/invertColours";

export default class InvertColoursCheckboxDiv extends CheckboxDiv {
  childElements() {
    return ([

      <InvertColoursCheckbox/>,
      <Span>
        Invert colours
      </Span>

    ]);
  }

  static defaultProperties = {
    className: "invert-colours"
  };
}
