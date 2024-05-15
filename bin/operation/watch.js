"use strict";

const { pathUtilities } = require("necessary"),
      { createLiveReloadHandler } = require("lively-cli");

const { LIVE_RELOAD_PATH, INDEX_HTML_FILE_NAME } = require("../constants");

const { concatenatePaths } = pathUtilities;

function watchOperation(proceed, abort, context) {
  const { startServer } = context;

  if (!startServer) {
    proceed();

    return;
  }

  const { watch } = context;

  if (watch) {
    const { server, quietly, outputDirectoryPath } = context,
          indexHTMLFilePath = concatenatePaths(outputDirectoryPath, INDEX_HTML_FILE_NAME),
          watchPattern = indexHTMLFilePath, ///
          liveReloadHandler = createLiveReloadHandler(watchPattern, quietly);

    server.get(LIVE_RELOAD_PATH, liveReloadHandler);
  }

  proceed();
}

module.exports = watchOperation;
