"use strict";

import withStyle from "easy-with-style";

import { keyCodes } from "necessary";
import { Element, window } from "easy";

import LeafDiv from "./view/div/leaf";
import Navigation from "./view/navigatrion";
import eventMixins from "./mixins/event";
import touchMixins from "./mixins/touch";

import { leafNodesFromNodeList } from "./utilities/tree";
import { elementsFromDOMElements } from "./utilities/element";
import { VIEW_CHILD_DIVS_SELECTOR } from "./selectors";
import { SHOW_DELAY, ZOOM_RATIO, MAXIMUM_CLICK_WIDTH_RATIO } from "./constants";

const { ENTER_KEY_CODE,
        ESCAPE_KEY_CODE,
        BACKSPACE_KEY_CODE,
        ARROW_UP_KEY_CODE,
        ARROW_DOWN_KEY_CODE,
        ARROW_LEFT_KEY_CODE,
        ARROW_RIGHT_KEY_CODE } = keyCodes;

class View extends Element {
  pinchMoveCustomHandler = (event, element, ratio) => {
    const startZoom = this.getStartZoom(),
          zoom = startZoom * Math.sqrt(ratio);

    this.setZoom(zoom);

    this.zoom(zoom);
  }

  pinchStartCustomHandler = (event, element) => {
    const zoom = this.getZoom(),
          startZoom = zoom; ///

    this.setStartZoom(startZoom);
  }

  swipeRightCustomHandler = (event, element) => {
    this.showLeftLeafDiv();
  }

  swipeLeftCustomHandler = (event, element) => {
    this.showRightLeftDiv();
  }

  swipeDownCustomHandler = (event, element) => {
    // this.hideNavigation();
  }

  swipeUpCustomHandler = (event, element) => {
    // this.showNavigation();
  }

  dragStartCustomHandler = (event, element) => {
    const scrollTop = this.getScrollTop(),
          startScrollTop = scrollTop; ///

    this.setStartScrollTop(startScrollTop);
  }

  dragDownCustomHandler = (event, element, top, left) => {
    const startScrollTop = this.getStartScrollTop(),
          scrollTop = startScrollTop - top;

    this.setScrollTop(scrollTop);
  }

  dragUpCustomHandler = (event, element, top, left) => {
    const startScrollTop = this.getStartScrollTop(),
          scrollTop = startScrollTop - top;

    this.setScrollTop(scrollTop);
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

  clickHandler = (event, element) => {
    const { pageX } = event,
          width = this.getWidth(),
          clickWidthRatio = pageX / width;

    if (clickWidthRatio < MAXIMUM_CLICK_WIDTH_RATIO) {
      this.zoomOut();
    }

    if ((1 - clickWidthRatio) < MAXIMUM_CLICK_WIDTH_RATIO) {
      this.zoomIn();
    }
  }

  zoomIn() {
    let zoom = this.getZoom();

    zoom *= ZOOM_RATIO;

    this.setZoom(zoom);

    this.zoom(zoom);
  }

  zoomOut() {
    let zoom = this.getZoom();

    zoom /= ZOOM_RATIO;

    this.setZoom(zoom);

    this.zoom(zoom);
  }

  zoom(zoom) {
    const showingLeafDiv = this.findShowingLeafDiv();

    showingLeafDiv.zoom(zoom);
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
    const zoom = 1,
          leafDivs = this.retrieveLeafDivs(),
          startZoom = null,
          startScrollTop = null;

    this.setState({
      zoom,
      leafDivs,
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

    this.onClick(this.clickHandler);

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

    this.disableTouch();

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

Object.assign(View.prototype, eventMixins);
Object.assign(View.prototype, touchMixins);

export default withStyle(View)`

  width: 100vw;
  height: 100vh;
  overflow: scroll;
  touch-action: none;
    
`;
