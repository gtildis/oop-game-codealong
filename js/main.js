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

class Obstacle {
	constructor() {
		this.positionX = 50;
		this.positionY = 100;
		this.width = 30;
		this.height = 10;

		this.domElement = null;

		this.createElement();
	}

	createElement() {
		///step 1 create the element
		this.domElement = document.createElement("div");
		this.domElement.className = "obstacle";

		this.domElement.style.width = this.width + "vw";
		this.domElement.style.height = this.height + "vh";
		this.domElement.style.bottom = this.positionY + "vh";
		this.domElement.style.left = this.positionX + "vw";

		this.domElement.innerText = "this is the obstacle";

		const parentElm = document.getElementById("board");
		parentElm.appendChild(this.domElement);
	}
	moveDown() {
		//set interval
		this.positionY--;
		this.domElement.style.bottom = this.positionY + "vh";
		// console.log(this.obstacle);

		// console.log(" newpositions", this.positionY);

		//if this.height = -20
	}
}

const obstaclesArray = []; /// here we have o

//create new obstacles
setInterval(() => {
	const newObstacle = new Obstacle();
	obstaclesArray.push(newObstacle);
}, 4000);

//move all obstacles

setInterval(() => {
	// obstacleOne.moveDown();
	obstaclesArray.forEach((obstacle, index) => {
		obstacle.moveDown();

		if (
			obstacle.positionX < player.positionX + player.width &&
			obstacle.positionX + obstacle.width > player.positionX &&
			obstacle.positionY < player.positionY + player.height &&
			obstacle.height + obstacle.positionY > player.positionY
		) {
			location.href = "./gameover.html";
		}

		//
	});
}, 50);

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
