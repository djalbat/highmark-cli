"use strict";

import withStyle from "easy-with-style";

import { keyCodes } from "necessary";
import { Element, window } from "easy";

import LeafDiv from "./view/div/leaf";
import MenuDiv from "./view/div/menu";
import touchMixins from "./mixins/touch";

import { leafNodesFromNodeList } from "./utilities/tree";
import { elementsFromDOMElements } from "./utilities/element";
import { VIEW_CHILD_DIVS_SELECTOR } from "./selectors";
import { SHOW_DELAY, ZOOM_RATIO, SCROLL_DELAY, UP_DIRECTION, DECELERATION, DOWN_DIRECTION, MENU_DIV_SWIPE_BOTTOM } from "./constants";

const { ENTER_KEY_CODE,
        ESCAPE_KEY_CODE,
        BACKSPACE_KEY_CODE,
        ARROW_UP_KEY_CODE,
        ARROW_DOWN_KEY_CODE,
        ARROW_LEFT_KEY_CODE,
        ARROW_RIGHT_KEY_CODE } = keyCodes;

class View extends Element {
  doubleTapCustomHandler = (event, element) => {
    this.enableNativeGestures();
  }

  pinchStartCustomHandler = (event, element) => {
    const nativeGesturesEnabled = this.areNativeGesturesEnabled();

    if (nativeGesturesEnabled) {
      return;
    }

    const zoom = this.getZoom(),
          startZoom = zoom; ///

    this.setStartZoom(startZoom);
  }

  pinchMoveCustomHandler = (event, element, ratio) => {
    const nativeGesturesEnabled = this.areNativeGesturesEnabled();

    if (nativeGesturesEnabled) {
      return;
    }

    const startZoom = this.getStartZoom(),
          zoom = startZoom * Math.sqrt(ratio);

    this.setZoom(zoom);

    this.zoom(zoom);
  }

  swipeRightCustomHandler = (event, element) => {
    const nativeGesturesEnabled = this.areNativeGesturesEnabled();

    if (nativeGesturesEnabled) {
      return;
    }

    this.showLeftLeafDiv();
  }

  swipeLeftCustomHandler = (event, element) => {
    const nativeGesturesEnabled = this.areNativeGesturesEnabled();

    if (nativeGesturesEnabled) {
      return;
    }

    this.showRightLeftDiv();
  }

  swipeDownCustomHandler = (event, element, top, left, speed) => {
    const nativeGesturesEnabled = this.areNativeGesturesEnabled();

    if (nativeGesturesEnabled) {
      return;
    }

    const direction = DOWN_DIRECTION;

    this.scroll(speed, direction);
  }

  swipeUpCustomHandler = (event, element, top, left, speed) => {
    const nativeGesturesEnabled = this.areNativeGesturesEnabled();

    if (nativeGesturesEnabled) {
      return;
    }

    const height = this.getHeight(),
          bottom = height - top;

    if (bottom < MENU_DIV_SWIPE_BOTTOM) {
      this.showMenuDiv();

      return;
    }

    const direction = UP_DIRECTION;

    this.scroll(speed, direction);
  }

  dragStartCustomHandler = (event, element) => {
    const nativeGesturesEnabled = this.areNativeGesturesEnabled();

    if (nativeGesturesEnabled) {
      return;
    }

    const scrollTop = this.getScrollTop(),
          startScrollTop = scrollTop; ///

    this.setStartScrollTop(startScrollTop);
  }

  dragDownCustomHandler = (event, element, top, left) => {
    const nativeGesturesEnabled = this.areNativeGesturesEnabled();

    if (nativeGesturesEnabled) {
      return;
    }

    const startScrollTop = this.getStartScrollTop(),
          scrollTop = startScrollTop - top;

    this.setScrollTop(scrollTop);
  }

  dragUpCustomHandler = (event, element, top, left) => {
    const nativeGesturesEnabled = this.areNativeGesturesEnabled();

    if (nativeGesturesEnabled) {
      return;
    }

    const startScrollTop = this.getStartScrollTop(),
          scrollTop = startScrollTop - top;

    this.setScrollTop(scrollTop);
  }

  tapCustomHandler = (event, element) => {

    alert("view tap...")

    this.disableNativeGestures();
  }

  keyDownHandler = (event, element) => {
    const { keyCode } = event;

    switch (keyCode) {
      case ENTER_KEY_CODE:
      case ARROW_RIGHT_KEY_CODE: {
        this.showRightLeftDiv();

        break;
      }

      case BACKSPACE_KEY_CODE:
      case ARROW_LEFT_KEY_CODE: {
        this.showLeftLeafDiv();

        break;
      }

      case ESCAPE_KEY_CODE: {
        ///

        break;
      }

      case ARROW_UP_KEY_CODE: {
        this.showFirstLeftDiv();

        break;
      }

      case ARROW_DOWN_KEY_CODE: {
        this.showLastLeafDiv();

        break;
      }
    }
  }

