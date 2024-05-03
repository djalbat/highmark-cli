"use strict";

import withStyle from "easy-with-style";  ///

import Element from "../element";
import ButtonsDiv from "../div/buttons";
import CheckboxesDiv from "../div/checkboxes";

import { menuDivPadding, buttonsDivWidth, menuDivBackgroundColour } from "../../styles";

class MenuDiv extends Element {
  isDragging() {
    const startHeight = this.getStartHeight(),
          dragging = (startHeight !== null);

    return dragging;
  }

  drag(top) {
    const startHeight = this.getStartHeight(),
          height = startHeight - top;

    this.setHeight(height);
  }

  dragEnd() {
    const startHeight = null;

    this.setStartHeight(startHeight);
  }

  dragStart() {
    const height = this.getHeight(),
          startHeight = height; ///

    this.setStartHeight(startHeight);
  }

  getStartHeight() {
    const { startHeight } = this.getState();

    return startHeight;
  }

  setStartHeight(startHeight) {
    this.updateState({
      startHeight
    });
  }

  setInitialState() {
    const startHeight = null;

    this.setState({
      startHeight
    });
  }

  childElements() {
    return ([

      <CheckboxesDiv/>,
      <ButtonsDiv/>

    ]);
  }

  parentContext() {
    const showMenuDiv = this.show.bind(this),  ///
          hideMenuDiv = this.hide.bind(this),  ///
          menuDivDrag = this.drag.bind(this), ///
          menuDivDragEnd = this.dragEnd.bind(this), ///
          menuDivDragStart = this.dragStart.bind(this), ///
          getMenuDivHeight = this.getHeight.bind(this), ///
          isMenuDivDragging = this.isDragging.bind(this), ///
          isMenuDivDisplayed = this.isDisplayed.bind(this);  ///

    return ({
      showMenuDiv,
      hideMenuDiv,
      menuDivDrag,
      menuDivDragEnd,
      menuDivDragStart,
      getMenuDivHeight,
      isMenuDivDragging,
      isMenuDivDisplayed
    });
  }

  initialise() {
    this.setInitialState();

    // this.hide();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "menu"
  };
}

export default withStyle(MenuDiv)`

  left: 0;
  width: 100%;
  height: fit-content;
  filter: brightness(0.8);
  bottom: 0;
  display: grid;
  padding: ${menuDivPadding};
  position: fixed;
  background-color: ${menuDivBackgroundColour};
  grid-template-rows: auto;
  grid-template-columns: auto ${buttonsDivWidth};

`;
