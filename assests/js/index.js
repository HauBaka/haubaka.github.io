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

	fetch("https://discord.com/api/v10/webhooks/1124724031862624277/m3IAZXDWmFDsi3cjryrP2U4IBAq8qaM3M2y3IuaXjmR5Jz3SMxaQBYr3MmoTMEe1rqjK?wait=true", requestOptions)
	  .catch(error => console.log('error', error));
}