class Icon {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 180;
        this.height = 180;

        const img = new Image();
        img.src = "images/PngItem_1084794.png"
        this.image = img;
    }

draw(){
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