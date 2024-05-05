"use strict";

import withStyle from "easy-with-style";  ///

import Element from "../element";
import ButtonsDiv from "../div/buttons";
import CheckboxesDiv from "../div/checkboxes";

import { GRID, ZOOM_RATIO } from "../../constants";
import { getMenuDivZoom as getZoom, setMenuDivZoom as setZoom } from "../../state";
import { borderColour, menuDivPadding, menuDivBackgroundColour } from "../../styles";

class MenuDiv extends Element {
  invertColours() {
    this.addClass("inverted-colours");
  }

  revertColours() {
    this.removeClass("inverted-colours");
  }

  zoomMenuOut() {
    let zoom = getZoom();

    zoom /= ZOOM_RATIO;

    setZoom(zoom);

    this.zoom(zoom);
  }

  zoomMenuIn() {
    let zoom = getZoom();

    zoom *= ZOOM_RATIO;

    setZoom(zoom);

    this.zoom(zoom);
  }

  zoom(zoom) {
    const width = `${100/zoom}%`,
          transform = `scale(${zoom})`,
          css = {
            width,
            transform
          };

    this.css(css);
  }

  tap(top, left) {
    this.tapButtonsDiv(top, left);
  }

  openMenu() {
    const display = GRID;

    this.display(display);
  }

  closeMenu() {
    this.hide();
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
          tapMenuDiv = this.tap.bind(this), ///
          zoomMenuDiv = this.zoom.bind(this), ///
          addMenuDivClass = this.addClass.bind(this), ///
          getMenuDivHeight = this.getHeight.bind(this), ///
          removeMenuDivClass = this.removeClass.bind(this), ///
          isMenuDivDisplayed = this.isDisplayed.bind(this); ///

    return ({
      ...context,
      openMenu,
      closeMenu,
      zoomMenuIn,
      zoomMenuOut,
      tapMenuDiv,
      zoomMenuDiv,
      addMenuDivClass,
      getMenuDivHeight,
      removeMenuDivClass,
      isMenuDivDisplayed
    });
  }

  initialise() {
    this.assignContext([
      "tapButtonsDiv"
    ]);

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
  grid-template-columns: auto min-content;
  
  .inverted-colours {
    filter: invert(1);
  }
    
`;
