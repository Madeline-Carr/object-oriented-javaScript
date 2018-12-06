
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

// Adding Properties and Methods
let ironMan = {
    name: "Anthony",
    lastName: "Stark",
    age: 32,
    powers: ["Flight", "Strength"]
}
//Adding an Object
ironMan.girlFriend = {
    name: "Pepper Potts",
    age: 30,
    powers: []
};
//Adding a Method
ironMan.attack = function (x) {
    console.log(`Your opponent loses ${x} hp!`);
};
ironMan.attack(8);
//Adding to a string
ironMan.powers.push("Intelligence");

console.log(ironMan);

//Enumerating Properties
for (let key in ironMan) {
    console.log(key, ironMan[key]);
}

// Returning keys as an array. 
let tonyStark = Object.keys(ironMan);
console.log(tonyStark);

//Checking to see if an object has a property 
if ("powers" in ironMan) {
    console.log("Ironman has these powers: " + ironMan.powers);
}