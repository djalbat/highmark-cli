"use strict";

import Checkbox from "../checkbox";

export default class InvertColoursCheckbox extends Checkbox {
  parentContext() {
    const onInvertColoursCheckboxChange = this.onChange.bind(this), ///
          isInvertColoursCheckboxChecked = this.isChecked.bind(this); ///

    return ({
      onInvertColoursCheckboxChange,
      isInvertColoursCheckboxChecked
    });
  }

  static defaultProperties = {
    className: "invert-colours"
  };
}
