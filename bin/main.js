"use strict";

const helpAction = require("./action/help"),
      serverAction = require("./action/server"),
      versionAction = require("./action/version"),
      publishAction = require("./action/publish");

const { NO_COMMAND_GIVEN_MESSAGE, COMMAND_NOT_RECOGNISED_MESSAGE } = require("./messages"),
      { HELP_COMMAND, VERSION_COMMAND, PUBLISH_COMMAND, START_SERVER_COMMAND } = require("./commands"),
      { DEFAULT_PORT,
        DEFAULT_WATCH,
        DEFAULT_QUIETLY,
        DEFAULT_COPY_FONTS,
        DEFAULT_START_SERVER,
        DEFAULT_INPUT_FILE_PATH,
        DEFAULT_COPY_CLIENT_FILES,
        DEFAULT_OUTPUT_DIRECTORY_PATH } = require("./defaults");

function main(command, argument, options) {
  const { port = DEFAULT_PORT,
          watch = DEFAULT_WATCH,
          quietly = DEFAULT_QUIETLY,
          copyFonts = DEFAULT_COPY_FONTS,
          startServer = DEFAULT_START_SERVER,
          inputFilePath = DEFAULT_INPUT_FILE_PATH,
          copyClientFiles = DEFAULT_COPY_CLIENT_FILES,
          outputDirectoryPath = DEFAULT_OUTPUT_DIRECTORY_PATH } = options;

  switch (command) {
    case null: {
      console.log(NO_COMMAND_GIVEN_MESSAGE);

      process.exit(1);

      break;
    }

    case HELP_COMMAND:  {
      helpAction();

      break;
    }

    case VERSION_COMMAND: {
      versionAction();

      break;
    }

    case PUBLISH_COMMAND: {
      publishAction(port, watch, quietly, copyFonts, startServer, inputFilePath, copyClientFiles, outputDirectoryPath);

      break;
    }

    case START_SERVER_COMMAND: {
      const startServer = true;

      serverAction(port, watch, quietly, startServer, outputDirectoryPath);

      break;
    }

    default: {
      console.log(COMMAND_NOT_RECOGNISED_MESSAGE);

      process.exit(1);

      break;
    }
  }
}

module.exports = main;
