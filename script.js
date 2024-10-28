const box = document.querySelector(".box");
const btn = document.querySelector("button");

btn.addEventListener("click", generateDot);

const A = {
	top: 0,
	left: 250,
};

const B = {
	top: 500,
	left: 0,
};

const C = {
	top: 500,
	left: 500,
};

function generateDot() {
	const x = Math.random();
	const y = Math.random();

	if (x + y < 1) {
		//this code make us possible to not go out of the triangle:
		const top = x * 500 + y * 500;
		const left = 250 + x * -250 + y * 250;
		box.appendChild(createDot(top, left));
		calculateMiddle(top, left);
	} else {
		generateDot();
	}
}

function calculateMiddle(top, left) {
	const randomPoint = [A, B, C][Math.floor(Math.random() * 3)];
	const newTop = (top + randomPoint.top) / 2;
	const newLeft = (left + randomPoint.left) / 2;
	let newDot = document.createElement("div");
	newDot.classList.add("dot");
	newDot.style.top = `${newTop}px`;
	newDot.style.left = `${newLeft}px`;
	box.appendChild(newDot);
	setTimeout(() => {
		calculateMiddle(newTop, newLeft);
	}, 10);
}

function createDot(top, left) {
	let newDot = document.createElement("div");
	newDot.classList.add("dot");
	newDot.style.top = `${top}px`;
	newDot.style.left = `${left}px`;

	return newDot;
}
