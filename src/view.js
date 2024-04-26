"use strict";

import { Element } from "easy";
import { arrayUtilities } from "necessary";

import LeafDiv from "./view/div/leaf";

import { leafNodesFromNodeList } from "./utilities/tree";
import { elementsFromDOMElements } from "./utilities/element";
import { ENABLE_SWIPES_DELAY, VIEW_CHILD_DIVS_SELECTOR } from "./constants";

const { first } = arrayUtilities;

export default class View extends Element {
  swipeRightCustomHandler = (event, element) => {
    const swipesDisabled = this.areSwipesDisabled();

    if (swipesDisabled) {
      return;
    }

    this.disableSwipes();
    this.showPreviousLeftDiv();
    this.waitToEnableSwipes();
  }

  swipeLeftCustomHandler = (event, element) => {
    const swipesDisabled = this.areSwipesDisabled();

    if (swipesDisabled) {
      return;
    }

    this.disableSwipes();
    this.showNextLeafDiv();
    this.waitToEnableSwipes();
  }

  tapCustomHandler = (event, element) => {
    ///
  }

  getFirstLeafDiv() {
    const leafDivs = this.getLeafDivs(),
          firstLeafDiv = first(leafDivs) || null;

    return firstLeafDiv;
  }

  showNextLeafDiv() {
    const showingLeafDiv = this.findShowingLeafDiv(),
          leafDivs = this.getLeafDivs(),
          index = leafDivs.indexOf(showingLeafDiv),
          nextIndex = index + 1,
          leafDivsLength = leafDivs.length;

    if (nextIndex === leafDivsLength) {
      // showingLeafDiv.wiggle();

      return;
    }

    const nextLeafDiv = leafDivs[nextIndex],
          previousLeafDiv = showingLeafDiv; ///

    nextLeafDiv.show();
    previousLeafDiv.hide();
  }

  showPreviousLeftDiv() {
    const showingLeafDiv = this.findShowingLeafDiv(),
          leafDivs = this.getLeafDivs(),
          index = leafDivs.indexOf(showingLeafDiv),
          previousIndex = index - 1;

    if (previousIndex === -1) {
      // showingLeafDiv.wiggle();

      return;
    }

    const nextLeafDiv = showingLeafDiv, ///
          previousLeftDiv = leafDivs[previousIndex];

    nextLeafDiv.hide();
    previousLeftDiv.show();
  }

  forEachLeafDiv(callback) {
    const leafDivs = this.getLeafDivs();

    leafDivs.forEach(callback);
  }

  findShowingLeafDiv() {
    const leafDivs = this.getLeafDivs(),
          showingLeafDiv = leafDivs.find((leafDiv) => {
            const showing = leafDiv.isShowing();

            if (showing) {
              return true;
            }
          });

    return showingLeafDiv;
  }

  setInitialState() {
    const viewChildDivDOMElementNodeList = document.querySelectorAll(VIEW_CHILD_DIVS_SELECTOR),
          viewChildDivDOMElements = leafNodesFromNodeList(viewChildDivDOMElementNodeList),  ///
          leafDivs = elementsFromDOMElements(viewChildDivDOMElements, () =>

            <LeafDiv onCustomTap={this.tapCustomHandler}
                     onCustomSwipeLeft={this.swipeLeftCustomHandler}
                     onCustomSwipeRight={this.swipeRightCustomHandler} />

          ),
          swipesDisabled = false;

    this.setState({
      leafDivs,
      swipesDisabled
    });
  }

  disableSwipes() {
    const swipesDisabled = true;

    this.setSwipesDisabled(swipesDisabled);
  }

  enableSwipes() {
    const swipesDisabled = false;

    this.setSwipesDisabled(swipesDisabled);
  }

  waitToEnableSwipes() {
    const delay = ENABLE_SWIPES_DELAY;

    setTimeout(() => {
      this.enableSwipes();
    }, delay);
  }

  getLeafDivs() {
    const { leafDivs } = this.getState();

    return leafDivs;
  }

  setLeftDivs(leafDivs) {
    this.updateState({
      leafDivs
    });
  }

  areSwipesDisabled() {
    const { swipesDisabled } = this.getState();

    return swipesDisabled;
  }

  setSwipesDisabled(swipesDisabled) {
    this.updateState({
      swipesDisabled
    });
  }

  initialise() {
    this.setInitialState();

    this.forEachLeafDiv((leafDiv, index) => {
      (index === 0) ?
        leafDiv.show() :
          leafDiv.hide();
    });
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
