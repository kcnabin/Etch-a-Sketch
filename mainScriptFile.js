let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

let side = +prompt("How many sides do you want?", 50);
const box = document.querySelector(".wrapper");
for (let i=0; i<side*side; i++) {
	let sBox = document.createElement("div");
	sBox.style.backgroundColor = 'white';
	sBox.addEventListener('mouseover', colorIt);
	sBox.addEventListener("mousedown", colorIt);
	// sBox.addEventListener("mouseenter", hoverIt);
	
	sBox.classList.add("grid-item");
	box.appendChild(sBox);
}

const allDiv = document.querySelectorAll(".wrapper div");
document.documentElement.style.setProperty("--colNum", side);
document.documentElement.style.setProperty("--rowNum", side);

// event listener for mouse click
function colorIt(e) {
	// console.log(e.type);
		if (e.type === 'mouseover' && !mouseDown) return;
		else {
			e.target.style.backgroundColor = "#eb4034";
		}
}

function erase() {
	allDiv.forEach((eachDiv) => {
		eachDiv.addEventListener("mouseenter", eraseArea);
	});
}

function eraseArea(e) {
	e.target.style.backgroundColor = 'white';
}

function refreshPage(){
    window.location.reload();
}

function clearAll() {
	allDiv.forEach((area) => {
		area.style.backgroundColor = 'white';
	})
}

const clearScreen = document.querySelector('.clear');
clearScreen.addEventListener("click", clearAll);

const eraseThis = document.querySelector(".erase");
eraseThis.addEventListener("click", erase);	