"use strict";

const { createLiveReloadHandler } = require("lively-cli");

const { LIVE_RELOAD_PATH } = require("../constants"),
      { directoryPathFromFilePath } = require("../utilities/path");

function watchOperation(proceed, abort, context) {
  const { watch } = context;

  if (!watch) {
    proceed();

    return;
  }

  const { server = null } = context;

  if (server === null) {
    proceed();

    return;
  }

  const { quietly, outputFilePath } = context,
        outputDirectoryPath = directoryPathFromFilePath(outputFilePath),
        watchPattern = outputDirectoryPath, ///
        liveReloadHandler = createLiveReloadHandler(watchPattern, quietly);

  server.get(LIVE_RELOAD_PATH, liveReloadHandler);

  proceed();
}

module.exports = watchOperation;
