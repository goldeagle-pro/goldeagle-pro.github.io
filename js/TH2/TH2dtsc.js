window.onload = loading();

function loading() {
	var wave = JSON.parse(localStorage.getItem('startKey'));
	
	for(var i=0; i<wave.length; i++) {
		document.getElementById('saveDataNum').options[i].textContent = wave[i]; 
	}
}

function DTskill() {
	var SC01 = document.getElementById('SC01').selectedIndex;
	var SC02 = document.getElementById('SC02').selectedIndex;
	var SC03 = document.getElementById('SC03').selectedIndex;
	var SC04 = document.getElementById('SC04').selectedIndex;
	var SC05 = document.getElementById('SC05').selectedIndex;
	var SC06 = document.getElementById('SC06').selectedIndex;
	var SC07 = document.getElementById('SC07').selectedIndex;
	var SC08 = document.getElementById('SC08').selectedIndex;

	var AR01 = document.getElementById('AR01').selectedIndex;
	var AR02 = document.getElementById('AR02').selectedIndex;
	var AR03 = document.getElementById('AR03').selectedIndex;
	var AR04 = document.getElementById('AR04').selectedIndex;
	var AR05 = document.getElementById('AR05').selectedIndex;
	var AR06 = document.getElementById('AR06').selectedIndex;

	var AS01 = document.getElementById('AS01').selectedIndex;
	var AS02 = document.getElementById('AS02').selectedIndex;
	var AS03 = document.getElementById('AS03').selectedIndex;
	var AS04 = document.getElementById('AS04').selectedIndex;
	var AS05 = document.getElementById('AS05').selectedIndex;
	var AS06 = document.getElementById('AS06').selectedIndex;

	var SN01 = document.getElementById('SN01').selectedIndex;
	var SN02 = document.getElementById('SN02').selectedIndex;
	var SN03 = document.getElementById('SN03').selectedIndex;
	var SN04 = document.getElementById('SN04').selectedIndex;
	var SN05 = document.getElementById('SN05').selectedIndex;
	var SN06 = document.getElementById('SN06').selectedIndex;
	var SN07 = document.getElementById('SN07').selectedIndex;

	var TH01 = document.getElementById('TH01').selectedIndex;
	var TH02 = document.getElementById('TH02').selectedIndex;
	var TH03 = document.getElementById('TH03').selectedIndex;
	var TH04 = document.getElementById('TH04').selectedIndex;
	var TH05 = document.getElementById('TH05').selectedIndex;
	var TH06 = document.getElementById('TH06').selectedIndex;
	var TH07 = document.getElementById('TH07').selectedIndex;
	var TH08 = document.getElementById('TH08').selectedIndex;
	var TH09 = document.getElementById('TH09').selectedIndex;
	var TH10 = document.getElementById('TH10').selectedIndex;
	var TH11 = document.getElementById('TH11').selectedIndex;
	var TH12 = document.getElementById('TH12').selectedIndex;

	var KN01 = document.getElementById('KN01').selectedIndex;
	var KN02 = document.getElementById('KN02').selectedIndex;
	var KN03 = document.getElementById('KN03').selectedIndex;
	var KN04 = document.getElementById('KN04').selectedIndex;
	var KN05 = document.getElementById('KN05').selectedIndex;
	var KN06 = document.getElementById('KN06').selectedIndex;
	var KN07 = document.getElementById('KN07').selectedIndex;
	var KN08 = document.getElementById('KN08').selectedIndex;
	var KN09 = document.getElementById('KN09').selectedIndex;
	var KN10 = document.getElementById('KN10').selectedIndex;
	var KN11 = document.getElementById('KN11').selectedIndex;
	var KN12 = document.getElementById('KN12').selectedIndex;
	var KN13 = document.getElementById('KN13').selectedIndex;

	var skillSC01 = document.getElementById('skillSC01');
		textSC01 = SC01*(SC01+1);
			skillSC01.innerHTML = textSC01;
	var skillSC02 = document.getElementById('skillSC02');
		textSC02 = SC02*(SC02+1);
			skillSC02.innerHTML = textSC02;
	var skillSC03 = document.getElementById('skillSC03');
		textSC03 = SC03*(SC03+1);
			skillSC03.innerHTML = textSC03;
	var skillSC04 = document.getElementById('skillSC04');
		textSC04 = SC04*(SC04+1)/2;
			skillSC04.innerHTML = textSC04;
	var skillSC05 = document.getElementById('skillSC05');
		textSC05 = SC05*(SC05+1)/2;
			skillSC05.innerHTML = textSC05;
	var skillSC06 = document.getElementById('skillSC06');
		textSC06 = SC06*(SC06+1);
			skillSC06.innerHTML = textSC06;
	var skillSC07 = document.getElementById('skillSC07');
		textSC07 = SC07*(SC07+1)/2;
			skillSC07.innerHTML = textSC07;
	var skillSC08 = document.getElementById('skillSC08');
		textSC08 = SC08*(SC08+1);
			skillSC08.innerHTML = textSC08;

	var skillAR01 = document.getElementById('skillAR01');
		textAR01 = AR01*(AR01+1)/2;
			skillAR01.innerHTML = textAR01;
	var skillAR02 = document.getElementById('skillAR02');
		textAR02 = AR02*(AR02+1)/2;
			skillAR02.innerHTML = textAR02;
	var skillAR03 = document.getElementById('skillAR03');
		textAR03 = AR03*(AR03+1)/2;
			skillAR03.innerHTML = textAR03;
	var skillAR04 = document.getElementById('skillAR04');
		textAR04 = AR04*(AR04+1)/2;
			skillAR04.innerHTML = textAR04;
	var skillAR05 = document.getElementById('skillAR05');
		textAR05 = AR05*(AR05+1)/2;
			skillAR05.innerHTML = textAR05;
	var skillAR06 = document.getElementById('skillAR06');
		textAR06 = AR06*(AR06+1);
			skillAR06.innerHTML = textAR06;

	var skillAS01 = document.getElementById('skillAS01');
		textAS01 = AS01*(AS01+1)/2;
			skillAS01.innerHTML = textAS01;
	var skillAS02 = document.getElementById('skillAS02');
		textAS02 = AS02*(AS02+1)/2;
			skillAS02.innerHTML = textAS02;
	var skillAS03 = document.getElementById('skillAS03');
		textAS03 = AS03*(AS03+1)/2;
			skillAS03.innerHTML = textAS03;
	var skillAS04 = document.getElementById('skillAS04');
		textAS04 = AS04*(AS04+1);
			skillAS04.innerHTML = textAS04;
	var skillAS05 = document.getElementById('skillAS05');
		textAS05 = AS05*(AS05+1);
			skillAS05.innerHTML = textAS05;
	var skillAS06 = document.getElementById('skillAS06');
		textAS06 = AS06*(AS06+1);
			skillAS06.innerHTML = textAS06;

	var skillSN01 = document.getElementById('skillSN01');
		textSN01 = SN01*(SN01+1)/2;
			skillSN01.innerHTML = textSN01;
	var skillSN02 = document.getElementById('skillSN02');
		textSN02 = SN02*(SN02+1)/2;
			skillSN02.innerHTML = textSN02;
	var skillSN03 = document.getElementById('skillSN03');
		textSN03 = SN03*(SN03+1);
			skillSN03.innerHTML = textSN03;
	var skillSN04 = document.getElementById('skillSN04');
		textSN04 = SN04*(SN04+1);
			skillSN04.innerHTML = textSN04;
	var skillSN05 = document.getElementById('skillSN05');
		textSN05 = SN05*(SN05+1)/2;
			skillSN05.innerHTML = textSN05;
	var skillSN06 = document.getElementById('skillSN06');
		textSN06 = SN06*(SN06+1);
			skillSN06.innerHTML = textSN06;
	var skillSN07 = document.getElementById('skillSN07');
		textSN07 = SN07*(SN07+1);
			skillSN07.innerHTML = textSN07;

	var skillTH01 = document.getElementById('skillTH01');
		textTH01 = TH01*(TH01+1);
			skillTH01.innerHTML = textTH01;
	var skillTH02 = document.getElementById('skillTH02');
		textTH02 = TH02*(TH02+1)/2;
			skillTH02.innerHTML = textTH02;
	var skillTH03 = document.getElementById('skillTH03');
		textTH03 = TH03*(TH03+1)/2;
			skillTH03.innerHTML = textTH03;
	var skillTH04 = document.getElementById('skillTH04');
		textTH04 = TH04*(TH04+1);
			skillTH04.innerHTML = textTH04;
	var skillTH05 = document.getElementById('skillTH05');
		textTH05 = TH05*(TH05+1)/2;
			skillTH05.innerHTML = textTH05;
	var skillTH06 = document.getElementById('skillTH06');
		textTH06 = TH06*(TH06+1);
			skillTH06.innerHTML = textTH06;
	var skillTH07 = document.getElementById('skillTH07');
		textTH07 = TH07*(TH07+1);
			skillTH07.innerHTML = textTH07;
	var skillTH08 = document.getElementById('skillTH08');
		textTH08 = TH08*(TH08+1);
			skillTH08.innerHTML = textTH08;
	var skillTH09 = document.getElementById('skillTH09');
		textTH09 = TH09*(TH09+1);
			skillTH09.innerHTML = textTH09;
	var skillTH10 = document.getElementById('skillTH10');
		textTH10 = TH10*(TH10+1);
			skillTH10.innerHTML = textTH10;
	var skillTH11 = document.getElementById('skillTH11');
		textTH11 = TH11*(TH11+1);
			skillTH11.innerHTML = textTH11;
	var skillTH12 = document.getElementById('skillTH12');
		textTH12 = TH12*(TH12+1)/2;
			skillTH12.innerHTML = textTH12;

	var skillKN01 = document.getElementById('skillKN01');
		textKN01 = KN01*(KN01+1)/2;
			skillKN01.innerHTML = textKN01;
	var skillKN02 = document.getElementById('skillKN02');
		textKN02 = KN02*(KN02+1);
			skillKN02.innerHTML = textKN02;
	var skillKN03 = document.getElementById('skillKN03');
		textKN03 = KN03*(KN03+1);
			skillKN03.innerHTML = textKN03;
	var skillKN04 = document.getElementById('skillKN04');
		textKN04 = KN04*(KN04+1);
			skillKN04.innerHTML = textKN04;
	var skillKN05 = document.getElementById('skillKN05');
		textKN05 = KN05*(KN05+1);
			skillKN05.innerHTML = textKN05;
	var skillKN06 = document.getElementById('skillKN06');
		textKN06 = KN06*(KN06+1);
			skillKN06.innerHTML = textKN06;
	var skillKN07 = document.getElementById('skillKN07');
		textKN07 = KN07*(KN07+1);
			skillKN07.innerHTML = textKN07;
	var skillKN08 = document.getElementById('skillKN08');
		textKN08 = KN08*(KN08+1);
			skillKN08.innerHTML = textKN08;
	var skillKN09 = document.getElementById('skillKN09');
		textKN09 = KN09*(KN09+1);
			skillKN09.innerHTML = textKN09;
	var skillKN10 = document.getElementById('skillKN10');
		textKN10 = KN10*(KN10+1)/2;
			skillKN10.innerHTML = textKN10;
	var skillKN11 = document.getElementById('skillKN11');
		textKN11 = KN11*(KN11+1)/2;
			skillKN11.innerHTML = textKN11;
	var skillKN12 = document.getElementById('skillKN12');
		textKN12 = KN12*(KN12+1)/2;
			skillKN12.innerHTML = textKN12;
	var skillKN13 = document.getElementById('skillKN13');
		textKN13 = KN13*(KN13+1)/2;
			skillKN13.innerHTML = textKN13;
}

