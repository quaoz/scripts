/*** MY OVERRIDES ***/
user_pref("_user.js.parrot", "overrides section syntax error");

/* override recipe: enable session restore ***/
user_pref("browser.startup.page", 3); // 0102
user_pref("places.history.enabled", true); // 0862 required if you had it set as false
user_pref("browser.sessionstore.privacy_level", 0); // 1021 optional [to restore extras like cookies/formdata]
user_pref("privacy.clearOnShutdown.history", false); // 2803
user_pref("privacy.clearOnShutdown.cookies", false); // 2803 optional
user_pref("privacy.clearOnShutdown.formdata", false); // 2803 optional
user_pref("privacy.cpd.history", false); // 2804 to match when you use Ctrl-Shift-Del
user_pref("privacy.cpd.cookies", false); // 2804 optional
user_pref("privacy.cpd.formdata", false); // 2804 optional

//0103
user_pref("browser.startup.homepage", "about:home");

//0104
user_pref("browser.newtabpage.enabled", true);
user_pref("browser.newtab.preload", true);

// 0801
user_pref("keyword.enabled", true);

// 0804
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);

// 2022
user_pref("media.eme.enabled", true);

// 2651
user_pref("browser.download.useDownloadDir", true);

// 4000
user_pref("browser.safebrowsing.downloads.remote.enabled", true);

// 4504
user_pref("privacy.resistFingerprinting.letterboxing", false);

// 5003
user_pref("signon.rememberSignons", false);

// 9000
user_pref("browser.tabs.warnOnClose", false);
user_pref("ui.systemUsesDarkTheme", 1);

// PREF: Enable HSTS preload list (pre-set HSTS sites list provided by Mozilla)
// https://blog.mozilla.org/security/2012/11/01/preloading-hsts/
// https://wiki.mozilla.org/Privacy/Features/HSTS_Preload_List
// https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security
user_pref("network.stricttransportsecurity.preloadlist", true);

// The following prefs are for themes, unfortunaly using themes causes a memory leak on mac
// https://github.com/FirefoxCSS-Store/FirefoxCSS-Store.github.io
// user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
// user_pref("layers.acceleration.force-enabled", true);
// user_pref("layout.css.backdrop-filter.enabled", true);
// user_pref("svg.context-properties.content.enabled", true);
// user_pref("gfx.webrender.all", true);
// user_pref("gfx.webrender.enabled", true);

// https://github.com/sagars007/starry-fox
// Smaller search engine suggestion prompt
// user_pref("browser.urlbar.update1", false);

// Smooth edge like scrolling:
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 250);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 400);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 400);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 120);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio",  0.4);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 5000);
user_pref("mousewheel.min_line_scroll_amount", 22);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 4);
user_pref("toolkit.scrollbox.verticalScrollDistance", 5);
user_pref("apz.frame_delay.enabled", false);

// Disable pocket
user_pref("extensions.pocket.enabled", false);

// show compact mode option in GUI
user_pref("browser.compactmode.show", true);

// hide vpn banner
user_pref("browser.contentblocking.report.hide_vpn_banner",	true);

user_pref("browser.download.panel.shown", true);

// Proton toolbar version
user_pref("browser.proton.toolbar.version",	3);

// Titlebar off
user_pref("browser.tabs.inTitlebar", 1);

// Always show bookmarks bar
user_pref("browser.toolbars.bookmarks.visibility", "always");

// Enable math calcs in url bar
user_pref("browser.urlbar.suggest.calculator", true);

// Findbar enable highlightall option
user_pref("findbar.highlightAll", true);

// Set pip button position
user_pref("media.videocontrols.picture-in-picture.video-toggle.position", "top");

// Green color secure site padlock icon
user_pref("security.secure_connection_icon_color_gray", false);  

user_pref("_user.js.parrot", "overrides section successful");