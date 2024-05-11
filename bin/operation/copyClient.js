"use strict";

const { copyClientFile } = require("../utilities/client");

function copyClientOperation(proceed, abort, context) {
  const { copyClient } = context;

  if (copyClient) {
    copyClientFile(context);
  }

  proceed();
}

module.exports = copyClientOperation;
