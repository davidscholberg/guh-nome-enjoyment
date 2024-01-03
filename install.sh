#!/usr/bin/env sh

set -e

mkdir -p build
gnome-extensions pack \
    --force \
    --extra-source="alt_tab.js" \
    --extra-source="logger.js" \
    --extra-source="signals.js" \
    --extra-source="window_focus.js" \
    --extra-source="../UNLICENSE" \
    --out-dir="build" \
    src
gnome-extensions install \
    --force \
    build/guh-nome-enjoyment@davidscholberg.github.com.shell-extension.zip
