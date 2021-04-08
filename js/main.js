var header_tete = document.querySelector('.header_tete');
var section2 = document.querySelector('.section2 .h1');
var top = document.querySelector('.top');

function toTop()
{
	window.addEventListener("click",function(){
	window.scrollTo({
		top: 0
	});
});

}

document.addEventListener('scroll',function(){
	header_tete.classList.toggle('active',window.scrollY > 50);
	section2.classList.toggle('active',window.scrollY > 50);
	document.querySelector('.top').classList.toggle('active',window.scrollY > 500);
});