  zoomOut() {
    let zoom = this.getZoom();

    zoom /= ZOOM_RATIO;

    this.setZoom(zoom);

    this.zoom(zoom);
  }

  zoomIn() {
    let zoom = this.getZoom();

    zoom *= ZOOM_RATIO;

    this.setZoom(zoom);

    this.zoom(zoom);
  }

  zoom(zoom) {
    const displayedLeafDiv = this.findDisplayedLeafDiv();

    displayedLeafDiv.zoom(zoom);
  }

  scroll(speed, direction) {
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

  showFirstLeftDiv() {
    const displayedLeafDiv = this.findDisplayedLeafDiv(),
          leafDivs = this.getLeafDivs(),
          index = leafDivs.indexOf(displayedLeafDiv),
          nextIndex = 0,
          previousIndex = index;  ///

    this.showNextLeafDiv(nextIndex, previousIndex);
  }

  showLeftLeafDiv() {
    const displayedLeafDiv = this.findDisplayedLeafDiv(),
          leafDivs = this.getLeafDivs(),
          index = leafDivs.indexOf(displayedLeafDiv),
          nextIndex = index - 1,
          previousIndex = index;  ///

    this.showNextLeafDiv(nextIndex, previousIndex);
  }

  showRightLeftDiv() {
    const displayedLeafDiv = this.findDisplayedLeafDiv(),
          leafDivs = this.getLeafDivs(),
          index = leafDivs.indexOf(displayedLeafDiv),
          nextIndex = index + 1,
          previousIndex = index;  ///

    this.showNextLeafDiv(nextIndex, previousIndex);
  }

  showLastLeafDiv() {
    const displayedLeafDiv = this.findDisplayedLeafDiv(),
          leafDivs = this.getLeafDivs(),
          index = leafDivs.indexOf(displayedLeafDiv),
          leafDivsLength = leafDivs.length,
          nextIndex = leafDivsLength - 1,
          previousIndex = index;  ///

    this.showNextLeafDiv(nextIndex, previousIndex);
  }

  showNextLeafDiv(nextIndex, previousIndex) {
    const leafDivs = this.getLeafDivs(),
          leafDivsLength = leafDivs.length,
          previousLeafDiv = leafDivs[previousIndex];

    if ((nextIndex === -1) || (nextIndex === previousIndex) || (nextIndex === leafDivsLength)) {
      return;
    }

    previousLeafDiv.hide();

    const nextLeafDiv = leafDivs[nextIndex],
          zoom = this.getZoom();

    nextLeafDiv.zoom(zoom);

    setTimeout(() => {
      const scrollTop = 0;

      nextLeafDiv.setScrollTop(scrollTop);

      nextLeafDiv.show();
    }, SHOW_DELAY);
  }

  enableNativeGestures() {
    this.addClass("native-gestures");
  }

  disableNativeGestures() {
    this.removeClass("native-gestures");
  }

  forEachLeafDiv(callback) {
    const leafDivs = this.getLeafDivs();

    leafDivs.forEach(callback);
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
    const viewChildDivDOMElementNodeList = document.querySelectorAll(VIEW_CHILD_DIVS_SELECTOR),
          viewChildDivDOMElements = leafNodesFromNodeList(viewChildDivDOMElementNodeList),  ///
          leafDivs = elementsFromDOMElements(viewChildDivDOMElements, LeafDiv);

    return leafDivs;
  }

  getZoom() {
    const { zoom } = this.getState();

    return zoom;
  }

  setZoom(zoom) {
    this.updateState({
      zoom
    });
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

  areNativeGesturesEnabled() {
    const nativeGesturesEnabled = this.hasClass("native-gestures");

    return nativeGesturesEnabled;
  }

  setInitialState() {
    const zoom = 1,
          leafDivs = this.retrieveLeafDivs(),
          interval = null,
          startZoom = null,
          startScrollTop = null;

    this.setState({
      zoom,
      leafDivs,
      interval,
      startZoom,
      startScrollTop
    });
  }

  didMount() {
    this.enableTouch();

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

    window.onKeyDown(this.keyDownHandler);
  }

  willUnmount() {
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

    this.disableTouch();

    window.offKeyDown(this.keyDownHandler);
  }

  childElements() {
    return (

      <MenuDiv/>

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

Object.assign(View.prototype, touchMixins);

export default withStyle(View)`

  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: none;
  
  .native-gestures {
    touch-action: auto;
  }
    
`;
