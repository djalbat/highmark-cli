"use strict";

export function elementsFromDOMElements(domElements, Element) {
  const elements = domElements.map((domElement) => {
    const element = elementFromDOMElement(domElement, Element);

    return element;
  });

  return elements;
}

export function elementFromDOMElement(domElement, Element) {
  const element =

          <Element/>

        ,
        className = classNameFromElement(element);

  addClassNameToDOMElement(domElement, className)

  element.domElement = domElement;  ///

  domElement.__element__ = element; ///

  return element;
}

function classNameFromElement(element) {
  const domElement = element.getDOMElement(),
        { className } = domElement;

  return className;
}

function addClassNameToDOMElement(domElement, className) {
  const { classList } = domElement;

  classList.add(className);
}