#!/usr/bin/env sh

set -e

./scripts/build.sh
gnome-extensions install \
    --force \
    build/guh-nome-enjoyment@davidscholberg.github.com.shell-extension.zip
