console.log("inside warmup file");

class Circle {
    constructor(radius) {
      this.radius=radius;
    }

    getDiameter(){
        return this.radius*2;
    }

    getCircumference(){
        return (this.radius*2)*3.14;
    }

    getArea(){
  return 2,14*(Math.pow(this.radius,2));
    }
  }

const circle = new Circle(10);
console.log(circle.getDiameter()); // 20
console.log(circle.getCircumference());
console.log(circle.getArea());

