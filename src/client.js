"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { controller } from "sufficient";
import { Body, Element } from "easy";

import View from "./view";
import createMethods from "./createMethods";

import { elementFromDOMElement } from "./utilities/element";
import { LOADING_DIV_SELECTOR, VIEW_DIV_SELECTOR } from "./selectors";

const { renderStyles } = withStyle;

renderStyles();

const viewDOMElement = document.querySelector(VIEW_DIV_SELECTOR),
      scheduler = null,
      model = null,
      view = elementFromDOMElement(viewDOMElement, View); ///

controller.assignMethods(createMethods, scheduler, model, view);

const body = new Body();

body.mount(view);

const loadingDiv = new Element(LOADING_DIV_SELECTOR);

loadingDiv.hide();
