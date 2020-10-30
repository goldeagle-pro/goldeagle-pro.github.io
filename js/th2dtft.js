window.onload =loading()
function loading(){ 

	var saveDatas =JSON.parse(localStorage.getItem('test'));
	for(i=0;i<wave.length;i++){
	document.getElementById('saveDataNum').options[i].textContent=saveDatas[i];
}
	
}
function DTskill() {
	var FT01 = document.getElementById('FT01').selectedIndex;
	var FT02 = document.getElementById('FT02').selectedIndex;
	var FT03 = document.getElementById('FT03').selectedIndex;
	var FT04 = document.getElementById('FT04').selectedIndex;
	var FT05 = document.getElementById('FT05').selectedIndex;
	var FT06 = document.getElementById('FT06').selectedIndex;
	var FT07 = document.getElementById('FT07').selectedIndex;
	var FT08 = document.getElementById('FT08').selectedIndex;

	var PL01 = document.getElementById('PL01').selectedIndex;
	var PL02 = document.getElementById('PL02').selectedIndex;
	var PL03 = document.getElementById('PL03').selectedIndex;
	var PL04 = document.getElementById('PL04').selectedIndex;
	var PL05 = document.getElementById('PL05').selectedIndex;
	var PL06 = document.getElementById('PL06').selectedIndex;
	var PL07 = document.getElementById('PL07').selectedIndex;

	var DK01 = document.getElementById('DK01').selectedIndex;
	var DK02 = document.getElementById('DK02').selectedIndex;
	var DK03 = document.getElementById('DK03').selectedIndex;
	var DK04 = document.getElementById('DK04').selectedIndex;
	var DK05 = document.getElementById('DK05').selectedIndex;
	var DK06 = document.getElementById('DK06').selectedIndex;
	var DK07 = document.getElementById('DK07').selectedIndex;
	var DK08 = document.getElementById('DK08').selectedIndex;

	var VL01 = document.getElementById('VL01').selectedIndex;
	var VL02 = document.getElementById('VL02').selectedIndex;
	var VL03 = document.getElementById('VL03').selectedIndex;
	var VL04 = document.getElementById('VL04').selectedIndex;
	var VL05 = document.getElementById('VL05').selectedIndex;
	var VL06 = document.getElementById('VL06').selectedIndex;
	var VL07 = document.getElementById('VL07').selectedIndex;
	var VL08 = document.getElementById('VL08').selectedIndex;
	var VL09 = document.getElementById('VL09').selectedIndex;

	var SA01 = document.getElementById('SA01').selectedIndex;
	var SA02 = document.getElementById('SA02').selectedIndex;
	var SA03 = document.getElementById('SA03').selectedIndex;
	var SA04 = document.getElementById('SA04').selectedIndex;
	var SA05 = document.getElementById('SA05').selectedIndex;
	var SA06 = document.getElementById('SA06').selectedIndex;
	var SA07 = document.getElementById('SA07').selectedIndex;
	var SA08 = document.getElementById('SA08').selectedIndex;
	var SA09 = document.getElementById('SA09').selectedIndex;
	var SA10 = document.getElementById('SA10').selectedIndex;

	var DL01 = document.getElementById('DL01').selectedIndex;
	var DL02 = document.getElementById('DL02').selectedIndex;
	var DL03 = document.getElementById('DL03').selectedIndex;
	var DL04 = document.getElementById('DL04').selectedIndex;
	var DL05 = document.getElementById('DL05').selectedIndex;
	var DL06 = document.getElementById('DL06').selectedIndex;
	var DL07 = document.getElementById('DL07').selectedIndex;
	var DL08 = document.getElementById('DL08').selectedIndex;
	var DL09 = document.getElementById('DL09').selectedIndex;

	var skillFT01 = document.getElementById('skillFT01');
		textFT01 = FT01*(FT01+1);
			skillFT01.innerHTML = textFT01;
	var skillFT02 = document.getElementById('skillFT02');
		textFT02 = FT02*(FT02+1);
			skillFT02.innerHTML = textFT02;
	var skillFT03 = document.getElementById('skillFT03');
		textFT03 = FT03*(FT03+1)/2;
			skillFT03.innerHTML = textFT03;
	var skillFT04 = document.getElementById('skillFT04');
		textFT04 = FT04*(FT04+1)/2;
			skillFT04.innerHTML = textFT04;
	var skillFT05 = document.getElementById('skillFT05');
		textFT05 = FT05*(FT05+1)/2;
			skillFT05.innerHTML = textFT05;
	var skillFT06 = document.getElementById('skillFT06');
		textFT06 = FT06*(FT06+1)/2;
			skillFT06.innerHTML = textFT06;
	var skillFT07 = document.getElementById('skillFT07');
		textFT07 = FT07*(FT07+1);
			skillFT07.innerHTML = textFT07;
	var skillFT08 = document.getElementById('skillFT08');
		textFT08 = FT08*(FT08+1);
			skillFT08.innerHTML = textFT08;
	
	var skillPL01 = document.getElementById('skillPL01');
		textPL01 = PL01*(PL01+1);
			skillPL01.innerHTML = textPL01;
	var skillPL02 = document.getElementById('skillPL02');
		textPL02 = PL02*(PL02+1);
			skillPL02.innerHTML = textPL02;
	var skillPL03 = document.getElementById('skillPL03');
		textPL03 = PL03*(PL03+1);
			skillPL03.innerHTML = textPL03;
	var skillPL04 = document.getElementById('skillPL04');
		textPL04 = PL04*(PL04+1);
			skillPL04.innerHTML = textPL04;
	var skillPL05 = document.getElementById('skillPL05');
		textPL05 = PL05*(PL05+1)/2;
			skillPL05.innerHTML = textPL05;
	var skillPL06 = document.getElementById('skillPL06');
		textPL06 = PL06*(PL06+1);
			skillPL06.innerHTML = textPL06;
	var skillPL07 = document.getElementById('skillPL07');
		textPL07 = PL07*(PL07+1);
			skillPL07.innerHTML = textPL07;
	
	var skillDK01 = document.getElementById('skillDK01');
		textDK01 = DK01*(DK01+1);
			skillDK01.innerHTML = textDK01;
	var skillDK02 = document.getElementById('skillDK02');
		textDK02 = DK02*(DK02+1)/2;
			skillDK02.innerHTML = textDK02;
	var skillDK03 = document.getElementById('skillDK03');
		textDK03 = DK03*(DK03+1)/2;
			skillDK03.innerHTML = textDK03;
	var skillDK04 = document.getElementById('skillDK04');
		textDK04 = DK04*(DK04+1)/2;
			skillDK04.innerHTML = textDK04;
	var skillDK05 = document.getElementById('skillDK05');
		textDK05 = DK05*(DK05+1);
			skillDK05.innerHTML = textDK05;
	var skillDK06 = document.getElementById('skillDK06');
		textDK06 = DK06*(DK06+1);
			skillDK06.innerHTML = textDK06;
	var skillDK07 = document.getElementById('skillDK07');
		textDK07 = DK07*(DK07+1)/2;
			skillDK07.innerHTML = textDK07;
	var skillDK08 = document.getElementById('skillDK08');
		textDK08 = DK08*(DK08+1);
			skillDK08.innerHTML = textDK08;

	var skillVL01 = document.getElementById('skillVL01');
		textVL01 = VL01*(VL01+1)/2;
			skillVL01.innerHTML = textVL01;
	var skillVL02 = document.getElementById('skillVL02');
		textVL02 = VL02*(VL02+1)/2;
			skillVL02.innerHTML = textVL02;
	var skillVL03 = document.getElementById('skillVL03');
		textVL03 = VL03*(VL03+1)/2;
			skillVL03.innerHTML = textVL03;
	var skillVL04 = document.getElementById('skillVL04');
		textVL04 = VL04*(VL04+1)/2;
			skillVL04.innerHTML = textVL04;
	var skillVL05 = document.getElementById('skillVL05');
		textVL05 = VL05*(VL05+1);
			skillVL05.innerHTML = textVL05;
	var skillVL06 = document.getElementById('skillVL06');
		textVL06 = VL06*(VL06+1);
			skillVL06.innerHTML = textVL06;
	var skillVL07 = document.getElementById('skillVL07');
		textVL07 = VL07*(VL07+1)/2;
			skillVL07.innerHTML = textVL07;
	var skillVL08 = document.getElementById('skillVL08');
		textVL08 = VL08*(VL08+1);
			skillVL08.innerHTML = textVL08;
	var skillVL09 = document.getElementById('skillVL09');
		textVL09 = VL09*(VL09+1);
			skillVL09.innerHTML = textVL09;
	
	var skillSA01 = document.getElementById('skillSA01');
		textSA01 = SA01*(SA01+1)/2;
			skillSA01.innerHTML = textSA01;
	var skillSA02 = document.getElementById('skillSA02');
		textSA02 = SA02*(SA02+1);
			skillSA02.innerHTML = textSA02;
	var skillSA03 = document.getElementById('skillSA03');
		textSA03 = SA03*(SA03+1)/2;
			skillSA03.innerHTML = textSA03;
	var skillSA04 = document.getElementById('skillSA04');
		textSA04 = SA04*(SA04+1)/2;
			skillSA04.innerHTML = textSA04;
	var skillSA05 = document.getElementById('skillSA05');
		textSA05 = SA05*(SA05+1)/2;
			skillSA05.innerHTML = textSA05;
	var skillSA06 = document.getElementById('skillSA06');
		textSA06 = SA06*(SA06+1)/2;
			skillSA06.innerHTML = textSA06;
	var skillSA07 = document.getElementById('skillSA07');
		textSA07 = SA07*(SA07+1)/2;
			skillSA07.innerHTML = textSA07;
	var skillSA08 = document.getElementById('skillSA08');
		textSA08 = SA08*(SA08+1);
			skillSA08.innerHTML = textSA08;
	var skillSA09 = document.getElementById('skillSA09');
		textSA09 = SA09*(SA09+1);
			skillSA09.innerHTML = textSA09;
	var skillSA10 = document.getElementById('skillSA10');
		textSA10 = SA10*(SA10+1);
			skillSA10.innerHTML = textSA10;

	var skillDL01 = document.getElementById('skillDL01');
		textDL01 = DL01*(DL01+1)/2;
			skillDL01.innerHTML = textDL01;
	var skillDL02 = document.getElementById('skillDL02');
		textDL02 = DL02*(DL02+1)/2;
			skillDL02.innerHTML = textDL02;
	var skillDL03 = document.getElementById('skillDL03');
		textDL03 = DL03*(DL03+1)/2;
			skillDL03.innerHTML = textDL03;
	var skillDL04 = document.getElementById('skillDL04');
		textDL04 = DL04*(DL04+1);
			skillDL04.innerHTML = textDL04;
	var skillDL05 = document.getElementById('skillDL05');
		textDL05 = DL05*(DL05+1)/2;
			skillDL05.innerHTML = textDL05;
	var skillDL06 = document.getElementById('skillDL06');
		textDL06 = DL06*(DL06+1)/2;
			skillDL06.innerHTML = textDL06;
	var skillDL07 = document.getElementById('skillDL07');
		textDL07 = DL07*(DL07+1);
			skillDL07.innerHTML = textDL07;
	var skillDL08 = document.getElementById('skillDL08');
		textDL08 = DL08*(DL08+1);
			skillDL08.innerHTML = textDL08;
	var skillDL09 = document.getElementById('skillDL09');
		textDL09 = DL09*(DL09+1);
			skillDL09.innerHTML = textDL09;
}

