"use strict";

import Span from "../../span";
import Checkbox from "../../checkbox";
import CheckboxDiv from "../../div/checkbox";

export default class InvertColoursCheckboxDiv extends CheckboxDiv {
  changeHandler = (event, element) => {
    const checkboxChecked = this.isCheckboxChecked();

    checkboxChecked ?
      controller.invertColours() :
        controller.revertColours();
  }

  childElements() {
    return ([

      <Checkbox onChange={this.changeHandler} />,
      <Span>
        Invert colours
      </Span>

    ]);
  }

  static defaultProperties = {
    className: "invert-colours"
  };
}
