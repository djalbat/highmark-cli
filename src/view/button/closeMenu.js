"use strict";

import Button from "../button";
import CloseMenuSVG from "../svg/closeMenu";

export default class CloseMenuButton extends Button {
  clickHandler = (event, element) => {
    controller.closeMenu();
  }

  didMount() {
    this.onClick(this.clickHandler);
  }

  willUnmount() {
    this.offClick(this.clickHandler);
  }

  childElements() {
    return (

      <CloseMenuSVG/>

    );
  }

  static defaultProperties = {
    className: "close-menu"
  };
}
