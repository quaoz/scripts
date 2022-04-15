#!/usr/bin/env bash

echo 'Updating powercord & plugins...'
echo

cd $(pwd)/src/Powercord/plugins
find . -maxdepth 1 -type d \( ! -name "pc-*" \) -exec bash -c "git pull" \;

echo
echo 'Updating themes...'
echo

cd ../themes

find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "git pull" \;

echo
echo 'All done'