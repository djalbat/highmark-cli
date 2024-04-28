"use strict";

import { SINGLE_SPACE } from "../constants";

export function elementsFromDOMElements(domElements, Element) {
  const elements = domElements.map((domElement) => {
    const element = elementFromDOMElement(domElement, Element);

    return element;
  });

  return elements;
}

export function elementFromDOMElement(domElement, Element) {
  const element = <Element/>;

  const { domElement: temporaryDOMElement } = element,
        { className: classNamesString } = temporaryDOMElement,
        classNames = classNamesString.split(SINGLE_SPACE);

  const { classList } = domElement,
        { childNodes } = temporaryDOMElement;

  childNodes.forEach((childNode) => {
    domElement.appendChild(childNode);
  });

  classNames.forEach((className) => {
    classList.add(className);
  });

  element.domElement = domElement;  ///

  domElement.__element__ = element; ///

  return element;
}
