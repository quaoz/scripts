/*** MY OVERRIDES ***/
user_pref("_user.js.parrot", "overrides section syntax error");

/* override recipe: enable session restore ***/
user_pref("browser.startup.page", 3); // 0102
user_pref("privacy.clearOnShutdown.history", false); // 2803
user_pref("privacy.cpd.history", false); // 2820 optional to match when you use Ctrl-Shift-Del

//0103
user_pref("browser.startup.homepage", "http://192.168.178.200:5005/");

//0104
user_pref("browser.newtabpage.enabled", true);
user_pref("browser.newtab.preload", true);

// 0403
user_pref("browser.safebrowsing.downloads.remote.enabled", true);

// 0801
user_pref("keyword.enabled", true);

// 0804
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);

// 1001
user_pref("browser.cache.disk.enable", true);

// 2022: enable DRM
user_pref("media.eme.enabled", true);

// 2651
user_pref("browser.download.useDownloadDir", true);

// 4504
user_pref("privacy.resistFingerprinting.letterboxing", false);

// 5003
user_pref("signon.rememberSignons", false);

// PREF: Enable HSTS preload list (pre-set HSTS sites list provided by Mozilla)
// https://blog.mozilla.org/security/2012/11/01/preloading-hsts/
// https://wiki.mozilla.org/Privacy/Features/HSTS_Preload_List
// https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security
user_pref("network.stricttransportsecurity.preloadlist", true);

// Disable pocket
user_pref("extensions.pocket.enabled", false);

// show compact mode option in GUI
user_pref("browser.compactmode.show", true);

// hide vpn banner
user_pref("browser.contentblocking.report.hide_vpn_banner", true);

user_pref("browser.download.panel.shown", true);

// Proton toolbar version
user_pref("browser.proton.toolbar.version", 3);

// Titlebar off
user_pref("browser.tabs.inTitlebar", 1);

// Always show bookmarks bar
user_pref("browser.toolbars.bookmarks.visibility", "always");

// Enable math calcs in url bar
user_pref("browser.urlbar.suggest.calculator", true);

// Findbar enable highlightall option
user_pref("findbar.highlightAll", true);

user_pref("_user.js.parrot", "overrides section successful");
