"use strict";

const { watch: watchFile } = require("lively-cli");

const { DEFER_DELAY } = require("../constants"),
      { copyClientFile: copyClientFileEx, getClientSourceFilePath } = require("../utilities/client");

function copyClientOperation(proceed, abort, context) {
  const { copyClient } = context;

  if (!copyClient) {
    proceed();

    return;
  }

  copyClientFile();

  let { server } = context;

  if (!server) {
    proceed();

    return;
  }

  const { quietly } = context,
        clientSSourceFilePath = getClientSourceFilePath(context),
        watchPattern = clientSSourceFilePath,  ///
        registerHandler = watchFile(watchPattern, quietly);

  registerHandler(copyClientFile);

  proceed();

  function copyClientFile() {
    copyClientFileEx(context);

    defer(() => {
      registerHandler(copyClientFile);
    });
  }
}

module.exports = copyClientOperation;

function defer(func) {
  const delay = DEFER_DELAY;

  setTimeout(func, delay);
}
