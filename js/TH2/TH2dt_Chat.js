window.onload = load();

function changeItem(obj) {
	
	if(obj.value == 0) {
		obj.style.color = "red";
	} else {
		obj.style.color ="gray"
	}
}

function changeLine(obj) {
	
	if(obj.value == 0) {
		obj.style.textDecoration = "none";
	} else {
		obj.style.textDecoration ="line-through"
	}
}

function save() {
	var chatArrays = [];

	for(var i=0; i<108; i++) {
		var chatData = document.getElementById('chat-'+i).value;

		chatArrays.push(chatData);
	}

	localStorage.setItem('chatKey',JSON.stringify(chatArrays));
}

function load() {
	chatArrays = JSON.parse(localStorage.getItem('chatKey'));

	for(var i=0; i<108; i++) {
		document.getElementById('chat-'+i).value = chatArrays[i];
		changeItem(document.getElementById('chat-'+i));
		changeLine(document.getElementById('chat-'+i));
	}
}

function remove() {
	localStorage.removeItem('chatKey');
	document.chat.reset();
}