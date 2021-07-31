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
	document.getElementById('contentdis1').style.display = 'block'
	document.getElementById('contentdis2').style.display = 'none'
	document.getElementById('contentdis3').style.display = 'none'
	document.getElementById('contentdis4').style.display = 'none'
}

document.getElementById('con2').addEventListener("click",function(e){
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


