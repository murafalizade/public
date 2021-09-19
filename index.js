document.addEventListener("DOMContentLoaded", function () {
	// make it as accordion for smaller screens
	if (window.innerWidth > 992) {

		document.querySelectorAll('.navbar .nav-item').forEach(function (everyitem) {

			everyitem.addEventListener('mouseover', function (e) {

				let el_link = this.querySelector('a[data-bs-toggle]');

				if (el_link != null) {
					let nextEl = el_link.nextElementSibling;
					el_link.classList.add('show');
					nextEl.classList.add('show');
				}

			});
			everyitem.addEventListener('mouseleave', function (e) {
				let el_link = this.querySelector('a[data-bs-toggle]');

				if (el_link != null) {
					let nextEl = el_link.nextElementSibling;
					el_link.classList.remove('show');
					nextEl.classList.remove('show');
				}


			})
		});

	}
	// end if innerWidth
});

function forButton() {
	document.getElementById('contentdis1').style.display = 'none'
	document.getElementById('contentdis2').style.display = 'none'
	document.getElementById('contentdis3').style.display = 'block'
	document.getElementById('contentdis4').style.display = 'none'
}

function step1() {
	const inpt = document.getElementById('inputEmail4').value;
	const inpt2 = document.getElementById('inputPassword4').value;
	const inpt3 = document.getElementById('inputState').value;
	const inpt4 = document.getElementById('inputAddress2').value;
	const inpt5 = document.getElementById('inputState').value;
	if (inpt !== "" && !inpt2 !== "" && !inpt3 !== "" && !inpt4 !== "" && !inpt4 !== "" && inpt5 !== "") {
		console.log(inpt);
		document.getElementById('contentdis2').style.display = 'block'
		document.getElementById('contentdis1').style.display = 'none'
		document.getElementById('contentdis3').style.display = 'none'
		document.getElementById('contentdis4').style.display = 'none'
	}
	else {
		alert('You have must fill all required area');
	}
}







function step2() {
	const inpt = document.getElementById('customFile').value.files;
	const inpt2 = document.getElementById('exampleFormControlTextarea2').value;
	const inpt3 = document.getElementById('exampleFormControlTextarea3').value;
	const inpt4 = document.getElementById('exampleFormControlTextarea4').value;
	const inpt5 = document.getElementById('customFile2').value.files;
	if (!inpt && !inpt2 !== "" && !inpt3 !== "" && !inpt4 !== "" && !inpt4 !== "" && !inpt5) {
		console.log(inpt);
		document.getElementById('contentdis2').style.display = 'none'
		document.getElementById('contentdis1').style.display = 'none'
		document.getElementById('contentdis3').style.display = 'none'
		document.getElementById('contentdis4').style.display = 'block'
	}
	else {
		alert('You have must fill all required area');
	}
}








document.getElementById('con2').addEventListener("click", function (e) {
	document.getElementById('contentdis2').style.display = 'block'
	document.getElementById('contentdis1').style.display = 'none'
	document.getElementById('contentdis3').style.display = 'none'
	document.getElementById('contentdis4').style.display = 'none'
});

document.getElementById('con1').addEventListener("click", function (e) {
	document.getElementById('contentdis1').style.display = 'block'
	document.getElementById('contentdis2').style.display = 'none'
	document.getElementById('contentdis3').style.display = 'none'
	document.getElementById('contentdis4').style.display = 'none'
});

document.getElementById('con3').addEventListener("click", function (e) {
	document.getElementById('contentdis2').style.display = 'none'
	document.getElementById('contentdis1').style.display = 'none'
	document.getElementById('contentdis3').style.display = 'block'
	document.getElementById('contentdis4').style.display = 'none'
});

document.getElementById('con4').addEventListener("click", function (e) {
	document.getElementById('contentdis2').style.display = 'none'
	document.getElementById('contentdis1').style.display = 'none'
	document.getElementById('contentdis3').style.display = 'none'
	document.getElementById('contentdis4').style.display = 'block'
});

var a = 0;
// function addDiv(parent_div) {

// if(a<23){
// 	var hr = document.createElement('hr');
// 	var select1 = document.createElement('select');
// 	for (let i = 0; i < 24; i++) {
// 		var option = document.createElement('option');
// 		option.appendChild(document.createTextNode(`${i}:00`));
// 		select1.appendChild(option);
// 	}
// 	var select2 = document.createElement('select');
// 	var span = document.createElement('span');
// 	for (let i = 0; i < 24; i++) {
// 		var option = document.createElement('option');

// 		option.appendChild(document.createTextNode(`${i}:00`));
// 		select2.appendChild(option);
// 	}
// 	var btn = document.createElement('button');
// 	btn.appendChild(document.createTextNode('+'));
// 	btn.addEventListener('click',function(){addDiv();});

// 	var parent = document.getElementById(parent_div);
// 	if (parent) {
// 		parent.appendChild(hr);
// 		parent.appendChild(select1);
// 		parent.appendChild(select2);
// 		parent.appendChild(span);
// 		parent.appendChild(btn);

// 	}
// 	a++;
// }
// else{
// 	console.log('errror');
// }

// }


$('.adding').on('click', function () {
	const parent = $(this).parent();
	console.log($(parent));
	const element = "<hr>" +
		"	<select  class='chckopt' >" +
		"<option>00:00</option>" +
		"<option>01:00</option>" +
		" <option>02:00</option>" +
		" <option>03:00</option>" +
		"<option>04:00</option>" +
		"<option>05:00</option>" +
		"<option>06:00</option>" +
		"<option>07:00</option>" +
		"<option>08:00</option>" +
		"</select >" +
		"<span>to</span>" +
		"	<select  class='chckopt' >" +
		"<option>00:00</option>" +
		"<option>01:00</option>" +
		" <option>02:00</option>" +
		" <option>03:00</option>" +
		"<option>04:00</option>" +
		"<option>05:00</option>" +
		"<option>06:00</option>" +
		"<option>07:00</option>" +
		"<option>08:00</option>" +
		"</select >";
	$(parent).append(element)
})

var time1 = "";
var time2 = "";
var datei = {
	begin: time1,
	end: time2
}
var dates = []
$('body').on('change', '.chckopt', function () {
	time1 = $(this).val();
	const inpy = $('#txtoptvalues');
	datei.begin = time1;
	dates.push(datei);
	var send = dates.map(function (date) {
		return `${date['begin']}-${date['end']}`;
	});
	inpy.val(send.join())
})

$('body').on('change', '.chckopt2', function () {
	 time2 = $(this).val();
	const inpy = $('#txtoptvalues');
	datei.end = time2;
	dates.push(datei);
	var send = dates.map(function (date) {
		return `${date['begin']}-${date['end']}`;
	});
	inpy.val(send.join())
})















function myFunction() {
	var checkBox = document.getElementById("ch1");
	var text = document.getElementById("price11");
	var text1 = document.getElementById("price1");
	if (checkBox.checked == true) {
		text.style.display = "block";
		text1.style.display = "block";
	} else {
		text.style.display = "none";
		text1.style.display = "none";
	}
}

function myFunction1() {
	var checkBox = document.getElementById("ch2");
	var text = document.getElementById("price2");
	if (checkBox.checked == true) {
		text.style.display = "block";
	} else {
		text.style.display = "none";
	}
}



function chck1() {
	var checkBox = document.getElementById("chck111");
	var text = document.getElementById("chcksel1");
	// var text1 = document.getElementById("chcksel2");
	if (checkBox.checked == true) {
		text.style.display = "block";
		// text1.style.display = "block";
	} else {
		text.style.display = "none";
		// text1.style.display = "none";
	}
}

