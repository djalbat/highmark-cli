"use strict";

const express = require("express");

const { ERROR } = require("../constants"),
      { UNABLE_TO_START_SERVER_MESSAGE } = require("../messages");

function serverOperation(proceed, abort, context) {
  const server = express(); ///

  Object.assign(context, {
    server
  });

  const { port, projectDirectoryName } = context,
        staticRouter = express.static(projectDirectoryName);

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
