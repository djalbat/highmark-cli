"use strict";

import SVG from "../svg";

export default class CloseMenuSVG extends SVG {
  childElements() {
    return (

      <g>
        <rect width="19" height="2" x="3" y="4" />
        <rect width="19" height="2" x="3" y="11" />
        <rect width="19" height="2" x="3" y="18" />
      </g>

    );
  }

  static defaultProperties = {
    className: "close-menu"
  };
}
