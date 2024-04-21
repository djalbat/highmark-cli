"use strict";

import { Element } from "easy";

export default class View extends Element {
  initialise() {
    this.assignContext();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
