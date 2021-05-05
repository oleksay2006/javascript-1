let clicks = 0;
let div = document.createElement('div');
let button = document.querySelector('container-btn');
div.classList.add("container");
function hide() {
	clicks += 1;
	document.getElementById("container").style.display = 'none';
	if (clicks % 2 == 0) {
		document.getElementById("container").style.display = 'block';
	}
}
function hide_2() {
	clicks += 1;
	let elem = document.querySelector('#container');
	if (clicks % 2 != 0) {
		elem.parentElement.removeChild(elem);
	}
	
	if (clicks % 2 == 0) {
		document.body.appendChild(div);
	}
}
function hide_3() {
	clicks += 1;
	document.getElementById("container").classList.add("hidden");
	if (clicks % 2 == 0) {
		document.getElementById("container").classList.remove("hidden");
	}
}
// for (let i=0;i < 5; i++) {
document.getElementsByClassName('container')[0].classList.remove("hidden")
// }