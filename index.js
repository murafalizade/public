document.addEventListener("DOMContentLoaded", function(){
// make it as accordion for smaller screens
if (window.innerWidth > 992) {

	document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){

		everyitem.addEventListener('mouseover', function(e){

			let el_link = this.querySelector('a[data-bs-toggle]');

			if(el_link != null){
				let nextEl = el_link.nextElementSibling;
				el_link.classList.add('show');
				nextEl.classList.add('show');
			}

		});
		everyitem.addEventListener('mouseleave', function(e){
			let el_link = this.querySelector('a[data-bs-toggle]');

			if(el_link != null){
				let nextEl = el_link.nextElementSibling;
				el_link.classList.remove('show');
				nextEl.classList.remove('show');
			}


		})
	});

}
// end if innerWidth
}); 

function forButton(){
	document.getElementById('contentdis1').style.display = 'none'
	document.getElementById('contentdis2').style.display = 'none'
	document.getElementById('contentdis3').style.display = 'block'
	document.getElementById('contentdis4').style.display = 'none'
}

function step1(){
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
	else{
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








// document.getElementById('con2').addEventListener("click",function(e){
// 	document.getElementById('contentdis2').style.display = 'block'
// 	document.getElementById('contentdis1').style.display = 'none'
// 	document.getElementById('contentdis3').style.display = 'none'
// 	document.getElementById('contentdis4').style.display = 'none'
// });

// document.getElementById('con1').addEventListener("click", function (e) {
// 	document.getElementById('contentdis1').style.display = 'block'
// 	document.getElementById('contentdis2').style.display = 'none'
// 	document.getElementById('contentdis3').style.display = 'none'
// 	document.getElementById('contentdis4').style.display = 'none'
// });

// document.getElementById('con3').addEventListener("click", function (e) {
// 	document.getElementById('contentdis2').style.display = 'none'
// 	document.getElementById('contentdis1').style.display = 'none'
// 	document.getElementById('contentdis3').style.display = 'block'
// 	document.getElementById('contentdis4').style.display = 'none'
// });

// document.getElementById('con4').addEventListener("click", function (e) {
// 	document.getElementById('contentdis2').style.display = 'none'
// 	document.getElementById('contentdis1').style.display = 'none'
// 	document.getElementById('contentdis3').style.display = 'none'
// 	document.getElementById('contentdis4').style.display = 'block'
// });


console.log(document.getElementsByName('input'));