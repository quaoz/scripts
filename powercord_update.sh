#!/usr/bin/env bash

echo 'Updating powercord & plugins...'
echo

cd $(pwd)/src/Powercord/plugins
find . -maxdepth 1 -type d \( ! -name "pc-*" \) -exec bash -c "cd '{}' && git pull" \;

echo
echo 'Updating themes...'
echo

cd ../themes

find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "cd '{}' && git pull" \;

echo
echo 'All done'
