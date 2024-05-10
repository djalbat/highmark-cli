"use strict";

import withStyle from "easy-with-style";  ///

import { window } from "easy";
import { keyCodes } from "necessary";

import Div from "../div";
import Element from "../element";
import touchMixins from "../../mixins/touch";
import fullScreenMixins from "../../mixins/fullsrean";

import { isFullScreen } from "../../utilities/fullScreen";
import { elementsFromDOMElements } from "../../utilities/element";
import { getOverlayZoom as getZoom, areColoursInverted } from "../../state";
import { SCROLL_DELAY, UP_DIRECTION, DECELERATION, DOWN_DIRECTION, OPEN_MENU_TAP_AREA_HEIGHT } from "../../constants";

const { ENTER_KEY_CODE,
        ESCAPE_KEY_CODE,
        BACKSPACE_KEY_CODE,
        ARROW_UP_KEY_CODE,
        ARROW_DOWN_KEY_CODE,
        ARROW_LEFT_KEY_CODE,
        ARROW_RIGHT_KEY_CODE } = keyCodes;

class OverlayDiv extends Element {
  fullScreenChangeCustomHandler = (event, element) => {
    controller.closeMenu();

    this.updateOverlayZoom();
  }

  doubleTapCustomHandler = (event, element, top, left) => {
    const fullScreen = isFullScreen();

    fullScreen ?
      controller.exitFullScreen() :
        controller.enterFullScreen();
  }

  pinchStartCustomHandler = (event, element) => {
    const zoom = getZoom(),
          startZoom = zoom; ///

    this.setStartZoom(startZoom);
  }

  pinchMoveCustomHandler = (event, element, ratio) => {
    const startZoom = this.getStartZoom(),
          overlayZoom = startZoom * Math.sqrt(ratio);  ///

    controller.zoomOverlay(overlayZoom);
  }

  swipeRightCustomHandler = (event, element) => {
    this.showLeftDiv();
  }

  swipeLeftCustomHandler = (event, element) => {
    this.showRightDiv();
  }

  swipeDownCustomHandler = (event, element, top, left, speed) => {
    const direction = DOWN_DIRECTION;

    this.startScrolling(speed, direction);
  }

  swipeUpCustomHandler = (event, element, top, left, speed) => {
    const direction = UP_DIRECTION;

    this.startScrolling(speed, direction);
  }

  dragStartCustomHandler = (event, element, top, left) => {
    const scrollTop = this.getScrollTop(),
          startScrollTop = scrollTop; ///

    this.setStartScrollTop(startScrollTop);
  }

  dragDownCustomHandler = (event, element, top, left) => {
    const startScrollTop = this.getStartScrollTop();

    if (startScrollTop === null) {
      return;
    }

    const scrollTop = startScrollTop - top;

    this.setScrollTop(scrollTop);
  }

  dragUpCustomHandler = (event, element, top, left) => {
    const startScrollTop = this.getStartScrollTop();

    if (startScrollTop === null) {
      return;
    }

    const scrollTop = startScrollTop - top;

    this.setScrollTop(scrollTop);
  }

  tapCustomHandler = (event, element, top, left) => {
    const height = this.getHeight(),
          bottom = height - top;

    if (bottom < OPEN_MENU_TAP_AREA_HEIGHT) {
      controller.openMenu();

      return;
    }

    const nativeGesturesRestored = this.areNativeGesturesRestored();

    nativeGesturesRestored ?
      controller.suppressNativeGestures() :
        controller.restoreNativeGestures();
  }

  keyDownHandler = (event, element) => {
    const { keyCode } = event;

    switch (keyCode) {
      case ENTER_KEY_CODE:
      case ARROW_RIGHT_KEY_CODE: {
        this.showRightDiv();

        break;
      }

      case BACKSPACE_KEY_CODE:
      case ARROW_LEFT_KEY_CODE: {
        this.showLeftDiv();

        break;
      }

      case ESCAPE_KEY_CODE: {
        controller.exitFullScreen();

        break;
      }

      case ARROW_UP_KEY_CODE: {
        this.showFirstDiv();

        break;
      }

      case ARROW_DOWN_KEY_CODE: {
        this.showLastDiv();

        break;
      }
    }
  }

