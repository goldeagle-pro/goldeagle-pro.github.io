function DT2skill() {
	var SCa = document.getElementById('SCa').selectedIndex;
	var SCb = document.getElementById('SCb').selectedIndex;
	var SCc = document.getElementById('SCc').selectedIndex;
	var SCd = document.getElementById('SCd').selectedIndex;
	var SCe = document.getElementById('SCe').selectedIndex;
	var SCf = document.getElementById('SCf').selectedIndex;
	var SCg = document.getElementById('SCg').selectedIndex;
	var SCh = document.getElementById('SCh').selectedIndex;

	var ARa = document.getElementById('ARa').selectedIndex;
	var ARb = document.getElementById('ARb').selectedIndex;
	var ARc = document.getElementById('ARc').selectedIndex;
	var ARd = document.getElementById('ARd').selectedIndex;
	var ARe = document.getElementById('ARe').selectedIndex;
	var ARf = document.getElementById('ARf').selectedIndex;

	var ASa = document.getElementById('ASa').selectedIndex;
	var ASb = document.getElementById('ASb').selectedIndex;
	var ASc = document.getElementById('ASc').selectedIndex;
	var ASd = document.getElementById('ASd').selectedIndex;
	var ASe = document.getElementById('ASe').selectedIndex;
	var ASf = document.getElementById('ASf').selectedIndex;

	var SNa = document.getElementById('SNa').selectedIndex;
	var SNb = document.getElementById('SNb').selectedIndex;
	var SNc = document.getElementById('SNc').selectedIndex;
	var SNd = document.getElementById('SNd').selectedIndex;
	var SNe = document.getElementById('SNe').selectedIndex;
	var SNf = document.getElementById('SNf').selectedIndex;
	var SNg = document.getElementById('SNg').selectedIndex;

	var THa = document.getElementById('THa').selectedIndex;
	var THb = document.getElementById('THb').selectedIndex;
	var THc = document.getElementById('THc').selectedIndex;
	var THd = document.getElementById('THd').selectedIndex;
	var THe = document.getElementById('THe').selectedIndex;
	var THf = document.getElementById('THf').selectedIndex;
	var THg = document.getElementById('THg').selectedIndex;
	var THh = document.getElementById('THh').selectedIndex;
	var THi = document.getElementById('THi').selectedIndex;
	var THj = document.getElementById('THj').selectedIndex;
	var THk = document.getElementById('THk').selectedIndex;
	var THl = document.getElementById('THl').selectedIndex;

	var KNa = document.getElementById('KNa').selectedIndex;
	var KNb = document.getElementById('KNb').selectedIndex;
	var KNc = document.getElementById('KNc').selectedIndex;
	var KNd = document.getElementById('KNd').selectedIndex;
	var KNe = document.getElementById('KNe').selectedIndex;
	var KNf = document.getElementById('KNf').selectedIndex;
	var KNg = document.getElementById('KNg').selectedIndex;
	var KNh = document.getElementById('KNh').selectedIndex;
	var KNi = document.getElementById('KNi').selectedIndex;
	var KNj = document.getElementById('KNj').selectedIndex;
	var KNk = document.getElementById('KNk').selectedIndex;
	var KNl = document.getElementById('KNl').selectedIndex;
	var KNm = document.getElementById('KNm').selectedIndex;

	var skillScA = document.getElementById('skillScA');
		textScA = SCa*(SCa+1);
			skillScA.innerHTML = textScA;
	var skillScB = document.getElementById('skillScB');
		textScB = SCb*(SCb+1);
			skillScB.innerHTML = textScB;
	var skillScC = document.getElementById('skillScC');
		textScC = SCc*(SCc+1);
			skillScC.innerHTML = textScC;
	var skillScD = document.getElementById('skillScD');
		textScD = SCd*(SCd+1)/2;
			skillScD.innerHTML = textScD;
	var skillScE = document.getElementById('skillScE');
		textScE = SCe*(SCe+1)/2;
			skillScE.innerHTML = textScE;
	var skillScF = document.getElementById('skillScF');
		textScF = SCf*(SCf+1);
			skillScF.innerHTML = textScF;
	var skillScG = document.getElementById('skillScG');
		textScG = SCg*(SCg+1)/2;
			skillScG.innerHTML = textScG;
	var skillScH = document.getElementById('skillScH');
		textScH = SCh*(SCh+1);
			skillScH.innerHTML = textScH;

	var skillArA = document.getElementById('skillArA');
		textArA = ARa*(ARa+1)/2;
			skillArA.innerHTML = textArA;
	var skillArB = document.getElementById('skillArB');
		textArB = ARb*(ARb+1)/2;
			skillArB.innerHTML = textArB;
	var skillArC = document.getElementById('skillArC');
		textArC = ARc*(ARc+1)/2;
			skillArC.innerHTML = textArC;
	var skillArD = document.getElementById('skillArD');
		textArD = ARd*(ARd+1)/2;
			skillArD.innerHTML = textArD;
	var skillArE = document.getElementById('skillArE');
		textArE = ARe*(ARe+1)/2;
			skillArE.innerHTML = textArE;
	var skillArF = document.getElementById('skillArF');
		textArF = ARf*(ARf+1);
			skillArF.innerHTML = textArF;

	var skillAsA = document.getElementById('skillAsA');
		textAsA = ASa*(ASa+1)/2;
			skillAsA.innerHTML = textAsA;
	var skillAsB = document.getElementById('skillAsB');
		textAsB = ASb*(ASb+1)/2;
			skillAsB.innerHTML = textAsB;
	var skillAsC = document.getElementById('skillAsC');
		textAsC = ASc*(ASc+1)/2;
			skillAsC.innerHTML = textAsC;
	var skillAsD = document.getElementById('skillAsD');
		textAsD = ASd*(ASd+1);
			skillAsD.innerHTML = textAsD;
	var skillAsE = document.getElementById('skillAsE');
		textAsE = ASe*(ASe+1);
			skillAsE.innerHTML = textAsE;
	var skillAsF = document.getElementById('skillAsF');
		textAsF = ASf*(ASf+1);
			skillAsF.innerHTML = textAsF;

	var skillSnA = document.getElementById('skillSnA');
		textSnA = SNa*(SNa+1)/2;
			skillSnA.innerHTML = textSnA;
	var skillSnB = document.getElementById('skillSnB');
		textSnB = SNb*(SNb+1)/2;
			skillSnB.innerHTML = textSnB;
	var skillSnC = document.getElementById('skillSnC');
		textSnC = SNc*(SNc+1);
			skillSnC.innerHTML = textSnC;
	var skillSnD = document.getElementById('skillSnD');
		textSnD = SNd*(SNd+1);
			skillSnD.innerHTML = textSnD;
	var skillSnE = document.getElementById('skillSnE');
		textSnE = SNe*(SNe+1)/2;
			skillSnE.innerHTML = textSnE;
	var skillSnF = document.getElementById('skillSnF');
		textSnF = SNf*(SNf+1);
			skillSnF.innerHTML = textSnF;
	var skillSnG = document.getElementById('skillSnG');
		textSnG = SNg*(SNg+1);
			skillSnG.innerHTML = textSnG;

	var skillThA = document.getElementById('skillThA');
		textThA = THa*(THa+1);
			skillThA.innerHTML = textThA;
	var skillThB = document.getElementById('skillThB');
		textThB = THb*(THb+1)/2;
			skillThB.innerHTML = textThB;
	var skillThC = document.getElementById('skillThC');
		textThC = THc*(THc+1);
			skillThC.innerHTML = textThC;
	var skillThD = document.getElementById('skillThD');
		textThD = THd*(THd+1);
			skillThD.innerHTML = textThD;
	var skillThE = document.getElementById('skillThE');
		textThE = THe*(THe+1)/2;
			skillThE.innerHTML = textThE;
	var skillThF = document.getElementById('skillThF');
		textThF = THf*(THf+1);
			skillThF.innerHTML = textThF;
	var skillThG = document.getElementById('skillThG');
		textThG = THg*(THg+1);
			skillThG.innerHTML = textThG;
	var skillThH = document.getElementById('skillThH');
		textThH = THh*(THh+1);
			skillThH.innerHTML = textThH;
	var skillThI = document.getElementById('skillThI');
		textThI = THi*(THi+1);
			skillThI.innerHTML = textThI;
	var skillThJ = document.getElementById('skillThJ');
		textThJ = THj*(THj+1);
			skillThJ.innerHTML = textThJ;
	var skillThK = document.getElementById('skillThK');
		textThK = THk*(THk+1);
			skillThK.innerHTML = textThK;
	var skillThL = document.getElementById('skillThL');
		textThL = THl*(THl+1);
			skillThL.innerHTML = textThL;

	var skillKnA = document.getElementById('skillKnA');
		textKnA = KNa*(KNa+1)/2;
			skillKnA.innerHTML = textKnA;
	var skillKnB = document.getElementById('skillKnB');
		textKnB = KNb*(KNb+1);
			skillKnB.innerHTML = textKnB;
	var skillKnC = document.getElementById('skillKnC');
		textKnC = KNc*(KNc+1);
			skillKnC.innerHTML = textKnC;
	var skillKnD = document.getElementById('skillKnD');
		textKnD = KNd*(KNd+1);
			skillKnD.innerHTML = textKnD;
	var skillKnE = document.getElementById('skillKnE');
		textKnE = KNe*(KNe+1);
			skillKnE.innerHTML = textKnE;
	var skillKnF = document.getElementById('skillKnF');
		textKnF = KNf*(KNf+1);
			skillKnF.innerHTML = textKnF;
	var skillKnG = document.getElementById('skillKnG');
		textKnG = KNg*(KNg+1);
			skillKnG.innerHTML = textKnG;
	var skillKnH = document.getElementById('skillKnH');
		textKnH = KNh*(KNh+1);
			skillKnH.innerHTML = textKnH;
	var skillKnI = document.getElementById('skillKnI');
		textKnI = KNi*(KNi+1);
			skillKnI.innerHTML = textKnI;
	var skillKnJ = document.getElementById('skillKnJ');
		textKnJ = KNj*(KNj+1)/2;
			skillKnJ.innerHTML = textKnJ;
	var skillKnK = document.getElementById('skillKnK');
		textKnK = KNk*(KNk+1)/2;
			skillKnK.innerHTML = textKnK;
	var skillKnL = document.getElementById('skillKnL');
		textKnL = KNl*(KNl+1)/2;
			skillKnL.innerHTML = textKnL;
	var skillKnM = document.getElementById('skillKnM');
		textKnM = KNm*(KNm+1)/2;
			skillKnM.innerHTML = textKnM;
}

