"use strict";

import { TOUCHSTART_EVENT_TYPE, TOUCHMOVE_EVENT_TYPE, TOUCHEND_EVENT_TYPE } from "../eventTypes";

function onTouchStart(touchStartHandler) {
  const eventType = TOUCHSTART_EVENT_TYPE,
        handler = touchStartHandler;  ///

  this.onEvent(eventType, handler);
}

function offTouchStart(touchStartHandler) {
  const eventType = TOUCHSTART_EVENT_TYPE,
        handler = touchStartHandler;  ///

  this.offEvent(eventType, handler);
}

function onTouchMove(touchStartHandler) {
  const eventType = TOUCHMOVE_EVENT_TYPE,
        handler = touchStartHandler;  ///

  this.onEvent(eventType, handler);
}

function offTouchMove(touchStartHandler) {
  const eventType = TOUCHMOVE_EVENT_TYPE,
        handler = touchStartHandler;  ///

  this.offEvent(eventType, handler);
}

function onTouchEnd(touchStartHandler) {
  const eventType = TOUCHEND_EVENT_TYPE,
        handler = touchStartHandler;  ///

  this.onEvent(eventType, handler);
}

function offTouchEnd(touchStartHandler) {
  const eventType = TOUCHEND_EVENT_TYPE,
        handler = touchStartHandler;  ///

  this.offEvent(eventType, handler);
}

const eventMixins = {
  onTouchStart,
  offTouchStart,
  onTouchMove,
  offTouchMove,
  onTouchEnd,
  offTouchEnd
};

export default eventMixins;
