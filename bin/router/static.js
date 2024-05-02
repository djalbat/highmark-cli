"use strict";

const express = require("express");

const { directoryPathFromFilePath } = require("../utilities/path");

function createStaticRouter(context) {
  const { outputFilePath } = context,
        outputDirectoryPath = directoryPathFromFilePath(outputFilePath),
        staticRouter = express.static(outputDirectoryPath);

  return staticRouter;
}

module.exports = {
  createStaticRouter
};