function culcSP(){
	var totalSPs = [
		Number(document.getElementById('skillScA').textContent),
		Number(document.getElementById('skillScB').textContent),
		Number(document.getElementById('skillScC').textContent),
		Number(document.getElementById('skillScD').textContent),
		Number(document.getElementById('skillScE').textContent),
		Number(document.getElementById('skillScF').textContent),
		Number(document.getElementById('skillScG').textContent),
		Number(document.getElementById('skillScH').textContent),

		Number(document.getElementById('skillArA').textContent),
		Number(document.getElementById('skillArB').textContent),
		Number(document.getElementById('skillArC').textContent),
		Number(document.getElementById('skillArD').textContent),
		Number(document.getElementById('skillArE').textContent),
		Number(document.getElementById('skillArF').textContent),

		Number(document.getElementById('skillAsA').textContent),
		Number(document.getElementById('skillAsB').textContent),
		Number(document.getElementById('skillAsC').textContent),
		Number(document.getElementById('skillAsD').textContent),
		Number(document.getElementById('skillAsE').textContent),
		Number(document.getElementById('skillAsF').textContent),

		Number(document.getElementById('skillSnA').textContent),
		Number(document.getElementById('skillSnB').textContent),
		Number(document.getElementById('skillSnC').textContent),
		Number(document.getElementById('skillSnD').textContent),
		Number(document.getElementById('skillSnE').textContent),
		Number(document.getElementById('skillSnF').textContent),
		Number(document.getElementById('skillSnG').textContent),

		Number(document.getElementById('skillThA').textContent),
		Number(document.getElementById('skillThB').textContent),
		Number(document.getElementById('skillThC').textContent),
		Number(document.getElementById('skillThD').textContent),
		Number(document.getElementById('skillThE').textContent),
		Number(document.getElementById('skillThF').textContent),
		Number(document.getElementById('skillThG').textContent),
		Number(document.getElementById('skillThH').textContent),
		Number(document.getElementById('skillThI').textContent),
		Number(document.getElementById('skillThJ').textContent),
		Number(document.getElementById('skillThK').textContent),
		Number(document.getElementById('skillThL').textContent),

		Number(document.getElementById('skillKnA').textContent),
		Number(document.getElementById('skillKnB').textContent),
		Number(document.getElementById('skillKnC').textContent),
		Number(document.getElementById('skillKnD').textContent),
		Number(document.getElementById('skillKnE').textContent),
		Number(document.getElementById('skillKnF').textContent),
		Number(document.getElementById('skillKnG').textContent),
		Number(document.getElementById('skillKnH').textContent),
		Number(document.getElementById('skillKnI').textContent),
		Number(document.getElementById('skillKnJ').textContent),
		Number(document.getElementById('skillKnK').textContent),
		Number(document.getElementById('skillKnL').textContent),
		Number(document.getElementById('skillKnM').textContent),
	];

	var sumSP = totalSPs.reduce(function(sum, element){
		return sum + element;
	}, 0);

	var culcSP = document.getElementById('culcSP');
	culcSP.innerHTML = sumSP;
}