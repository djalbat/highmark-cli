"use strict";

import { updateOptions } from "../configuration";

export default function setOptionsOperation(proceed, abort, context) {
  const { linesPerPage, contentsDepth, charactersPerLine } = context,
        options = {
          linesPerPage,
          contentsDepth,
          charactersPerLine
        };

  updateOptions(options);

  proceed();
}
