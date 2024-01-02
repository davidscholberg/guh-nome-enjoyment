# Guh-nome Enjoyment

This project is a [Gnome][gnome] extension that contains all of my personal modifications to the Gnome Desktop Environment. You probably wouldn't want to install this extension as is (unless you are me), but you could use it as a starting point for making your own extension.

### Features

* Changes the default handler for urgent windows to focus the window instead of just sending a notification.
    * This feature can be found in the [Just Perfection][just-perfection] extension, but since that extension has significant feature overlap with [Dash to Panel][dash-to-panel] (an extension I consider essential for my own Gnome installations), I decided to reimplement the feature here and ditch Just Perfection.
* Removes extra padding around the panel clock widget.
    * Since [Dash to Panel][dash-to-panel] places the clock widget right next to other widgets, the inexplicable extra padding that the clock widget has becomes painfully apparent, so the custom stylesheet in this extension removes the extra padding.

### Planned Features

* Replace some default key bindings (including changing alt-tab to the better behavior that's bewilderingly not bound to anything).
* Set preferred [Dash to Panel][dash-to-panel] settings.

[gnome]: https://www.gnome.org/
[just-perfection]: https://extensions.gnome.org/extension/3843/just-perfection/
[dash-to-panel]:  https://extensions.gnome.org/extension/1160/dash-to-panel/
