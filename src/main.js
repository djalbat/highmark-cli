"use strict";

import helpAction from "./action/help";
import serverAction from "./action/server";
import versionAction from "./action/version";
import publishAction from "./action/publish";
import initialiseAction from "./action/initialise";
import setOptionsAction from "./action/setOptions";

import { NO_ARGUMENT_GIVEN_MESSAGE, COMMAND_NOT_RECOGNISED_MESSAGE } from "./messages";
import { HELP_COMMAND, SERVER_COMMAND, VERSION_COMMAND, PUBLISH_COMMAND, INITIALISE_COMMAND, SET_OPTIONS_COMMAND } from "./commands";
import { DEFAULT_PORT,
         DEFAULT_FONTS,
         DEFAULT_WATCH,
         DEFAULT_CLIENT,
         DEFAULT_QUIETLY,
         DEFAULT_VIEW_MODE,
         DEFAULT_INPUT_FILE_NAME } from "./defaults";

export default function main(command, argument, options) {
  const { port = DEFAULT_PORT,
          fonts = DEFAULT_FONTS,
          watch = DEFAULT_WATCH,
          client = DEFAULT_CLIENT,
          quietly = DEFAULT_QUIETLY,
          viewMode = DEFAULT_VIEW_MODE,
          inputFileName = DEFAULT_INPUT_FILE_NAME } = options;

  switch (command) {
    case HELP_COMMAND:  {
      helpAction();

      break;
    }

    case VERSION_COMMAND: {
      versionAction();

      break;
    }

    case INITIALISE_COMMAND: {
      initialiseAction();

      break;
    }

    case SERVER_COMMAND: {
      if (argument === null) {
        console.log(NO_ARGUMENT_GIVEN_MESSAGE);
      } else {
        const projectDirectoryName = argument;  ///

        serverAction(port, watch, quietly, projectDirectoryName);
      }

      break;
    }

    case PUBLISH_COMMAND: {
      if (argument === null) {
        console.log(NO_ARGUMENT_GIVEN_MESSAGE);
      } else {
        const projectDirectoryName = argument;  ///

        publishAction(port, fonts, watch, client, quietly, viewMode, inputFileName, projectDirectoryName);
      }

      break;
    }

    case SET_OPTIONS_COMMAND: {
      setOptionsAction();

      break;
    }

    default: {
      console.log(COMMAND_NOT_RECOGNISED_MESSAGE);

      break;
    }
  }
}
