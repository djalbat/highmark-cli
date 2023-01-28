"use strict";

const help = require("./action/help"),
      version = require("./action/version");

const { HELP_OPTION, VERSION_OPTION } = require("./options"),
      { HELP_COMMAND,
        VERSION_COMMAND } = require("./commands");

function actions(command, argument, options) {
  const commandMissing = (command === null),
        helpOptionPresent = options.hasOwnProperty(HELP_OPTION),
        versionOptionPresent = options.hasOwnProperty(VERSION_OPTION);

  if (false) {
    ///
  } else if (versionOptionPresent) {
    command = VERSION_COMMAND;
  } else if (commandMissing || helpOptionPresent) {
    command = HELP_COMMAND;
  }

  switch (command) {
    case HELP_COMMAND: help(); break;
    case VERSION_COMMAND: version(); break;

    default :
      argument = command;  ///

      install(argument);

      break;
  }
}

module.exports = actions;
