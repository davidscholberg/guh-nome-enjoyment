import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";

import { Accessibility } from "./accessibility.js";
import {
  windowDemandsAttentionFocusDisable,
  windowDemandsAttentionFocusEnable,
} from "./window_focus.js";

// Main extension class. All modifications should be enabled and disabled here.
export default class GuhNomeEnjoyment extends Extension {
  constructor(metadata) {
    super(metadata);
    this.accessibility = new Accessibility();
  }

  enable() {
    this.accessibility.hidePanelIndicatorEnable();
    windowDemandsAttentionFocusEnable();
  }

  disable() {
    this.accessibility.hidePanelIndicatorDisable();
    windowDemandsAttentionFocusDisable();
  }
}
