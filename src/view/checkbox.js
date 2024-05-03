"use strict";

import withStyle from "easy-with-style";  ///

import { Checkbox } from "easy";

import { borderWidth, borderRadius, borderColour, checkboxSize, checkboxBackgroundColour } from "../styles";

export default withStyle(Checkbox)`

  width: ${checkboxSize};
  height: ${checkboxSize};
  cursor: pointer;  
  display: block;
  outline: none;
  position: relative;
  appearance: none;
  
  ::before {
    width: ${checkboxSize};
    height: ${checkboxSize};
    border: ${borderWidth} solid ${borderColour};
    content: " ";
    position: absolute;
    border-radius: ${borderRadius};
    background-color: ${checkboxBackgroundColour};
  }
  
  ::after {
    top: 0;
    left: 0;
    width: ${checkboxSize};
    height: ${checkboxSize};
    content: " ";
    position: absolute;
    background-size: 0;
    background-image: url("checkmark.svg");
  }

  :checked::after {
    background-size: 100%;
  }
  
`;