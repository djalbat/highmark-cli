"use strict";

const serverOperation = require("../operation/server");

const { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_SERVER_MESSAGE, FAILED_SERVER_MESSAGE } = require("../messages");

function serverAction(port, server, outputFilePath) {
  const operations = [
          serverOperation
        ],
        context = {
          port,
          server,
          outputFilePath
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
