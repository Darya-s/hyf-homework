class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r=r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }

    //Method 
    draw() {
        var c = document.querySelector("canvas");
        var ctx = c.getContext("2d");
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle,this.fillColor);

        ctx.fill();
    }

}

const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#a13232");

c1.draw();

setInterval(() => {
    const randomCircle = new Circle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        Math.random() * 100,
        0,
        2 * Math.PI
    );
    randomCircle.draw();
}, 100);

//circles appear around the cursor
let canvas=document.querySelector('canvas');
canvas.addEventListener("mousemove", (event) => {
    console.log(event.offsetX);
    const cxy = new Circle(
        event.offsetX,
        event.offsetY,
        Math.random() * 100,
        0,
        2 * Math.PI
    );
    cxy.draw();
});

function windowResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", windowResize);