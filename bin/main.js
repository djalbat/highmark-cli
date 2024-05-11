"use strict";

const helpAction = require("./action/help"),
      serverAction = require("./action/server"),
      versionAction = require("./action/version"),
      publishAction = require("./action/publish");

const { HELP_OPTION, SERVER_OPTION, VERSION_OPTION } = require("./options"),
      { HELP_COMMAND, SERVER_COMMAND, VERSION_COMMAND, PUBLISH_COMMAND } = require("./commands"),
      { DEFAULT_PORT,
        DEFAULT_WATCH,
        DEFAULT_SERVER,
        DEFAULT_QUIETLY,
        DEFAULT_COPY_FONTS,
        DEFAULT_COPY_CLIENT,
        DEFAULT_INPUT_FILE_PATH,
        DEFAULT_OUTPUT_FILE_PATH,
        DEFAULT_TEMPLATE_FILE_PATH } = require("./defaults");

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
          copyClient = DEFAULT_COPY_CLIENT,
          inputFilePath = DEFAULT_INPUT_FILE_PATH,
          outputFilePath = DEFAULT_OUTPUT_FILE_PATH,
          templateFilePath = DEFAULT_TEMPLATE_FILE_PATH } = options;

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

      serverAction(port, watch, server, quietly, outputFilePath);

      break;
    }

    case VERSION_COMMAND: {
      versionAction();

      break;
    }

    default: {
      publishAction(port, watch, server, quietly, copyFonts, copyClient, inputFilePath, outputFilePath, templateFilePath);

      break;
    }
  }
}

module.exports = main;
