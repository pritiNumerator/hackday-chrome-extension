chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendresponse)
{

	if(message.txt === "Hello") {

		let divs = document.querySelectorAll("div");
		let paragraphs = document.querySelectorAll("p");
		let span = document.querySelectorAll("span");
		let hed = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
		let anchors = document.querySelectorAll("a");
		let images = document.querySelectorAll("img");
		document.head.style['background-color'] = '#000000';
		document.head.style['color'] = '#ffffff';
		document.body.style.backgroundColor = "#000000";
		document.body.style.color = "#ffffff";
		for(elt of divs)
		{
			elt.style['background-color'] = '#000000';
			elt.style['color'] = '#ffffff';
		}
		for(elt of paragraphs)
		{
			elt.style['background-color'] = '#000000';
			elt.style['color'] = '#ffffff';
		}

		for(elt of span)
		{
			// elt.style['background-color'] = '#000000';
			elt.style['color'] = '#ffffff';
		}
		for(elt of hed)
		{
			elt.style['background-color'] = '#000000';
			elt.style['color'] = '#ffffff';
		}

		for(elt of anchors)
		{
			elt.style['background-color'] = '#8caeb1';
			elt.style['color'] = '#002c31';
		}

		for(elt of images)
		{
			elt.style['background-color'] = '#8caeb1';
			elt.style['color'] = '#002c31';
		}


	}

}