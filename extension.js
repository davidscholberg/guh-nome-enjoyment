
// import GObject from 'gi://GObject';
import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';
// import * as UIMain from 'resource:///org/gnome/shell/ui/main.js';

export default class GuhNomeEnjoyment extends Extension {
    enable() {
    }

    disable() {
    }
}

// const replaceSignalHandler = (signalName, newHandler) => {
//     global.display.connect(signalName, newHandler);

//     const oldSignalID = GObject.signal_handler_find(global.display, {signalId: signalName});
//     global.display.disconnect(oldSignalID);
// }

// const windowDemandsAttentionFocusEnable = () => {
//     const focusHandler = (display, window) => {
//         if (!window || window.has_focus() || window.is_skip_taskbar()) {
//             return;
//         }

//         UIMain.activateWindow(window);
//     };

//     replaceSignalHandler('window-demands-attention', focusHandler);
//     replaceSignalHandler('window-marked-urgent', focusHandler);
// }
