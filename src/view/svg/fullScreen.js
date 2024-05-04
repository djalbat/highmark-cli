"use strict";

import SVG from "../svg";

export default class FullScreenSVG extends SVG {
  childElements() {
    return (

      <g>
        <rect width="19" height="19" x="3" y="3" />
     </g>

    );
  }

  static defaultProperties = {
    className: "full-screen"
  };
}
