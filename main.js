let clicks = 0;
function hide() {
	clicks += 1;
	document.getElementById("container").style.display = 'none';
	if (clicks % 2 == 0) {
		document.getElementById("container").style.display = 'block';
	}
}
function hide_2() {
	let elem = document.querySelector('#container');
	elem.parentElement.removeChild(elem);
}
function hide_3() {
	clicks += 1;
	document.getElementById("container").classList.add("hidden");
	if (clicks % 2 == 0) {
		document.getElementById("container").classList.remove("hidden");
	}
}
document.getElementsByClassName('container').classList.remove("hidden")
