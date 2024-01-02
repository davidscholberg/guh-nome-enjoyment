import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";
import GObject from "gi://GObject";
import * as UIMain from "resource:///org/gnome/shell/ui/main.js";

// Main extension class. All modifications should be enabled and disabled here.
export default class GuhNomeEnjoyment extends Extension {
  enable() {
    windowDemandsAttentionFocusEnable();
  }

  disable() {
    windowDemandsAttentionFocusDisable();
  }
}

// Replace current signal handler with a new one. This function currently
// assumes that only one signal handler is installed for the given signal.
// The new handler should be of the form (display, gobject) => {}.
const replaceSignalHandler = (signalName, newHandler) => {
  const oldSignalID = GObject.signal_handler_find(global.display, {
    signalId: signalName,
  });
  global.display.disconnect(oldSignalID);

  global.display.connect(signalName, newHandler);
};

// Restore the default signal handlers for the "window-demands-attention" and
// "window-marked-urgent" signals, which just sends a notification.
const windowDemandsAttentionFocusDisable = () => {
  const wah = UIMain.windowAttentionHandler;
  const originalHandler = wah._onWindowDemandsAttention.bind(wah);

  replaceSignalHandler("window-demands-attention", originalHandler);
  replaceSignalHandler("window-marked-urgent", originalHandler);
};

// Update the "window-demands-attention" and "window-marked-urgent" signal
// handlers to focus the window instead of the default behavior of just sending
// a notification.
const windowDemandsAttentionFocusEnable = () => {
  const focusHandler = (display, window) => {
    if (!window || window.has_focus() || window.is_skip_taskbar()) {
      return;
    }

    UIMain.activateWindow(window);
  };

  replaceSignalHandler("window-demands-attention", focusHandler);
  replaceSignalHandler("window-marked-urgent", focusHandler);
};
