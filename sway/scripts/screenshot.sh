#!/bin/bash

DIR="$HOME/Pictures/Screenshots"
FILENAME="screenshot_$(date +'%Y-%m-%d_%H-%M-%S').png"
FULL_PATH="$DIR/$FILENAME"

mkdir -p "$DIR"

/home/user/.cargo/bin/wayfreeze --hide-cursor & PID=$!
sleep .1

grim -g "$(slurp)" "$FULL_PATH"

kill $PID

wl-copy < "$FULL_PATH"

notify-send "Screenshot Saved" "Captured area to clipboard" -a "Grim" -t 1000
