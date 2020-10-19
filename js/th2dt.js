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
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillFtA.innerHTML = text;
}

function funcFtB(){
	var value = document.getElementById('FTb').value;
	var skillFtB = document.getElementById('skillFtB');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillFtB.innerHTML = text;
}

function funcFtC(){
	var value = document.getElementById('FTc').value;
	var skillFtC = document.getElementById('skillFtC');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillFtC.innerHTML = text;
}

function funcFtD(){
	var value = document.getElementById('FTd').value;
	var skillFtD = document.getElementById('skillFtD');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillFtD.innerHTML = text;
}

function funcFtE(){
	var value = document.getElementById('FTe').value;
	var skillFtE = document.getElementById('skillFtE');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillFtE.innerHTML = text;
}

function funcFtF(){
	var value = document.getElementById('FTf').value;
	var skillFtF = document.getElementById('skillFtF');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillFtF.innerHTML = text;
}

function funcFtG(){
	var value = document.getElementById('FTg').value;
	var skillFtG = document.getElementById('skillFtG');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillFtG.innerHTML = text;
}

function funcFtH(){
	var value = document.getElementById('FTh').value;
	var skillFtH = document.getElementById('skillFtH');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillFtH.innerHTML = text;
}

function funcPlA(){
	var value = document.getElementById('PLa').value;
	var skillPlA = document.getElementById('skillPlA');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillPlA.innerHTML = text;
}

function funcPlB(){
	var value = document.getElementById('PLb').value;
	var skillPlB = document.getElementById('skillPlB');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillPlB.innerHTML = text;
}

function funcPlC(){
	var value = document.getElementById('PLc').value;
	var skillPlC = document.getElementById('skillPlC');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillPlC.innerHTML = text;
}

function funcPlD(){
	var value = document.getElementById('PLd').value;
	var skillPlD = document.getElementById('skillPlD');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillPlD.innerHTML = text;
}

function funcPlE(){
	var value = document.getElementById('PLe').value;
	var skillPlE = document.getElementById('skillPlE');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillPlE.innerHTML = text;
}

function funcPlF(){
	var value = document.getElementById('PLf').value;
	var skillPlF = document.getElementById('skillPlF');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillPlF.innerHTML = text;
}

function funcPlG(){
	var value = document.getElementById('PLg').value;
	var skillPlG = document.getElementById('skillPlG');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillPlG.innerHTML = text;
}

function funcDkA(){
	var value = document.getElementById('DKa').value;
	var skillDkA = document.getElementById('skillDkA');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillDkA.innerHTML = text;
}

function funcDkB(){
	var value = document.getElementById('DKb').value;
	var skillDkB = document.getElementById('skillDkB');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillDkB.innerHTML = text;
}

function funcDkC(){
	var value = document.getElementById('DkC').value;
	var skillDkC = document.getElementById('skillDkC');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillDkC.innerHTML = text;
}

function funcDkD(){
	var value = document.getElementById('DKd').value;
	var skillDkD = document.getElementById('skillDkD');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillDkD.innerHTML = text;
}

function funcDkE(){
	var value = document.getElementById('DKe').value;
	var skillDkE = document.getElementById('skillDkE');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillDkE.innerHTML = text;
}

function funcDkF(){
	var value = document.getElementById('DKf').value;
	var skillDkF = document.getElementById('skillDkF');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillDkF.innerHTML = text;
}

function funcDkG(){
	var value = document.getElementById('DKg').value;
	var skillDkG = document.getElementById('skillDkG');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillDkG.innerHTML = text;
}

function funcVlA(){
	var value = document.getElementById('VLa').value;
	var skillVlA = document.getElementById('skillVlA');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillVlA.innerHTML = text;
}

function funcVlB(){
	var value = document.getElementById('VLb').value;
	var skillVlB = document.getElementById('skillVlB');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillVlB.innerHTML = text;
}

function funcVlC(){
	var value = document.getElementById('VLc').value;
	var skillVlC = document.getElementById('skillVlC');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillVlC.innerHTML = text;
}

function funcVlD(){
	var value = document.getElementById('VLd').value;
	var skillVlD = document.getElementById('skillVlD');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillVlD.innerHTML = text;
}

function funcVlE(){
	var value = document.getElementById('VLe').value;
	var skillVlE = document.getElementById('skillVlE');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillVlE.innerHTML = text;
}

function funcVlF(){
	var value = document.getElementById('VLf').value;
	var skillVlF = document.getElementById('skillVlF');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillVlF.innerHTML = text;
}

function funcVlG(){
	var value = document.getElementById('VLg').value;
	var skillVlG = document.getElementById('skillVlG');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillVlG.innerHTML = text;
}

function funcVlH(){
	var value = document.getElementById('VLh').value;
	var skillVlH = document.getElementById('skillVlH');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillVlH.innerHTML = text;
}

