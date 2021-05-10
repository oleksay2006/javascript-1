let clicks = 0;
let div = document.createElement('div');
let button = document.querySelector('container-btn');
div.classList.add("container");
// div.classList.add('hidden');
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
		div.classList.remove('hidden')
	}
}
function hide_3() {
	clicks += 1;
	for (let i = 0; i < 5; i++) {
		document.getElementsByClassName("container")[i].classList.add("hidden");
	}
	if (clicks % 2 == 0) {
		for (let i = 0; i < 5; i++) {
			document.getElementsByClassName("container")[i].classList.remove("hidden");
		}
	}
}
// for (let i=0;i < 5; i++) {
// document.getElementsByClassName('container')[].classList.remove("hidden")
// }
function hide_4() {
	clicks += 1;
	let input = document.getElementById('pole').value;
	document.getElementById(input).style.display = 'none';
	if (clicks % 2 == 0) {
		document.getElementById(input).style.display = 'block';
	}
}

function hide_6() {
	clicks += 1;
	let input = document.getElementById('pole').value;
	document.getElementById(input).classList.add("hidden");
	if (clicks % 2 == 0) {
		document.getElementById(input).classList.remove("hidden");
	}
}
function yellow_block() {
	clicks += 1;
	if (clicks == 1) {
		alert('Привет');
	}
	if (clicks > 1) {
		document.querySelector('.yellow').classList.add("hidden");
	}
}
function hover() {
	document.querySelector('.red').classList.remove("hidden");
}
function un_hover() {
	document.querySelector('.red').classList.add("hidden");
}
input.onfocus = function () {
	document.querySelector('.green').classList.remove("hidden");

	// else {document.querySelector('.green').classList.add("hidden");}
}
input.oninput = function () {
	document.querySelector('.green').classList.add("hidden");
}
// document.querySelector(".url-btn").onclick = function(){
// 	// window.location.href=document.querySelector('.url').value
// 	document.body.appendChild(div);
// 	div.classList.remove("hidden");
// 	let img = new Image();
// 	img.src = document.querySelector('.url').value;
// 	div.appendChild(img);
// }
function url_all() {
	document.body.appendChild(div);
	let textarea = document.querySelector('textarea'),
    button_2 = document.querySelector('.url-all-btn');
    let myList = textarea.value.split('\n');
    for (let i = 0; i < myList.length; i++) {
        let img = new Image();
		img.src = myList[i];
		div.appendChild(img);
    }
}
input.onblur = function () {
	document.querySelector('.green').classList.add("hidden");
}
document.querySelector('body').onmousemove = function(event) {
	document.querySelector('.x').innerHTML = event.offsetX;
    document.querySelector('.y').innerHTML = event.offsetY;
}
navigator.geolocation.getCurrentPosition(successFunction);
function successFunction(position) {
	var lat = position.coords.latitude;
    var long = position.coords.longitude;
    document.querySelector('.sh').innerHTML = lat;
    document.querySelector('.d').innerHTML = long;
}

// localStorage.setItem(document.querySelector('#local'), document.querySelector('#local').value);
// let local = localStorage.getItem(document.querySelector('#local'));
// document.querySelector('#local').value = local;

function local() {
	document.getElementById('local').value = localStorage.getItem('server');
	let input_2 = document.getElementById("local").value;
	localStorage.setItem("server", input_2);
}