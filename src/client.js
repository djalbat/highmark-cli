"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { controller } from "sufficient";
import { Body, Element } from "easy";
import { onFragmentChange } from "fragmented";

import View from "./view";
import createMethods from "./createMethods";

import { EMPTY_STRING } from "./constants";
import { setOrientation } from "./state";
import { DIVS_SELECTOR, LOADING_DIV_SELECTOR } from "./selectors";
import { getOrientation, onOrientationChange } from "./utilities/orientation";

const { renderStyles } = withStyle;

renderStyles();

const divDOMElements = [ ...document.querySelectorAll(DIVS_SELECTOR) ];  ///

divDOMElements.forEach((divDOMElement) => {
  divDOMElement.remove();
});

const scheduler = null,
      model = null,
      view =

        <View divDOMElements={divDOMElements} />

      ;

controller.assignMethods(createMethods, scheduler, model, view);

const body = new Body(),
      loadingDiv = new Element(LOADING_DIV_SELECTOR);

onOrientationChange((orientation) => {
  setOrientation(orientation);

  view.updateZoom();
});

onFragmentChange((event, element, fragment) => {
  const anchorId = `${fragment}`;

  (anchorId === EMPTY_STRING) ?
    view.showFirstDiv() :
      view.scrollToAnchor(anchorId);
});

getOrientation((orientation) => {
  setOrientation(orientation);

  loadingDiv.hide();

  body.mount(view);

  const anchorId = `${fragment}`;

  (anchorId === EMPTY_STRING) ?
    view.showFirstDiv() :
      view.scrollToAnchor(anchorId);

  view.updateZoom();
});
