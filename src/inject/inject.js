var admin_type;
// if ExpressionEngine
if($('script[src*=ee_navigation]').length)
{
	admin_type = 'expressionengine';
}

if(admin_type !== undefined)
{
	// By default we'll use the current domain for tabs to refresh
	var url_title = $('input[name="url_title"]').val();
	if($('input[name="pages__pages_uri"]').length){
		url_title = $('input[name="pages__pages_uri"]').val().replace('/','*');
	}
	var current_url = window.location.protocol + '//' + window.location.hostname + '/*';
	$('#publish_submit_buttons input.submit').on('click',function(){
		// alert('you submitted!');
		chrome.runtime.sendMessage({action: "refresh", refresh_url: current_url, url_title: url_title}, function(response) {
			// console.log(response);

		});
	});
	// console.log("Hello hello. This message was sent from scripts/inject.js");
	// console.log(admin_type);
}

// chrome.runtime.sendMessage({}, function(response) {
// 	var readyStateCheckInterval = setInterval(function() {
// 	if (document.readyState === "complete") {
// 		clearInterval(readyStateCheckInterval);
//
// 		// ----------------------------------------------------------
// 		// This part of the script triggers when page is done loading
// 		if(admin_type !== undefined)
// 		{
// 			// By default we'll use the current domain for tabs to refresh
// 			var url_title = $('input[name="url_title"]');
// 			var current_url = window.location.protocol + '//' + window.location.hostname + '/*'+url_title;
// 			$('#publish_submit_buttons input.submit').on('mouseover',function(){
// 				alert('you submitted!');
// 			});
// 			chrome.runtime.sendMessage({action: "refresh", refresh_url: current_url}, function(response) {
// 				console.log(response);
// 			});
// 			// console.log("Hello hello. This message was sent from scripts/inject.js");
// 			// console.log(admin_type);
// 		}
// 		// ----------------------------------------------------------
//
// 	}
// 	}, 10);
// });
