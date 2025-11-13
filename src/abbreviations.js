"use strict";

import { HELP_OPTION,
         PORT_OPTION,
         FONTS_OPTION,
         WATCH_OPTION,
         CLIENT_OPTION,
         VERSION_OPTION,
         QUIETLY_OPTION,
         INPUT_FILE_NAME_OPTION, } from "./options";

const h = HELP_OPTION,
      p = PORT_OPTION,
      f = FONTS_OPTION,
      w = WATCH_OPTION,
      c = CLIENT_OPTION,
      v = VERSION_OPTION,
      q = QUIETLY_OPTION,
      i = INPUT_FILE_NAME_OPTION;

const abbreviations = {
  h,
  p,
  f,
  w,
  v,
  q,
  c,
  i
};

export default abbreviations;
