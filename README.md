# scripts
Random Scripts and config files 

### Image Process:
- Converts all jpeg images in the current directory and sub-directories to pngs and optimises them with pngcrush
- Requires pngcrush and imagemagick

### Transmission Blocklists:
- Dropped in favour of [Naunter/BT_BlockLists](https://github.com/Naunter/BT_BlockLists)
- Run from the transmission config directory, `~/Library/Application\ Support/Transmission/` (Mac) or `/.config/transmission/` (Linux)
- Can be scheduled to run daily with crontab 
```sh 
echo "0 0 * * * sh /path/to/transmission/genBlockLists.sh" | crontab
```

### Powercord Update:
- Run from the powercord installation directory
- Updates powercord, all plugins and all themes

### User Overrides:
- For use with [arkenfox user.js](https://github.com/arkenfox/user.js)

### Flame CSS:
- For use with [flame](https://github.com/pawelmalak/flame)
