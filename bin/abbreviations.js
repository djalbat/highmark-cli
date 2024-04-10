"use strict";

const options = require("./options");

const { HELP_OPTION, VERSION_OPTION, COPY_FONTS_OPTION, INPUT_FILE_PATH_OPTION, OUTPUT_FILE_PATH_OPTION } = options;

const h = HELP_OPTION,
      v = VERSION_OPTION,
      f = COPY_FONTS_OPTION,
      i = INPUT_FILE_PATH_OPTION,
      o = OUTPUT_FILE_PATH_OPTION;

module.exports = {
  h,
  v,
  f,
  i,
  o
};
