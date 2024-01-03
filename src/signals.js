import GObject from "gi://GObject";

// Replace current signal handler with a new one. This function currently
// assumes that only one signal handler is installed for the given signal.
// The new handler should be of the form (display, gobject) => {}.
export const replaceSignalHandler = (signalName, newHandler) => {
  const oldSignalID = GObject.signal_handler_find(global.display, {
    signalId: signalName,
  });
  global.display.disconnect(oldSignalID);

  global.display.connect(signalName, newHandler);
};
