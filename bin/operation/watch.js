"use strict";

const { watch: watchFile } = require("lively-cli");

const { createLiveReloadHandler } = require("../handler/liveReload"),
      { LIVE_RELOAD_PATH, DEFER_DELAY } = require("../constants"),
      { copyClientFile: copyClientFileEx, getClientSourceFilePath } = require("../utilities/client");

function watchOperation(proceed, abort, context) {
  const { server = null } = context;

  if (server === null) {
    proceed();

    return;
  }

  const { watch } = context;

  if (!watch) {
    proceed();

    return;
  }

  const clientSSourceFilePath = getClientSourceFilePath(context),
        liveReloadHandler = createLiveReloadHandler(context),
        watchPattern = clientSSourceFilePath,  ///
        registerHandler = watchFile(watchPattern);

  server.get(LIVE_RELOAD_PATH, liveReloadHandler);

  registerHandler(copyClientFile);

  proceed();

  function copyClientFile() {
    copyClientFileEx(context);

    defer(() => {
      registerHandler(copyClientFile);
    });
  }
}

module.exports = watchOperation;

function defer(func) {
  const delay = DEFER_DELAY;

  setTimeout(func, delay);
}
