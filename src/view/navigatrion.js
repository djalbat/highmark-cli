"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

class Navigation extends Element {
  static tagName = "nav";

  initialise() {
    this.hide();
  }

  parentContext() {
    const showNavigation = this.show.bind(this),  ///
          hideNavigation = this.hide.bind(this);  ///

    return ({
      showNavigation,
      hideNavigation
    });
  }
}

export default withStyle(Navigation)`

  left: 0;
  width: 100vw;
  height: 100px;
  bottom: 0;
  position: fixed;
  background-color: black;
  
`;
