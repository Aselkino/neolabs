// function test() {}
// test.b = 255;
// console.log(test.b);

let bmw = {};
let honda = {};
let mers = {};


function changeColor(color) {
    this.color = color;
}

changeColor.call(bmw, 'red');
changeColor.call(honda, 'yellow');
changeColor.call(mers, 'grey');

console.log(honda);
console.log(bmw);
console.log(mers);