function culcSP() {
	var totalSPs = [
		Number(document.getElementById('skillSC01').textContent),
		Number(document.getElementById('skillSC02').textContent),
		Number(document.getElementById('skillSC03').textContent),
		Number(document.getElementById('skillSC04').textContent),
		Number(document.getElementById('skillSC05').textContent),
		Number(document.getElementById('skillSC06').textContent),
		Number(document.getElementById('skillSC07').textContent),
		Number(document.getElementById('skillSC08').textContent),

		Number(document.getElementById('skillAR01').textContent),
		Number(document.getElementById('skillAR02').textContent),
		Number(document.getElementById('skillAR03').textContent),
		Number(document.getElementById('skillAR04').textContent),
		Number(document.getElementById('skillAR05').textContent),
		Number(document.getElementById('skillAR06').textContent),

		Number(document.getElementById('skillAS01').textContent),
		Number(document.getElementById('skillAS02').textContent),
		Number(document.getElementById('skillAS03').textContent),
		Number(document.getElementById('skillAS04').textContent),
		Number(document.getElementById('skillAS05').textContent),
		Number(document.getElementById('skillAS06').textContent),

		Number(document.getElementById('skillSN01').textContent),
		Number(document.getElementById('skillSN02').textContent),
		Number(document.getElementById('skillSN03').textContent),
		Number(document.getElementById('skillSN04').textContent),
		Number(document.getElementById('skillSN05').textContent),
		Number(document.getElementById('skillSN06').textContent),
		Number(document.getElementById('skillSN07').textContent),

		Number(document.getElementById('skillTH01').textContent),
		Number(document.getElementById('skillTH02').textContent),
		Number(document.getElementById('skillTH03').textContent),
		Number(document.getElementById('skillTH04').textContent),
		Number(document.getElementById('skillTH05').textContent),
		Number(document.getElementById('skillTH06').textContent),
		Number(document.getElementById('skillTH07').textContent),
		Number(document.getElementById('skillTH08').textContent),
		Number(document.getElementById('skillTH09').textContent),
		Number(document.getElementById('skillTH10').textContent),
		Number(document.getElementById('skillTH11').textContent),
		Number(document.getElementById('skillTH12').textContent),

		Number(document.getElementById('skillKN01').textContent),
		Number(document.getElementById('skillKN02').textContent),
		Number(document.getElementById('skillKN03').textContent),
		Number(document.getElementById('skillKN04').textContent),
		Number(document.getElementById('skillKN05').textContent),
		Number(document.getElementById('skillKN06').textContent),
		Number(document.getElementById('skillKN07').textContent),
		Number(document.getElementById('skillKN08').textContent),
		Number(document.getElementById('skillKN09').textContent),
		Number(document.getElementById('skillKN10').textContent),
		Number(document.getElementById('skillKN11').textContent),
		Number(document.getElementById('skillKN12').textContent),
		Number(document.getElementById('skillKN13').textContent)
	];

	var sumSP = totalSPs.reduce(function(sum, element){
		return sum + element;
	}, 0);

	var culcSP = document.getElementById('culcSP');
	culcSP.innerHTML = sumSP;
}

