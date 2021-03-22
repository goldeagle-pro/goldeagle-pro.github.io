window.onload = loading();

function loading() {
	var wave = JSON.parse(localStorage.getItem('startKey'));
	
	for(var i=0; i<wave.length; i++) {
		document.getElementById('saveDataNum').options[i].textContent = wave[i]; 
	}
}

function DTskill() {
	var MA01 = document.getElementById('MA01').selectedIndex;
	var MA02 = document.getElementById('MA02').selectedIndex;
	var MA03 = document.getElementById('MA03').selectedIndex;
	var MA04 = document.getElementById('MA04').selectedIndex;
	var MA05 = document.getElementById('MA05').selectedIndex;
	var MA06 = document.getElementById('MA06').selectedIndex;
	var MA07 = document.getElementById('MA07').selectedIndex;

	var BD01 = document.getElementById('BD01').selectedIndex;
	var BD02 = document.getElementById('BD02').selectedIndex;
	var BD03 = document.getElementById('BD03').selectedIndex;
	var BD04 = document.getElementById('BD04').selectedIndex;
	var BD05 = document.getElementById('BD05').selectedIndex;
	var BD06 = document.getElementById('BD06').selectedIndex;

	var DN01 = document.getElementById('DN01').selectedIndex;
	var DN02 = document.getElementById('DN02').selectedIndex;
	var DN03 = document.getElementById('DN03').selectedIndex;
	var DN04 = document.getElementById('DN04').selectedIndex;
	var DN05 = document.getElementById('DN05').selectedIndex;

	var UH01 = document.getElementById('UH01').selectedIndex;
	var UH02 = document.getElementById('UH02').selectedIndex;
	var UH03 = document.getElementById('UH03').selectedIndex;
	var UH04 = document.getElementById('UH04').selectedIndex;
	var UH05 = document.getElementById('UH05').selectedIndex;
	var UH06 = document.getElementById('UH06').selectedIndex;
	var UH07 = document.getElementById('UH07').selectedIndex;
	var UH08 = document.getElementById('UH08').selectedIndex;
	var UH09 = document.getElementById('UH09').selectedIndex;

	var JK01 = document.getElementById('JK01').selectedIndex;
	var JK02 = document.getElementById('JK02').selectedIndex;
	var JK03 = document.getElementById('JK03').selectedIndex;
	var JK04 = document.getElementById('JK04').selectedIndex;
	var JK05 = document.getElementById('JK05').selectedIndex;
	var JK06 = document.getElementById('JK06').selectedIndex;
	var JK07 = document.getElementById('JK07').selectedIndex;
	var JK08 = document.getElementById('JK08').selectedIndex;
	var JK09 = document.getElementById('JK09').selectedIndex;
	var JK10 = document.getElementById('JK10').selectedIndex;
	var JK11 = document.getElementById('JK11').selectedIndex;
	var JK12 = document.getElementById('JK12').selectedIndex;
	var JK13 = document.getElementById('JK13').selectedIndex;
	var JK14 = document.getElementById('JK14').selectedIndex;
	var JK15 = document.getElementById('JK15').selectedIndex;
	var JK16 = document.getElementById('JK16').selectedIndex;
	var JK17 = document.getElementById('JK17').selectedIndex;
	var JK18 = document.getElementById('JK18').selectedIndex;
	var JK19 = document.getElementById('JK19').selectedIndex;
	var JK20 = document.getElementById('JK20').selectedIndex;
	var JK21 = document.getElementById('JK21').selectedIndex;
	var JK22 = document.getElementById('JK22').selectedIndex;
	var JK23 = document.getElementById('JK23').selectedIndex;
	var JK24 = document.getElementById('JK24').selectedIndex;
	var JK25 = document.getElementById('JK25').selectedIndex;
	var JK26 = document.getElementById('JK26').selectedIndex;
	var JK27 = document.getElementById('JK27').selectedIndex;
	var JK28 = document.getElementById('JK28').selectedIndex;
	var JK28 = document.getElementById('JK28').selectedIndex;
	var JK30 = document.getElementById('JK30').selectedIndex;
	var JK31 = document.getElementById('JK31').selectedIndex;
	var JK29 = document.getElementById('JK29').selectedIndex;
	var JK32 = document.getElementById('JK32').selectedIndex;
	var JK33 = document.getElementById('JK33').selectedIndex;
	var JK34 = document.getElementById('JK34').selectedIndex;
	var JK35 = document.getElementById('JK35').selectedIndex;
	var JK36 = document.getElementById('JK36').selectedIndex;
	var JK37 = document.getElementById('JK37').selectedIndex;

	var MI01 = document.getElementById('MI01').selectedIndex;
	var MI02 = document.getElementById('MI02').selectedIndex;
	var MI03 = document.getElementById('MI03').selectedIndex;
	var MI04 = document.getElementById('MI04').selectedIndex;
	var MI05 = document.getElementById('MI05').selectedIndex;
	var MI06 = document.getElementById('MI06').selectedIndex;
	var MI07 = document.getElementById('MI07').selectedIndex;
	var MI08 = document.getElementById('MI08').selectedIndex;
	var MI09 = document.getElementById('MI09').selectedIndex;
	

	var skillMA01 = document.getElementById('skillMA01');
		textMA01 = MA01*(MA01+1);
			skillMA01.innerHTML = textMA01;
	var skillMA02 = document.getElementById('skillMA02');
		textMA02 = MA02*(MA02+1);
			skillMA02.innerHTML = textMA02;
	var skillMA03 = document.getElementById('skillMA03');
		textMA03 = MA03*(MA03+1);
			skillMA03.innerHTML =textMA03;
	var skillMA04 = document.getElementById('skillMA04');
		textMA04 = MA04*(MA04+1);
			skillMA04.innerHTML =textMA04;
	var skillMA05 = document.getElementById('skillMA05');
		textMA05 = MA05*(MA05+1);
			skillMA05.innerHTML =textMA05;
	var skillMA06 = document.getElementById('skillMA06');
		textMA06 = MA06*(MA06+1);
			skillMA06.innerHTML =textMA06;
	var skillMA07 = document.getElementById('skillMA07');
		textMA07 = MA07*(MA07+1)/2;
			skillMA07.innerHTML = textMA07;
	
	var skillBD01 = document.getElementById('skillBD01');
		textBD01 = BD01*(BD01+1)/2;
			skillBD01.innerHTML = textBD01;
	var skillBD02 = document.getElementById('skillBD02');
		textBD02 = BD02*(BD02+1)/2;
			skillBD02.innerHTML = textBD02;
	var skillBD03 = document.getElementById('skillBD03');
		textBD03 = BD03*(BD03+1)/2;
			skillBD03.innerHTML = textBD03;
	var skillBD04 = document.getElementById('skillBD04');
		textBD04 = BD04*(BD04+1)/2;
			skillBD04.innerHTML = textBD04;
	var skillBD05 = document.getElementById('skillBD05');
		textBD05 = BD05*(BD05+1)/2;
			skillBD05.innerHTML = textBD05;
	var skillBD06 = document.getElementById('skillBD06');
		textBD06 = BD06*(BD06+1)/2;
			skillBD06.innerHTML = textBD06;

	var skillDN01 = document.getElementById('skillDN01');
		textDN01 = DN01*(DN01+1)/2;
			skillDN01.innerHTML = textDN01;
	var skillDN02 = document.getElementById('skillDN02');
		textDN02 = DN02*(DN02+1)/2;
			skillDN02.innerHTML = textDN02;
	var skillDN03 = document.getElementById('skillDN03');
		textDN03 = DN03*(DN03+1)/2;
			skillDN03.innerHTML = textDN03;
	var skillDN04 = document.getElementById('skillDN04');
		textDN04 = DN04*(DN04+1)/2; 
			skillDN04.innerHTML = textDN04;
	var skillDN05 = document.getElementById('skillDN05');
		textDN05 = DN05*(DN05+1)/2;
			skillDN05.innerHTML = textDN05;

	var skillUH01 = document.getElementById('skillUH01');
		textUH01 = UH01*(UH01+1)/2;
			skillUH01.innerHTML = textUH01;
	var skillUH02 = document.getElementById('skillUH02');
		textUH02 = UH02*(UH02+1)/2;
			skillUH02.innerHTML = textUH02;
	var skillUH03 = document.getElementById('skillUH03');
		textUH03 = UH03*(UH03+1)/2;
			skillUH03.innerHTML = textUH03;
	var skillUH04 = document.getElementById('skillUH04');
		textUH04 = UH04*(UH04+1)/2;
			skillUH04.innerHTML = textUH04;
	var skillUH05= document.getElementById('skillUH05');
		textUH05= UH05*(UH05+1)/2;
			skillUH05.innerHTML = textUH05;
	var skillUH06 = document.getElementById('skillUH06');
		textUH06 = UH06*(UH06+1);
			skillUH06.innerHTML = textUH06;
	var skillUH07 = document.getElementById('skillUH07');
		textUH07 = UH07*(UH07+1);
			skillUH07.innerHTML = textUH07;
	var skillUH08 = document.getElementById('skillUH08');
		textUH08 = UH08*(UH08+1);
			skillUH08.innerHTML = textUH08;
	var skillUH09 = document.getElementById('skillUH09');
		textUH09 = UH09*(UH09+1)/2;
			skillUH09.innerHTML = textUH09;

	var skillJK01 = document.getElementById('skillJK01');
		textJK01 = JK01*(JK01+1);
			skillJK01.innerHTML = textJK01;
	var skillJK02 = document.getElementById('skillJK02');
		textJK02 = JK02*(JK02+1);
			skillJK02.innerHTML = textJK02;
	var skillJK03 = document.getElementById('skillJK03');
		textJK03 = JK03*(JK03+1)/2;
			skillJK03.innerHTML = textJK03;
	var skillJK04 = document.getElementById('skillJK04');
		textJK04 = JK04*(JK04+1);
			skillJK04.innerHTML = textJK04;
	var skillJK05 = document.getElementById('skillJK05');
		textJK05 = JK05*(JK05+1);
			skillJK05.innerHTML = textJK05;
	var skillJK06 = document.getElementById('skillJK06');
		textJK06 = JK06*(JK06+1);
			skillJK06.innerHTML = textJK06;		
	var skillJK07 = document.getElementById('skillJK07');
		textJK07 = JK07*(JK07+1);
			skillJK07.innerHTML = textJK07;
	var skillJK08 = document.getElementById('skillJK08');
		textJK08 = JK08*(JK08+1);
			skillJK08.innerHTML = textJK08;
	var skillJK09 = document.getElementById('skillJK09');
		textJK09 = JK09*(JK09+1)/2;
			skillJK09.innerHTML = textJK09;
	var skillJK10 = document.getElementById('skillJK10');
		textJK10 = JK10*(JK10+1)/2;
			skillJK10.innerHTML = textJK10;
	var skillJK11 = document.getElementById('skillJK11');
		textJK11 = JK11*(JK11+1)/2;
			skillJK11.innerHTML = textJK11;
	var skillJK12 = document.getElementById('skillJK12');
		textJK12 = JK12*(JK12+1);
			skillJK12.innerHTML = textJK12;
	var skillJK13 = document.getElementById('skillJK13');
		textJK13 = JK13*(JK13+1);
			skillJK13.innerHTML = textJK13;
	var skillJK14 = document.getElementById('skillJK14');
		textJK14 = JK14*(JK14+1);
			skillJK14.innerHTML = textJK14;
	var skillJK15 = document.getElementById('skillJK15');
		textJK15 = JK15*(JK15+1)/2;
			skillJK15.innerHTML = textJK15;
	var skillJK16 = document.getElementById('skillJK16');
		textJK16 = JK16*(JK16+1)/2;
			skillJK16.innerHTML = textJK16;
	var skillJK17 = document.getElementById('skillJK17');
		textJK17 = JK17*(JK17+1)/2;
			skillJK17.innerHTML = textJK17;
	var skillJK18 = document.getElementById('skillJK18');
		textJK18 = JK18*(JK18+1)/2;
			skillJK18.innerHTML = textJK18;
	var skillJK19 = document.getElementById('skillJK19');
		textJK19 = JK19*(JK19+1)/2;
			skillJK19.innerHTML = textJK19;
	var skillJK20 = document.getElementById('skillJK20');
		textJK20 = JK20*(JK20+1)/2;
			skillJK20.innerHTML = textJK20;
	var skillJK21 = document.getElementById('skillJK21');
		textJK21 = JK21*(JK21+1)/2;
			skillJK21.innerHTML = textJK21;
	var skillJK22 = document.getElementById('skillJK22');
		textJK22 = JK22*(JK22+1)/2;
			skillJK22.innerHTML= textJK22;
	var skillJK23 = document.getElementById('skillJK23');
		textJK23 = JK23*(JK23+1)/2;
			skillJK23.innerHTML = textJK23;
	var skillJK24 = document.getElementById('skillJK24');
		textJK24 = JK24*(JK24+1);
			skillJK24.innerHTML = textJK24;
	var skillJK25 = document.getElementById('skillJK25');
		textJK25 = JK25*(JK25+1);
			skillJK25.innerHTML = textJK25;
	var skillJK26 = document.getElementById('skillJK26');
		textJK26 = JK26*(JK26+1);
			skillJK26.innerHTML = textJK26;
	var skillJK27 = document.getElementById('skillJK27');
		textJK27 = JK27*(JK27+1);
			skillJK27.innerHTML = textJK27;
	var skillJK28 = document.getElementById('skillJK28');
		textJK28 = JK28*(JK28+1);
			skillJK28.innerHTML = textJK28;
	var skillJK29 = document.getElementById('skillJK29');
		textJK29 = JK29*(JK29+1);
			skillJK29.innerHTML = textJK29;
	var skillJK30 = document.getElementById('skillJK30');
		textJK30 = JK30*(JK30+1);
			skillJK30.innerHTML = textJK30;
	var skillJK31 = document.getElementById('skillJK31');
		textJK31 = JK31*(JK31+1)/2;
			skillJK31.innerHTML = textJK31;
	var skillJK32 = document.getElementById('skillJK32');
		textJK32 = JK32*(JK32+1);
			skillJK32.innerHTML = textJK32;
	var skillJK33 = document.getElementById('skillJK33');
		textJK33 = JK33*(JK33+1);
			skillJK33.innerHTML = textJK33;
	var skillJK34 = document.getElementById('skillJK34');
		textJK34 = JK34*(JK34+1);
			skillJK34.innerHTML = textJK34;
	var skillJK35 = document.getElementById('skillJK35');
		textJK35 = JK35*(JK35+1);
			skillJK35.innerHTML = textJK35;
	var skillJK36 = document.getElementById('skillJK36');
		textJK36 = JK36*(JK36+1)/2;
			skillJK36.innerHTML = textJK36;
	var skillJK37 = document.getElementById('skillJK37');
		textJK37 = JK37*(JK37+1);
			skillJK37.innerHTML = textJK37;

	var skillMI01 = document.getElementById('skillMI01');
		textMI01 = MI01*(MI01+1);
			skillMI01.innerHTML = textMI01;
	var skillMI02 = document.getElementById('skillMI02');
		textMI02 = MI02*(MI02+1)/2;
			skillMI02.innerHTML = textMI02;
	var skillMI03 = document.getElementById('skillMI03');
		textMI03 = MI03*(MI03+1)/2;
			skillMI03.innerHTML = textMI03;
	var skillMI04 = document.getElementById('skillMI04');
		textMI04 = MI04*(MI04+1)/2;
			skillMI04.innerHTML = textMI04;
	var skillMI05 = document.getElementById('skillMI05');
		textMI05 = MI05*(MI05+1);
			skillMI05.innerHTML = textMI05;
	var skillMI06 = document.getElementById('skillMI06');
		textMI06 = MI06*(MI06+1);
			skillMI06.innerHTML = textMI06;
	var skillMI07 = document.getElementById('skillMI07');
		textMI07 = MI07*(MI07+1);
			skillMI07.innerHTML = textMI07;
	var skillMI08 = document.getElementById('skillMI08');
		textMI08 = MI08*(MI08+1);
			skillMI08.innerHTML = textMI08;
	var skillMI09 = document.getElementById('skillMI09');
		textMI09 = MI09*(MI09+1);
			skillMI09.innerHTML = textMI09;
	
}

