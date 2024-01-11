import GLib from "gi://GLib";
import * as Main from "resource:///org/gnome/shell/ui/main.js";

import * as logger from "./logger.js";

// Class for Accessibility modifications requiring state.
export class Accessibility {
  constructor() {
    this.originalSyncMenuVisibility = null;
  }

  // Restore normal visibility of accessibility indicator.
  hidePanelIndicatorDisable() {
    if (this.originalSyncMenuVisibility) {
      let atIndicator = Main.panel.statusArea["a11y"];
      atIndicator._syncMenuVisibility = this.originalSyncMenuVisibility;
      this.originalSyncMenuVisibility = null;
    }
    logger.log("disabled hide accessibility panel indicator");
  }

  // Enable functionality to always hide the accessibility indicator.
  hidePanelIndicatorEnable() {
    let atIndicator = Main.panel.statusArea["a11y"];
    this.originalSyncMenuVisibility = atIndicator._syncMenuVisibility;
    atIndicator._syncMenuVisibility = moddedSyncMenuVisibility;
    logger.log("enabled hide accessibility panel indicator");
  }
}

// Modified version of ATIndicator._syncMenuVisibility() that always sets the accessibility
// indicator to invisible.
function moddedSyncMenuVisibility() {
  this._syncMenuVisibilityIdle = 0;
  this.visible = false;
  return GLib.SOURCE_REMOVE;
}
