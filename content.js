chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendresponse)
{
	console.log(message.txt);
	let paragraphs = document.getElementsByTagName("div");
	for(elt of paragraphs)
	{
		elt.style['background-color'] = '#00CED1';
	}
}
chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {urls: ["https://en.wikipedia.org/wiki/Adele"]},
    ["blocking"]);