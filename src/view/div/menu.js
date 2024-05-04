"use strict";

import withStyle from "easy-with-style";  ///

import Element from "../element";
import ButtonsDiv from "../div/buttons";
import CheckboxesDiv from "../div/checkboxes";

import { GRID, ZOOM_RATIO } from "../../constants";
import { borderColour, menuDivPadding, buttonsDivWidth, menuDivBackgroundColour } from "../../styles";

class MenuDiv extends Element {
  zoomMenuOut() {
    let zoom = this.getZoom();

    zoom /= ZOOM_RATIO;

    this.setZoom(zoom);

    this.zoom(zoom);
  }

  zoomMenuIn() {
    let zoom = this.getZoom();

    zoom *= ZOOM_RATIO;

    this.setZoom(zoom);

    this.zoom(zoom);
  }

  zoom(zoom) {
    const width = `${100/zoom}%`,
          transform = `scale(${zoom})`;

    const css = {
      width,
      transform
    };

    this.css(css);
  }

  openMenu() {
    const display = GRID;

    this.display(display);
  }

  closeMenu() {
    this.hide();
  }

  getZoom() {
    const { zoom } = this.getState();

    return zoom;
  }

  setZoom(zoom) {
    this.updateState({
      zoom
    });
  }

  setInitialState() {
    const zoom = 1;

    this.setState({
      zoom
    });
  }

  childElements() {
    return ([

      <CheckboxesDiv/>,
      <ButtonsDiv/>

    ]);
  }

  parentContext() {
    const context = this.getContext(),
          openMenu = this.openMenu.bind(this),
          closeMenu = this.closeMenu.bind(this),
          zoomMenuIn = this.zoomMenuIn.bind(this),
          zoomMenuOut = this.zoomMenuOut.bind(this),
          getMenuDivHeight = this.getHeight.bind(this), ///
          isMenuDivDisplayed = this.isDisplayed.bind(this);  ///

    return ({
      ...context,
      openMenu,
      closeMenu,
      zoomMenuIn,
      zoomMenuOut,
      getMenuDivHeight,
      isMenuDivDisplayed
    });
  }

  initialise() {
    this.setInitialState();

    this.hide();
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
  border-top: 1px solid ${borderColour};
  background-color: ${menuDivBackgroundColour};
  transform-origin: bottom left;
  grid-template-rows: auto;
  grid-template-columns: auto ${buttonsDivWidth};

`;
