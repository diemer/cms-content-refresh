var admin_type;
// if ExpressionEngine 2.x.x
if($('script[src*=ee_navigation]').length)
{
	admin_type = 'expressionengine2';
}

if(admin_type !== undefined)
{
	// By default we'll use the current domain for tabs to refresh
	switch (admin_type) {
		case "expressionengine2":

			var url_title = $('input[name="url_title"]').val();
			if($('input[name="pages__pages_uri"]').length){
				url_title = $('input[name="pages__pages_uri"]').val().replace('/','*');
			}
			break;
		default:

	}
	var current_url = window.location.protocol + '//' + window.location.hostname + '/*';
	$('#publish_submit_buttons input.submit').on('click',function(){
		// alert('you submitted!');
		chrome.runtime.sendMessage({action: "refresh", refresh_url: current_url, url_title: url_title}, function(response) {
		});
	});

}
