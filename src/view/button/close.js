"use strict";

import Button from "../button";
import CloseSVG from "../svg/close";

export default class CloseButton extends Button {
  childElements() {
    return (

      <CloseSVG/>

    );
  }

  parentContext() {
    const onCloseButtonClick = this.onClick.bind(this), ///
          offCloseButtonClick = this.offClick.bind(this); ///

    return ({
      onCloseButtonClick,
      offCloseButtonClick
    });
  }

  static defaultProperties = {
    className: "close"
  };
}
