"use strict";

import Button from "../button";
import CloseMenuSVG from "../svg/closeMenu";

export default class CloseMenuButton extends Button {
  clickHandler = (event, element) => {
    controller.closeMenu();
  }

  static SVG = CloseMenuSVG;

  static defaultProperties = {
    className: "close-menu"
  };
}
