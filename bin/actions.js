"use strict";

const helpAction = require("./action/help"),
      versionAction = require("./action/version"),
      publishAction = require("./action/publish");

const { DEFAULT_INPUT_FILE_PATH } = require("./defaults"),
      { HELP_OPTION, VERSION_OPTION } = require("./options"),
      { HELP_COMMAND, VERSION_COMMAND, PUBLISH_COMMAND } = require("./commands");

function actions(command, argument, options) {
  const commandMissing = (command === null),
        helpOptionPresent = options.hasOwnProperty(HELP_OPTION),
        versionOptionPresent = options.hasOwnProperty(VERSION_OPTION),
        { inputFilePath = DEFAULT_INPUT_FILE_PATH,
          outputFilePath = null } = options;

  if (false) {
    ///
  } else if (versionOptionPresent) {
    command = VERSION_COMMAND;
  } else if (commandMissing || helpOptionPresent) {
    command = HELP_COMMAND;
  }

  switch (command) {
    case HELP_COMMAND: helpAction(); break;
    case VERSION_COMMAND: versionAction(); break;
    case PUBLISH_COMMAND: publishAction(inputFilePath, outputFilePath); break;

    default :
      argument = command;  ///

      publishAction(inputFilePath, outputFilePath);

      break;
  }
}

module.exports = actions;
