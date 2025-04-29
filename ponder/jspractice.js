// Radius 1
const PI = 3.14
let radius = 3
let area = PI * radius * radius;
console.log("Area of circle: " + area);

// Radius 2
radius = 20
area = PI * radius * radius;
console.log("Area of circle: " + area);

// Combination of String 
const one = 1;
const two = "2";
let result = one * two;
console.log("Result: " + result);

result = one + Number(two)
console.log("Result: " + result);

let global = "I'm global";

function exampleFunction() {
    let block = "I am a local variable";
    console.log(global);
    console.log(block);
}

globle = "I am also global";
console.log(global);

exampleFunction();
