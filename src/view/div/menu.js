"use strict";

import withStyle from "easy-with-style";  ///

import Element from "../element";
import ButtonsDiv from "../div/buttons";
import CheckboxesDiv from "../div/checkboxes";

import { GRID, ZOOM_RATIO } from "../../constants";
import { getMenuDivZoom as getZoom, setMenuDivZoom as setZoom } from "../../state";
import { borderColour, menuDivPadding, menuDivBackgroundColour } from "../../styles";

class MenuDiv extends Element {
  zoomMenuOut() {
    let zoom = getZoom();

    zoom /= ZOOM_RATIO;

    setZoom(zoom);

    this.updateZoom();
  }

  zoomMenuIn() {
    let zoom = getZoom();

    zoom *= ZOOM_RATIO;

    setZoom(zoom);

    this.updateZoom();
  }

  updateZoom() {
    const zoom = getZoom(),
          width = `${100/zoom}%`,
          transform = `scale(${zoom})`,
          css = {
            width,
            transform
          };

    this.css(css);
  }

  show() {
    const display = GRID;

    this.display(display);
  }

  openMenu() {
    this.show();
  }

  closeMenu() {
    this.hide();
  }

  didMount() {
    this.updateZoom();
  }

  willUnmount() {
    ///
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
          zoomMenuOut = this.zoomMenuOut.bind(this); ///

    return ({
      ...context,
      openMenu,
      closeMenu,
      zoomMenuIn,
      zoomMenuOut
    });
  }

  initialise() {
    this.hide();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "menu"
  };
}

export default withStyle(MenuDiv)`

  left: 0;
  bottom: 0;
  display: grid;
  padding: ${menuDivPadding};
  position: absolute;
  overflow: hidden;
  border-top: 1px solid ${borderColour};
  background-color: ${menuDivBackgroundColour};
  transform-origin: bottom left;
  grid-template-rows: auto;
  grid-template-columns: auto min-content;
    
`;
