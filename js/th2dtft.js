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
}