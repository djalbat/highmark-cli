"use strict";

const express = require("express");

const { createStaticRouter } = require("../router/static"),
      { createLiveReloadHandler } = require("../handler/liveReload"),
      { ERROR, LIVE_RELOAD_PATH } = require("../constants"),
      { UNABLE_TO_START_SERVER_MESSAGE } = require("../messages");

function serverOperation(proceed, abort, context) {
  let { server } = context;

  if (!server) {
    proceed();

    return;
  }

  server = express(); ///

  const { port, watch } = context,
        staticRouter = createStaticRouter(context);

  server.use(staticRouter);

  if (watch) {
    const liveReloadHandler = createLiveReloadHandler(context);

    server.get(LIVE_RELOAD_PATH, liveReloadHandler);
  }

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
