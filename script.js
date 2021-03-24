let e = document.getElementById("myCanvas");
let ctx = e.getContext("2d");
ctx.fillRect(10, 20, 100, 50);
ctx.fillStyle = "#00ff90";
ctx.fill();
class Rectangle {
  constructor(_width, _height) {
    this.width = _width;
    this.height = _height;
  }
  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return (this.height + this.width) * 2;
  }
  drawCanvas(x, y) {
    let e = document.getElementById("myCanvas");
    let ctx = e.getContext("2d");
    ctx.fillRect(x, y, this.width, this.height);
  }
}

let hcn1 = new Rectangle(10, 20);
let hcn2 = new Rectangle(45, 90);
hcn1.drawCanvas(10, 5);
hcn1.deleteCanvas(10, 5);
hcn2.drawCanvas(100, 50);
