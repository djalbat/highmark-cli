"use strict";

const watchOperation = require("../operation/watch"),
      serverOperation = require("../operation/server");

const { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_SERVER_MESSAGE, FAILED_SERVER_MESSAGE } = require("../messages");

function serverAction(port, watch, quietly, startServer, outputDirectoryPath) {
  const operations = [
          serverOperation,
          watchOperation
        ],
        context = {
          port,
          watch,
          quietly,
          startServer,
          outputDirectoryPath
        };

  executeOperations(operations, (completed) => {
    const success = completed,  ///
          message = success ?
                      SUCCESSFUL_SERVER_MESSAGE :
                        FAILED_SERVER_MESSAGE;

    console.log(message);
  }, context);
}

module.exports = serverAction;
