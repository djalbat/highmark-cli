"use strict";

import withStyle from "easy-with-style";  ///

import { Checkbox } from "easy";

import { checkboxSize } from "../style";

export default withStyle(Checkbox)`

  width: ${checkboxSize};
  height: ${checkboxSize};  
  display: inline-block;
  outline: none;
  position: relative;
  appearance: none;
  vertical-align: middle;
  
  ::before {
    width: ${checkboxSize};
    height: ${checkboxSize};
    border: 10px solid #eee;
    content: " ";
    position: absolute;
    border-radius: 24px;
    background-color: #000;
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
