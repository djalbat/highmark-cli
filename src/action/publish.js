"use strict";

import watchOperation from "../operation/watch";
import copyFontsOperation from "../operation/copyFonts";
import indexOptionsOperation from "../operation/indexOptions";
import markdownHTMLOperation from "../operation/markdownHTML";
import copyClientFilesOperation from "../operation/copyClientFiles";
import createClientHTMLOperation from "../operation/createClientHTML";
import markdownStylesCSSOperation from "../operation/markdownStylesCSS";

import { executeOperations } from "../utilities/operation";
import { SUCCESSFUL_PUBLISH_MESSAGE, FAILED_PUBLISH_MESSAGE } from "../messages";

export default function publishAction(port, fonts, watch, client, quietly, inputFileName, projectDirectoryName) {
  const operations = [
          indexOptionsOperation,
          markdownHTMLOperation,
          markdownStylesCSSOperation,
          createClientHTMLOperation,
          copyClientFilesOperation,
          copyFontsOperation,
          watchOperation
        ],
        context = {
          port,
          fonts,
          watch,
          client,
          quietly,
          inputFileName,
          projectDirectoryName
        };

  executeOperations(operations, (completed) => {
    const success = completed,  ///
          message = success ?
                      SUCCESSFUL_PUBLISH_MESSAGE :
                        FAILED_PUBLISH_MESSAGE;

    console.log(message);
  }, context);
}
