"use strict";

const options = require("./options");

const { HELP_OPTION,
        PORT_OPTION,
        WATCH_OPTION,
        SERVER_OPTION,
        VERSION_OPTION,
        QUIETLY_OPTION,
        COPY_FONTS_OPTION,
        COPY_CLIENT_OPTION,
        INPUT_FILE_PATH_OPTION,
        OUTPUT_FILE_PATH_OPTION,
        TEMPLATE_FILE_PATH_OPTION } = options;

const h = HELP_OPTION,
      p = PORT_OPTION,
      w = WATCH_OPTION,
      s = SERVER_OPTION,
      v = VERSION_OPTION,
      q = QUIETLY_OPTION,
      f = COPY_FONTS_OPTION,
      c = COPY_CLIENT_OPTION,
      i = INPUT_FILE_PATH_OPTION,
      o = OUTPUT_FILE_PATH_OPTION,
      t = TEMPLATE_FILE_PATH_OPTION;

module.exports = {
  h,
  p,
  w,
  s,
  v,
  q,
  f,
  c,
  i,
  o,
  t
};
