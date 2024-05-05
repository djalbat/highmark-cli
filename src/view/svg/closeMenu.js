"use strict";

import SVG from "../svg";

export default class CloseMenuSVG extends SVG {
  childElements() {
    return (

      <g>
        <path d="M 18.156886,3.3074544 12.500012,8.9643288 6.8431375,3.3074544 3.307454,6.8431379 8.9643284,12.500012 3.3074544,18.156886 6.8431379,21.69257 12.500012,16.035696 18.156886,21.69257 21.69257,18.156886 16.035695,12.500012 21.69257,6.8431379 Z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "close-menu"
  };
}
