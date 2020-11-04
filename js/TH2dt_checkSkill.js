window.onload = load();

function changeItem(obj) {
	
	if(obj.value == 0) {
		obj.style.color = "red";
	} else {
		obj.style.color ="green"
	}
}

function save() {
	var skillArrays = [];

	for(var i=0; i<198; i++) {
		var skillData = document.getElementById('skill-'+i).value;

		skillArrays.push(skillData);
	}

	localStorage.setItem('skillKey',JSON.stringify(skillArrays));
}

function load() {
	skillArrays = JSON.parse(localStorage.getItem('skillKey'));

	for(var i=0; i<198; i++) {
		document.getElementById('skill-'+i).value = skillArrays[i];
		changeItem(document.getElementById('skill-'+i));
	}
}

function remove() {
	localStorage.removeItem('skillKey');
	document.chat.reset();
}