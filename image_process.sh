#!/usr/bin/env bash

cd $(pwd)

echo 'Converting images...'
echo

# Converts all jpg images to png
find . -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -print -exec bash -c "printf '{}' 0 | xargs -0 -r mogrify -format png" \; -delete

echo
echo 'Optimising images...'
echo

# Optimises the png images
find . -type f \( -iname "*.png" \) -exec bash -c "du '{}' && pngcrush -ow -warn '{}' && du '{}'" \;