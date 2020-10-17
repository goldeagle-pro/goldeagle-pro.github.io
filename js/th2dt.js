
window.onload = Job;

function Job(){
	JobA();
	
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
  
