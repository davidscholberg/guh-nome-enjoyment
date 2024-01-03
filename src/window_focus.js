import * as UIMain from "resource:///org/gnome/shell/ui/main.js";

import * as logger from "./logger.js";
import { replaceSignalHandler } from "./signals.js";

// Restore the default signal handlers for the "window-demands-attention" and
// "window-marked-urgent" signals, which just sends a notification.
export const windowDemandsAttentionFocusDisable = () => {
  const wah = UIMain.windowAttentionHandler;
  const originalHandler = wah._onWindowDemandsAttention.bind(wah);

  replaceSignalHandler("window-demands-attention", originalHandler);
  replaceSignalHandler("window-marked-urgent", originalHandler);

  logger.log("disabled window demands attention focus");
};

// Update the "window-demands-attention" and "window-marked-urgent" signal
// handlers to focus the window instead of the default behavior of just sending
// a notification.
export const windowDemandsAttentionFocusEnable = () => {
  const focusHandler = (display, window) => {
    if (!window || window.has_focus() || window.is_skip_taskbar()) {
      return;
    }

    UIMain.activateWindow(window);
  };

  replaceSignalHandler("window-demands-attention", focusHandler);
  replaceSignalHandler("window-marked-urgent", focusHandler);

  logger.log("enabled window demands attention focus");
};
