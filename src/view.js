"use strict";

import withStyle from "easy-with-style";  ///

import Element from "./view/element";
import MenuDiv from "./view/div/menu";
import OverlayDiv from "./view/div/overlay";
import PreloaderDiv from "./view/div/preloader";

class View extends Element {
  updateZoom() {
    this.updateMenuZoom();
    this.updateOverlayZoom();
  }

  didMount() {
    this.show();

    this.updateOverlayColours();
    this.updateNativeGestures();
    this.updateFullScreenCheckboxDiv();
    this.updateInvertColoursCheckboxDiv();
    this.updateNativeGesturesCheckboxDiv();
  }

  willUnmount() {
    ///
  }

  childElements() {
    const { divDOMElements } = this.properties;

    return ([

      <PreloaderDiv/>,
      <OverlayDiv divDOMElements={divDOMElements} />,
      <MenuDiv/>

    ]);
  }

  initialise() {
    this.assignContext();
  }

  static tagName = "div";

  static ignoredProperties = [
    "divDOMElements"
  ];

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  width: 100%;
  height: 100%;
  align-items: stretch;
  flex-direction: column;
    
`;