function save() {
	var saveNumber = document.getElementById('saveDataNum');
	var saveWord = document.getElementById('saveDataName').value;

	selectNumber= saveNumber.options.selectedIndex;
	saveNumber.options[selectNumber].textContent = saveNumber.options.selectedIndex+":"+saveWord;

	var saveNumberArrays = [];
	for(var i=0; i<saveNumber.options.length; i++) {
		var obj = saveNumber.options[i].textContent;
		saveNumberArrays.push(obj);
	}

	localStorage.setItem('startKey',JSON.stringify(saveNumberArrays));

	var saveDataArrays = [	document.getElementById('saveDataName').value,
				document.getElementById('skillDrug').value,
				document.getElementById('currentLv').value,
				document.getElementById('changeSelectA').value,
				document.getElementById('changeSelectB').value,

				document.getElementById('SC01').options.selectedIndex,
				document.getElementById('SC02').options.selectedIndex,
				document.getElementById('SC03').options.selectedIndex,
				document.getElementById('SC04').options.selectedIndex,
				document.getElementById('SC05').options.selectedIndex,
				document.getElementById('SC06').options.selectedIndex,
				document.getElementById('SC07').options.selectedIndex,
				document.getElementById('SC08').options.selectedIndex,

				document.getElementById('AR01').options.selectedIndex,
				document.getElementById('AR02').options.selectedIndex,
				document.getElementById('AR03').options.selectedIndex,
				document.getElementById('AR04').options.selectedIndex,
				document.getElementById('AR05').options.selectedIndex,
				document.getElementById('AR06').options.selectedIndex,

				document.getElementById('AS01').options.selectedIndex,
				document.getElementById('AS02').options.selectedIndex,
				document.getElementById('AS03').options.selectedIndex,
				document.getElementById('AS04').options.selectedIndex,
				document.getElementById('AS05').options.selectedIndex,
				document.getElementById('AS06').options.selectedIndex,

				document.getElementById('SN01').options.selectedIndex,
				document.getElementById('SN02').options.selectedIndex,
				document.getElementById('SN03').options.selectedIndex,
				document.getElementById('SN04').options.selectedIndex,
				document.getElementById('SN05').options.selectedIndex,
				document.getElementById('SN06').options.selectedIndex,
				document.getElementById('SN07').options.selectedIndex,

				document.getElementById('TH01').options.selectedIndex,
				document.getElementById('TH02').options.selectedIndex,
				document.getElementById('TH03').options.selectedIndex,
				document.getElementById('TH04').options.selectedIndex,
				document.getElementById('TH05').options.selectedIndex,
				document.getElementById('TH06').options.selectedIndex,
				document.getElementById('TH07').options.selectedIndex,
				document.getElementById('TH08').options.selectedIndex,
				document.getElementById('TH09').options.selectedIndex,
				document.getElementById('TH10').options.selectedIndex,
				document.getElementById('TH11').options.selectedIndex,
				document.getElementById('TH12').options.selectedIndex,

				document.getElementById('KN01').options.selectedIndex,
				document.getElementById('KN02').options.selectedIndex,
				document.getElementById('KN03').options.selectedIndex,
				document.getElementById('KN04').options.selectedIndex,
				document.getElementById('KN05').options.selectedIndex,
				document.getElementById('KN06').options.selectedIndex,
				document.getElementById('KN07').options.selectedIndex,
				document.getElementById('KN08').options.selectedIndex,
				document.getElementById('KN09').options.selectedIndex,
				document.getElementById('KN10').options.selectedIndex,
				document.getElementById('KN11').options.selectedIndex,
				document.getElementById('KN12').options.selectedIndex,
				document.getElementById('KN13').options.selectedIndex
	];

	localStorage.setItem(document.getElementById('saveDataNum	').value,JSON.stringify(saveDataArrays));
}

