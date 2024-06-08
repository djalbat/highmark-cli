"use strict";

const helpAction = require("./action/help"),
      serverAction = require("./action/server"),
      versionAction = require("./action/version"),
      publishAction = require("./action/publish"),
      initialiseAction = require("./action/initialise");

const { NO_COMMAND_GIVEN_MESSAGE, COMMAND_NOT_RECOGNISED_MESSAGE } = require("./messages"),
      { HELP_COMMAND, SERVER_COMMAND, VERSION_COMMAND, PUBLISH_COMMAND, INITIALISE_COMMAND } = require("./commands"),
      { DEFAULT_PORT,
        DEFAULT_WATCH,
        DEFAULT_QUIETLY,
        DEFAULT_COPY_FONTS,
        DEFAULT_INPUT_FILE_NAME,
        DEFAULT_COPY_CLIENT_FILES } = require("./defaults");

function main(command, argument, options) {
  const { port = DEFAULT_PORT,
          watch = DEFAULT_WATCH,
          quietly = DEFAULT_QUIETLY,
          copyFonts = DEFAULT_COPY_FONTS,
          inputFileName = DEFAULT_INPUT_FILE_NAME,
          copyClientFiles = DEFAULT_COPY_CLIENT_FILES } = options;

  switch (command) {
    case null: {
      console.log(NO_COMMAND_GIVEN_MESSAGE);

      break;
    }

    case HELP_COMMAND:  {
      helpAction();

      break;
    }

    case SERVER_COMMAND: {
      const projectDirectoryName = argument;  ///

      serverAction(port, watch, quietly, projectDirectoryName);

      break;
    }

    case VERSION_COMMAND: {
      versionAction();

      break;
    }

    case PUBLISH_COMMAND: {
      const projectDirectoryName = argument;  ///

      publishAction(port, watch, quietly, copyFonts, inputFileName, copyClientFiles, projectDirectoryName);

      break;
    }

    case INITIALISE_COMMAND: {
      initialiseAction();

      break;
    }

    default: {
      console.log(COMMAND_NOT_RECOGNISED_MESSAGE);

      break;
    }
  }
}

module.exports = main;