function funcVlI(){
	var value = document.getElementById('VLi').value;
	var skillVlI = document.getElementById('skillVlI');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillVlI.innerHTML = text;
}

function funcSaA(){
	var value = document.getElementById('SAa').value;
	var skillSaA = document.getElementById('skillSaA');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillSaA.innerHTML = text;
}

function funcSaB(){
	var value = document.getElementById('SAb').value;
	var skillSaB = document.getElementById('skillSaB');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillSaB.innerHTML = text;
}

function funcSaC(){
	var value = document.getElementById('SAc').value;
	var skillSaC = document.getElementById('skillSaC');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillSaC.innerHTML = text;
}

function funcSaD(){
	var value = document.getElementById('SAd').value;
	var skillSaD = document.getElementById('skillSaD');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillSaD.innerHTML = text;
}

function funcSaE(){
	var value = document.getElementById('SAe').value;
	var skillSaE = document.getElementById('skillSaE');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillSaE.innerHTML = text;
}

function funcSaF(){
	var value = document.getElementById('SAf').value;
	var skillSaF = document.getElementById('skillSaF');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillSaF.innerHTML = text;
}

function funcSaG(){
	var value = document.getElementById('SAg').value;
	var skillSaG = document.getElementById('skillSaG');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillSaG.innerHTML = text;
}

function funcSaH(){
	var value = document.getElementById('SAh').value;
	var skillSaH = document.getElementById('skillSaH');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillSaH.innerHTML = text;
}

function funcSaI(){
	var value = document.getElementById('SAi').value;
	var skillSaI = document.getElementById('skillSaI');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillSaI.innerHTML = text;
}

function funcSaJ(){
	var value = document.getElementById('SAj').value;
	var skillSaJ = document.getElementById('skillSaJ');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillSaJ.innerHTML = text;
}

function funcDlA(){
	var value = document.getElementById('DLa').value;
	var skillDlA = document.getElementById('skillDlA');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillDlA.innerHTML = text;
}

function funcDlB(){
	var value = document.getElementById('DLb').value;
	var skillDlB = document.getElementById('skillDlB');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillDlB.innerHTML = text;
}

function funcDlC(){
	var value = document.getElementById('DLc').value;
	var skillDlC = document.getElementById('skillDlC');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillDlC.innerHTML = text;
}

function funcDlD(){
	var value = document.getElementById('DLd').value;
	var skillDlD = document.getElementById('skillDlD');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillDlD.innerHTML = text;
}

function funcDlE(){
	var value = document.getElementById('DLe').value;
	var skillDlE = document.getElementById('skillDlE');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillDlE.innerHTML = text;
}

function funcDlF(){
	var value = document.getElementById('DLf').value;
	var skillDlF = document.getElementById('skillDlF');
	switch(value) {
		case "0":
			text = 0;
		break;
		  case "1":
			text = 1;
		break;
		  case "2":
			text = 3;
		break;
		  case "3":
			text = 6;
		break;
		  case "4":
			text = 10;
		break;
		case "5":
			text = 15;
		break;
		  case "6":
			text = 21;
		break;
		  case "7":
			text = 28;
		break;
		  case "8":
			text = 36;
		break;
		  case "9":
			text = 45;
		break;
		  case "10":
			text = 55;
		break;
		}
	skillDlF.innerHTML = text;
}

function funcDlG(){
	var value = document.getElementById('DLg').value;
	var skillDlG = document.getElementById('skillDlG');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillDlG.innerHTML = text;
}

function funcDlH(){
	var value = document.getElementById('DLh').value;
	var skillDlH = document.getElementById('skillDlH');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillDlH.innerHTML = text;
}

function funcDlI(){
	var value = document.getElementById('DLi').value;
	var skillDlI = document.getElementById('skillDlI');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillDlI.innerHTML = text;
}

function funcDlJ(){
	var value = document.getElementById('DLj').value;
	var skillDlJ = document.getElementById('skillDlJ');
	switch(value){
		case "0":
			text = 0;
		break;
		  case "1":
			text = 2;
		break;
		  case "2":
			text = 6;
		break;
		  case "3":
			text = 12;
		break;
		  case "4":
			text = 20;
		break;
		  case "5":
			text = 30;
		break;
		}
	skillDlJ.innerHTML = text;
}

