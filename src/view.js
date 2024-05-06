"use strict";

import withStyle from "easy-with-style";  ///

import Element from "./view/element";
import MenuDiv from "./view/div/menu";
import OverlayDiv from "./view/div/overlay";
import PreloaderDiv from "./view/div/preloader";

class View extends Element {
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

export default withStyle(View)`

  width: 100%;
  height: 100%;
  position: relative;
  align-items: stretch;
  flex-direction: column;
    
`;
