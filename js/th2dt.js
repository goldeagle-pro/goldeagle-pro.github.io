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

var arraySPs = [3,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
	17,19,21,23,25,27,29,31,33,35,37,39,41,44,47,50,
	53,56,59,63,67,71,75,79,83,87,91,95,99,103,108,
	113,118,123,128,134,140,146,152,158,165,172,179,
	186,193,200,208,216,224,232,240,249,258,267,276,
	286,296,306,316,326,337,348,359,370,382,394,406,
	418,431,444,457,470,484,498,512,526,541,556,571,
	586,602,618,634,651,668];

	var arraySP = arraySPs[Number(curLv)];

var sumRemSP = Number(arraySP)
				+Number(document.getElementById('skillDrug').value)
				-Number(document.getElementById('culcSP').innerHTML);
				
remSP.innerHTML = sumRemSP;

}

 function clearAll(){
   document.skillSim.reset();
   
   var culcSP = document.getElementById('culcSP');
   culcSP.innerHTML = 0;

   var remSP = document.getElementById('remSP')
   remSP.innerHTML = 3;
 } 


