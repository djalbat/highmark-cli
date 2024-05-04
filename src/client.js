"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { controller } from "sufficient";
import { Body, Element } from "easy";

import View from "./view";
import PreloaderDiv from "./view/div/preloader";
import createMethods from "./createMethods";

import { setOrientation } from "./state";
import { elementFromDOMElement } from "./utilities/element";
import { getOrientation, onOrientationChange } from "./utilities/responsive";
import { LOADING_DIV_SELECTOR, VIEW_DIV_SELECTOR } from "./selectors";

const { renderStyles } = withStyle;

renderStyles();

const viewDOMElement = document.querySelector(VIEW_DIV_SELECTOR),
      scheduler = null,
      model = null,
      view = elementFromDOMElement(viewDOMElement, View); ///

controller.assignMethods(createMethods, scheduler, model, view);

const body = new Body(),
      loadingDiv = new Element(LOADING_DIV_SELECTOR);

body.mount(

  <PreloaderDiv/>

);

onOrientationChange((orientation) => {
  setOrientation(orientation);

  view.updateZoom();
});

getOrientation((orientation) => {
  setOrientation(orientation);

  body.mount(view);

  loadingDiv.hide();
});
