"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class PreloaderDiv extends Element {
  childElements() {
    return "PRELOAD";
  }

  static tagName = "div";

  static defaultProperties = {
    className: "preloader"
  };
}

export default withStyle(PreloaderDiv)`

  height: 0;
  overflow: hidden;
  background-image: url("checkmark.svg");
    
`;