function culcSP() {
	var skillSPs = [Number(document.getElementById('skillFT01').textContent),
			Number(document.getElementById('skillFT02').textContent),
			Number(document.getElementById('skillFT03').textContent),
			Number(document.getElementById('skillFT04').textContent),
			Number(document.getElementById('skillFT05').textContent),
			Number(document.getElementById('skillFT06').textContent),
			Number(document.getElementById('skillFT07').textContent),
			Number(document.getElementById('skillFT08').textContent),

			Number(document.getElementById('skillPL01').textContent),
			Number(document.getElementById('skillPL02').textContent),
			Number(document.getElementById('skillPL03').textContent),
			Number(document.getElementById('skillPL04').textContent),
			Number(document.getElementById('skillPL05').textContent),
			Number(document.getElementById('skillPL06').textContent),
			Number(document.getElementById('skillPL07').textContent),
			
			Number(document.getElementById('skillDK01').textContent),
			Number(document.getElementById('skillDK02').textContent),
			Number(document.getElementById('skillDK03').textContent),
			Number(document.getElementById('skillDK04').textContent),
			Number(document.getElementById('skillDK05').textContent),
			Number(document.getElementById('skillDK06').textContent),
			Number(document.getElementById('skillDK07').textContent),
			Number(document.getElementById('skillDK08').textContent),

			Number(document.getElementById('skillVL01').textContent),
			Number(document.getElementById('skillVL02').textContent),
			Number(document.getElementById('skillVL03').textContent),
			Number(document.getElementById('skillVL04').textContent),
			Number(document.getElementById('skillVL05').textContent),
			Number(document.getElementById('skillVL06').textContent),
			Number(document.getElementById('skillVL07').textContent),
			Number(document.getElementById('skillVL08').textContent),
			Number(document.getElementById('skillVL09').textContent),

			Number(document.getElementById('skillSA01').textContent),
			Number(document.getElementById('skillSA02').textContent),
			Number(document.getElementById('skillSA03').textContent),
			Number(document.getElementById('skillSA04').textContent),
			Number(document.getElementById('skillSA05').textContent),
			Number(document.getElementById('skillSA06').textContent),
			Number(document.getElementById('skillSA07').textContent),
			Number(document.getElementById('skillSA08').textContent),
			Number(document.getElementById('skillSA09').textContent),
			Number(document.getElementById('skillSA10').textContent),

			Number(document.getElementById('skillDL01').textContent),
			Number(document.getElementById('skillDL02').textContent),
			Number(document.getElementById('skillDL03').textContent),
			Number(document.getElementById('skillDL04').textContent),
			Number(document.getElementById('skillDL05').textContent),
			Number(document.getElementById('skillDL06').textContent),
			Number(document.getElementById('skillDL07').textContent),
			Number(document.getElementById('skillDL08').textContent),
			Number(document.getElementById('skillDL09').textContent)
		];

	sumSP = skillSPs.reduce(function(a, x){
		return a + x;
	},0);

	document.getElementById('culcSP').innerHTML = sumSP;
}

