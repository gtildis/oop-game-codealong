/** @format */

class Player {
	constructor() {
		console.log("insiede constructor");
		this.positionX = 50;
		this.positionY = 0;
		this.width = 30;
		this.height = 10;

		this.domElement = null;

		this.createDomElement();
	}

	createDomElement() {
		this.domElement = document.createElement("div");

		this.domElement.id = "player";
		this.domElement.style.width = this.width + "vw";
		this.domElement.style.height = this.height + "vh";
		this.domElement.style.bottom = this.positionY + "vh";
		this.domElement.style.left = this.positionX + "vw";

		this.domElement.innerText = "this is the player";

		const parentElm = document.getElementById("board");
		parentElm.appendChild(this.domElement);
	}

	moveLeft() {
		this.positionX--;
		this.domElement.style.left = this.positionX + "vw";

		console.log(`new position left ${this.positionX}`);
	}

	moveRight() {
		this.positionX++;
		console.log(`new position right ${this.positionX}`);
		this.domElement.style.left = this.positionX + "vw";
	}
}

const player = new Player();

document.addEventListener("keydown", (event) => {
	// console.log(event);
	if (event.code === "ArrowLeft") {
		player.moveLeft();
	}
	if (event.code === "ArrowRight") {
		player.moveRight();
	}
});
