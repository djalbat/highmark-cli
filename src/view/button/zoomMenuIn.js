"use strict";

import Button from "../button";
import ZoomMenuInSVG from "../svg/zoomMenuIn";

export default class ZoomMenuInButton extends Button {
  clickHandler = (event, element) => {
    controller.zoomMenuIn();
  }

  static SVG = ZoomMenuInSVG;

  static defaultProperties = {
    className: "zoom-menu-in"
  };
}
