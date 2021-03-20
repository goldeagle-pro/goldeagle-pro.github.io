window.onload = job();

function job() {
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
	var items = document.getElementById('selectDispB').children;
	for(i=x; i<items.length; i++) {
		items[i].style.display ="none";
	}
}


function totalLv() {
	document.getElementById('totalLv').innerHTML = document.getElementById('currentLv').value;
}

function remainSP() {
	var arraySPs = [3,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
		17,19,21,23,25,27,29,31,33,35,37,39,41,44,47,50,
		53,56,59,63,67,71,75,79,83,87,91,95,99,103,108,
		113,118,123,128,134,140,146,152,158,165,172,179,
		186,193,200,208,216,224,232,240,249,258,267,276,
		286,296,306,316,326,337,348,359,370,382,394,406,
		418,431,444,457,470,484,498,512,526,541,556,571,
		586,602,618,634,651,668];
	
	currentLv = document.getElementById('currentLv');

	arraySP = arraySPs[currentLv.value];

	sumRemainSP = Number(arraySP) 
			+ Number(document.getElementById('skillDrug').value)
			- Number(document.getElementById('culcSP').innerHTML);
	
	document.getElementById('remainSP').innerHTML = sumRemainSP;
}

function clearAll() {
	document.skillSim.reset();
	document.getElementById('saveDataName').value = "";
	document.getElementById('skillDrug').value = "";
	document.getElementById('currentLv').value = 1;
	document.getElementById('totalLv').innerHTML = document.getElementById('currentLv').value;

	DTskill();
	culcSP();
	remainSP()
}

