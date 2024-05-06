"use strict";

import withStyle from "easy-with-style";  ///

import { window } from "easy";
import { keyCodes } from "necessary";

import Element from "./view/element";
import MenuDiv from "./view/div/menu";
import OverlayDiv from "./view/div/overlay";
import PreloaderDiv from "./view/div/preloader";
import fullScreenMixins from "./mixins/fullsrean";

import { GRID } from "./constants";

const { ENTER_KEY_CODE,
        ESCAPE_KEY_CODE,
        BACKSPACE_KEY_CODE,
        ARROW_UP_KEY_CODE,
        ARROW_DOWN_KEY_CODE,
        ARROW_LEFT_KEY_CODE,
        ARROW_RIGHT_KEY_CODE } = keyCodes;

class View extends Element {
  fullScreenChangeCustomHandler = (event, element) => {
    this.update();
  }

  keyDownHandler = (event, element) => {
    const { keyCode } = event;

    switch (keyCode) {
      case ENTER_KEY_CODE:
      case ARROW_RIGHT_KEY_CODE: {
        this.showRightLeftDiv();

        break;
      }

      case BACKSPACE_KEY_CODE:
      case ARROW_LEFT_KEY_CODE: {
        this.showLeftLeafDiv();

        break;
      }

      case ESCAPE_KEY_CODE: {
        ///

        break;
      }

      case ARROW_UP_KEY_CODE: {
        this.showFirstLeafDiv();

        break;
      }

      case ARROW_DOWN_KEY_CODE: {
        this.showLastLeafDiv();

        break;
      }
    }
  }

  enterFullScreen() {
    this.requestFullScreen(() => {
      this.closeMenu();
    });
  }

  show() {
    const display = GRID;

    this.display(display);
  }

  didMount() {
    window.onKeyDown(this.keyDownHandler);

    this.onCustomFullScreenChange(this.fullScreenChangeCustomHandler);

    this.enableFullScreen();
  }

  willUnmount() {
    this.disableFullScreen();

    this.offCustomFullScreenChange(this.fullScreenChangeCustomHandler);

    window.offKeyDown(this.keyDownHandler);
  }

  childElements() {
    const { divDOMElement } = this.properties;

    return ([

      <PreloaderDiv/>,
      <OverlayDiv divDOMElement={divDOMElement} />,
      <MenuDiv/>

    ]);
  }

  initialise() {
    this.assignContext();

    this.show();
  }

  static tagName = "div";

  static ignoredProperties = [
    "divDOMElement"
  ];

  static defaultProperties = {
    className: "view"
  };
}

Object.assign(View.prototype, fullScreenMixins);

export default withStyle(View)`

  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  grid-template-rows: 0 auto min-content;
  grid-template-columns: auto;
    
`;
