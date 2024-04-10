#!/usr/bin/env node

const necessary = require("necessary");

const { parseArgv } = require("argumentative");

const actions = require("./bin/actions"),
      abbreviations = require("./bin/abbreviations");

const { argv } = process,
      { arrayUtilities } = necessary,
      { first, second } = arrayUtilities;

const { commands, options } = parseArgv(argv, abbreviations),
      firstCommand = first(commands),
      secondCommand = second(commands),
      command = firstCommand || null, ///
      argument = secondCommand || null; ///

actions(command, argument, options);