  scrollToTop() {
    const scrollTop = 0;

    this.setScrollTop(scrollTop);
  }

  stopScrolling() {
    let interval = this.getInterval();

    if (interval !== null) {
      clearInterval(interval);

      interval = null;

      this.setInterval(interval);
    }
  }

  startScrolling(speed, direction) {
    let scrollTop = this.getScrollTop();

    scrollTop += speed * SCROLL_DELAY;

    this.setScrollTop(scrollTop);

    let interval = this.getInterval();

    if (interval !== null) {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      speed = speed - direction * DECELERATION;

      if ((speed * direction) < 0) {
        clearInterval(interval);

        interval = null;

        this.setInterval(interval);
      }

      let scrollTop = this.getScrollTop();

      scrollTop += speed * SCROLL_DELAY;

      this.setScrollTop(scrollTop);
    }, SCROLL_DELAY);

    this.setInterval(interval);
  }

  enterFullScreen() {
    this.requestFullScreen();
  }

  updateOverlayZoom() {
    const zoom = getZoom(),
          displayedDiv = this.findDisplayedDiv();

    displayedDiv.zoom(zoom);
  }

  updateOverlayColours() {
    const coloursInverted = areColoursInverted();

    coloursInverted ?
      this.addClass("inverted-colours") :
        this.removeClass("inverted-colours");

    this.updateOverlayZoom();
  }

  restoreNativeGestures() {
    this.addClass("native-gestures");

    this.disableCustomGestures();
  }

  areNativeGesturesRestored() {
    const nativeGesturesRestored = this.hasClass("native-gestures");

    return nativeGesturesRestored;
  }

  suppressNativeGestures() {
    this.removeClass("native-gestures");

    this.enableCustomGestures();
  }

  showRightDiv() {
    const displayedDiv = this.findDisplayedDiv(),
          divs = this.getDivs(),
          divsLength = divs.length,
          index = divs.indexOf(displayedDiv),
          nextIndex = index + 1,
          previousIndex = index;  ///

    if (nextIndex === divsLength) {
      return;
    }

    this.showNextDiv(nextIndex, previousIndex);
  }

  showFirstDiv() {
    const displayedDiv = this.findDisplayedDiv(),
          divs = this.getDivs(),
          index = divs.indexOf(displayedDiv),
          nextIndex = 0,
          previousIndex = (index === -1) ?
                            nextIndex : ///
                              index;  ///

    this.showNextDiv(nextIndex, previousIndex);
  }

  showLeftDiv() {
    const displayedDiv = this.findDisplayedDiv(),
          divs = this.getDivs(),
          index = divs.indexOf(displayedDiv),
          nextIndex = index - 1,
          previousIndex = index;  ///

    if (nextIndex === -1) {
      return;
    }

    this.showNextDiv(nextIndex, previousIndex);
  }

  showLastDiv() {
    const displayedDiv = this.findDisplayedDiv(),
          divs = this.getDivs(),
          index = divs.indexOf(displayedDiv),
          divsLength = divs.length,
          nextIndex = divsLength - 1,
          previousIndex = (index === -1) ?
                            nextIndex : ///
                              index;  ///

    this.showNextDiv(nextIndex, previousIndex);
  }

  showNextDiv(nextIndex, previousIndex) {
    const divs = this.getDivs(),
          nextDiv = divs[nextIndex],
          previousDiv = divs[previousIndex],
          backgroundColour = nextDiv.getBackgroundColour();

    let zoom;

    zoom = 1;

    previousDiv.zoom(zoom);

    zoom = getZoom();

    nextDiv.zoom(zoom);

    previousDiv.hide();

    this.setBackgroundColour(backgroundColour);

    this.stopScrolling();

    this.scrollToTop();

    nextDiv.show();
  }

  setBackgroundColour(backgroundColour) {
    const backgroundColor = backgroundColour, ///
          css = {
            backgroundColor
          };

    this.css(css);
  }

  findDisplayedDiv() {
    const divs = this.getDivs(),
          displayedDiv = divs.find((div) => {
            const displayed = div.isDisplayed();

            if (displayed) {
              return true;
            }
          });

    return displayedDiv;
  }

  getDivs() {
    const childElements = this.getChildElements(),
          divs = childElements; ///

    return divs;
  }

  getInterval() {
    const { interval } = this.getState();

    return interval;
  }

  setInterval(interval) {
    this.updateState({
      interval
    });
  }

  getStartZoom() {
    const { startZoom } = this.getState();

    return startZoom;
  }

  setStartZoom(startZoom) {
    this.updateState({
      startZoom
    });
  }

  getStartScrollTop() {
    const { startScrollTop } = this.getState();

    return startScrollTop;
  }

  setStartScrollTop(startScrollTop) {
    this.updateState({
      startScrollTop
    });
  }

  setInitialState() {
    const interval = null,
          startZoom = null,
          startScrollTop = null;

    this.setState({
      interval,
      startZoom,
      startScrollTop
    });
  }

  didMount() {
    window.onKeyDown(this.keyDownHandler);

    this.onCustomTap(this.tapCustomHandler);
    this.onCustomDragUp(this.dragUpCustomHandler);
    this.onCustomDragDown(this.dragDownCustomHandler);
    this.onCustomDragStart(this.dragStartCustomHandler);
    this.onCustomSwipeUp(this.swipeUpCustomHandler);
    this.onCustomSwipeDown(this.swipeDownCustomHandler);
    this.onCustomSwipeLeft(this.swipeLeftCustomHandler);
    this.onCustomSwipeRight(this.swipeRightCustomHandler);
    this.onCustomPinchMove(this.pinchMoveCustomHandler);
    this.onCustomPinchStart(this.pinchStartCustomHandler);
    this.onCustomDoubleTap(this.doubleTapCustomHandler);

    this.onCustomFullScreenChange(this.fullScreenChangeCustomHandler);

    this.enableFullScreen();

    this.enableTouch();

    this.updateOverlayZoom();

    this.updateOverlayColours();
  }

  willUnmount() {
    this.disableTouch();

    this.disableFullScreen();

    this.offCustomTap(this.tapCustomHandler);
    this.offCustomDragUp(this.dragUpCustomHandler);
    this.offCustomDragDown(this.dragDownCustomHandler);
    this.offCustomDragStart(this.dragStartCustomHandler);
    this.offCustomSwipeUp(this.swipeUpCustomHandler);
    this.offCustomSwipeDown(this.swipeDownCustomHandler);
    this.offCustomSwipeLeft(this.swipeLeftCustomHandler);
    this.offCustomSwipeRight(this.swipeRightCustomHandler);
    this.offCustomPinchMove(this.pinchMoveCustomHandler);
    this.offCustomPinchStart(this.pinchStartCustomHandler);
    this.offCustomDoubleTap(this.doubleTapCustomHandler);

    this.offCustomFullScreenChange(this.fullScreenChangeCustomHandler);

    window.offKeyDown(this.keyDownHandler);
  }

  childElements() {
    const { divDOMElements } = this.properties,
          divs = elementsFromDOMElements(divDOMElements, Div),
          childElements = [
            ...divs
          ];

    return childElements;
  }

  parentContext() {
    const exitFullScreen = this.exitFullScreen.bind(this),
          enterFullScreen = this.enterFullScreen.bind(this),
          updateOverlayZoom = this.updateOverlayZoom.bind(this),
          updateOverlayColours = this.updateOverlayColours.bind(this),
          restoreNativeGestures = this.restoreNativeGestures.bind(this),
          suppressNativeGestures = this.suppressNativeGestures.bind(this);

    return ({
      exitFullScreen,
      enterFullScreen,
      updateOverlayZoom,
      updateOverlayColours,
      restoreNativeGestures,
      suppressNativeGestures
    });
  }

  initialise() {
    this.assignContext();

    this.setInitialState();

    this.showFirstDiv();
  }

  static tagName = "div";

  static ignoredProperties = [
    "divDOMElements"
  ];

  static defaultProperties = {
    className: "overlay"
  };
}

Object.assign(OverlayDiv.prototype, touchMixins);
Object.assign(OverlayDiv.prototype, fullScreenMixins);

export default withStyle(OverlayDiv)`
  
  width: 100%;
  height: 100%;

  overflow: hidden;
  touch-action: none;
    
  .native-gestures {
    overflow: scroll;
    touch-action: auto;
  }
  
  .inverted-colours {
    filter: invert(1);
  }
    
`;
