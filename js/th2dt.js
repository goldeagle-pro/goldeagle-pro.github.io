window.onload = Job;

function Job(){
	JobA();
	JobB();
}

function JobA(){
	changeDispA(1);
	document.getElementById('changeSelectA').onchange =function(e){
		changeDispA(0);
		document.getElementById(this.options[this.selectedIndex].value).style.display = "block";
	}
}

function changeDispA(start){
	var items = document.getElementById('selectDispA').children;
	for(var i=start; i<items.length; i++){
		items[i].style.display = "none";
	}
}

function DT2skill() {
	var value = document.getElementById('A').value;
	var skillA = document.getElementById('skillA');
	var text = '';
	if(value == '0'){
	  text = '0';
	} else if(value == 1) {
	  text = '2';
	} else if(value == 2) {
		text = '6';
	} else if(value == 3) {
		text = '12';
	} else if(value == 4) {
		text = '20';
	} else if(value == 5) {
		text = '30';
	}

	skillA.innerHTML = text;
  }

function JobB(){
	changeDispB(1);
	document.getElementById('changeSelectB').onchange =function(e){
		changeDispB(0);
		document.getElementById(this.options[this.selectedIndex].value).style.display = "block";
	}
}

function changeDispB(start){
	var items = document.getElementById('selectDispB').children;
	for(var i=start; i<items.length; i++){
		items[i].style.display = "none";
	}
}
