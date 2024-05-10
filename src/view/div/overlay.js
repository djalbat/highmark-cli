"use strict";

import withStyle from "easy-with-style";  ///

import { window } from "easy";
import { keyCodes, arrayUtilities } from "necessary";

import Div from "../div";
import Element from "../element";
import touchMixins from "../../mixins/touch";
import fullScreenMixins from "../../mixins/fullsrean";

import { isFullScreen } from "../../utilities/fullScreen";
import { elementsFromDOMElements } from "../../utilities/element";
import { getOverlayZoom as getZoom, areColoursInverted, areNativeGesturesRestored } from "../../state";
import { SCROLL_DELAY, UP_DIRECTION, DECELERATION, DOWN_DIRECTION, OPEN_MENU_TAP_AREA_HEIGHT } from "../../constants";

const { first } = arrayUtilities,
      { ENTER_KEY_CODE,
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

    const nativeGesturesRestored = areNativeGesturesRestored();

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

  enterFullScreen(callback) {
    this.requestFullScreen(callback);
  }

  updateOverlayZoom() {
    const div = this.findDiv(),
          zoom = getZoom();

    div.zoom(zoom);
  }

  updateOverlayColours() {
    const coloursInverted = areColoursInverted();

    coloursInverted ?
      this.addClass("inverted-colours") :
        this.removeClass("inverted-colours");

    this.updateOverlayZoom();
  }

  updateNativeGestures() {
    const nativeGesturesRestored = areNativeGesturesRestored();

    nativeGesturesRestored ?
      this.addClass("native-gestures") :
        this.removeClass("native-gestures");

    nativeGesturesRestored ?
      this.disableCustomGestures() :
        this.enableCustomGestures();
  }

  areNativeGesturesRestored() {
    const nativeGesturesRestored = this.hasClass("native-gestures");

    return nativeGesturesRestored;
  }

  showRightDiv() {
    const div = this.findDiv(),
          divs = this.getDivs(),
          divsLength = divs.length,
          index = divs.indexOf(div),
          nextIndex = index + 1,
          previousIndex = index;  ///

    if (nextIndex === divsLength) {
      return;
    }

    this.showNextDiv(nextIndex, previousIndex);
  }

  showLeftDiv() {
    const div = this.findDiv(),
          divs = this.getDivs(),
          index = divs.indexOf(div),
          nextIndex = index - 1,
          previousIndex = index;  ///

    if (nextIndex === -1) {
      return;
    }

    this.showNextDiv(nextIndex, previousIndex);
  }

  showLastDiv() {
    const div = this.findDiv(),
          divs = this.getDivs(),
          index = divs.indexOf(div),
          divsLength = divs.length,
          nextIndex = divsLength - 1,
          previousIndex = (index === -1) ?
                            nextIndex : ///
                              index;  ///

    this.showNextDiv(nextIndex, previousIndex);
  }

  showNextDiv(nextIndex, previousIndex) {
    const zoom = getZoom(),
          divs = this.getDivs(),
          nextDiv = divs[nextIndex],
          previousDiv = divs[previousIndex];

    this.stopScrolling();

    this.scrollToTop();

    this.remove(previousDiv);

    this.add(nextDiv);

    nextDiv.zoom(zoom);

    setTimeout(() => {
      const backgroundColour = nextDiv.getBackgroundColour();

      this.setBackgroundColour(backgroundColour);
    }, 0);
  }

  showFirstDiv() {
    const zoom = getZoom(),
          divs = this.getDivs(),
          firstDiv = first(divs);

    this.add(firstDiv);

    firstDiv.zoom(zoom);

    setTimeout(() => {
      const backgroundColour = firstDiv.getBackgroundColour();

      this.setBackgroundColour(backgroundColour);
    }, 0);
  }

  setBackgroundColour(backgroundColour) {
    const backgroundColor = backgroundColour, ///
          css = {
            backgroundColor
          };

    this.css(css);
  }

  findDiv() {
    const divs = this.getDivs(),
          div = divs.find((div) => {
            const added = div.isAdded();

            if (added) {
              return true;
            }
          });

    return div;
  }

  getDivs() {
    const { divs } = this.getState();

    return divs;
  }

  setDivs(divs) {
    this.updateState({
      divs
    });
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
    const divs = this.createDivs(),
          interval = null,
          startZoom = null,
          startScrollTop = null;

    this.setState({
      divs,
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

  createDivs() {
    const { divDOMElements } = this.properties,
          divs = elementsFromDOMElements(divDOMElements, Div);

    return divs;
  }

  parentContext() {
    const exitFullScreen = this.exitFullScreen.bind(this),
          enterFullScreen = this.enterFullScreen.bind(this),
          updateOverlayZoom = this.updateOverlayZoom.bind(this),
          updateOverlayColours = this.updateOverlayColours.bind(this),
          updateNativeGestures = this.updateNativeGestures.bind(this);

    return ({
      exitFullScreen,
      enterFullScreen,
      updateOverlayZoom,
      updateOverlayColours,
      updateNativeGestures
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
