// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

if(localStorage.contentRefreshEnabled === 'true'){
  chrome.browserAction.setBadgeBackgroundColor({color: '#F00'})
  chrome.browserAction.setBadgeText({text: 'On'});
} else {
  chrome.browserAction.setBadgeBackgroundColor({color: '#a0a0a0'})
  chrome.browserAction.setBadgeText({text: 'Off'});
}
//example of using a message handler from the inject scripts
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	// chrome.pageAction.show(sender.tab.id);
    if(request.action === "refresh" && localStorage.contentRefreshEnabled === 'true') {
      var was_refreshed = false;
      var refresh_url = request.refresh_url;
      var url_title = request.url_title;
      var refresh_delay = localStorage.contentRefreshDelay !== undefined ? localStorage.contentRefreshDelay : 2000;
      if(localStorage.contentSmartEnabled === 'true') {
        refresh_url = refresh_url + '*'+url_title+'*';
      }
      if(localStorage.contentOverrideUrl !== '' && localStorage.contentOverrideUrl !== undefined){
        refresh_url = localStorage.contentOverrideUrl;
      }
      chrome.tabs.query({url: refresh_url}, function(tabs){
        tabs.forEach(function(tab){
          // Make sure we don't refresh the tab we're editing
          if(sender.tab.id !== tab.id) {
            setTimeout(function(){
              chrome.tabs.reload(tab.id,function(){
                was_refreshed = true;
              });
            },refresh_delay);
          }
        });

      });
      sendResponse({refreshed: was_refreshed });
      // console.log(was_refreshed);
      // alert(request.refresh_url);
    }
  });
