"use strict";

import withStyle from "easy-with-style";  ///

import Element from "../element";
import LeafDiv from "../div/leaf";
import touchMixins from "../../mixins/touch";

import { isFullScreen } from "../../utilities/fullScreen";
import { DIVS_SELECTOR } from "../../selectors";
import { leafNodesFromNodeList } from "../../utilities/tree";
import { elementsFromDOMElements } from "../../utilities/element";
import { SCROLL_DELAY, UP_DIRECTION, DECELERATION, DOWN_DIRECTION, MENU_DIV_TAP_AREA_HEIGHT } from "../../constants";
import { getViewZoom as getZoom, setViewZoom as setZoom, setColoursInverted, areColoursInverted } from "../../state";

class OverlayDiv extends Element {
  doubleTapCustomHandler = (event, element, top, left) => {
    const fullScreen = isFullScreen();

    if (fullScreen) {
      controller.exitFullScreen();

      return;
    }

    const checked = true;

    this.restoreNativeGestures();

    controller.checkRestoreNativeGesturesCheckbox(checked);
  }

  pinchStartCustomHandler = (event, element) => {
    const zoom =getZoom(),
          startZoom = zoom; ///

    this.setStartZoom(startZoom);
  }

  pinchMoveCustomHandler = (event, element, ratio) => {
    const startZoom = this.getStartZoom(),
          zoom = startZoom * Math.sqrt(ratio);

    setZoom(zoom);

    this.zoom(zoom);
  }

  swipeRightCustomHandler = (event, element) => {
    this.showLeftLeafDiv();
  }

  swipeLeftCustomHandler = (event, element) => {
    this.showRightLeftDiv();
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
    const fullScreen = isFullScreen();

    if (!fullScreen) {
      const height = this.getHeight(),
            bottom = height - top;

      if (bottom < MENU_DIV_TAP_AREA_HEIGHT) {
        controller.openMenu();

        return;
      }
    }

    const checked = false;

    this.suppressNativeGestures();

    this.checkRestoreNativeGesturesCheckbox(checked);
  }

  update() {
    const zoom = getZoom(),
          coloursInverted = areColoursInverted();

    coloursInverted ?
      this.addClass("inverted-colours") :
        this.removeClass("inverted-colours");

    this.zoom(zoom);
  }

  zoom(zoom) {
    const displayedLeafDiv = this.findDisplayedLeafDiv();

    displayedLeafDiv.zoom(zoom);
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

  invertColours() {
    const coloursInverted = true;

    setColoursInverted(coloursInverted);

    this.update();
  }

  revertColours() {
    const coloursInverted = false;

    setColoursInverted(coloursInverted);

    this.update();
  }

  enterFullScreen() {
    this.requestFullScreen(() => {
      this.closeMenu();
    });
  }

  restoreNativeGestures() {
    this.addClass("native-gestures");

    this.disableCustomGestures();
  }

  suppressNativeGestures() {
    this.removeClass("native-gestures");

    this.enableCustomGestures();
  }

  showFirstLeafDiv() {
    const nextIndex = 0,
          previousIndex = nextIndex;  ///

    this.showNextLeafDiv(nextIndex, previousIndex);
  }

  showLeftLeafDiv() {
    const displayedLeafDiv = this.findDisplayedLeafDiv(),
          leafDivs = this.getLeafDivs(),
          index = leafDivs.indexOf(displayedLeafDiv),
          nextIndex = index - 1,
          previousIndex = index;  ///

    if (nextIndex === -1) {
      return;
    }

    this.showNextLeafDiv(nextIndex, previousIndex);
  }

  showRightLeftDiv() {
    const displayedLeafDiv = this.findDisplayedLeafDiv(),
          leafDivs = this.getLeafDivs(),
          leafDivsLength = leafDivs.length,
          index = leafDivs.indexOf(displayedLeafDiv),
          nextIndex = index + 1,
          previousIndex = index;  ///

    if (nextIndex === leafDivsLength) {
      return;
    }

    this.showNextLeafDiv(nextIndex, previousIndex);
  }

  showLastLeafDiv() {
    const leafDivs = this.getLeafDivs(),
          leafDivsLength = leafDivs.length,
          nextIndex = leafDivsLength - 1,
          previousIndex = nextIndex;  ///

    this.showNextLeafDiv(nextIndex, previousIndex);
  }

  showNextLeafDiv(nextIndex, previousIndex) {
    const leafDivs = this.getLeafDivs(),
          nextLeafDiv = leafDivs[nextIndex],
          previousLeafDiv = leafDivs[previousIndex],
          backgroundColour = nextLeafDiv.getBackgroundColour();

    let zoom;

    zoom = 1;

    previousLeafDiv.zoom(zoom);

    zoom = getZoom();

    nextLeafDiv.zoom(zoom);

    previousLeafDiv.hide();

    this.setBackgroundColour(backgroundColour);

    this.stopScrolling();

    this.scrollToTop();

    nextLeafDiv.show();
  }

  setBackgroundColour(backgroundColour) {
    const backgroundColor = backgroundColour, ///
          css = {
            backgroundColor
          };

    this.css(css);
  }

  hideAllLeafDivs() {
    this.forEachLeafDiv((leafDiv) => {
      leafDiv.hide();
    });
  }

  findDisplayedLeafDiv() {
    const leafDivs = this.getLeafDivs(),
          displayedLeafDiv = leafDivs.find((leafDiv) => {
            const displayed = leafDiv.isDisplayed();

            if (displayed) {
              return true;
            }
          });

    return displayedLeafDiv;
  }

  retrieveLeafDivs() {
    const domElement = this.getDOMElement(),
          divNodeList = domElement.querySelectorAll(DIVS_SELECTOR),
          leafDivNodes = leafNodesFromNodeList(divNodeList),  ///
          leafDivs = elementsFromDOMElements(leafDivNodes, LeafDiv);

    return leafDivs;
  }

  forEachLeafDiv(callback) {
    const leafDivs = this.getLeafDivs();

    leafDivs.forEach(callback);
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
    const leafDivs = this.retrieveLeafDivs(),
          interval = null,
          startZoom = null,
          startScrollTop = null;

    this.setState({
      leafDivs,
      interval,
      startZoom,
      startScrollTop
    });
  }

  appendDivDOMElement() {
    const { divDOMElement  } = this.properties,
          domElement = this.getDOMElement();

    domElement.append(divDOMElement);
  }

  didMount() {
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

    this.enableTouch();

    this.showFirstLeafDiv();

    this.update();
  }

  willUnmount() {
    this.disableTouch();

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
  }

  initialise() {
    this.assignContext();

    this.appendDivDOMElement();

    this.setInitialState();

    this.suppressNativeGestures();

    this.hideAllLeafDivs();
  }

  static tagName = "div";

  static ignoredProperties = [
    "divDOMElement"
  ];

  static defaultProperties = {
    className: "overlay"
  };
}

Object.assign(OverlayDiv.prototype, touchMixins);

export default withStyle(OverlayDiv)`

  overflow: hidden;
    
  .native-gestures {
    touch-action: auto;
  }
  
  .inverted-colours {
    filter: invert(1);
  }
    
`;
