function changeObtain(obj) {
	if(obj.value == 100) {
		obj.style.color = "gray";
	} else if(obj.value == 200) {
		obj.style.color = "red";
	} else {
		obj.style.color = "black";
	}
}

function changeAwakening(obj) {
	if(obj.value == 300) {
		obj.style.color = "yellow"
	} else if(obj.value == 400) {
		obj.style.color = "purple"
	} else {
		obj.style.color = "black"
	}
}