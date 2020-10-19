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

function remSP(){
  var curLv =document.getElementById('curLv').value;
   var remSP = document.getElementById('remSP');
switch(curLv){
  
	case "":
    text = 3;
  break;
  case "1":
		text = 3;
	break;
	case "2":
		text = 4;
	break;
}

remSP.innerHTML = text;

var sumRemSP = Number(remSP.innerHTML)+Number(document.getElementById('skillDrug').value)-Number(document.getElementById('culcSP').innerHTML);
remSP.innerHTML = sumRemSP;

}
remSP();