#!/usr/bin/env bash

# 1. Set System Power Profile
powerprofilesctl set power-saver

# 2. Disable all Hyprland "Eye Candy"
# We use --batch to send all commands at once for speed
hyprctl --batch "\
    keyword animations:enabled 0; \
    keyword decoration:blur:enabled 0; \
    keyword decoration:shadow:enabled 0; \
    keyword decoration:drop_shadow 0; \
    keyword decoration:rounding 0"

# 3. Send Notification
notify-send -t 3000 -i battery-low "🔋 Battery Mode" "Power Saver Active\nAnimations and Blur: OFF"
