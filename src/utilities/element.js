"use strict";

import { SINGLE_SPACE } from "../constants";

export function elementsFromDOMElements(domElements, Element) {
  const elements = domElements.map((domElement) => {
    const element = <Element />;

    const { domElement: temporaryDOMElement } = element,
          { className: classNamesString } = temporaryDOMElement,
          classNames = classNamesString.split(SINGLE_SPACE);

    const { classList } = domElement;

    classNames.forEach((className) => {
      classList.add(className);
    });

    element.domElement = domElement;  ///

    domElement.__element__ = element; ///

    return element;
  });

  return elements;
}
