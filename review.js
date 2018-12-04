
//Object Literals
let circle = {
    radius: 1,
    location: {
        x: 2,
        y: 3,
    },
    draw: function () {
        console.log("Draw This!");
    }
};
circle.draw();

//Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("Draw That!");
        }
    };
}
const newCircle = createCircle(5);
newCircle.draw();

//Constructor Function
function AnotherCircle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("Draw Me!");
    }
}
const another = new AnotherCircle(8);
another.draw();
