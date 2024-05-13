"use strict";

import withStyle from "easy-with-style";  ///

import Element from "../element";
import ButtonsDiv from "../div/buttons";
import CheckboxesDiv from "../div/checkboxes";

import { GRID } from "../../constants";
import { getMenuZoom as getZoom } from "../../state";
import { menuDivGap, borderColour, menuDivPadding, backgroundColour } from "../../styles";

class MenuDiv extends Element {
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

  updateMenuZoom() {
    const zoom = getZoom(),
          width = `${100/zoom}%`,
          transform = `scale(${zoom})`,
          css = {
            width,
            transform
          };

    this.css(css);
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
          updateMenuZoom = this.updateMenuZoom.bind(this);

    return ({
      ...context,
      openMenu,
      closeMenu,
      updateMenuZoom
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

  gap: ${menuDivGap};
  left: 0;
  bottom: 0;
  display: grid;
  padding: ${menuDivPadding};
  position: fixed;
  border-top: 1px solid ${borderColour};
  background-color: ${backgroundColour};
  transform-origin: bottom left;
  grid-template-rows: auto;
  grid-template-columns: auto min-content;
    
`;
