"use strict";

export function elementsFromDOMElements(domElements, Element) {
  const elements = domElements.map((domElement) => {
    const element = elementFromDOMElement(domElement, Element);

    return element;
  });

  return elements;
}

export function elementFromDOMElement(domElement, Element) {
  const element = <Element/>;

  element.domElement = domElement;  ///

  domElement.__element__ = element; ///

  return element;
}
