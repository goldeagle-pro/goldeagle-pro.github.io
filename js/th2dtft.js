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
			Number(document.getElementById('skillVL09').textContent)
		];

	sumSP = skillSPs.reduce(function(a, x){
		return a + x;
	},0);

	document.getElementById('culcSP').innerHTML = sumSP;
}