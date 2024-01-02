#!/usr/bin/env sh

set -e

gnome-extensions pack --force .
gnome-extensions install --force guh-nome-enjoyment@davidscholberg.github.com.shell-extension.zip
