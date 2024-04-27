"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body, Element } from "easy";

import View from "./view";

import { elementFromDOMElement } from "./utilities/element";
import { LOADING_DIV_SELECTOR, VIEW_DIV_SELECTOR } from "./selectors";

const { renderStyles } = withStyle;

renderStyles();

const viewDOMElement = document.querySelector(VIEW_DIV_SELECTOR),
      body = new Body(),
      view = elementFromDOMElement(viewDOMElement, () =>

        <View/>

      ); ///

body.mount(view);

const loadingDiv = new Element(LOADING_DIV_SELECTOR);

loadingDiv.hide();
