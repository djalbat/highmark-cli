"use strict";

import withStyle from "easy-with-style";  ///

import Element from "../element";
import FullScreenCheckboxDiv from "./checkbox/fullScreen";
import InvertColoursCheckboxDiv from "./checkbox/invertColours";
import NativeGesturesCheckboxDiv from "./checkbox/nativeGestures";

import { checkboxesDivGap } from "../../styles";

class CheckboxesDiv extends Element {
  childElements() {
    return ([

      <InvertColoursCheckboxDiv/>,
      <FullScreenCheckboxDiv/>,
      <NativeGesturesCheckboxDiv/>

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