function load() {
	var loadData = JSON.parse(localStorage.getItem(document.getElementById('saveDataNum').value));

	document.getElementById('saveDataName').value = loadData[0];
	document.getElementById('skillDrug').value = loadData[1];
	document.getElementById('currentLv').value = loadData[2];
	document.getElementById('changeSelectA').value = loadData[3];
	document.getElementById('changeSelectB').value = loadData[4];

	document.getElementById('SC01').options.selectedIndex = loadData[5];
	document.getElementById('SC02').options.selectedIndex = loadData[6];
	document.getElementById('SC03').options.selectedIndex = loadData[7];
	document.getElementById('SC04').options.selectedIndex = loadData[8];
	document.getElementById('SC05').options.selectedIndex = loadData[9];
	document.getElementById('SC06').options.selectedIndex = loadData[10];
	document.getElementById('SC07').options.selectedIndex = loadData[11];
	document.getElementById('SC08').options.selectedIndex = loadData[12];

	document.getElementById('AR01').options.selectedIndex = loadData[13];
	document.getElementById('AR02').options.selectedIndex = loadData[14];
	document.getElementById('AR03').options.selectedIndex = loadData[15];
	document.getElementById('AR04').options.selectedIndex = loadData[16];
	document.getElementById('AR05').options.selectedIndex = loadData[17];
	document.getElementById('AR06').options.selectedIndex = loadData[18];

	document.getElementById('AS01').options.selectedIndex = loadData[19];
	document.getElementById('AS02').options.selectedIndex = loadData[20];
	document.getElementById('AS03').options.selectedIndex = loadData[21];
	document.getElementById('AS04').options.selectedIndex = loadData[22];
	document.getElementById('AS05').options.selectedIndex = loadData[23];
	document.getElementById('AS06').options.selectedIndex = loadData[24];

	document.getElementById('SN01').options.selectedIndex = loadData[25];
	document.getElementById('SN02').options.selectedIndex = loadData[26];
	document.getElementById('SN03').options.selectedIndex = loadData[27];
	document.getElementById('SN04').options.selectedIndex = loadData[28];
	document.getElementById('SN05').options.selectedIndex = loadData[29];
	document.getElementById('SN06').options.selectedIndex = loadData[30];
	document.getElementById('SN07').options.selectedIndex = loadData[31];

	document.getElementById('TH01').options.selectedIndex = loadData[32];
	document.getElementById('TH02').options.selectedIndex = loadData[33];
	document.getElementById('TH03').options.selectedIndex = loadData[34];
	document.getElementById('TH04').options.selectedIndex = loadData[35];
	document.getElementById('TH05').options.selectedIndex = loadData[36];
	document.getElementById('TH06').options.selectedIndex = loadData[37];
	document.getElementById('TH07').options.selectedIndex = loadData[38];
	document.getElementById('TH08').options.selectedIndex = loadData[39];
	document.getElementById('TH09').options.selectedIndex = loadData[40];
	document.getElementById('TH10').options.selectedIndex = loadData[41];
	document.getElementById('TH11').options.selectedIndex = loadData[42];
	document.getElementById('TH12').options.selectedIndex = loadData[43];

	document.getElementById('KN01').options.selectedIndex = loadData[44];
	document.getElementById('KN02').options.selectedIndex = loadData[45];
	document.getElementById('KN03').options.selectedIndex = loadData[46];
	document.getElementById('KN04').options.selectedIndex = loadData[47];
	document.getElementById('KN05').options.selectedIndex = loadData[48];
	document.getElementById('KN06').options.selectedIndex = loadData[49];
	document.getElementById('KN07').options.selectedIndex = loadData[50];
	document.getElementById('KN08').options.selectedIndex = loadData[51];
	document.getElementById('KN09').options.selectedIndex = loadData[52];
	document.getElementById('KN10').options.selectedIndex = loadData[53];
	document.getElementById('KN11').options.selectedIndex = loadData[54];
	document.getElementById('KN12').options.selectedIndex = loadData[55];
	document.getElementById('KN13').options.selectedIndex = loadData[56];
	
	DTskill();
	culcSP();
	remainSP();
	totalLv();
}

function remove() {
	localStorage.removeItem( document.getElementById('saveDataNum').selectedIndex);

	document.skillSim.reset();
	document.saveData.reset();
}