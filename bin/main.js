"use strict";

const helpAction = require("./action/help"),
      serverAction = require("./action/server"),
      versionAction = require("./action/version"),
      publishAction = require("./action/publish"),
      initialiseAction = require("./action/initialise"),
      setOptionsAction = require("./action/setOptions");

const { NO_COMMAND_GIVEN_MESSAGE, COMMAND_NOT_RECOGNISED_MESSAGE } = require("./messages"),
      { HELP_COMMAND, SERVER_COMMAND, VERSION_COMMAND, PUBLISH_COMMAND, INITIALISE_COMMAND, SET_OPTIONS_COMMAND } = require("./commands"),
      { DEFAULT_PORT,
        DEFAULT_FONTS,
        DEFAULT_WATCH,
        DEFAULT_CLIENT,
        DEFAULT_QUIETLY,
        DEFAULT_INPUT_FILE_NAME } = require("./defaults");

function main(command, argument, options) {
  const { port = DEFAULT_PORT,
          fonts = DEFAULT_FONTS,
          watch = DEFAULT_WATCH,
          client = DEFAULT_CLIENT,
          quietly = DEFAULT_QUIETLY,
          inputFileName = DEFAULT_INPUT_FILE_NAME } = options;

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

      publishAction(port, fonts, watch, client, quietly, inputFileName, projectDirectoryName);

      break;
    }

    case INITIALISE_COMMAND: {
      initialiseAction();

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

module.exports = main;
