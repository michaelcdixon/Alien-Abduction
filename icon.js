// Drawing Alien Image
class Icon {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 400;
		this.height = 400;

		const img = new Image();
		img.src = "/images/Alien-Icon.png";
		this.image = img;
	}

	draw() {
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
	}

	top() {
		return this.y;
	}

	bottom() {
		return this.y + this.height;
	}

	left() {
		return this.x;
	}

	right() {
		return this.x + this.width;
	}
}
