"use strict";

const options = require("./options");

const { HELP_OPTION,
        PORT_OPTION,
        FONTS_OPTION,
        WATCH_OPTION,
        CLIENT_OPTION,
        SERVER_OPTION,
        VERSION_OPTION,
        QUIETLY_OPTION,
        INPUT_FILE_NAME_OPTION, } = options;

const h = HELP_OPTION,
      p = PORT_OPTION,
      f = FONTS_OPTION,
      w = WATCH_OPTION,
      c = CLIENT_OPTION,
      s = SERVER_OPTION,
      v = VERSION_OPTION,
      q = QUIETLY_OPTION,
      i = INPUT_FILE_NAME_OPTION;

module.exports = {
  h,
  p,
  f,
  w,
  v,
  q,
  c,
  s,
  i
};
