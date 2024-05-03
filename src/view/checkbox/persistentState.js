"use strict";

import Checkbox from "../checkbox";

export default class PersistentStateCheckbox extends Checkbox {
  parentContext() {
    const onPersistentStateCheckboxChange = this.onChange.bind(this), ///
          isPersistentStateCheckboxChecked = this.isChecked.bind(this); ///

    return ({
      onPersistentStateCheckboxChange,
      isPersistentStateCheckboxChecked
    });
  }

  static defaultProperties = {
    className: "persistent-state"
  };
}
