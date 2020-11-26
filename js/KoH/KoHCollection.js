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

function save() {
	var obtArrays = [];
	for(i=0; i<3; i++) {
		var obtData = document.getElementById("obt-"+ i).value;
		obtArrays.push(obtData);
	}
	localStorage.setItem("obtKey",JSON.stringify(obtArrays));
}

function load() {
	var obtArrays = JSON.parse(localStorage.getItem("obtKey"));
	for(i=0; i<3; i++) {
		document.getElementById("obt-"+ i).value = obtArrays[i];
		changeObtain(document.getElementById("obt-"+i));
	}
	
}