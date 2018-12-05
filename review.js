
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

//Constructor Property
console.log(circle.constructor); //Object 
console.log(newCircle.constructor); //Object 
console.log(another.constructor); //AnotherCircle 

var boolean = true;
console.log(boolean.constructor); //Boolean

var number = 8;
console.log(number.constructor); //Number

var array = [1, 2, 3, 4, 5];
console.log(array.constructor); //Array
