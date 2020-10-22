chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendresponse)
{
	console.log(message.txt);
	let paragraphs = document.getElementsByTagName("div");
	// document.activeElement.style['background-color'] = '#000000';
	document.activeElement.style['color'] = '#ffffff';
	document.head.style['background-color'] = '#000000';
	document.head.style['color'] = '#ffffff';
	for(elt of paragraphs)
	{
		elt.style['background-color'] = '#000000';
		elt.style['color'] = '#ffffff';
	}
	if(message.tt) {
		console.log('tab found '+tt.tf);
	}
	

}