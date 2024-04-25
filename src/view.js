"use strict";

import { Element } from "easy";
import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export default class View extends Element {
  getLeafDivs() {
    const { leafDivs } = this.properties;

    return leafDivs;
  }

  getFirstLeafDiv() {
    const leafDivs = this.getLeafDivs(),
          firstLeafDiv = first(leafDivs) || null;

    return firstLeafDiv;
  }

  forEachLeafDiv(callback) {
    const leafDivs = this.getLeafDivs();

    leafDivs.forEach((leafDiv) => {
      callback(leafDiv);
    });
  }

  didMount() {
    this.forEachLeafDiv((leafDiv) => {
      leafDiv.didMount();
    });
  }

  willUnmount() {
    this.forEachLeafDiv((leafDiv) => {
      leafDiv.willUnmount();
    });
  }

  initialise() {
    const firstLeafDiv = this.getFirstLeafDiv();

    this.forEachLeafDiv((leafDiv) => {
      leafDiv.hide();
    });

    firstLeafDiv.show();
  }

  static tagName = "div";

  static ignoredProperties = [
    "leafDivs"
  ];

  static defaultProperties = {
    className: "view"
  };
}
