#!/usr/bin/env zsh

cd ~/Downloads

curl -#L "${"$(curl -s https://api.github.com/repos/ciderapp/cider-releases/releases/latest | jq '.assets[] | select(.name|match(".pkg$")) | .browser_download_url')":1: -1}" -o cider.pkg

killall Cider
sudo installer -pkg cider.pkg -target /

rm cider.pkg
open -a Cider
