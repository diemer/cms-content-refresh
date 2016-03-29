$(document).ready(function(){
  if(localStorage.contentOverrideUrl !== '' && localStorage.contentOverrideUrl !== undefined){
    $('#overrideUrl').val(localStorage.contentOverrideUrl);
  }
  if(localStorage.contentRefreshEnabled === 'true'){
    $('#enabled-toggle').attr('checked',true);
  }
  if(localStorage.contentSmartEnabled === 'true'){
    $('#smart').attr('checked',true);
  }
  $('#enabled').on('change',function(){
    localStorage.contentRefreshEnabled = $(this).val();
    if(localStorage.contentRefreshEnabled === 'true'){
      chrome.browserAction.setBadgeBackgroundColor({color: '#F00'})
      chrome.browserAction.setBadgeText({text: 'On'});
    } else {
      chrome.browserAction.setBadgeBackgroundColor({color: '#a0a0a0'})
      chrome.browserAction.setBadgeText({text: 'Off'});
    }
  });
  $('#enabled-toggle').on('click',function(){
    if($(this).is(':checked')) {
      localStorage.contentRefreshEnabled = 'true';
      chrome.browserAction.setBadgeBackgroundColor({color: '#F00'})
      chrome.browserAction.setBadgeText({text: 'On'});
    } else {
      localStorage.contentRefreshEnabled = 'false';
      chrome.browserAction.setBadgeBackgroundColor({color: '#a0a0a0'})
      chrome.browserAction.setBadgeText({text: 'Off'});
    }
  });
  $('#smart').on('click',function(){
    if($(this).is(':checked')) {
      localStorage.contentSmartEnabled = 'true';
    } else {
      localStorage.contentSmartEnabled = 'false';
    }
  });
  $('#overrideUrl').on('input',function(){
    localStorage.contentOverrideUrl = $(this).val();
  });
});
