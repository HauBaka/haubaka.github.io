function checkInput() {
	var textbox = document.getElementById('textbox').value;
	if (textbox.length != 0) {
		sendMessage(textbox);
	}
	document.getElementById('textbox').value = "";
}
function sendMessage(s) {
	var myHeaders = new Headers();
	myHeaders.append("content-type", "application/json");

	var raw = JSON.stringify({
	  "content": "||@everyone||" + s,
	  "embeds": null,
	  "attachments": []
	});

	var requestOptions = {
	  method: 'POST',
	  headers: myHeaders,
	  body: raw,
	  redirect: 'follow'
	};

	fetch("https://ptb.discord.com/api/webhooks/1125813799967002698/ce5p9J8TGOfU87PS7Io1SxgLDpeVq0BggnwQao3j0hlWuuFVeqPEPU9ShGG-ht49Jc2T", requestOptions)
	  .catch(error => console.log('error', error));
}
