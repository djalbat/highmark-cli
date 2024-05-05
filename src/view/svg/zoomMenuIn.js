"use strict";

import SVG from "../svg";

export default class ZoomMenuInSVG extends SVG {
  childElements() {
    return (

      <g>
        <rect x="3" y="10" width="19" height="5"/>
        <rect x="10" y="3" width="5" height="19"/>
      </g>

    );
  }

  static defaultProperties = {
    className: "zoom-menu-in"
  };
}
