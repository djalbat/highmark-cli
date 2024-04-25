"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body, Element } from "easy";

import View from "./view";
import LeafDiv from "./view/div/leaf";

import { leafNodesFromNodeList } from "./utilities/tree";
import { elementsFromDOMElements } from "./utilities/element";
import { LOADING_DIV_SELECTOR, NOT_LOADING_OR_SPINNER_DIVS_SELECTOR } from "./constants";

const { renderStyles } = withStyle;

renderStyles();

const divDOMElementsNodeList = document.querySelectorAll(NOT_LOADING_OR_SPINNER_DIVS_SELECTOR),
      leafDivDOMElements = leafNodesFromNodeList(divDOMElementsNodeList),
      leafDivs = elementsFromDOMElements(leafDivDOMElements, LeafDiv),
      body = new Body();

body.mount(

  <View leafDivs={leafDivs} />

);

const loadingDiv = new Element(LOADING_DIV_SELECTOR);

loadingDiv.hide();
