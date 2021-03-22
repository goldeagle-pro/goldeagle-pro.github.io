window.onload = loading();

function loading() {
	var wave = JSON.parse(localStorage.getItem('startKey'));
	
	for(var i=0; i<wave.length; i++) {
		document.getElementById('saveDataNum').options[i].textContent = wave[i]; 
	}
}

function DTskill() {
	var MU01 = document.getElementById('MU01').selectedIndex;
	var MU02 = document.getElementById('MU02').selectedIndex;
	var MU03 = document.getElementById('MU03').selectedIndex;
	var MU04 = document.getElementById('MU04').selectedIndex;
	var MU05 = document.getElementById('MU05').selectedIndex;
	var MU06 = document.getElementById('MU06').selectedIndex;
	var MU07 = document.getElementById('MU07').selectedIndex;

	var SO01 = document.getElementById('SO01').selectedIndex;
	var SO02 = document.getElementById('SO02').selectedIndex;
	var SO03 = document.getElementById('SO03').selectedIndex;
	var SO04 = document.getElementById('SO04').selectedIndex;
	var SO05 = document.getElementById('SO05').selectedIndex;
	var SO06 = document.getElementById('SO06').selectedIndex;
	var SO07 = document.getElementById('SO07').selectedIndex;
	var SO08 = document.getElementById('SO08').selectedIndex;
	var SO08 = document.getElementById('SO09').selectedIndex;

	var EN01 = document.getElementById('EN01').selectedIndex;
	var EN02 = document.getElementById('EN02').selectedIndex;
	var EN03 = document.getElementById('EN03').selectedIndex;
	var EN04 = document.getElementById('EN04').selectedIndex;
	var EN05 = document.getElementById('EN05').selectedIndex;
	var EN06 = document.getElementById('EN06').selectedIndex;
	var EN07 = document.getElementById('EN07').selectedIndex;
	var EN08 = document.getElementById('EN08').selectedIndex;
	var EN09 = document.getElementById('EN09').selectedIndex;
	var EN10 = document.getElementById('EN10').selectedIndex;
	var EN11 = document.getElementById('EN11').selectedIndex;
	var EN12 = document.getElementById('EN12').selectedIndex;
	var EN13 = document.getElementById('EN13').selectedIndex;
	var EN14 = document.getElementById('EN14').selectedIndex;
	var EN15 = document.getElementById('EN15').selectedIndex;
	var EN16 = document.getElementById('EN16').selectedIndex;
	var EN17 = document.getElementById('EN17').selectedIndex;
	var EN18 = document.getElementById('EN18').selectedIndex;

	var PR01 = document.getElementById('PR01').selectedIndex;
	var PR02 = document.getElementById('PR02').selectedIndex;
	var PR03 = document.getElementById('PR03').selectedIndex;
	var PR04 = document.getElementById('PR04').selectedIndex;
	var PR05 = document.getElementById('PR05').selectedIndex;
	var PR06 = document.getElementById('PR06').selectedIndex;
	var PR07 = document.getElementById('PR07').selectedIndex;
	var PR08 = document.getElementById('PR08').selectedIndex;
	var PR09 = document.getElementById('PR09').selectedIndex;
	var PR10 = document.getElementById('PR10').selectedIndex;
	var PR11 = document.getElementById('PR11').selectedIndex;
	var PR12 = document.getElementById('PR12').selectedIndex;
	
	var WT01 = document.getElementById('WT01').selectedIndex;
	var WT02 = document.getElementById('WT02').selectedIndex;
	var WT03 = document.getElementById('WT03').selectedIndex;
	var WT04 = document.getElementById('WT04').selectedIndex;
	var WT05 = document.getElementById('WT05').selectedIndex;
	var WT06 = document.getElementById('WT06').selectedIndex;
	var WT07 = document.getElementById('WT07').selectedIndex;
	var WT08 = document.getElementById('WT08').selectedIndex;
	var WT09 = document.getElementById('WT09').selectedIndex;
	var WT10 = document.getElementById('WT10').selectedIndex;

	var MP01 = document.getElementById('MP01').selectedIndex;
	var MP02 = document.getElementById('MP02').selectedIndex;
	var MP03 = document.getElementById('MP03').selectedIndex;
	var MP04 = document.getElementById('MP04').selectedIndex;
	var MP05 = document.getElementById('MP05').selectedIndex;
	var MP06 = document.getElementById('MP06').selectedIndex;
	var MP07 = document.getElementById('MP07').selectedIndex;
	var MP08 = document.getElementById('MP08').selectedIndex;
	var MP09 = document.getElementById('MP09').selectedIndex;
	var MP10 = document.getElementById('MP10').selectedIndex;

	var SG01 = document.getElementById('SG01').selectedIndex;
	var SG02 = document.getElementById('SG02').selectedIndex;
	var SG03 = document.getElementById('SG03').selectedIndex;
	var SG04 = document.getElementById('SG04').selectedIndex;
	var SG05 = document.getElementById('SG05').selectedIndex;
	var SG06 = document.getElementById('SG06').selectedIndex;
	var SG07 = document.getElementById('SG07').selectedIndex;
	var SG08 = document.getElementById('SG08').selectedIndex;
	var SG09 = document.getElementById('SG09').selectedIndex;
	var SG10 = document.getElementById('SG10').selectedIndex;
	var SG11 = document.getElementById('SG11').selectedIndex;
	var SG12 = document.getElementById('SG12').selectedIndex;
	var SG13 = document.getElementById('SG13').selectedIndex;

	var BS01 = document.getElementById('BS01').selectedIndex;
	var BS02 = document.getElementById('BS02').selectedIndex;
	var BS03 = document.getElementById('BS03').selectedIndex;
	var BS04 = document.getElementById('BS04').selectedIndex;
	var BS05 = document.getElementById('BS05').selectedIndex;
	var BS06 = document.getElementById('BS06').selectedIndex;
	var BS07 = document.getElementById('BS07').selectedIndex;
	var BS08 = document.getElementById('BS08').selectedIndex;
	var BS09 = document.getElementById('BS09').selectedIndex;
	var BS10 = document.getElementById('BS10').selectedIndex;


	var skillMU01 = document.getElementById('skillMU01');
		textMU01 = MU01*(MU01+1)/2;
			skillMU01.innerHTML = textMU01;
	var skillMU02 = document.getElementById('skillMU02');
		textMU02 = MU02*(MU02+1)/2;
			skillMU02.innerHTML = textMU02;
	var skillMU03 = document.getElementById('skillMU03');
		textMU03 = MU03*(MU03+1)/2;
			skillMU03.innerHTML =textMU03;
	var skillMU04 = document.getElementById('skillMU04');
		textMU04 = MU04*(MU04+1)/2;
			skillMU04.innerHTML =textMU04;
	var skillMU05 = document.getElementById('skillMU05');
		textMU05 = MU05*(MU05+1)/2;
			skillMU05.innerHTML =textMU05;
	var skillMU06 = document.getElementById('skillMU06');
		textMU06 = MU06*(MU06+1)/2;
			skillMU06.innerHTML =textMU06;
	var skillMU07 = document.getElementById('skillMU07');
		textMU07 = MU07*(MU07+1);
			skillMU07.innerHTML = textMU07;
	
	var skillSO01 = document.getElementById('skillSO01');
		textSO01 = SO01*(SO01+1)/2;
			skillSO01.innerHTML = textSO01;
	var skillSO02 = document.getElementById('skillSO02');
		textSO02 = SO02*(SO02+1)/2;
			skillSO02.innerHTML = textSO02;
	var skillSO03 = document.getElementById('skillSO03');
		textSO03 = SO03*(SO03+1)/2;
			skillSO03.innerHTML = textSO03;
	var skillSO04 = document.getElementById('skillSO04');
		textSO04 = SO04*(SO04+1)/2;
			skillSO04.innerHTML = textSO04;
	var skillSO05 = document.getElementById('skillSO05');
		textSO05 = SO05*(SO05+1)/2;
			skillSO05.innerHTML = textSO05;
	var skillSO06 = document.getElementById('skillSO06');
		textSO06 = SO06*(SO06+1)/2;
			skillSO06.innerHTML = textSO06;
	var skillSO07 = document.getElementById('skillSO07');
		textSO07 = SO07*(SO07+1)/2;
			skillSO07.innerHTML = textSO07;
	var skillSO08 = document.getElementById('skillSO08');
		textSO08 = SO08*(SO08+1);
			skillSO08.innerHTML = textSO08;
	var skillSO09 = document.getElementById('skillSO09');
		textSO09 = SO09*(SO09+1);
			skillSO09.innerHTML = textSO09;					

	var skillEN01 = document.getElementById('skillEN01');
		textEN01 = EN01*(EN01+1)/2;
			skillEN01.innerHTML = textEN01;
	var skillEN02 = document.getElementById('skillEN02');
		textEN02 = EN02*(EN02+1);
			skillEN02.innerHTML = textEN02;
	var skillEN03 = document.getElementById('skillEN03');
		textEN03 = EN03*(EN03+1);
			skillEN03.innerHTML = textEN03;
	var skillEN04 = document.getElementById('skillEN04');
		textEN04 = EN04*(EN04+1);
			skillEN04.innerHTML = textEN04;
	var skillEN05 = document.getElementById('skillEN05');
		textEN05 = EN05*(EN05+1);
			skillEN05.innerHTML = textEN05;
	var skillEN06 = document.getElementById('skillEN06');
		textEN06 = EN06*(EN06+1);
			skillEN06.innerHTML = textEN06;
	var skillEN07 = document.getElementById('skillEN07');
		textEN07 = EN07*(EN07+1);
			skillEN07.innerHTML = textEN07;
	var skillEN08 = document.getElementById('skillEN08');
		textEN08 = EN08*(EN08+1);
			skillEN08.innerHTML = textEN08;
	var skillEN09 = document.getElementById('skillEN09');
		textEN09 = EN09*(EN09+1);
			skillEN09.innerHTML = textEN09;
	var skillEN10 = document.getElementById('skillEN10');
		textEN10 = EN10*(EN10+1);
			skillEN10.innerHTML = textEN10;
	var skillEN11 = document.getElementById('skillEN11');
		textEN11 = EN11*(EN11+1);
			skillEN11.innerHTML = textEN11;
	var skillEN12 = document.getElementById('skillEN12');
		textEN12 = EN12*(EN12+1);
			skillEN12.innerHTML = textEN12;
	var skillEN13 = document.getElementById('skillEN13');
		textEN13 = EN13*(EN13+1);
			skillEN13.innerHTML = textEN13;
	var skillEN14 = document.getElementById('skillEN14');
		textEN14 = EN14*(EN14+1);
			skillEN14.innerHTML = textEN14;
	var skillEN15 = document.getElementById('skillEN15');
		textEN15 = EN15*(EN15+1);
			skillEN15.innerHTML = textEN15;
	var skillEN16 = document.getElementById('skillEN16');
		textEN16 = EN16*(EN16+1)/2;
			skillEN16.innerHTML = textEN16;
	var skillEN17 = document.getElementById('skillEN17');
		textEN17 = EN17*(EN17+1);
			skillEN17.innerHTML = textEN17;
	var skillEN18 = document.getElementById('skillEN18');
		textEN18 = EN18*(EN18+1)/2;
			skillEN18.innerHTML = textEN18;		
	
	var skillPR01 = document.getElementById('skillPR01');
		textPR01 = PR01*(PR01+1)/2;
			skillPR01.innerHTML = textPR01;
	var skillPR02 = document.getElementById('skillPR02');
		textPR02 = PR02*(PR02+1)/2;
			skillPR02.innerHTML = textPR02;
	var skillPR03 = document.getElementById('skillPR03');
		textPR03 = PR03*(PR03+1)/2;
			skillPR03.innerHTML = textPR03;
	var skillPR04 = document.getElementById('skillPR04');
		textPR04 = PR04*(PR04+1);
			skillPR04.innerHTML = textPR04;
	var skillPR05 = document.getElementById('skillPR05');
		textPR05 = PR05*(PR05+1);
			skillPR05.innerHTML = textPR05;
	var skillPR06 = document.getElementById('skillPR06');
		textPR06 = PR06*(PR06+1);
			skillPR06.innerHTML = textPR06;
	var skillPR07 = document.getElementById('skillPR07');
		textP07 = PR07*(PR07+1);
			skillPR07.innerHTML = textP07;
	var skillPR08 = document.getElementById('skillPR08');
		textP08 = PR08*(PR08+1);
			skillPR08.innerHTML = textP08;
	var skillPR09 = document.getElementById('skillPR09');
		textPR09 = PR09*(PR09+1);
			skillPR09.innerHTML = textPR09;
	var skillPR10 = document.getElementById('skillPR10');
		textPR10 = PR10*(PR10+1);
			skillPR10.innerHTML = textPR10;
	var skillPR11 = document.getElementById('skillPR11');
		textPR11 = PR11*(PR11+1)/2;
			skillPR11.innerHTML = textPR11;
	var skillPR12 = document.getElementById('skillPR12');
		textPR12 = PR12*(PR12+1);
			skillPR12.innerHTML = textPR12;

	var skillWT01 = document.getElementById('skillWT01');
		textWT01 = WT01*(WT01+1);
			skillWT01.innerHTML = textWT01;
	var skillWT02 = document.getElementById('skillWT02');
		textWT02 = WT02*(WT02+1)/2;
			skillWT02.innerHTML = textWT02;
	var skillWT03 = document.getElementById('skillWT03');
		textWT03 = WT03*(WT03+1)/2;
			skillWT03.innerHTML = textWT03;
	var skillWT04 = document.getElementById('skillWT04');
		textWT04 = WT04*(WT04+1)/2;
			skillWT04.innerHTML = textWT04;
	var skillWT05 = document.getElementById('skillWT05');
		textWT05 = WT05*(WT05+1)/2;
			skillWT05.innerHTML = textWT05;
	var skillWT06 = document.getElementById('skillWT06');
		textWT06 = WT06*(WT06+1)/2;
			skillWT06.innerHTML = textWT06;
	var skillWT07 = document.getElementById('skillWT07');
		textWT07 = WT07*(WT07+1)/2;
			skillWT07.innerHTML = textWT07;
	var skillWT08 = document.getElementById('skillWT08');
		textWT08 = WT08*(WT08+1);
			skillWT08.innerHTML = textWT08;
	var skillWT09 = document.getElementById('skillWT09');
		textWT09 = WT09*(WT09+1);
			skillWT09.innerHTML = textWT09;
	var skillWT10 = document.getElementById('skillWT10');
		textWT10 = WT10*(WT10+1);
			skillWT10.innerHTML = textWT10;
	
	var skillMP01 = document.getElementById('skillMP01');
		textMP01 = MP01*(MP01+1)/2;
			skillMP01.innerHTML = textMP01;
	var skillMP02 = document.getElementById('skillMP02');
		textMP02 = MP02*(MP02+1)/2;
			skillMP02.innerHTML = textMP02;
	var skillMP03 = document.getElementById('skillMP03');
		textMP03 = MP03*(MP03+1);
			skillMP03.innerHTML = textMP03;
	var skillMP04 = document.getElementById('skillMP04');
		textMP04 = MP04*(MP04+1);
			skillMP04.innerHTML = textMP04;
	var skillMP05 = document.getElementById('skillMP05');
		textMP05 = MP05*(MP05+1);
			skillMP05.innerHTML = textMP05;
	var skillMP06 = document.getElementById('skillMP06');
		textMP06 = MP06*(MP06+1);
			skillMP06.innerHTML = textMP06;
	var skillMP07 = document.getElementById('skillMP07');
		textMP07 = MP07*(MP07+1)/2;
			skillMP07.innerHTML = textMP07;
	var skillMP08 = document.getElementById('skillMP08');
		textMP08 = MP08*(MP08+1)/2;
			skillMP08.innerHTML = textMP08;
	var skillMP09 = document.getElementById('skillMP09');
		textMP09 = MP09*(MP09+1);
			skillMP09.innerHTML = textMP09;
	var skillMP10 = document.getElementById('skillMP10');
		textMP10 = MP10*(MP10+1);
			skillMP10.innerHTML = textMP10;

	var skillSG01 = document.getElementById('skillSG01');
		textSG01 = SG01*(SG01+1);
			skillSG01.innerHTML = textSG01;
	var skillSG02 = document.getElementById('skillSG02');
		textSG02 = SG02*(SG02+1);
			skillSG02.innerHTML = textSG02;
	var skillSG03 = document.getElementById('skillSG03');
		textSG03 = SG03*(SG03+1);
			skillSG03.innerHTML = textSG03;
	var skillSG04 = document.getElementById('skillSG04');
		textSG04 = SG04*(SG04+1);
			skillSG04.innerHTML = textSG04;
	var skillSG05 = document.getElementById('skillSG05');
		textSG05 = SG05*(SG05+1);
			skillSG05.innerHTML = textSG05;
	var skillSG06 = document.getElementById('skillSG06');
		textSG06 = SG06*(SG06+1);
			skillSG06.innerHTML = textSG06;
	var skillSG07 = document.getElementById('skillSG07');
		textSG07 = SG07*(SG07+1);
			skillSG07.innerHTML = textSG07;
	var skillSG08 = document.getElementById('skillSG08');
		textSG08 = SG08*(SG08+1)/2;
			skillSG08.innerHTML = textSG08;
	var skillSG09 = document.getElementById('skillSG09');
		textSG09 = SG09*(SG09+1);
			skillSG09.innerHTML = textSG09;
	var skillSG10 = document.getElementById('skillSG10');
		textSG10 = SG10*(SG10+1);
			skillSG10.innerHTML = textSG10;
	var skillSG11 = document.getElementById('skillSG11');
		textSG11 = SG11*(SG11+1);
			skillSG11.innerHTML = textSG11;
	var skillSG12 = document.getElementById('skillSG12');
		textSG12 = SG12*(SG12+1);
			skillSG12.innerHTML = textSG12
	var skillSG13 = document.getElementById('skillSG13');
		textSG13 = SG13*(SG13+1);
			skillSG13.innerHTML = textSG13;

	var skillBS01 = document.getElementById('skillBS01');
		textBS01 = BS01*(BS01+1)/2;
			skillBS01.innerHTML = textBS01;
	var skillBS02 = document.getElementById('skillBS02');
		textBS02 = BS02*(BS02+1)/2;
			skillBS02.innerHTML = textBS02;
	var skillBS03 = document.getElementById('skillBS03');
		textBS03 = BS03*(BS03+1);
			skillBS03.innerHTML = textBS03;
	var skillBS04 = document.getElementById('skillBS04');
		textBS04 = BS04*(BS04+1)/2;
			skillBS04.innerHTML = textBS04;
	var skillBS05 = document.getElementById('skillBS05');
		textBS05 = BS05*(BS05+1);
			skillBS05.innerHTML = textBS05;
	var skillBS06 = document.getElementById('skillBS06');
		textBS06 = BS06*(BS06+1);
			skillBS06.innerHTML = textBS06;
	var skillBS07 = document.getElementById('skillBS07');
		textBS07 = BS07*(BS07+1);
			skillBS07.innerHTML = textBS07;
	var skillBS08 = document.getElementById('skillBS08');
		textB08 = BS08*(BS08+1)/2;
			skillBS08.innerHTML = textB08;
	var skillBS09 = document.getElementById('skillBS09');
		textBS09 = BS09*(BS09+1)/2;
			skillBS09.innerHTML = textBS09;
	var skillBS10 = document.getElementById('skillBS10');
		textBS10 = BS10*(BS10+1);
			skillBS10.innerHTML = textBS10;
}

