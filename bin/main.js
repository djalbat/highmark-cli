"use strict";

const helpAction = require("./action/help"),
      serverAction = require("./action/server"),
      versionAction = require("./action/version"),
      publishAction = require("./action/publish");

const { HELP_COMMAND, VERSION_COMMAND, PUBLISH_COMMAND, START_SERVER_COMMAND } = require("./commands"),
      { DEFAULT_HELP,
        DEFAULT_PORT,
        DEFAULT_WATCH,
        DEFAULT_QUIETLY,
        DEFAULT_VERSION,
        DEFAULT_COPY_FONTS,
        DEFAULT_START_SERVER,
        DEFAULT_INPUT_FILE_PATH,
        DEFAULT_COPY_CLIENT_FILES,
        DEFAULT_OUTPUT_DIRECTORY_PATH } = require("./defaults");

function main(command, argument, options) {
  const commandMissing = (command === null),
        { help = DEFAULT_HELP,
          port = DEFAULT_PORT,
          watch = DEFAULT_WATCH,
          quietly = DEFAULT_QUIETLY,
          version = DEFAULT_VERSION,
          copyFonts = DEFAULT_COPY_FONTS,
          startServer = DEFAULT_START_SERVER,
          inputFilePath = DEFAULT_INPUT_FILE_PATH,
          copyClientFiles = DEFAULT_COPY_CLIENT_FILES,
          outputDirectoryPath = DEFAULT_OUTPUT_DIRECTORY_PATH } = options;

  if (false) {
    ///
  } else if (version) {
    command = VERSION_COMMAND;
  } else if (commandMissing) {
    if (false) {
      ///
    } else if (help) {
      command = HELP_COMMAND;
    } else if (startServer) {
      command = START_SERVER_COMMAND;
    } else {
      command = PUBLISH_COMMAND;
    }
  }

  switch (command) {
    case HELP_COMMAND:  {
      helpAction();

      break;
    }

    case START_SERVER_COMMAND: {
      const startServer = true;

      serverAction(port, watch, quietly, startServer, outputDirectoryPath);

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
  }
}

module.exports = main;
