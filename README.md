# scripts
Random Scripts and config files 

### [Image Process](https://github.com/quaoz/scripts/blob/main/image_process.sh):
- Converts all jpeg images in the current directory and sub-directories to pngs and optimises them with pngcrush
- Requires pngcrush and imagemagick

<<<<<<< HEAD
### [Transmission Blocklists](https://github.com/quaoz/scripts/blob/main/transmission_blocklists.sh):
- **Replaced with [Naunter/BT_Blocklists](https://github.com/Naunter/BT_BlockLists)**
=======
### Transmission Blocklists:
- Dropped in favour of [Naunter/BT_BlockLists](https://github.com/Naunter/BT_BlockLists)
>>>>>>> df8ffc81fe5e65874d33bae180da6538951521ac
- Run from the transmission config directory, `~/Library/Application\ Support/Transmission/` (Mac) or `/.config/transmission/` (Linux)
- Can be scheduled to run daily with crontab 
```sh 
echo "0 0 * * * sh /path/to/transmission/genBlockLists.sh" | crontab
```

### [Powercord Update](https://github.com/quaoz/scripts/blob/main/powercord_update.sh):
- Run from the powercord installation directory
- Updates powercord, all plugins and all themes

<<<<<<< HEAD
### [User Overrides](https://github.com/quaoz/scripts/blob/main/user-overrides.js):
- For use with [arkenfox user.js](https://github.com/arkenfox/user.js)

### 

=======
### User Overrides:
- For use with [arkenfox user.js](https://github.com/arkenfox/user.js)

### Flame CSS:
- For use with [flame](https://github.com/pawelmalak/flame)
>>>>>>> df8ffc81fe5e65874d33bae180da6538951521ac
