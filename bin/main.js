"use strict";

const helpAction = require("./action/help"),
      serverAction = require("./action/server"),
      versionAction = require("./action/version"),
      publishAction = require("./action/publish");

const { HELP_COMMAND, SERVER_COMMAND, VERSION_COMMAND, PUBLISH_COMMAND } = require("./commands"),
      { HELP_OPTION, SERVER_OPTION, VERSION_OPTION, TEMPLATE_FILE_PATH_OPTION } = require("./options"),
      { DEFAULT_PORT,
        DEFAULT_SERVER,
        DEFAULT_COPY_FONTS,
        DEFAULT_INPUT_FILE_PATH,
        DEFAULT_OUTPUT_FILE_PATH,
        DEFAULT_TEMPLATE_FILE_PATH } = require("./defaults");

function main(command, argument, options) {
  const commandMissing = (command === null),
        helpOptionPresent = options.hasOwnProperty(HELP_OPTION),
        serverOptionPresent = options.hasOwnProperty(SERVER_OPTION),
        versionOptionPresent = options.hasOwnProperty(VERSION_OPTION),
        { port = DEFAULT_PORT,
          server = DEFAULT_SERVER,
          copyFonts = DEFAULT_COPY_FONTS,
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
    case HELP_COMMAND: helpAction(); break;
    case SERVER_COMMAND: serverAction(port, server, outputFilePath); break;
    case VERSION_COMMAND: versionAction(); break;
    case PUBLISH_COMMAND: publishAction(port, server, copyFonts, inputFilePath, outputFilePath, templateFilePath); break;

    default :
      publishAction(port, server, copyFonts, inputFilePath, outputFilePath, templateFilePath);

      break;
  }
}

module.exports = main;
