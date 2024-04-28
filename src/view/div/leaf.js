"use strict";

import { Element } from "easy";

import withStyle from "easy-with-style";  ///

import eventMixins from "../../mixins/event";
import touchMixins from "../../mixins/touch";

import { ZOOM_RATIO,  WIGGLE_DELAY } from "../../constants";
import { wiggleCount, wiggleDuration } from "../../styles";

class LeafDiv extends Element {
  wiggle() {
    this.addClass("wiggle");

    setTimeout(() => {
      this.removeClass("wiggle");
    }, WIGGLE_DELAY);
  }

  zoomIn() {
    const zoom_ratio = 1 * ZOOM_RATIO;

    this.zoom(zoom_ratio);
  }

  zoomOut() {
    const zoom_ratio = 1 / ZOOM_RATIO;

    this.zoom(zoom_ratio);
  }

  zoom(zoom_ratio) {
    let zoom = this.getZoom();

    zoom *= zoom_ratio;

    this.setZoom(zoom);


    const width = `${100/zoom}%`,
          transform = `scale(${zoom})`;

    const css = {
      width,
      transform
    };

    this.css(css);
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

  setInitialState() {
    const zoom = 1;

    this.setState({
      zoom
    });
  }

  didMount() {
    this.enableTouch();
  }

  willUnmount() {
    this.disableTouch();
  }

  initialise() {
    this.setInitialState();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "leaf"
  };
}

Object.assign(LeafDiv.prototype, eventMixins);
Object.assign(LeafDiv.prototype, touchMixins);

export default withStyle(LeafDiv)`

  width: 100%;
  min-height: 100%;
  transform-origin: top left;
  
  @keyframes wiggle {
    0% { transform: translateX(0); }
    25% { transform: translateX(+3px); }
    75% { transform: translateX(-3px); }
    100% { transform: translateX(0); }
  }
  
  .wiggle {
    animation: wiggle ${wiggleDuration} ease-in-out ${wiggleCount};
  }

`;
