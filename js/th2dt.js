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
		text = 0;
	}else if(value == 1){
		text = 2;
	}else if(value == 2){
		text = 6;
	}else if(value == 3){
		text = 12;
	}else if(value == 4){
		text = 20;
	}else if(value == 5){
		text = 30;
	}
	skillFtA.innerHTML = text;
}

function funcFtB(){
	var value = document.getElementById('FTb').value;
	var skillFtB = document.getElementById('skillFtB');
	if(value == 0){
		text = 0;
	}else if(value == 1){
		text = 2;
	}else if(value == 2){
		text = 6;
	}else if(value == 3){
		text = 12;
	}else if(value == 4){
		text = 20;
	}else if(value == 5){
		text = 30;
	}
	skillFtB.innerHTML = text;
}

function funcFtC(){
	var value = document.getElementById('FTc').value;
	var skillFtC = document.getElementById('skillFtC');
	if(value == 0){
		text = 0;
	}else if(value == 1){
		text = 1;
	}else if(value == 2){
		text = 3;
	}else if(value == 3){
		text = 6;
	}else if(value == 4){
		text = 10;
	}else if(value == 5){
		text = 15;
	}else if(value == 6){
		text = 21;
	}else if(value == 7){
		text = 28;
	}else if(value == 8){
		text = 36;
	}else if(value == 9){
		text = 45;
	}else if(value == 10){
		text = 55;
	}
	skillFtC.innerHTML = text;
}

function funcFtD(){
	var value = document.getElementById('FTd').value;
	var skillFtD = document.getElementById('skillFtD');
	if(value == 0){
		text = 0;
	}else if(value == 1){
		text = 1;
	}else if(value == 2){
		text = 3;
	}else if(value == 3){
		text = 6;
	}else if(value == 4){
		text = 10;
	}else if(value == 5){
		text = 15;
	}else if(value == 6){
		text = 21;
	}else if(value == 7){
		text = 28;
	}else if(value == 8){
		text = 36;
	}else if(value == 9){
		text = 45;
	}else if(value == 10){
		text = 55;
	}
	skillFtD.innerHTML = text;
}

function funcFtE(){
	var value = document.getElementById('FTe').value;
	var skillFtE = document.getElementById('skillFtE');
	if(value == 0){
		text = 0;
	}else if(value == 1){
		text = 1;
	}else if(value == 2){
		text = 3;
	}else if(value == 3){
		text = 6;
	}else if(value == 4){
		text = 10;
	}else if(value == 5){
		text = 15;
	}else if(value == 6){
		text = 21;
	}else if(value == 7){
		text = 28;
	}else if(value == 8){
		text = 36;
	}else if(value == 9){
		text = 45;
	}else if(value == 10){
		text = 55;
	}
	skillFtE.innerHTML = text;
}

function funcFtF(){
	var value = document.getElementById('FTf').value;
	var skillFtF = document.getElementById('skillFtF');
	if(value == 0){
		text = 0;
	}else if(value == 1){
		text = 1;
	}else if(value == 2){
		text = 3;
	}else if(value == 3){
		text = 6;
	}else if(value == 4){
		text = 10;
	}else if(value == 5){
		text = 15;
	}else if(value == 6){
		text = 21;
	}else if(value == 7){
		text = 28;
	}else if(value == 8){
		text = 36;
	}else if(value == 9){
		text = 45;
	}else if(value == 10){
		text = 55;
	}
	skillFtF.innerHTML = text;
}

function funcFtG(){
	var value = document.getElementById('FTg').value;
	var skillFtG = document.getElementById('skillFtG');
	if(value == 0){
		text = 0;
	}else if(value == 1){
		text = 2;
	}else if(value == 2){
		text = 6;
	}else if(value == 3){
		text = 12;
	}else if(value == 4){
		text = 20;
	}else if(value == 5){
		text = 30;
	}
	skillFtG.innerHTML = text;
}

function funcFtH(){
	var value = document.getElementById('FTh').value;
	var skillFtH = document.getElementById('skillFtH');
	if(value == 0){
		text = 0;
	}else if(value == 1){
		text = 2;
	}else if(value == 2){
		text = 6;
	}else if(value == 3){
		text = 12;
	}else if(value == 4){
		text = 20;
	}else if(value == 5){
		text = 30;
	}
	skillFtH.innerHTML = text;
}