function culcSP() {
	var skillSPs = [Number(document.getElementById('skillMA01').textContent),
			Number(document.getElementById('skillMA02').textContent),
			Number(document.getElementById('skillMA03').textContent),
			Number(document.getElementById('skillMA04').textContent),
			Number(document.getElementById('skillMA05').textContent),
			Number(document.getElementById('skillMA06').textContent),
			Number(document.getElementById('skillMA07').textContent),

			Number(document.getElementById('skillBD01').textContent),
			Number(document.getElementById('skillBD02').textContent),
			Number(document.getElementById('skillBD03').textContent),
			Number(document.getElementById('skillBD04').textContent),
			Number(document.getElementById('skillBD05').textContent),
			Number(document.getElementById('skillBD06').textContent),

			Number(document.getElementById('skillDN01').textContent),
			Number(document.getElementById('skillDN02').textContent),
			Number(document.getElementById('skillDN03').textContent),
			Number(document.getElementById('skillDN04').textContent),
			Number(document.getElementById('skillDN05').textContent),

			Number(document.getElementById('skillUH01').textContent),
			Number(document.getElementById('skillUH02').textContent),
			Number(document.getElementById('skillUH03').textContent),
			Number(document.getElementById('skillUH04').textContent),
			Number(document.getElementById('skillUH05').textContent),
			Number(document.getElementById('skillUH06').textContent),
			Number(document.getElementById('skillUH07').textContent),
			Number(document.getElementById('skillUH08').textContent),
			Number(document.getElementById('skillUH09').textContent),

			Number(document.getElementById('skillJK01').textContent),
			Number(document.getElementById('skillJK02').textContent),
			Number(document.getElementById('skillJK03').textContent),
			Number(document.getElementById('skillJK04').textContent),
			Number(document.getElementById('skillJK05').textContent),
			Number(document.getElementById('skillJK06').textContent),
			Number(document.getElementById('skillJK07').textContent),
			Number(document.getElementById('skillJK08').textContent),
			Number(document.getElementById('skillJK09').textContent),
			Number(document.getElementById('skillJK10').textContent),
			Number(document.getElementById('skillJK11').textContent),
			Number(document.getElementById('skillJK12').textContent),
			Number(document.getElementById('skillJK13').textContent),
			Number(document.getElementById('skillJK14').textContent),
			Number(document.getElementById('skillJK15').textContent),
			Number(document.getElementById('skillJK16').textContent),
			Number(document.getElementById('skillJK17').textContent),
			Number(document.getElementById('skillJK18').textContent),
			Number(document.getElementById('skillJK19').textContent),
			Number(document.getElementById('skillJK20').textContent),
			Number(document.getElementById('skillJK21').textContent),
			Number(document.getElementById('skillJK22').textContent),
			Number(document.getElementById('skillJK23').textContent),
			Number(document.getElementById('skillJK24').textContent),
			Number(document.getElementById('skillJK25').textContent),
			Number(document.getElementById('skillJK26').textContent),
			Number(document.getElementById('skillJK27').textContent),
			Number(document.getElementById('skillJK28').textContent),
			Number(document.getElementById('skillJK29').textContent),
			Number(document.getElementById('skillJK30').textContent),
			Number(document.getElementById('skillJK31').textContent),
			Number(document.getElementById('skillJK32').textContent),
			Number(document.getElementById('skillJK33').textContent),
			Number(document.getElementById('skillJK34').textContent),
			Number(document.getElementById('skillJK35').textContent),
			Number(document.getElementById('skillJK36').textContent),
			Number(document.getElementById('skillJK37').textContent),
			
			Number(document.getElementById('skillMI01').textContent),
			Number(document.getElementById('skillMI02').textContent),
			Number(document.getElementById('skillMI03').textContent),
			Number(document.getElementById('skillMI04').textContent),
			Number(document.getElementById('skillMI05').textContent),
			Number(document.getElementById('skillMI06').textContent),
			Number(document.getElementById('skillMI07').textContent),
			Number(document.getElementById('skillMI08').textContent),
			Number(document.getElementById('skillMI09').textContent)
			
];

	var sumSP = skillSPs.reduce(function(sum, element) {
		return sum + element;
	},0);

	culcNum = document.getElementById('culcSP');
	culcNum.innerHTML = sumSP;
}

