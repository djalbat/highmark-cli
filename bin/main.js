"use strict";

const helpAction = require("./action/help"),
      serverAction = require("./action/server"),
      versionAction = require("./action/version"),
      publishAction = require("./action/publish");

const { HELP_OPTION, SERVER_OPTION, VERSION_OPTION } = require("./options"),
      { HELP_COMMAND, SERVER_COMMAND, VERSION_COMMAND } = require("./commands"),
      { DEFAULT_PORT,
        DEFAULT_WATCH,
        DEFAULT_SERVER,
        DEFAULT_QUIETLY,
        DEFAULT_COPY_FONTS,
        DEFAULT_INPUT_FILE_PATH,
        DEFAULT_COPY_CLIENT_FILES,
        DEFAULT_OUTPUT_DIRECTORY_PATH } = require("./defaults");

function main(command, argument, options) {
  const commandMissing = (command === null),
        helpOptionPresent = options.hasOwnProperty(HELP_OPTION),
        serverOptionPresent = options.hasOwnProperty(SERVER_OPTION),
        versionOptionPresent = options.hasOwnProperty(VERSION_OPTION),
        { port = DEFAULT_PORT,
          watch = DEFAULT_WATCH,
          server = DEFAULT_SERVER,
          quietly = DEFAULT_QUIETLY,
          copyFonts = DEFAULT_COPY_FONTS,
          inputFilePath = DEFAULT_INPUT_FILE_PATH,
          copyClientFiles = DEFAULT_COPY_CLIENT_FILES,
          outputDirectoryPath = DEFAULT_OUTPUT_DIRECTORY_PATH } = options;

  if (false) {
    ///
  } else if (versionOptionPresent) {
    command = VERSION_COMMAND;
  } else if (commandMissing) {
    if (false) {
      ///
    } else if (helpOptionPresent) {
      command = HELP_COMMAND;
    } else if (serverOptionPresent) {
      command = SERVER_COMMAND;
    }
  }

  switch (command) {
    case HELP_COMMAND: {
      helpAction();

      break;
    }

    case SERVER_COMMAND: {
      const server = true;

      serverAction(port, watch, server, quietly, outputDirectoryPath);

      break;
    }

    case VERSION_COMMAND: {
      versionAction();

      break;
    }

    default: {
      publishAction(port, watch, server, quietly, copyFonts, inputFilePath, copyClientFiles, outputDirectoryPath);

      break;
    }
  }
}

module.exports = main;