function save() {
	var saveNumber = document.getElementById('saveDataNum');
	var saveWord = document.getElementById('saveDataName').value;

	selectNumber= saveNumber.options.selectedIndex
	saveNumber.options[selectNumber].textContent = saveNumber.options.selectedIndex+":"+saveWord;

	var saveNumberArrays = [];
	
	for(i=0;i<saveNumber.options.length; i++){	
	var obj = saveNumber.options[i].textContent;
	saveNumberArrays.push(obj);
	}

	localStorage.setItem('test',JSON.stringify(saveNumberArrays));

	var saveDataArrays = [	document.getElementById('saveDataName').value,
				document.getElementById('skillDrug').value,
				document.getElementById('currentLv').value,
				document.getElementById('changeSelectA').value,
				document.getElementById('changeSelectB').value,
				
				document.getElementById('FT01').options.selectedIndex,
				document.getElementById('FT02').options.selectedIndex,
				document.getElementById('FT03').options.selectedIndex,
				document.getElementById('FT04').options.selectedIndex,
				document.getElementById('FT05').options.selectedIndex,
				document.getElementById('FT06').options.selectedIndex,
				document.getElementById('FT07').options.selectedIndex,
				document.getElementById('FT08').options.selectedIndex,
				
				document.getElementById('PL01').options.selectedIndex,
				document.getElementById('PL02').options.selectedIndex,
				document.getElementById('PL03').options.selectedIndex,
				document.getElementById('PL04').options.selectedIndex,
				document.getElementById('PL05').options.selectedIndex,
				document.getElementById('PL06').options.selectedIndex,
				document.getElementById('PL07').options.selectedIndex,
	];

	localStorage.setItem(document.getElementById('saveDataNum').value,JSON.stringify(saveDataArrays));

	
}