function save() {
	var saveNumber = document.getElementById('saveDataNum');
	var saveWord = document.getElementById('saveDataName').value;

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

				document.getElementById('MA01').options.selectedIndex,
				document.getElementById('MA02').options.selectedIndex,
				document.getElementById('MA03').options.selectedIndex,
				document.getElementById('MA04').options.selectedIndex,
				document.getElementById('MA05').options.selectedIndex,
				document.getElementById('MA06').options.selectedIndex,
				document.getElementById('MA07').options.selectedIndex,

				document.getElementById('BD01').options.selectedIndex,
				document.getElementById('BD02').options.selectedIndex,
				document.getElementById('BD03').options.selectedIndex,
				document.getElementById('BD04').options.selectedIndex,
				document.getElementById('BD05').options.selectedIndex,
				document.getElementById('BD06').options.selectedIndex,

				document.getElementById('DN01').options.selectedIndex,
				document.getElementById('DN02').options.selectedIndex,
				document.getElementById('DN03').options.selectedIndex,
				document.getElementById('DN04').options.selectedIndex,
				document.getElementById('DN05').options.selectedIndex,

				document.getElementById('UH01').options.selectedIndex,
				document.getElementById('UH02').options.selectedIndex,
				document.getElementById('UH03').options.selectedIndex,
				document.getElementById('UH04').options.selectedIndex,
				document.getElementById('UH05').options.selectedIndex,
				document.getElementById('UH06').options.selectedIndex,
				document.getElementById('UH07').options.selectedIndex,
				document.getElementById('UH08').options.selectedIndex,
				document.getElementById('UH09').options.selectedIndex,

				document.getElementById('JK01').options.selectedIndex,
				document.getElementById('JK02').options.selectedIndex,
				document.getElementById('JK03').options.selectedIndex,
				document.getElementById('JK04').options.selectedIndex,
				document.getElementById('JK05').options.selectedIndex,
				document.getElementById('JK06').options.selectedIndex,
				document.getElementById('JK07').options.selectedIndex,
				document.getElementById('JK08').options.selectedIndex,
				document.getElementById('JK09').options.selectedIndex,
				document.getElementById('JK10').options.selectedIndex,
				document.getElementById('JK11').options.selectedIndex,
				document.getElementById('JK12').options.selectedIndex,
				document.getElementById('JK13').options.selectedIndex,
				document.getElementById('JK14').options.selectedIndex,
				document.getElementById('JK15').options.selectedIndex,
				document.getElementById('JK16').options.selectedIndex,
				document.getElementById('JK17').options.selectedIndex,
				document.getElementById('JK18').options.selectedIndex,
				document.getElementById('JK19').options.selectedIndex,
				document.getElementById('JK20').options.selectedIndex,
				document.getElementById('JK21').options.selectedIndex,
				document.getElementById('JK22').options.selectedIndex,
				document.getElementById('JK23').options.selectedIndex,
				document.getElementById('JK24').options.selectedIndex,
				document.getElementById('JK25').options.selectedIndex,
				document.getElementById('JK26').options.selectedIndex,
				document.getElementById('JK27').options.selectedIndex,
				document.getElementById('JK28').options.selectedIndex,
				document.getElementById('JK29').options.selectedIndex,
				document.getElementById('JK30').options.selectedIndex,
				document.getElementById('JK31').options.selectedIndex,
				document.getElementById('JK32').options.selectedIndex,
				document.getElementById('JK33').options.selectedIndex,
				document.getElementById('JK34').options.selectedIndex,
				document.getElementById('JK35').options.selectedIndex,
				document.getElementById('JK36').options.selectedIndex,
				document.getElementById('JK37').options.selectedIndex,
				
				document.getElementById('MI01').options.selectedIndex,
				document.getElementById('MI02').options.selectedIndex,
				document.getElementById('MI03').options.selectedIndex,
				document.getElementById('MI04').options.selectedIndex,
				document.getElementById('MI05').options.selectedIndex,
				document.getElementById('MI06').options.selectedIndex,
				document.getElementById('MI07').options.selectedIndex,
				document.getElementById('MI08').options.selectedIndex,
				document.getElementById('MI09').options.selectedIndex
				
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

	document.getElementById('MA01').options.selectedIndex = loadData[5];
	document.getElementById('MA02').options.selectedIndex = loadData[6];
	document.getElementById('MA03').options.selectedIndex = loadData[7];
	document.getElementById('MA04').options.selectedIndex = loadData[8];
	document.getElementById('MA05').options.selectedIndex = loadData[9];
	document.getElementById('MA06').options.selectedIndex = loadData[10];
	document.getElementById('MA07').options.selectedIndex = loadData[11];

	document.getElementById('BD01').options.selectedIndex = loadData[12];
	document.getElementById('BD02').options.selectedIndex = loadData[13];
	document.getElementById('BD03').options.selectedIndex = loadData[14];
	document.getElementById('BD04').options.selectedIndex = loadData[15];
	document.getElementById('BD05').options.selectedIndex = loadData[16];
	document.getElementById('BD06').options.selectedIndex = loadData[17];

	document.getElementById('DN01').options.selectedIndex = loadData[18];
	document.getElementById('DN02').options.selectedIndex = loadData[19];
	document.getElementById('DN03').options.selectedIndex = loadData[20];
	document.getElementById('DN04').options.selectedIndex = loadData[21];
	document.getElementById('DN05').options.selectedIndex = loadData[22];

	document.getElementById('UH01').options.selectedIndex = loadData[23];
	document.getElementById('UH02').options.selectedIndex = loadData[24];
	document.getElementById('UH03').options.selectedIndex = loadData[25];
	document.getElementById('UH04').options.selectedIndex = loadData[26];
	document.getElementById('UH05').options.selectedIndex = loadData[27];
	document.getElementById('UH06').options.selectedIndex = loadData[28];
	document.getElementById('UH07').options.selectedIndex = loadData[29];
	document.getElementById('UH08').options.selectedIndex = loadData[30];
	document.getElementById('UH09').options.selectedIndex = loadData[31];

	document.getElementById('JK01').options.selectedIndex = loadData[32];
	document.getElementById('JK02').options.selectedIndex = loadData[33];
	document.getElementById('JK03').options.selectedIndex = loadData[34];
	document.getElementById('JK04').options.selectedIndex = loadData[35];
	document.getElementById('JK05').options.selectedIndex = loadData[36];
	document.getElementById('JK06').options.selectedIndex = loadData[37];
	document.getElementById('JK07').options.selectedIndex = loadData[38];
	document.getElementById('JK08').options.selectedIndex = loadData[39];
	document.getElementById('JK09').options.selectedIndex = loadData[40];
	document.getElementById('JK10').options.selectedIndex = loadData[41];
	document.getElementById('JK11').options.selectedIndex = loadData[42];
	document.getElementById('JK12').options.selectedIndex = loadData[43];
	document.getElementById('JK13').options.selectedIndex = loadData[44];
	document.getElementById('JK14').options.selectedIndex = loadData[45];
	document.getElementById('JK15').options.selectedIndex = loadData[46];
	document.getElementById('JK16').options.selectedIndex = loadData[47];
	document.getElementById('JK17').options.selectedIndex = loadData[48];
	document.getElementById('JK18').options.selectedIndex = loadData[49];
	document.getElementById('JK19').options.selectedIndex = loadData[50];
	document.getElementById('JK20').options.selectedIndex = loadData[51];
	document.getElementById('JK21').options.selectedIndex = loadData[52];
	document.getElementById('JK22').options.selectedIndex = loadData[53];
	document.getElementById('JK23').options.selectedIndex = loadData[54];
	document.getElementById('JK24').options.selectedIndex = loadData[55];
	document.getElementById('JK25').options.selectedIndex = loadData[56];
	document.getElementById('JK26').options.selectedIndex = loadData[57];
	document.getElementById('JK27').options.selectedIndex = loadData[58];
	document.getElementById('JK28').options.selectedIndex = loadData[59];
	document.getElementById('JK29').options.selectedIndex = loadData[60];
	document.getElementById('JK30').options.selectedIndex = loadData[61];
	document.getElementById('JK31').options.selectedIndex = loadData[62];
	document.getElementById('JK32').options.selectedIndex = loadData[63];
	document.getElementById('JK33').options.selectedIndex = loadData[64];
	document.getElementById('JK34').options.selectedIndex = loadData[65];
	document.getElementById('JK35').options.selectedIndex = loadData[66];
	document.getElementById('JK36').options.selectedIndex = loadData[67];
	document.getElementById('JK37').options.selectedIndex = loadData[68];

	document.getElementById('MI01').options.selectedIndex = loadData[69];
	document.getElementById('MI02').options.selectedIndex = loadData[70];
	document.getElementById('MI03').options.selectedIndex = loadData[71];
	document.getElementById('MI04').options.selectedIndex = loadData[72];
	document.getElementById('MI05').options.selectedIndex = loadData[73];
	document.getElementById('MI06').options.selectedIndex = loadData[74];
	document.getElementById('MI07').options.selectedIndex = loadData[75];
	document.getElementById('MI08').options.selectedIndex = loadData[76];
	document.getElementById('MI09').options.selectedIndex = loadData[77];
	

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