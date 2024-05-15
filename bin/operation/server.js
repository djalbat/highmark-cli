"use strict";

const express = require("express");

const { ERROR } = require("../constants"),
      { UNABLE_TO_START_SERVER_MESSAGE } = require("../messages");

function serverOperation(proceed, abort, context) {
  let { startServer } = context;

  if (!startServer) {
    proceed();

    return;
  }

  const server = express(); ///

  Object.assign(context, {
    server
  });

  const { port, outputDirectoryPath } = context,
        staticRouter = express.static(outputDirectoryPath);

  server.use(staticRouter);

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
