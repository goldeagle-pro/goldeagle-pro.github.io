window.onload = job();

job() {
	jobA();
	jobB();
}

function jobA() {
	changeDispA(1);
	document.getElementById('changeSelectA').onchange = function(e) {
	changeDispA(0);
	document.getElementById(this.options[this.selectedIndex].value).style.display = "block";
	}
}


function changeDispA(x) {
	var items = document.getElementById('selectDispA').children;
	for(i = x; i < items.length; i++) {
		items[i].style.display = "none";
	}
}

function jobB() {
	changeDispB(1);
	document.getElementById('changeSelectB').onchange = function(e) {
		changeDispB(0);
		document.getElementById(this.options[this.selectedIndex].value).style.display = "block";
	}
}

function changeDispB(x) {
	var items = document.getElementById('skillDispB').children;
	for(i=x; i<items.length; i++) {
		items[i].style.display ="none";
	}
}


function totalLv() {
	var nowLv = document.getElementById('totalLv');
	nowLv.innerHTML = document.getElementById('curLv').value;
}

