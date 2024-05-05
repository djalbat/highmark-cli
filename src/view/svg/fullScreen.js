"use strict";

import SVG from "../svg";

export default class FullScreenSVG extends SVG {
  childElements() {
    return (

      <g>
        <path d="M 2.9998169 2.9998169 L 2.9998169 6.0001506 L 2.9998169 18.999874 L 2.9998169 22.000208 L 6.0001506 22.000208 L 18.999874 22.000208 L 22.000208 22.000208 L 22.000208 18.999874 L 22.000208 2.9998169 L 2.9998169 2.9998169 z M 6.0001506 6.0001506 L 18.999874 6.0001506 L 18.999874 18.999874 L 6.0001506 18.999874 L 6.0001506 6.0001506 z " />
      </g>

    );
  }

  static defaultProperties = {
    className: "full-screen"
  };
}
