"use strict";

const { updateOptions } = require("../configuration");

function setOptionsOperation(proceed, abort, context) {
  const { linesPerPage, contentsDepth, charactersPerLine } = context,
        options = {
          linesPerPage,
          contentsDepth,
          charactersPerLine
        };

  updateOptions(options);

  proceed();
}

module.exports = setOptionsOperation;