function culcSP() {
	var skillSPs = [Number(document.getElementById('skillMU01').textContent),
			Number(document.getElementById('skillMU02').textContent),
			Number(document.getElementById('skillMU03').textContent),
			Number(document.getElementById('skillMU04').textContent),
			Number(document.getElementById('skillMU05').textContent),
			Number(document.getElementById('skillMU06').textContent),
			Number(document.getElementById('skillMU07').textContent),

			Number(document.getElementById('skillSO01').textContent),
			Number(document.getElementById('skillSO02').textContent),
			Number(document.getElementById('skillSO03').textContent),
			Number(document.getElementById('skillSO04').textContent),
			Number(document.getElementById('skillSO05').textContent),
			Number(document.getElementById('skillSO06').textContent),
			Number(document.getElementById('skillSO07').textContent),
			Number(document.getElementById('skillSO08').textContent),
			Number(document.getElementById('skillSO09').textContent),

			Number(document.getElementById('skillEN01').textContent),
			Number(document.getElementById('skillEN02').textContent),
			Number(document.getElementById('skillEN03').textContent),
			Number(document.getElementById('skillEN04').textContent),
			Number(document.getElementById('skillEN05').textContent),
			Number(document.getElementById('skillEN06').textContent),
			Number(document.getElementById('skillEN07').textContent),
			Number(document.getElementById('skillEN08').textContent),
			Number(document.getElementById('skillEN09').textContent),
			Number(document.getElementById('skillEN10').textContent),
			Number(document.getElementById('skillEN11').textContent),
			Number(document.getElementById('skillEN12').textContent),
			Number(document.getElementById('skillEN13').textContent),
			Number(document.getElementById('skillEN14').textContent),
			Number(document.getElementById('skillEN15').textContent),
			Number(document.getElementById('skillEN16').textContent),
			Number(document.getElementById('skillEN17').textContent),
			Number(document.getElementById('skillEN18').textContent),

			Number(document.getElementById('skillPR01').textContent),
			Number(document.getElementById('skillPR02').textContent),
			Number(document.getElementById('skillPR03').textContent),
			Number(document.getElementById('skillPR04').textContent),
			Number(document.getElementById('skillPR05').textContent),
			Number(document.getElementById('skillPR06').textContent),
			Number(document.getElementById('skillPR07').textContent),
			Number(document.getElementById('skillPR08').textContent),
			Number(document.getElementById('skillPR09').textContent),
			Number(document.getElementById('skillPR10').textContent),
			Number(document.getElementById('skillPR11').textContent),
			Number(document.getElementById('skillPR12').textContent),

			Number(document.getElementById('skillWT01').textContent),
			Number(document.getElementById('skillWT02').textContent),
			Number(document.getElementById('skillWT03').textContent),
			Number(document.getElementById('skillWT04').textContent),
			Number(document.getElementById('skillWT05').textContent),
			Number(document.getElementById('skillWT06').textContent),
			Number(document.getElementById('skillWT07').textContent),
			Number(document.getElementById('skillWT08').textContent),
			Number(document.getElementById('skillWT09').textContent),
			Number(document.getElementById('skillWT10').textContent),

			Number(document.getElementById('skillMP01').textContent),
			Number(document.getElementById('skillMP02').textContent),
			Number(document.getElementById('skillMP03').textContent),
			Number(document.getElementById('skillMP04').textContent),
			Number(document.getElementById('skillMP05').textContent),
			Number(document.getElementById('skillMP06').textContent),
			Number(document.getElementById('skillMP07').textContent),
			Number(document.getElementById('skillMP08').textContent),
			Number(document.getElementById('skillMP09').textContent),
			Number(document.getElementById('skillMP10').textContent),

			Number(document.getElementById('skillSG01').textContent),
			Number(document.getElementById('skillSG02').textContent),
			Number(document.getElementById('skillSG03').textContent),
			Number(document.getElementById('skillSG04').textContent),
			Number(document.getElementById('skillSG05').textContent),
			Number(document.getElementById('skillSG06').textContent),
			Number(document.getElementById('skillSG07').textContent),
			Number(document.getElementById('skillSG08').textContent),
			Number(document.getElementById('skillSG09').textContent),
			Number(document.getElementById('skillSG10').textContent),
			Number(document.getElementById('skillSG11').textContent),
			Number(document.getElementById('skillSG12').textContent),
			Number(document.getElementById('skillSG13').textContent),

			Number(document.getElementById('skillBS01').textContent),
			Number(document.getElementById('skillBS02').textContent),
			Number(document.getElementById('skillBS03').textContent),
			Number(document.getElementById('skillBS04').textContent),
			Number(document.getElementById('skillBS05').textContent),
			Number(document.getElementById('skillBS06').textContent),
			Number(document.getElementById('skillBS07').textContent),
			Number(document.getElementById('skillBS08').textContent),
			Number(document.getElementById('skillBS09').textContent),
			Number(document.getElementById('skillBS10').textContent),
];

	sumSP = skillSPs.reduce(function(sum, element) {
		return sum + element;
	},0);

	document.getElementById('culcSP').innerHTML = sumSP;
	

function save() {
	var saveNumber = document.getElementById('saveDataNum');
	var saveWord = document.getElementById('saveDataName').nodeValue;

	selectNumber = saveNumber.options.selectedIndex;
	saveNumber.options[selectNumber].textContent = saveNumber.options.selectedIndex + ":" + saveWord;

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

				document.getElementById('MU01').options.selectedIndex,
				document.getElementById('MU02').options.selectedIndex,
				document.getElementById('MU03').options.selectedIndex,
				document.getElementById('MU04').options.selectedIndex,
				document.getElementById('MU05').options.selectedIndex,
				document.getElementById('MU06').options.selectedIndex,
				document.getElementById('MU07').options.selectedIndex,

				document.getElementById('SO01').options.selectedIndex,
				document.getElementById('SO02').options.selectedIndex,
				document.getElementById('SO03').options.selectedIndex,
				document.getElementById('SO04').options.selectedIndex,
				document.getElementById('SO05').options.selectedIndex,
				document.getElementById('SO06').options.selectedIndex,
				document.getElementById('SO07').options.selectedIndex,
				document.getElementById('SO08').options.selectedIndex,
				document.getElementById('SO09').options.selectedIndex,

				document.getElementById('EN01').options.selectedIndex,
				document.getElementById('EN02').options.selectedIndex,
				document.getElementById('EN03').options.selectedIndex,
				document.getElementById('EN04').options.selectedIndex,
				document.getElementById('EN05').options.selectedIndex,
				document.getElementById('EN06').options.selectedIndex,
				document.getElementById('EN07').options.selectedIndex,
				document.getElementById('EN08').options.selectedIndex,
				document.getElementById('EN09').options.selectedIndex,
				document.getElementById('EN10').options.selectedIndex,
				document.getElementById('EN11').options.selectedIndex,
				document.getElementById('EN12').options.selectedIndex,
				document.getElementById('EN13').options.selectedIndex,
				document.getElementById('EN14').options.selectedIndex,
				document.getElementById('EN15').options.selectedIndex,
				document.getElementById('EN16').options.selectedIndex,
				document.getElementById('EN17').options.selectedIndex,
				document.getElementById('EN18').options.selectedIndex,

				document.getElementById('PR01').options.selectedIndex,
				document.getElementById('PR02').options.selectedIndex,
				document.getElementById('PR03').options.selectedIndex,
				document.getElementById('PR04').options.selectedIndex,
				document.getElementById('PR05').options.selectedIndex,
				document.getElementById('PR06').options.selectedIndex,
				document.getElementById('PR07').options.selectedIndex,
				document.getElementById('PR08').options.selectedIndex,
				document.getElementById('PR09').options.selectedIndex,
				document.getElementById('PR10').options.selectedIndex,
				document.getElementById('PR11').options.selectedIndex,
				document.getElementById('PR12').options.selectedIndex,

				document.getElementById('WT01').options.selectedIndex,
				document.getElementById('WT02').options.selectedIndex,
				document.getElementById('WT03').options.selectedIndex,
				document.getElementById('WT04').options.selectedIndex,
				document.getElementById('WT05').options.selectedIndex,
				document.getElementById('WT06').options.selectedIndex,
				document.getElementById('WT07').options.selectedIndex,
				document.getElementById('WT08').options.selectedIndex,
				document.getElementById('WT09').options.selectedIndex,
				document.getElementById('WT10').options.selectedIndex,

				document.getElementById('MP01').options.selectedIndex,
				document.getElementById('MP02').options.selectedIndex,
				document.getElementById('MP03').options.selectedIndex,
				document.getElementById('MP04').options.selectedIndex,
				document.getElementById('MP05').options.selectedIndex,
				document.getElementById('MP06').options.selectedIndex,
				document.getElementById('MP07').options.selectedIndex,
				document.getElementById('MP08').options.selectedIndex,
				document.getElementById('MP09').options.selectedIndex,
				document.getElementById('MP10').options.selectedIndex,

				document.getElementById('SG01').options.selectedIndex,
				document.getElementById('SG02').options.selectedIndex,
				document.getElementById('SG03').options.selectedIndex,
				document.getElementById('SG04').options.selectedIndex,
				document.getElementById('SG05').options.selectedIndex,
				document.getElementById('SG06').options.selectedIndex,
				document.getElementById('SG07').options.selectedIndex,
				document.getElementById('SG08').options.selectedIndex,
				document.getElementById('SG09').options.selectedIndex,
				document.getElementById('SG10').options.selectedIndex,
				document.getElementById('SG11').options.selectedIndex,
				document.getElementById('SG12').options.selectedIndex,
				document.getElementById('SG13').options.selectedIndex,

				document.getElementById('BS01').options.selectedIndex,
				document.getElementById('BS02').options.selectedIndex,
				document.getElementById('BS03').options.selectedIndex,
				document.getElementById('BS04').options.selectedIndex,
				document.getElementById('BS05').options.selectedIndex,
				document.getElementById('BS06').options.selectedIndex,
				document.getElementById('BS07').options.selectedIndex,
				document.getElementById('BS08').options.selectedIndex,
				document.getElementById('BS09').options.selectedIndex,
				document.getElementById('BS10').options.selectedIndex
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

	document.getElementById('MU01').options.selectedIndex = loadData[5];
	document.getElementById('MU02').options.selectedIndex = loadData[6];
	document.getElementById('MU03').options.selectedIndex = loadData[7];
	document.getElementById('MU04').options.selectedIndex = loadData[8];
	document.getElementById('MU05').options.selectedIndex = loadData[9];
	document.getElementById('MU06').options.selectedIndex = loadData[10];
	document.getElementById('MU07').options.selectedIndex = loadData[11];

	document.getElementById('SO01').options.selectedIndex = loadData[12];
	document.getElementById('SO02').options.selectedIndex = loadData[13];
	document.getElementById('SO03').options.selectedIndex = loadData[14];
	document.getElementById('SO04').options.selectedIndex = loadData[15];
	document.getElementById('SO05').options.selectedIndex = loadData[16];
	document.getElementById('SO06').options.selectedIndex = loadData[17];
	document.getElementById('SO07').options.selectedIndex = loadData[18];
	document.getElementById('SO08').options.selectedIndex = loadData[19];
	document.getElementById('SO09').options.selectedIndex = loadData[20];

	document.getElementById('EN01').options.selectedIndex = loadData[21];
	document.getElementById('EN02').options.selectedIndex = loadData[22];
	document.getElementById('EN03').options.selectedIndex = loadData[23];
	document.getElementById('EN04').options.selectedIndex = loadData[24];
	document.getElementById('EN05').options.selectedIndex = loadData[25];
	document.getElementById('EN06').options.selectedIndex = loadData[26];
	document.getElementById('EN07').options.selectedIndex = loadData[27];
	document.getElementById('EN08').options.selectedIndex = loadData[28];
	document.getElementById('EN09').options.selectedIndex = loadData[29];
	document.getElementById('EN10').options.selectedIndex = loadData[30];
	document.getElementById('EN11').options.selectedIndex = loadData[31];
	document.getElementById('EN12').options.selectedIndex = loadData[32];
	document.getElementById('EN13').options.selectedIndex = loadData[33];
	document.getElementById('EN14').options.selectedIndex = loadData[34];
	document.getElementById('EN15').options.selectedIndex = loadData[35];
	document.getElementById('EN16').options.selectedIndex = loadData[36];
	document.getElementById('EN17').options.selectedIndex = loadData[37];
	document.getElementById('EN18').options.selectedIndex = loadData[38];

	document.getElementById('PR01').options.selectedIndex = loadData[39];
	document.getElementById('PR02').options.selectedIndex = loadData[40];
	document.getElementById('PR03').options.selectedIndex = loadData[41];
	document.getElementById('PR04').options.selectedIndex = loadData[42];
	document.getElementById('PR05').options.selectedIndex = loadData[43];
	document.getElementById('PR06').options.selectedIndex = loadData[44];
	document.getElementById('PR07').options.selectedIndex = loadData[45];
	document.getElementById('PR08').options.selectedIndex = loadData[46];
	document.getElementById('PR09').options.selectedIndex = loadData[47];
	document.getElementById('PR10').options.selectedIndex = loadData[48];
	document.getElementById('PR11').options.selectedIndex = loadData[49];
	document.getElementById('PR12').options.selectedIndex = loadData[50];

	document.getElementById('WT01').options.selectedIndex = loadData[51];
	document.getElementById('WT02').options.selectedIndex = loadData[52];
	document.getElementById('WT03').options.selectedIndex = loadData[53];
	document.getElementById('WT04').options.selectedIndex = loadData[54];
	document.getElementById('WT05').options.selectedIndex = loadData[55];
	document.getElementById('WT06').options.selectedIndex = loadData[56];
	document.getElementById('WT07').options.selectedIndex = loadData[57];
	document.getElementById('WT08').options.selectedIndex = loadData[58];
	document.getElementById('WT09').options.selectedIndex = loadData[59];
	document.getElementById('WT10').options.selectedIndex = loadData[60];

	document.getElementById('MP01').options.selectedIndex = loadData[61];
	document.getElementById('MP02').options.selectedIndex = loadData[62];
	document.getElementById('MP03').options.selectedIndex = loadData[63];
	document.getElementById('MP04').options.selectedIndex = loadData[64];
	document.getElementById('MP05').options.selectedIndex = loadData[65];
	document.getElementById('MP06').options.selectedIndex = loadData[66];
	document.getElementById('MP07').options.selectedIndex = loadData[67];
	document.getElementById('MP08').options.selectedIndex = loadData[68];
	document.getElementById('MP09').options.selectedIndex = loadData[69];
	document.getElementById('MP10').options.selectedIndex = loadData[70];

	document.getElementById('SG01').options.selectedIndex = loadData[71];
	document.getElementById('SG02').options.selectedIndex = loadData[72];
	document.getElementById('SG03').options.selectedIndex = loadData[73];
	document.getElementById('SG04').options.selectedIndex = loadData[74];
	document.getElementById('SG05').options.selectedIndex = loadData[75];
	document.getElementById('SG06').options.selectedIndex = loadData[76];
	document.getElementById('SG07').options.selectedIndex = loadData[77];
	document.getElementById('SG08').options.selectedIndex = loadData[78];
	document.getElementById('SG09').options.selectedIndex = loadData[79];
	document.getElementById('SG10').options.selectedIndex = loadData[80];
	document.getElementById('SG11').options.selectedIndex = loadData[81];
	document.getElementById('SG12').options.selectedIndex = loadData[82];
	document.getElementById('SG13').options.selectedIndex = loadData[83];

	document.getElementById('BS01').options.selectedIndex = loadData[84];
	document.getElementById('BS02').options.selectedIndex = loadData[85];
	document.getElementById('BS03').options.selectedIndex = loadData[86];
	document.getElementById('BS04').options.selectedIndex = loadData[87];
	document.getElementById('BS05').options.selectedIndex = loadData[88];
	document.getElementById('BS06').options.selectedIndex = loadData[89];
	document.getElementById('BS07').options.selectedIndex = loadData[90];
	document.getElementById('BS08').options.selectedIndex = loadData[91];
	document.getElementById('BS09').options.selectedIndex = loadData[92];
	document.getElementById('BS10').options.selectedIndex = loadData[93];

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