window.onload = load();

function changeObtain(obj) {
	if(obj.value == 0) {
		obj.style.color = "gray";
	} else if(obj.value == 1) {
		obj.style.color = "red";
	} else {
		obj.style.color = "black";
	}
}

function changeAwakening(obj) {
	if(obj.value == 0) {
		obj.style.color = "yellow"
	} else if(obj.value == 1) {
		obj.style.color = "purple"
	} else {
		obj.style.color = "black"
	}
}

function save() {
	var obtArrays = [];
	for(i=0; i<186; i++) {
		var obtData = document.getElementById("obt-"+ i).value;
		obtArrays.push(obtData);
	}
	localStorage.setItem("obtKey",JSON.stringify(obtArrays));

	var awakeArrays = [];
	for(var i=0; i<186; i++) {
		var awakeData = document.getElementById('awake-'+i).value;
		awakeArrays.push(awakeData);
	}
	localStorage.setItem("awakeKey",JSON.stringify(awakeArrays));

	var lvArrays = [];
	for(var i=0; i<186; i++) {
		var lvData = document.getElementById("Lv-"+i).value;
		lvArrays.push(lvData);
	}
	localStorage.setItem("lvKey",JSON.stringify(lvArrays));

	var skillLvArrays = [];
	for(var i=0; i<497; i++) {
		var skillLvData = document.getElementById("sLv-"+i).value;
		skillLvArrays.push(skillLvData);
	}
	localStorage.setItem("skillLvKey",JSON.stringify(skillLvArrays));
}

function load() {
	var obtArrays = JSON.parse(localStorage.getItem("obtKey"));
	for(i=0; i<186; i++) {
		document.getElementById("obt-"+ i).value = obtArrays[i];
		changeObtain(document.getElementById("obt-"+i));
	}

	var awakeArrays = JSON.parse(localStorage.getItem("awakeKey"));
	for(var i=0; i<186; i++) {
		document.getElementById("awake-"+i).value = awakeArrays[i];
		changeAwakening(document.getElementById("awake-"+i));
	}
	
	var lvArrays = JSON.parse(localStorage.getItem("lvKey"));
	for(var i=0; i<186; i++) {
		document.getElementById("Lv-"+i).value = lvArrays[i];
	}

	var skillLvArrays = JSON.parse(localStorage.getItem("skillLvKey"));
	for(var i=0; i<497; i++) {
		document.getElementById("sLv-"+i).value =skillLvArrays[i];
	}
}

function remove() {
	localStorage.removeItem("obtKey");
	localStorage.removeItem("awakeKey");
	localStorage.removeItem("lvKey");
	localStorage.removeItem("skillLvKey");

	document.collection.reset();
}

function confirmation() {
	ret = confirm("データを消去してよろしいですか？");
	if(ret == true) {
		remove();
	}
}

jQuery(function() {
	var pagetop = $('#page_top');   
	pagetop.hide();
	$(window).scroll(function () {
	    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
		pagetop.fadeIn();
	    } else {
		pagetop.fadeOut();
	    }
	});
	pagetop.click(function () {
	    $('body,html').animate({
		scrollTop: 0
	    }, 500); //0.5秒かけてトップへ移動
	    return false;
	});
    });
    