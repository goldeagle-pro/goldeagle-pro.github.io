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

function funcFtA(){
	var value = document.getElementById('FTa').value;
	var skillFtA = document.getElementById('skillFtA');
	if(value == 0){
		text = '0';
	}else if(value == 1){
		text = '2';
	}else if(value == 2){
		text = '6';
	}else if(value == 3){
		text = '12';
	}else if(value == 4){
		text = '20';
	}else if(value == 5){
		text = '30';
	}
	skillFtA.innerHTML = text;
}

function funcFtB(){
	var value = document.getElementById('FTb').value;
	var skillFtB = document.getElementById('skillFtB');
	if(value == 0){
		text = '0';
	}else if(value == 1){
		text = '2';
	}else if(value == 2){
		text = '6';
	}else if(value == 3){
		text = '12';
	}else if(value == 4){
		text = '20';
	}else if(value == 5){
		text = '30';
	}
	skillFtB.innerHTML = text;
}

function funcPlA(){
	var value = document.getElementById('PLa').value;
	var skillFtB = document.getElementById('skillPlA');
	if(value == 0){
		text = '0';
	}else if(value == 1){
		text = '2';
	}else if(value == 2){
		text = '6';
	}else if(value == 3){
		text = '12';
	}else if(value == 4){
		text = '20';
	}else if(value == 5){
		text = '30';
	}
	skillPlA.innerHTML = text;
}

function DT2skill(){
	var FTa = document.getElementById("FTa").selectedIndex;
	var FTb = document.getElementById("FTb").selectedIndex;
	var PLa = document.getElementById('PLa').selectedIndex;
}

