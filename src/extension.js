import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";

import {
  windowDemandsAttentionFocusDisable,
  windowDemandsAttentionFocusEnable,
} from "./window_focus.js";

// Main extension class. All modifications should be enabled and disabled here.
export default class GuhNomeEnjoyment extends Extension {
  enable() {
    windowDemandsAttentionFocusEnable();
  }

  disable() {
    windowDemandsAttentionFocusDisable();
  }
}