function funcPlA(){
	var value = document.getElementById('PLa').value;
	var skillPlA = document.getElementById('skillPlA');
	if(value == 0){
		text = 0;
	}else if(value == 1){
		text = 2;
	}else if(value == 2){
		text = 6;
	}else if(value == 3){
		text = 12;
	}else if(value == 4){
		text = 20;
	}else if(value == 5){
		text = 30;
	}
	skillPlA.innerHTML = text;
}

function funcPlB(){
	var value = document.getElementById('PLb').value;
	var skillPlB = document.getElementById('skillPlB');
	if(value == 0){
		text = 0;
	}else if(value == 1){
		text = 2;
	}else if(value == 2){
		text = 6;
	}else if(value == 3){
		text = 12;
	}else if(value == 4){
		text = 20;
	}else if(value == 5){
		text = 30;
	}
	skillPlB.innerHTML = text;
}

function funcPlC(){
	var value = document.getElementById('PLc').value;
	var skillPlC = document.getElementById('skillPlC');
	if(value == 0){
		text = 0;
	}else if(value == 1){
		text = 2;
	}else if(value == 2){
		text = 6;
	}else if(value == 3){
		text = 12;
	}else if(value == 4){
		text = 20;
	}else if(value == 5){
		text = 30;
	}
	skillPlC.innerHTML = text;
}

function funcPlD(){
	var value = document.getElementById('PLd').value;
	var skillPlD = document.getElementById('skillPlD');
	if(value == 0){
		text = 0;
	}else if(value == 1){
		text = 2;
	}else if(value == 2){
		text = 6;
	}else if(value == 3){
		text = 12;
	}else if(value == 4){
		text = 20;
	}else if(value == 5){
		text = 30;
	}
	skillPlD.innerHTML = text;
}

function funcPlE(){
	var value = document.getElementById('PLe').value;
	var skillPlE = document.getElementById('skillPlE');
	if(value == 0){
		text = 0;
	}else if(value == 1){
		text = 1;
	}else if(value == 2){
		text = 3;
	}else if(value == 3){
		text = 6;
	}else if(value == 4){
		text = 10;
	}else if(value == 5){
		text = 15;
	}else if(value == 6){
		text = 21;
	}else if(value == 7){
		text = 28;
	}else if(value == 8){
		text = 36;
	}else if(value == 9){
		text = 45;
	}else if(value == 10){
		text = 55;
	}
	skillPlE.innerHTML = text;
}

function funcPlF(){
	var value = document.getElementById('PLf').value;
	var skillPlF = document.getElementById('skillPlF');
	if(value == 0){
		text = 0;
	}else if(value == 1){
		text = 2;
	}else if(value == 2){
		text = 6;
	}else if(value == 3){
		text = 12;
	}else if(value == 4){
		text = 20;
	}else if(value == 5){
		text = 30;
	}
	skillPlF.innerHTML = text;
}

function funcPlG(){
	var value = document.getElementById('PLg').value;
	var skillPlG = document.getElementById('skillPlG');
	if(value == 0){
		text = 0;
	}else if(value == 1){
		text = 2;
	}else if(value == 2){
		text = 6;
	}else if(value == 3){
		text = 12;
	}else if(value == 4){
		text = 20;
	}else if(value == 5){
		text = 30;
	}
	skillPlG.innerHTML = text;
}

function culcSP(){
var skillFtA=document.getElementById('skillFtA').textContent;
var skillFtF=document.getElementById('skillFtF').textContent

var skillNumA=Number(skillFtA);
var skillNumF=Number(skillFtF);

var sumSP=skillNumA+skillNumF;
culcNum=document.getElementById('culcSP');
culcNum.innerHTML=sumSP;
}

culcSP();

function DT2skill(){
	var FTa = document.getElementById("FTa").selectedIndex;
	var FTb = document.getElementById("FTb").selectedIndex;
	var FTc = document.getElementById("FTc").selectedIndex;
	var FTd = document.getElementById("FTd").selectedIndex;
	var FTe = document.getElementById("FTe").selectedIndex;
	var FTf = document.getElementById("FTf").selectedIndex;
	var FTg = document.getElementById("FTg").selectedIndex;
	var FTh = document.getElementById("FTh").selectedIndex;

	
	var PLa = document.getElementById('PLa').selectedIndex;
}

