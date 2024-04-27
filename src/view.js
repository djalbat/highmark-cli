"use strict";

import withStyle from "easy-with-style";

import { keyCodes } from "necessary";
import { Element, window } from "easy";

import LeafDiv from "./view/div/leaf";
import Navigation from "./view/navigatrion";

import { leafNodesFromNodeList } from "./utilities/tree";
import { elementsFromDOMElements } from "./utilities/element";
import { VIEW_CHILD_DIVS_SELECTOR } from "./selectors";
import { ENABLE_SWIPES_DELAY, MAXIMUM_CLICK_WIDTH_RATIO } from "./constants";

const { ENTER_KEY_CODE,
        ESCAPE_KEY_CODE,
        BACKSPACE_KEY_CODE,
        ARROW_UP_KEY_CODE,
        ARROW_DOWN_KEY_CODE,
        ARROW_LEFT_KEY_CODE,
        ARROW_RIGHT_KEY_CODE } = keyCodes;

class View extends Element {
  swipeRightCustomHandler = (event, element) => {
    const swipesDisabled = this.areSwipesDisabled();

    if (swipesDisabled) {
      return;
    }

    this.disableSwipes();
    this.showLeftLeafDiv();
    this.waitToEnableSwipes();
  }

  swipeLeftCustomHandler = (event, element) => {
    const swipesDisabled = this.areSwipesDisabled();

    if (swipesDisabled) {
      return;
    }

    this.disableSwipes();
    this.showRightLeftDiv();
    this.waitToEnableSwipes();
  }

  swipeDownCustomHandler = (event, element) => {
    this.hideNavigation();
  }

  swipeUpCustomHandler = (event, element) => {
    this.showNavigation();
  }

  tapCustomHandler = (event, element) => {
    ///
  }

  keyDownHandler = (event, element) => {
    const { keyCode } = event;

    switch (keyCode) {
      case ENTER_KEY_CODE:
      case ARROW_RIGHT_KEY_CODE: {
        this.showRightLeftDiv();

        event.preventDefault();

        break;
      }

      case BACKSPACE_KEY_CODE:
      case ARROW_LEFT_KEY_CODE: {
        this.showLeftLeafDiv();

        event.preventDefault();

        break;
      }

      case ESCAPE_KEY_CODE: {
        ///

        break;
      }

      case ARROW_UP_KEY_CODE: {
        this.showFirstLeftDiv();

        event.preventDefault();

        break;
      }

      case ARROW_DOWN_KEY_CODE: {
        this.showLastLeafDiv();

        event.preventDefault();

        break;
      }
    }
  }

  clickHandler = (event, element) => {
    const { pageX } = event,
          width = this.getWidth(),
          clickWidthRatio = pageX / width;

    if (clickWidthRatio < MAXIMUM_CLICK_WIDTH_RATIO) {
      this.showLeftLeafDiv();
    }

    if ((1 - clickWidthRatio) < MAXIMUM_CLICK_WIDTH_RATIO) {
      this.showRightLeftDiv();
    }
  }

  showFirstLeftDiv() {
    const showingLeafDiv = this.findShowingLeafDiv(),
          leafDivs = this.getLeafDivs(),
          index = leafDivs.indexOf(showingLeafDiv),
          nextIndex = 0,
          previousIndex = index;  ///

    this.showNextLeafDiv(nextIndex, previousIndex);
  }

  showLeftLeafDiv() {
    const showingLeafDiv = this.findShowingLeafDiv(),
          leafDivs = this.getLeafDivs(),
          index = leafDivs.indexOf(showingLeafDiv),
          nextIndex = index - 1,
          previousIndex = index;  ///

    this.showNextLeafDiv(nextIndex, previousIndex);
  }

  showRightLeftDiv() {
    const showingLeafDiv = this.findShowingLeafDiv(),
          leafDivs = this.getLeafDivs(),
          index = leafDivs.indexOf(showingLeafDiv),
          nextIndex = index + 1,
          previousIndex = index;  ///

    this.showNextLeafDiv(nextIndex, previousIndex);
  }

  showLastLeafDiv() {
    const showingLeafDiv = this.findShowingLeafDiv(),
          leafDivs = this.getLeafDivs(),
          index = leafDivs.indexOf(showingLeafDiv),
          nextIndex = leafDivs.length - 1,
          previousIndex = index;  ///

    this.showNextLeafDiv(nextIndex, previousIndex);
  }

  showNextLeafDiv(nextIndex, previousIndex) {
    const leafDivs = this.getLeafDivs(),
          leafDivsLength = leafDivs.length,
          previousLeafDiv = leafDivs[previousIndex];

    if ((nextIndex === -1) || (nextIndex === previousIndex) || (nextIndex === leafDivsLength)) {
      previousLeafDiv.wiggle();

      return;
    }

    const nextLeafDiv = leafDivs[nextIndex];

    nextLeafDiv.show();

    previousLeafDiv.hide();
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

  retrieveLeafDivs() {
    const viewChildDivDOMElementNodeList = document.querySelectorAll(VIEW_CHILD_DIVS_SELECTOR),
          viewChildDivDOMElements = leafNodesFromNodeList(viewChildDivDOMElementNodeList),  ///
          leafDivs = elementsFromDOMElements(viewChildDivDOMElements, () =>

            <LeafDiv onCustomTap={this.tapCustomHandler}
                     onCustomSwipeUp={this.swipeUpCustomHandler}
                     onCustomSwipeDown={this.swipeDownCustomHandler}
                     onCustomSwipeLeft={this.swipeLeftCustomHandler}
                     onCustomSwipeRight={this.swipeRightCustomHandler} />

          );

    return leafDivs;
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

  setInitialState() {
    const leafDivs = this.retrieveLeafDivs(),
          swipesDisabled = false;

    this.setState({
      leafDivs,
      swipesDisabled
    });
  }

  didMount() {
    this.onClick(this.clickHandler);

    window.onKeyDown(this.keyDownHandler);
  }

  willUnmount() {
    this.offClick(this.clickHandler);

    window.offKeyDown(this.keyDownHandler);
  }

  childElements() {
    return (

      <Navigation/>

    );
  }

  initialise() {
    this.assignContext();

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

export default withStyle(View)`

  width: 100vw;
  height: 100vh;
  overflow: hidden;
  touch-action: none;
    
`;
