"use strict";

import CheckboxDiv from "../../div/checkbox";

import { enablePersistentState, disablePersistentState, isPersistentStateEnabled } from "../../../state";

export default class PersistentStateCheckboxDiv extends CheckboxDiv {
  changeHandler = (event, element) => {
    const checkboxChecked = this.isCheckboxChecked();

    checkboxChecked ?
      enablePersistentState() :
        disablePersistentState();
  }

  didMount() {
    const persistentStateEnabled = isPersistentStateEnabled(),
          checked = persistentStateEnabled; ///

    this.checkCheckbox(checked);
  }

  willUnmount() {
    ///
  }

  static message = "Persistent state";

  static defaultProperties = {
    className: "persistent-state"
  };
}
