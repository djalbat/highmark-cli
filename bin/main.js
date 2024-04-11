"use strict";

const helpAction = require("./action/help"),
      versionAction = require("./action/version"),
      publishAction = require("./action/publish");

const { HELP_OPTION, VERSION_OPTION } = require("./options"),
      { HELP_COMMAND, VERSION_COMMAND, PUBLISH_COMMAND } = require("./commands"),
      { DEFAULT_PORT,
        DEFAULT_SERVER,
        DEFAULT_COPY_FONTS,
        DEFAULT_INPUT_FILE_PATH,
        DEFAULT_OUTPUT_FILE_PATH } = require("./defaults");

function main(command, argument, options) {
  const commandMissing = (command === null),
        helpOptionPresent = options.hasOwnProperty(HELP_OPTION),
        versionOptionPresent = options.hasOwnProperty(VERSION_OPTION),
        { port = DEFAULT_PORT,
          server = DEFAULT_SERVER,
          copyFonts = DEFAULT_COPY_FONTS,
          inputFilePath = DEFAULT_INPUT_FILE_PATH,
          outputFilePath = DEFAULT_OUTPUT_FILE_PATH } = options;

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
    case PUBLISH_COMMAND: publishAction(port, server, copyFonts, inputFilePath, outputFilePath); break;

    default :
      argument = command;  ///

      publishAction(port, server, copyFonts, inputFilePath, outputFilePath);

      break;
  }
}

module.exports = main;
