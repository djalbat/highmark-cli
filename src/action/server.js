"use strict";

import watchOperation from "../operation/watch";
import serverOperation from "../operation/server";

import { executeOperations } from "../utilities/operation";
import { SUCCESSFUL_SERVER_MESSAGE, FAILED_SERVER_MESSAGE } from "../messages";

export default function serverAction(port, watch, quietly, projectDirectoryName) {
  const operations = [
          serverOperation,
          watchOperation
        ],
        context = {
          port,
          watch,
          quietly,
          projectDirectoryName
        };

  executeOperations(operations, (completed) => {
    const success = completed,  ///
          message = success ?
                      SUCCESSFUL_SERVER_MESSAGE :
                        FAILED_SERVER_MESSAGE;

    console.log(message);
  }, context);
}
