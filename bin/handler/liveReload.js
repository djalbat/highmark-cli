"use strict";

const { createLiveReloadHandler: createLiveReloadHandlerEx } = require("lively-cli");

const { directoryPathFromFilePath } = require("../utilities/path");

function createLiveReloadHandler(context) {
  const { quietly, outputFilePath } = context,
        outputDirectoryPath = directoryPathFromFilePath(outputFilePath),
        watchPattern = outputDirectoryPath, ///
        liveReloadHandler = createLiveReloadHandlerEx(watchPattern, quietly);

  return liveReloadHandler;
}

module.exports = {
  createLiveReloadHandler
};