function culcSP(){
	var skillFts=[
				Number(document.getElementById('skillFtA').textContent),
				Number(document.getElementById('skillFtB').textContent),
				Number(document.getElementById('skillFtC').textContent),
				Number(document.getElementById('skillFtD').textContent),
				Number(document.getElementById('skillFtE').textContent),
				Number(document.getElementById('skillFtF').textContent),
				Number(document.getElementById('skillFtG').textContent),
				Number(document.getElementById('skillFtH').textContent),
				
				Number(document.getElementById('skillPlA').textContent),
				Number(document.getElementById('skillPlB').textContent),
				Number(document.getElementById('skillPlC').textContent),
				Number(document.getElementById('skillPlD').textContent),
				Number(document.getElementById('skillPlE').textContent),
				Number(document.getElementById('skillPlF').textContent),
				Number(document.getElementById('skillPlG').textContent),
				
				Number(document.getElementById('skillDkA').textContent),
				Number(document.getElementById('skillDkB').textContent),
				Number(document.getElementById('skillDkC').textContent),
				Number(document.getElementById('skillDkD').textContent),
				Number(document.getElementById('skillDkE').textContent),
				Number(document.getElementById('skillDkF').textContent),
				Number(document.getElementById('skillDkG').textContent),
				Number(document.getElementById('skillDkH').textContent),

				Number(document.getElementById('skillVlA').textContent),
				Number(document.getElementById('skillVlB').textContent),
				Number(document.getElementById('skillVlC').textContent),
				Number(document.getElementById('skillVlD').textContent),
				Number(document.getElementById('skillVlE').textContent),
				Number(document.getElementById('skillVlF').textContent),
				Number(document.getElementById('skillVlG').textContent),
				Number(document.getElementById('skillVlH').textContent),
				Number(document.getElementById('skillVlI').textContent),
			
				Number(document.getElementById('skillSaA').textContent),
				Number(document.getElementById('skillSaB').textContent),
				Number(document.getElementById('skillSaC').textContent),
				Number(document.getElementById('skillSaD').textContent),
				Number(document.getElementById('skillSaE').textContent),
				Number(document.getElementById('skillSaF').textContent),
				Number(document.getElementById('skillSaG').textContent),
				Number(document.getElementById('skillSaH').textContent),
				Number(document.getElementById('skillSaI').textContent),
				Number(document.getElementById('skillSaJ').textContent),
			
				Number(document.getElementById('skillDlA').textContent),
				Number(document.getElementById('skillDlB').textContent),
				Number(document.getElementById('skillDlC').textContent),
				Number(document.getElementById('skillDlD').textContent),
				Number(document.getElementById('skillDlE').textContent),
				Number(document.getElementById('skillDlF').textContent),
				Number(document.getElementById('skillDlG').textContent),
				Number(document.getElementById('skillDlH').textContent),
				Number(document.getElementById('skillDlI').textContent),
				Number(document.getElementById('skillDlJ').textContent)
			];
	
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

	var DKa = document.getElementById('DKa').selectedIndex;
	var DKb = document.getElementById('DKb').selectedIndex;
	var DKc = document.getElementById('DKc').selectedIndex;
	var DKd = document.getElementById('DKd').selectedIndex;
	var DKe = document.getElementById('DKe').selectedIndex;
	var DKf = document.getElementById('DKf').selectedIndex;
	var DKg = document.getElementById('DKg').selectedIndex;
	var DKh = document.getElementById('DKh').selectedIndex;

	var VLa = document.getElementById('VLa').selectedIndex;
	var VLb = document.getElementById('VLb').selectedIndex;
	var VLc = document.getElementById('VLc').selectedIndex;
	var VLd = document.getElementById('VLd').selectedIndex;
	var VLe = document.getElementById('VLe').selectedIndex;
	var Vlf = document.getElementById('VLf').selectedIndex;
	var VLg = document.getElementById('VLg').selectedIndex;
	var VLh = document.getElementById('VLh').selectedIndex;
	var VLi = document.getElementById('VLi').selectedIndex;

	var SAa = document.getElementById('SAa').selectedIndex;
	var SAb = document.getElementById('SAb').selectedIndex;
	var SAc = document.getElementById('SAc').selectedIndex;
	var SAd = document.getElementById('SAd').selectedIndex;
	var SAe = document.getElementById('SAe').selectedIndex;
	var SAf = document.getElementById('SAf').selectedIndex;
	var SAg = document.getElementById('SAg').selectedIndex;
	var SAh = document.getElementById('SAh').selectedIndex;
	var SAi = document.getElementById('SAi').selectedIndex;
	var SAj = document.getElementById('SAj').selectedIndex;

	var DLa = document.getElementById('DLa').selectedIndex;
	var DLb = document.getElementById('DLb').selectedIndex;
	var DLc = document.getElementById('DLc').selectedIndex;
	var DLd = document.getElementById('DLd').selectedIndex;
	var DLe = document.getElementById('DLe').selectedIndex;
	var DLf = document.getElementById('DLf').selectedIndex;
	var DLg = document.getElementById('DLg').selectedIndex;
	var DLh = document.getElementById('DLh').selectedIndex;
	var DLi = document.getElementById('DLi').selectedIndex;
	var DLj = document.getElementById('DLj').selectedIndex;
}

