"use strict";

import Button from "../button";
import FullScreenSVG from "../svg/fullScreen";

export default class FullScreenButton extends Button {
  tapCustomHandler = (event, element) => {
    controller.enterFullScreen();
  }

  static SVG = FullScreenSVG;

  static defaultProperties = {
    className: "full-screen"
  };
}
