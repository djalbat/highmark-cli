"use strict";

const express = require("express");

const { createLiveReloadHandler } = require("lively-cli");

const { ERROR } = require("../constants"),
      { LIVE_RELOAD_PATH } = require("../paths"),
      { directoryPathFromFilePath } = require("../utilities/path"),
      { UNABLE_TO_START_SERVER_MESSAGE } = require("../messages");

function serverOperation(proceed, abort, context) {
  let { server } = context;

  if (!server) {
    proceed();

    return;
  }

  server = express(); ///

  const { port, outputFilePath } = context,
        outputDirectoryPath = directoryPathFromFilePath(outputFilePath),
        liveReloadHandler = createLiveReloadHandler(outputFilePath),
        staticRouter = express.static(outputDirectoryPath);

  server.use(staticRouter);

  server.get(LIVE_RELOAD_PATH, liveReloadHandler);

  const listener = server.listen(port, () => {
    console.log(`Server listening on port ${port}...`);

    proceed();
  });

  listener.on(ERROR, (error) => {
    let message;

    message = UNABLE_TO_START_SERVER_MESSAGE;

    console.log(message);

    ({ message } = error);

    console.log(message);

    abort();
  });
}

module.exports = serverOperation;
