"use strict";

import withStyle from "easy-with-style";  ///

import Element from "../element";
import InvertColoursCheckboxDiv from "./checkbox/invertColours";
import PersistentStateCheckboxDiv from "./checkbox/persistentState";
import RestoreNativeGesturesCheckboxDiv from "./checkbox/restoreNativeGestures";

import { checkboxesDivGap } from "../../styles";

class CheckboxesDiv extends Element {
  childElements() {
    return ([

      <InvertColoursCheckboxDiv/>,
      <PersistentStateCheckboxDiv/>,
      <RestoreNativeGesturesCheckboxDiv/>

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "checkboxes"
  };
}

export default withStyle(CheckboxesDiv)`

  gap: ${checkboxesDivGap};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;

`;
