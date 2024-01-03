import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";

import {
  altTabToSwitchWindowDisable,
  altTabToSwitchWindowEnable,
} from "./alt_tab.js";
import {
  windowDemandsAttentionFocusDisable,
  windowDemandsAttentionFocusEnable,
} from "./window_focus.js";

// Main extension class. All modifications should be enabled and disabled here.
export default class GuhNomeEnjoyment extends Extension {
  enable() {
    altTabToSwitchWindowEnable();
    windowDemandsAttentionFocusEnable();
  }

  disable() {
    altTabToSwitchWindowDisable();
    windowDemandsAttentionFocusDisable();
  }
}
