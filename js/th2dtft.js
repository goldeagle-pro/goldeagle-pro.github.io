function DTskill() {
	var FT01 = document.getElementById('FT01').selectedIndex;

	var skillFT01 = document.getElementById('skillFT01');
		textFT01 = FT01*(FT01+1);
			skillFT01.innerHTML =textFT01;
}