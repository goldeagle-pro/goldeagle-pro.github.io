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
	switch(value){
		case 0:
			text = 0;
		break;
		  case 1:
			text = 2;
		break;
		  case 2:
			text = 6;
		break;
		  case 3:
			text = 12;
		break;
		  case 4:
			text = 20;
		break;
		  case 5:
			text = 30;
		break;
		}
	skillFtA.innerHTML = text;
}

function funcFtB(){
	var value = document.getElementById('FTb').value;
	var skillFtB = document.getElementById('skillFtB');
	switch(value){
		case 0:
			text = 0;
		break;
		  case 1:
			text = 2;
		break;
		  case 2:
			text = 6;
		break;
		  case 3:
			text = 12;
		break;
		  case 4:
			text = 20;
		break;
		  case 5:
			text = 30;
		break;
		}
	skillFtB.innerHTML = text;
}

function funcFtC(){
	var value = document.getElementById('FTc').value;
	var skillFtC = document.getElementById('skillFtC');
	switch(value) {
		case 0:
			text = 0;
		break;
		  case 1:
			text = 1;
		break;
		  case 2:
			text = 3;
		break;
		  case 3:
			text = 6;
		break;
		  case 4:
			text = 10;
		break;
		case 5:
			text = 15;
		break;
		  case 6:
			text = 21;
		break;
		  case 7:
			text = 28;
		break;
		  case 8:
			text = 36;
		break;
		  case 9:
			text = 45;
		break;
		  case 10:
			text = 55;
		break;
		}
	skillFtC.innerHTML = text;
}

function funcFtD(){
	var value = document.getElementById('FTd').value;
	var skillFtD = document.getElementById('skillFtD');
	switch(value) {
		case 0:
			text = 0;
		break;
		  case 1:
			text = 1;
		break;
		  case 2:
			text = 3;
		break;
		  case 3:
			text = 6;
		break;
		  case 4:
			text = 10;
		break;
		case 5:
			text = 15;
		break;
		  case 6:
			text = 21;
		break;
		  case 7:
			text = 28;
		break;
		  case 8:
			text = 36;
		break;
		  case 9:
			text = 45;
		break;
		  case 10:
			text = 55;
		break;
		}
	skillFtD.innerHTML = text;
}

function funcFtE(){
	var value = document.getElementById('FTe').value;
	var skillFtE = document.getElementById('skillFtE');
	switch(value) {
		case 0:
			text = 0;
		break;
		  case 1:
			text = 1;
		break;
		  case 2:
			text = 3;
		break;
		  case 3:
			text = 6;
		break;
		  case 4:
			text = 10;
		break;
		case 5:
			text = 15;
		break;
		  case 6:
			text = 21;
		break;
		  case 7:
			text = 28;
		break;
		  case 8:
			text = 36;
		break;
		  case 9:
			text = 45;
		break;
		  case 10:
			text = 55;
		break;
		}
	skillFtE.innerHTML = text;
}

function funcFtF(){
	var value = document.getElementById('FTf').value;
	var skillFtF = document.getElementById('skillFtF');
	switch(value) {
		case 0:
			text = 0;
		break;
		  case 1:
			text = 1;
		break;
		  case 2:
			text = 3;
		break;
		  case 3:
			text = 6;
		break;
		  case 4:
			text = 10;
		break;
		case 5:
			text = 15;
		break;
		  case 6:
			text = 21;
		break;
		  case 7:
			text = 28;
		break;
		  case 8:
			text = 36;
		break;
		  case 9:
			text = 45;
		break;
		  case 10:
			text = 55;
		break;
		}
	skillFtF.innerHTML = text;
}

function funcFtG(){
	var value = document.getElementById('FTg').value;
	var skillFtG = document.getElementById('skillFtG');
	switch(value){
		case 0:
			text = 0;
		break;
		  case 1:
			text = 2;
		break;
		  case 2:
			text = 6;
		break;
		  case 3:
			text = 12;
		break;
		  case 4:
			text = 20;
		break;
		  case 5:
			text = 30;
		break;
		}
	skillFtG.innerHTML = text;
}

function funcFtH(){
	var value = document.getElementById('FTh').value;
	var skillFtH = document.getElementById('skillFtH');
	switch(value){
		case 0:
			text = 0;
		break;
		  case 1:
			text = 2;
		break;
		  case 2:
			text = 6;
		break;
		  case 3:
			text = 12;
		break;
		  case 4:
			text = 20;
		break;
		  case 5:
			text = 30;
		break;
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

function funcDkA(){
	var value = document.getElementById('DKa').value;
	var skillDkA = document.getElementById('skillDkA');
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
	skillDkA.innerHTML = text;
}

function funcDkB(){
	var value = document.getElementById('DKb').value;
	var skillDkB = document.getElementById('skillDkB');
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
	skillDkB.innerHTML = text;
}

function funcDkC(){
	var value = document.getElementById('DkC').value;
	var skillDkC = document.getElementById('skillDkC');
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
	skillDkC.innerHTML = text;
}

function funcDkD(){
	var value = document.getElementById('DKd').value;
	var skillDkD = document.getElementById('skillDkD');
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
	skillDkD.innerHTML = text;
}

function funcDkE(){
	var value = document.getElementById('DKe').value;
	var skillDkE = document.getElementById('skillDkE');
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
	skillDkE.innerHTML = text;
}

function funcDkF(){
	var value = document.getElementById('DKf').value;
	var skillDkF = document.getElementById('skillDkF');
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
	skillDkF.innerHTML = text;
}

function funcDkG(){
	var value = document.getElementById('DKg').value;
	var skillDkG = document.getElementById('skillDkG');
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
	skillDkG.innerHTML = text;
}

function funcDkH(){
	var value = document.getElementById('DKh').value;
	var skillDkH = document.getElementById('skillDkH');
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
	skillDkH.innerHTML = text;
}

function culcSP(){
	var skillFts=[Number(document.getElementById('skillFtA').textContent),
				  Number(document.getElementById('skillFtB').textContent),
				  Number(document.getElementById('skillFtC').textContent),
				  Number(document.getElementById('skillFtD').textContent),
				  Number(document.getElementById('skillFtE').textContent),
				  Number(document.getElementById('skillFtF').textContent),
				  Number(document.getElementById('skillFtG').textContent),
				  Number(document.getElementById('skillFtH').textContent)];
	
	var sumSP=skillFts.reduce(function(sum, element){
	  return sum + element;
	}, 0);
	
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
	var PLb = document.getElementById('PLb').selectedIndex;
	var PLc = document.getElementById('PLc').selectedIndex;
	var PLd = document.getElementById('PLd').selectedIndex;
	var PLe = document.getElementById('PLe').selectedIndex;
	var PLf = document.getElementById('PLf').selectedIndex;
	var PLg = document.getElementById('PLg').selectedIndex;
}

