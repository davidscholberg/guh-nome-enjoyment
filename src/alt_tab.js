import Gio from "gi://Gio";

import * as logger from "./logger.js";

const keybindingsSchemaID = "org.gnome.desktop.wm.keybindings";

// Change alt-tab keybinding from "switch-windows" back to the default
// "switch-applications".
export const altTabToSwitchWindowDisable = () => {
  const keybindings = new Gio.Settings({
    schema_id: keybindingsSchemaID,
  });

  keybindings.reset("switch-applications");
  keybindings.reset("switch-windows");

  logger.log("reverted alt-tab behavior");
};

// Change alt-tab keybinding from "switch-applications" (the default) to
// "switch-windows".
export const altTabToSwitchWindowEnable = () => {
  const keybindings = new Gio.Settings({
    schema_id: keybindingsSchemaID,
  });

  keybindings.set_strv("switch-applications", ["<Super>Tab"]);
  keybindings.set_strv("switch-windows", ["<Alt>Tab"]);

  logger.log("set alt-tab to switch-windows");
};
