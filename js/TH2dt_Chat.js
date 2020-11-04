function changeItem(obj) {
	
	if(obj.value == 0) {
		obj.style.color = "red";
	} else {
		obj.style.color = "gray";
	}
}

function changeLine(obj) {
	
	if(obj.value == 0) {
		obj.style.textDecoration = "none";
	} else {
		obj.style.textDecoration ="line-through"
	}
}