function load() {
	var loadData = JSON.parse(localStorage.getItem(document.getElementById('saveDataNum').value));

	document.getElementById('saveDataName').value = loadData[0];
	document.getElementById('skillDrug').value = loadData[1];
	document.getElementById('currentLv').value = loadData[2];
	document.getElementById('changeSelectA').value = loadData[3];
	document.getElementById('changeSelectB').value = loadData[4];

	document.getElementById('FT01').options.selectedIndex = loadData[5];
	document.getElementById('FT02').options.selectedIndex = loadData[6];
	document.getElementById('FT03').options.selectedIndex = loadData[7];
	document.getElementById('FT04').options.selectedIndex = loadData[8];
	document.getElementById('FT05').options.selectedIndex = loadData[9];
	document.getElementById('FT06').options.selectedIndex = loadData[10];
	document.getElementById('FT07').options.selectedIndex = loadData[11];
	document.getElementById('FT08').options.selectedIndex = loadData[12];

	document.getElementById('PL01').options.selectedIndex = loadData[13];
	document.getElementById('PL02').options.selectedIndex = loadData[14];
	document.getElementById('PL03').options.selectedIndex = loadData[15];
	document.getElementById('PL04').options.selectedIndex = loadData[16];
	document.getElementById('PL05').options.selectedIndex = loadData[17];
	document.getElementById('PL06').options.selectedIndex = loadData[18];
	document.getElementById('PL07').options.selectedIndex = loadData[19];

	DTskill();
	culcSP();
	remainSP();
	totalLv();

}