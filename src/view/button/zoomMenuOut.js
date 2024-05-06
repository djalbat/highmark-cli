"use strict";

import Button from "../button";
import ZoomMenuOutSVG from "../svg/zoomMenuOut";

export default class ZoomMenuOutButton extends Button {
  clickHandler = (event, element) => {
    controller.zoomMenuOut();
  }

  static SVG = ZoomMenuOutSVG;

  static defaultProperties = {
    className: "zoom-menu-out"
  };
}
